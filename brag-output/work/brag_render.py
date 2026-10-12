"""
BuildFirstSite launch video, rendered frame-by-frame (every frame a pure
function of time t). Vertical 1080x1920, 30fps, 22s. Polished tone.
All figures come from content/pricing.js (checked 9 Oct 2026).
"""
import math, sys, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H, FPS, DUR = 1080, 1920, 30, 22.0
WORK = "/tmp/brag/work"
F = WORK + "/fonts/"

def font(name, size):
    return ImageFont.truetype(F + name + ".ttf", size)

CH7 = lambda s: font("chivo-700", s)
CH8 = lambda s: font("chivo-800", s)
CH5 = lambda s: font("chivo-500", s)
NO4 = lambda s: font("noto-sans-400", s)
NO5 = lambda s: font("noto-sans-500", s)
NO6 = lambda s: font("noto-sans-600", s)
NO7 = lambda s: font("noto-sans-700", s)

TEAL = (0, 109, 119); TEAL_D = (0, 95, 104); MINT = (131, 197, 190); LT = (190, 225, 230)
INK = (16, 24, 40); GREY = (102, 112, 133); GREY6 = (71, 84, 103); LINE = (228, 231, 236)
WHITE = (255, 255, 255); PALE = (244, 250, 251); TINT = (230, 243, 245); GREEN = (6, 118, 71)

LOGO = Image.open(WORK + "/logo.png").convert("RGBA")

# ---------- helpers ----------
def clamp(x, a=0.0, b=1.0): return max(a, min(b, x))
def prog(t, a, b): return clamp((t - a) / (b - a)) if b > a else float(t >= a)
def ease(x): return 1 - (1 - x) ** 3
def ease_io(x): return 3 * x * x - 2 * x * x * x
def lerp(a, b, x): return a + (b - a) * x
def lerpc(c1, c2, x): return tuple(int(round(lerp(a, b, x))) for a, b in zip(c1, c2))

def layer(): return Image.new("RGBA", (W, H), (0, 0, 0, 0))

def comp(base, lay, alpha):
    if alpha <= 0: return
    if alpha < 1:
        a = lay.getchannel("A").point(lambda v: int(v * alpha))
        lay.putalpha(a)
    base.alpha_composite(lay)

def text_c(d, cx, y, s, f, fill):
    w = d.textlength(s, font=f)
    d.text((cx - w / 2, y), s, font=f, fill=fill)

def rrect(d, box, r, fill=None, outline=None, width=1):
    d.rounded_rectangle(box, radius=r, fill=fill, outline=outline, width=width)

def shadow(base, box, r, blur=30, alpha=40, dy=14):
    s = layer(); sd = ImageDraw.Draw(s)
    x0, y0, x1, y1 = box
    sd.rounded_rectangle((x0, y0 + dy, x1, y1 + dy), radius=r, fill=(16, 24, 40, alpha))
    s = s.filter(ImageFilter.GaussianBlur(blur))
    base.alpha_composite(s)

def wrap_lines(lines, f, d, cx, y, fill, lh):
    for i, ln in enumerate(lines):
        text_c(d, cx, y + i * lh, ln, f, fill)

# Scene timing: (start, end)
S = [(0.0, 3.4), (3.4, 8.0), (8.0, 12.2), (12.2, 15.6), (15.6, 19.0), (19.0, 22.0)]
BG = [WHITE, WHITE, PALE, INK, WHITE, WHITE]
FADE_IN, FADE_OUT = 0.45, 0.32

def scene_alpha(t, i):
    a, b = S[i]
    if t < a or t >= b: return 0.0, 0.0
    fin = ease(prog(t, a, a + FADE_IN)) if i > 0 else 1.0
    fout = 1 - ease_io(prog(t, b - FADE_OUT, b - 0.1)) if i < len(S) - 1 else 1.0
    rise = (1 - ease(prog(t, a, a + 0.6))) * 36 if i > 0 else 0
    return fin * fout, rise

def background(t):
    for i, (a, b) in enumerate(S):
        if a <= t < b:
            if i < len(S) - 1 and t > b - FADE_OUT:
                return lerpc(BG[i], BG[i + 1], ease_io(prog(t, b - 0.18, b)))
            return BG[i]
    return BG[-1]

def caret_on(t): return (int(t * 2.4) % 2) == 0

def typed(s, t, a, b):
    n = int(round(len(s) * prog(t, a, b)))
    return s[:n], n < len(s)

# ---------- scenes ----------
def scene1(t, dy):
    L = layer(); d = ImageDraw.Draw(L)
    text_c(d, W / 2, 620 + dy, "What every business owner wants.", NO5(46), GREY)
    box = (60, 780 + dy, 1020, 940 + dy)
    focus = ease(prog(t, 2.35, 2.7))
    shadow(L, box, 70, blur=28, alpha=int(lerp(30, 55, focus)))
    d = ImageDraw.Draw(L)
    rrect(d, box, 70, fill=WHITE, outline=lerpc(LINE, TEAL, focus), width=3)
    # magnifier
    cx, cy = 165, 860 + dy
    d.ellipse((cx - 22, cy - 22, cx + 14, cy + 14), outline=GREY, width=6)
    d.line((cx + 10, cy + 10, cx + 30, cy + 30), fill=GREY, width=7)
    s, typing = typed("a website that gets me customers", t, 0.45, 2.2)
    f = NO5(45)
    d.text((215, 828 + dy), s, font=f, fill=INK)
    if (typing or t < 2.35) and caret_on(t):
        x = 215 + d.textlength(s, font=f) + 4
        d.rectangle((x, 836 + dy, x + 4, 890 + dy), fill=TEAL)
    # answer teaser
    a = ease(prog(t, 2.55, 2.95))
    if a > 0:
        L2 = layer(); d2 = ImageDraw.Draw(L2)
        text_c(d2, W / 2, 1020 + dy + (1 - a) * 20, "That’s what we build.", CH7(64), TEAL_D)
        comp(L, L2, a)
    return L

def card(L, box, name, scope, price, rec, a, slide):
    x0, y0, x1, y1 = box
    y0 += slide; y1 += slide
    C = layer()
    shadow(C, (x0, y0, x1, y1), 28, blur=24, alpha=32 if not rec else 48)
    d = ImageDraw.Draw(C)
    rrect(d, (x0, y0, x1, y1), 28, fill=WHITE, outline=TEAL if rec else LINE, width=4 if rec else 2)
    d.text((x0 + 48, y0 + 52), name, font=CH7(50), fill=INK)
    d.text((x0 + 48, y0 + 122), scope, font=NO4(34), fill=GREY6)
    pf = CH8(76)
    pw = d.textlength(price, font=pf)
    d.text((x1 - 48 - pw, y0 + 60), price, font=pf, fill=TEAL_D if rec else INK)
    if rec:
        bf = NO6(26); tw = d.textlength("Recommended", font=bf)
        rrect(d, (x0 + 40, y0 - 24, x0 + 40 + tw + 44, y0 + 26), 25, fill=LT)
        d.text((x0 + 62, y0 - 16), "Recommended", font=bf, fill=TEAL_D)
    comp(L, C, a)

def svc_card(L, box, title, desc, a, slide, accent):
    x0, y0, x1, y1 = box
    y0 += slide; y1 += slide
    C = layer()
    shadow(C, (x0, y0, x1, y1), 28, blur=24, alpha=32)
    d = ImageDraw.Draw(C)
    rrect(d, (x0, y0, x1, y1), 28, fill=WHITE, outline=LINE, width=2)
    d.rounded_rectangle((x0, y0 + 30, x0 + 10, y1 - 30), radius=5, fill=accent)
    d.text((x0 + 50, y0 + 44), title, font=CH7(52), fill=INK)
    d.text((x0 + 50, y0 + 118), desc, font=NO4(34), fill=GREY6)
    comp(L, C, a)

def scene2(t, dy):
    L = layer(); d = ImageDraw.Draw(L)
    pf = NO6(36); label = "For Australian small businesses"
    tw = d.textlength(label, font=pf)
    rrect(d, (W / 2 - tw / 2 - 38, 300 + dy, W / 2 + tw / 2 + 38, 376 + dy), 38, fill=LT)
    text_c(d, W / 2, 314 + dy, label, pf, TEAL_D)
    wrap_lines(["Built to win", "you customers."], CH8(96), d, W / 2, 440 + dy, INK, 112)
    svcs = [("Websites", "Fast, custom, built to rank on Google", TEAL),
            ("Apps & portals", "Bookings, dashboards, customer logins", MINT),
            ("Automation", "Every enquiry answered while you work", TEAL_D)]
    for i, (n, desc, ac) in enumerate(svcs):
        st = S[1][0] + 0.75 + i * 0.32
        a = ease(prog(t, st, st + 0.5))
        y = 760 + i * 300 + dy
        svc_card(L, (80, y, 1000, y + 230), n, desc, a, (1 - a) * 60, ac)
    a = ease(prog(t, S[1][0] + 2.0, S[1][0] + 2.5))
    if a > 0:
        L2 = layer(); d2 = ImageDraw.Draw(L2)
        text_c(d2, W / 2, 1700 + dy, "Custom-built. Google-ready. Yours to keep.", NO5(38), GREY6)
        comp(L, L2, a)
    return L

def field(d, box, label, value, active, show_caret):
    x0, y0, x1, y1 = box
    rrect(d, box, 18, fill=WHITE, outline=TEAL if active else (208, 213, 221), width=3 if active else 2)
    if value:
        d.text((x0 + 30, y0 + 8), label, font=NO5(24), fill=GREY)
        d.text((x0 + 30, y0 + 40), value, font=NO5(36), fill=INK)
        if show_caret:
            x = x0 + 30 + d.textlength(value, font=NO5(36)) + 3
            d.rectangle((x, y0 + 44, x + 3, y0 + 86), fill=TEAL)
    else:
        d.text((x0 + 30, y0 + 30), label, font=NO4(34), fill=GREY)

def scene3(t, dy):
    L = layer(); d = ImageDraw.Draw(L)
    a0 = S[2][0]
    wrap_lines(["See your homepage", "designed free,", "before you pay."], CH8(84), d, W / 2, 230 + dy, INK, 100)
    form = (80, 640 + dy, 1000, 1420 + dy)
    shadow(L, form, 34, blur=30, alpha=36)
    d = ImageDraw.Draw(L)
    rrect(d, form, 34, fill=WHITE, outline=LINE, width=2)
    d.text((140, 700 + dy), "Get my free homepage design", font=CH7(46), fill=INK)
    v1, ty1 = typed("Dave", t, a0 + 0.7, a0 + 1.0)
    v2, ty2 = typed("Smith Plumbing", t, a0 + 1.15, a0 + 1.75)
    v3, ty3 = typed("Get more call-outs in Melbourne", t, a0 + 1.9, a0 + 2.75)
    c = caret_on(t)
    field(d, (140, 790 + dy, 940, 900 + dy), "Your name", v1, 0.7 + a0 <= t < a0 + 1.12, c and ty1)
    field(d, (140, 930 + dy, 940, 1040 + dy), "Business name", v2, a0 + 1.12 <= t < a0 + 1.85, c and ty2)
    field(d, (140, 1070 + dy, 940, 1180 + dy), "What should the site do?", v3, a0 + 1.85 <= t < a0 + 2.9, c and ty3)
    # button press
    press = prog(t, a0 + 2.95, a0 + 3.08) - prog(t, a0 + 3.08, a0 + 3.25)
    sc = 1 - 0.035 * press
    bw, bh = 800 * sc, 104 * sc
    bx, by = W / 2 - bw / 2, 1250 + dy + (104 - bh) / 2
    rrect(d, (bx, by, bx + bw, by + bh), bh / 2, fill=INK)
    bf = NO7(36); lab = "Get my free homepage design"
    lw_ = d.textlength(lab, font=bf); tx = W / 2 - (lw_ + 52) / 2
    d.text((tx, by + bh / 2 - 26), lab, font=bf, fill=WHITE)
    ax, ay = tx + lw_ + 22, by + bh / 2 + 1
    d.line((ax, ay, ax + 30, ay), fill=WHITE, width=5)
    d.line((ax + 18, ay - 12, ax + 31, ay), fill=WHITE, width=5)
    d.line((ax + 18, ay + 12, ax + 31, ay), fill=WHITE, width=5)
    # toast
    a = ease(prog(t, a0 + 3.25, a0 + 3.6))
    if a > 0:
        T = layer(); td = ImageDraw.Draw(T)
        ty = 1520 + dy + (1 - a) * 40
        box = (110, ty, 970, ty + 150)
        shadow(T, box, 28, blur=24, alpha=40)
        td = ImageDraw.Draw(T)
        rrect(td, box, 28, fill=INK)
        td.ellipse((150, ty + 43, 214, ty + 107), fill=GREEN)
        td.line((166, ty + 76, 179, ty + 89), fill=WHITE, width=7)
        td.line((179, ty + 89, 200, ty + 62), fill=WHITE, width=7)
        td.text((240, ty + 30), "Request received", font=NO7(34), fill=WHITE)
        td.text((240, ty + 76), "Design ready in about 2 business days", font=NO4(30), fill=(208, 213, 221))
        comp(L, T, a)
    return L

def scene4(t, dy):
    L = layer(); d = ImageDraw.Draw(L)
    a0 = S[3][0]
    text_c(d, W / 2, 330 + dy, "You own", CH8(132), WHITE)
    text_c(d, W / 2, 480 + dy, "the code.", CH8(132), MINT)
    # handover folder
    box = (140, 760 + dy, 940, 1330 + dy)
    rrect(d, box, 30, fill=(29, 41, 57), outline=(52, 64, 84), width=2)
    # folder header
    d.rounded_rectangle((190, 810 + dy, 262, 862 + dy), radius=10, fill=MINT)
    d.rectangle((190, 810 + dy, 222, 822 + dy), fill=MINT)
    d.text((290, 812 + dy), "your-website/", font=NO6(42), fill=WHITE)
    rows = [("app/", "pages and routes"), ("components/", "every section"), ("content/", "your words, your prices"), ("README.md", "how to run it anywhere")]
    for i, (n, desc) in enumerate(rows):
        a = ease(prog(t, a0 + 0.55 + i * 0.28, a0 + 0.95 + i * 0.28))
        if a <= 0: continue
        R = layer(); rd = ImageDraw.Draw(R)
        y = 910 + i * 98 + dy + (1 - a) * 18
        rd.line((220, y + 26, 250, y + 26), fill=(71, 84, 103), width=3)
        rd.text((270, y), n, font=NO6(38), fill=TINT)
        rd.text((270 + rd.textlength(n, font=NO6(38)) + 20, y + 6), desc, font=NO4(30), fill=(152, 162, 179))
        comp(L, R, a)
    a = ease(prog(t, a0 + 1.9, a0 + 2.3))
    if a > 0:
        R = layer(); rd = ImageDraw.Draw(R)
        text_c(rd, W / 2, 1460 + dy + (1 - a) * 20, "No lock-in, ever.", CH7(70), WHITE)
        text_c(rd, W / 2, 1570 + dy + (1 - a) * 20, "Take it to any host, any developer.", NO4(36), (208, 213, 221))
        comp(L, R, a)
    return L

def phone_icon(d, cx, cy, col):
    d.rounded_rectangle((cx - 16, cy - 28, cx + 16, cy + 28), radius=7, outline=col, width=5)
    d.line((cx - 6, cy + 18, cx + 6, cy + 18), fill=col, width=4)

def chat_icon(d, cx, cy, col):
    d.rounded_rectangle((cx - 28, cy - 22, cx + 28, cy + 16), radius=10, outline=col, width=5)
    d.polygon([(cx - 14, cy + 14), (cx - 20, cy + 30), (cx - 2, cy + 14)], fill=col)

def list_icon(d, cx, cy, col):
    for k in range(3):
        y = cy - 18 + k * 18
        d.ellipse((cx - 26, y - 4, cx - 18, y + 4), fill=col)
        d.line((cx - 10, y, cx + 26, y), fill=col, width=5)

def scene5(t, dy):
    L = layer(); d = ImageDraw.Draw(L)
    a0 = S[4][0]
    wrap_lines(["Then we automate", "the follow-up."], CH8(92), d, W / 2, 300 + dy, INK, 108)
    nodes = [("A call you couldn't take", "while you're on a job", phone_icon),
             ("Text back within a minute", "so they don't ring the next business", chat_icon),
             ("Lead saved to your list", "with their name and number", list_icon)]
    ys = [640, 960, 1280]
    # connector
    for i in range(2):
        st = a0 + 0.45 + (i + 1) * 0.45
        ca = ease(prog(t, st, st + 0.45))
        if ca <= 0: continue
        C = layer(); cd = ImageDraw.Draw(C)
        y0, y1 = ys[i] + 220 + dy, ys[i + 1] + dy
        cd.line((W / 2, y0, W / 2, y1), fill=LINE, width=6)
        p = ((t - st) / 0.9) % 1.0
        yy = lerp(y0, y1, p)
        cd.ellipse((W / 2 - 9, yy - 9, W / 2 + 9, yy + 9), fill=TEAL)
        comp(L, C, ca)
    for i, (title, sub, icon) in enumerate(nodes):
        st = a0 + 0.45 + i * 0.45
        a = ease(prog(t, st, st + 0.45))
        if a <= 0: continue
        N = layer()
        box = (110, ys[i] + dy + (1 - a) * 30, 970, ys[i] + 220 + dy + (1 - a) * 30)
        shadow(N, box, 28, blur=22, alpha=30)
        nd = ImageDraw.Draw(N)
        lit = ease(prog(t, st + 0.3, st + 0.6))
        rrect(nd, box, 28, fill=WHITE, outline=lerpc(LINE, TEAL, lit), width=3)
        cx, cy = box[0] + 100, (box[1] + box[3]) / 2
        nd.ellipse((cx - 56, cy - 56, cx + 56, cy + 56), fill=lerpc(PALE, LT, lit))
        icon(nd, cx, cy, TEAL_D)
        nd.text((box[0] + 190, box[1] + 58), title, font=CH7(44), fill=INK)
        nd.text((box[0] + 190, box[1] + 120), sub, font=NO4(30), fill=GREY6)
        comp(L, N, a)
    return L

def scene6(t, dy):
    L = layer(); d = ImageDraw.Draw(L)
    a0 = S[5][0]
    lw = 820
    lg = LOGO.resize((lw, int(LOGO.height * lw / LOGO.width)), Image.LANCZOS)
    s = 0.96 + 0.04 * ease(prog(t, a0, a0 + 1.2))
    lg2 = lg.resize((int(lg.width * s), int(lg.height * s)), Image.LANCZOS)
    L.alpha_composite(lg2, (int(W / 2 - lg2.width / 2), int(640 + dy)))
    d = ImageDraw.Draw(L)
    a = ease(prog(t, a0 + 0.5, a0 + 0.9))
    R = layer(); rd = ImageDraw.Draw(R)
    text_c(rd, W / 2, 960 + dy, "buildfirstsite.com", CH8(78), INK)
    pf = NO7(38); lab = "Free homepage design first"
    tw = rd.textlength(lab, font=pf)
    rrect(rd, (W / 2 - tw / 2 - 48, 1110 + dy, W / 2 + tw / 2 + 48, 1206 + dy), 48, fill=TEAL)
    text_c(rd, W / 2, 1132 + dy, lab, pf, WHITE)
    text_c(rd, W / 2, 1290 + dy, "Websites + automation for", NO4(36), GREY6)
    text_c(rd, W / 2, 1340 + dy, "Australian small businesses", NO4(36), GREY6)
    comp(L, R, a)
    return L

SCENES = [scene1, scene2, scene3, scene4, scene5, scene6]

def frame(t):
    base = Image.new("RGBA", (W, H), background(t) + (255,))
    for i, fn in enumerate(SCENES):
        al, rise = scene_alpha(t, i)
        if al > 0:
            comp(base, fn(t, rise), al)
    return base.convert("RGB")

if __name__ == "__main__":
    mode = sys.argv[1]
    if mode == "stills":
        out = sys.argv[2]; os.makedirs(out, exist_ok=True)
        for ts in sys.argv[3:]:
            frame(float(ts)).save(f"{out}/t{float(ts):05.2f}.jpg", quality=88)
    elif mode == "raw":
        n = int(DUR * FPS)
        w = sys.stdout.buffer
        for k in range(n):
            w.write(frame(k / FPS).tobytes())
