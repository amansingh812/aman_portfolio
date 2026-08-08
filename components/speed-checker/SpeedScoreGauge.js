import React from 'react';

const SpeedScoreGauge = ({ score, title }) => {
  const isGood = score >= 90;
  const isAverage = score >= 50 && score < 90;
  const isPoor = score < 50;

  // Colors
  const color = isGood ? '#22c55e' : isAverage ? '#eab308' : '#ef4444';
  const bgColor = isGood ? 'rgba(34, 197, 94, 0.1)' : isAverage ? 'rgba(234, 179, 8, 0.1)' : 'rgba(239, 68, 68, 0.1)';

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="speed-gauge-card" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      borderRadius: '16px',
      backgroundColor: bgColor,
      border: `1px solid ${color}22`,
      width: '100%',
      maxWidth: '180px',
      margin: '0 auto'
    }}>
      <div className="gauge-svg-container" style={{
        position: 'relative',
        width: '96px',
        height: '96px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '12px'
      }}>
        <svg style={{ transform: 'rotate(-90deg)', width: '96px', height: '96px' }} viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="transparent"
            stroke="#e2e8f0"
            strokeWidth="6"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="transparent"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
          />
        </svg>
        <div style={{
          position: 'absolute',
          fontSize: '24px',
          fontWeight: '700',
          color: color,
          fontFamily: 'var(--chivo), sans-serif'
        }}>
          {score}
        </div>
      </div>
      <h4 style={{
        fontSize: '14px',
        fontWeight: '600',
        color: '#475569',
        textAlign: 'center',
        margin: '0',
        fontFamily: 'var(--noto), sans-serif'
      }}>{title}</h4>
    </div>
  );
};

export default SpeedScoreGauge;
