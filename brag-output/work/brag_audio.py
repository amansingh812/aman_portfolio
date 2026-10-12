"""Soundtrack for the BuildFirstSite launch video: one piece, in C major, 88 bpm.
Soft pad + bell arpeggio + low pulse, with effects tuned to the same key and mixed under the music."""
import numpy as np, wave

SR = 44100; DUR = 22.0; N = int(SR * DUR)
t = np.arange(N) / SR
BPM = 88; BEAT = 60 / BPM

def hz(m): return 440.0 * 2 ** ((m - 69) / 12)

def env_adsr(n, a, r):
    e = np.ones(n); ai = int(a * SR); ri = int(r * SR)
    if ai: e[:ai] = np.linspace(0, 1, ai)
    if ri: e[-ri:] *= np.linspace(1, 0, ri)
    return e

def lowpass(x, cutoff):
    # one-pole, enough for softening
    a = np.exp(-2 * np.pi * cutoff / SR); y = np.zeros_like(x); acc = 0.0
    for i in range(len(x)):
        acc = (1 - a) * x[i] + a * acc; y[i] = acc
    return y

mix = np.zeros(N)

def add(sig, start):
    i = int(start * SR); j = min(N, i + len(sig))
    if i < N: mix[i:j] += sig[: j - i]

# Chords (MIDI), 2 bars each (8 beats) -> ~5.45s; progression Cmaj9, Am9, Fmaj9, G6 then resolve C
chords = [[48, 55, 64, 67, 71], [45, 52, 60, 64, 71], [41, 48, 57, 64, 67], [43, 50, 59, 64, 69]]
seg = 8 * BEAT
starts = [0, seg, 2 * seg, 3 * seg]
for c, st in zip(chords, starts):
    n = int((seg + 1.2) * SR); tt = np.arange(n) / SR
    s = np.zeros(n)
    for m in c:
        f = hz(m)
        s += np.sin(2 * np.pi * f * tt) + 0.5 * np.sin(2 * np.pi * f * 1.003 * tt) + 0.25 * np.sin(2 * np.pi * 2 * f * tt)
    s *= env_adsr(n, 1.2, 1.4) * 0.018
    add(s, st)
# final resolve chord at 19.0
n = int(3.0 * SR); tt = np.arange(n) / SR; s = np.zeros(n)
for m in [48, 55, 60, 64, 67, 72]:
    f = hz(m); s += np.sin(2 * np.pi * f * tt) + 0.4 * np.sin(2 * np.pi * f * 1.002 * tt)
s *= env_adsr(n, 0.25, 2.2) * 0.02
add(s, 19.0)

# Bell arpeggio on eighths, from beat 2, quiet
arps = [[72, 76, 79, 83], [69, 72, 76, 79], [65, 69, 72, 76], [67, 71, 74, 76]]
k = 0; tm = 2 * BEAT
while tm < 18.6:
    ci = min(3, int(tm // seg)); notes = arps[ci]
    m = notes[k % 4] + (12 if (k // 4) % 4 == 3 and k % 4 == 3 else 0)
    n = int(0.9 * SR); tt = np.arange(n) / SR; f = hz(m)
    b = (np.sin(2 * np.pi * f * tt) + 0.3 * np.sin(2 * np.pi * 2.01 * f * tt)) * np.exp(-tt * 5.5)
    add(b * 0.05 * (0.8 if k % 2 else 1.0), tm)
    k += 1; tm += BEAT / 2

# Soft low pulse on beats 1 & 3 from bar 2
tm = 4 * BEAT
while tm < 18.8:
    n = int(0.45 * SR); tt = np.arange(n) / SR
    f = 55 * np.exp(-tt * 9) + 41
    p = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 9)
    add(p * 0.16, tm); tm += 2 * BEAT

# --- effects (in key, under the music) ---
rng = np.random.default_rng(7)
def tick(start, amp=0.035):
    n = int(0.03 * SR); nz = rng.standard_normal(n) * np.exp(-np.arange(n) / SR * 180)
    add(lowpass(nz, 3500) * amp, start)
def chime(start, ms, amp=0.06):
    for i, m in enumerate(ms):
        n = int(1.2 * SR); tt = np.arange(n) / SR; f = hz(m)
        add((np.sin(2 * np.pi * f * tt) + 0.25 * np.sin(2 * np.pi * 3 * f * tt)) * np.exp(-tt * 4) * amp, start + i * 0.09)
def swell(start, length=0.6, amp=0.03):
    n = int(length * SR); nz = lowpass(rng.standard_normal(n), 1800)
    e = np.sin(np.linspace(0, np.pi, n)) ** 2
    add(nz * e * amp, start)

# typing: scene 1 (0.45–2.2, 29 chars), scene 3 fields
def typing(a, b, chars):
    for i in range(chars): tick(a + (b - a) * i / chars + rng.uniform(-0.01, 0.01))
typing(0.45, 2.2, 29)
typing(8.7, 9.0, 4); typing(9.15, 9.75, 14); typing(9.9, 10.75, 31)
chime(2.4, [76], 0.04)                              # enter
for i in range(3): chime(4.15 + i * 0.32, [72 + [0, 4, 7][i]], 0.035)  # cards land
tick(10.98, 0.08); chime(11.0, [67], 0.03)          # button press
chime(11.3, [76, 79], 0.055)                        # toast
for i in range(4): chime(12.75 + i * 0.28, [84], 0.018)   # folder rows
for i in range(3): chime(16.05 + i * 0.45, [72, 76, 79][i:i + 1], 0.03)  # flow nodes
for st in [3.25, 7.85, 12.05, 15.45, 18.85]: swell(st)
chime(19.5, [72, 79, 84], 0.04)                     # outro

# master: gentle fade in/out, soft clip, normalise
fade = np.ones(N); fi = int(0.3 * SR); fo = int(1.6 * SR)
fade[:fi] = np.linspace(0, 1, fi); fade[-fo:] = np.linspace(1, 0, fo)
mix *= fade
mix = np.tanh(mix * 1.6) / np.tanh(1.6)
mix /= np.max(np.abs(mix)) + 1e-9
mix *= 0.85
st = np.stack([mix, np.roll(mix, int(0.012 * SR)) * 0.96], axis=1)
with wave.open("/tmp/brag/work/music.wav", "wb") as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((st * 32767).astype(np.int16).tobytes())
print("ok")
