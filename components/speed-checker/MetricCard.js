import React from 'react';

const MetricCard = ({ label, value, description, status }) => {
  // status: 'good', 'average', 'poor'
  let color = '#475569'; // default slate-600
  let badgeBg = '#f1f5f9';
  let badgeText = '#475569';

  if (status === 'good') {
    color = '#16a34a'; // green-600
    badgeBg = '#dcfce7'; // green-100
    badgeText = '#15803d'; // green-700
  } else if (status === 'average') {
    color = '#ca8a04'; // yellow-600
    badgeBg = '#fef9c3'; // yellow-100
    badgeText = '#a16207'; // yellow-700
  } else if (status === 'poor') {
    color = '#dc2626'; // red-600
    badgeBg = '#fee2e2'; // red-100
    badgeText = '#b91c1c'; // red-700
  }

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      minHeight: '140px'
    }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <h4 style={{
            fontSize: '13px',
            fontWeight: '600',
            color: '#64748b',
            margin: '0',
            fontFamily: 'var(--chivo), sans-serif'
          }}>{label}</h4>
          {status && (
            <span style={{
              fontSize: '11px',
              fontWeight: '600',
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: badgeBg,
              color: badgeText,
              fontFamily: 'var(--noto), sans-serif',
              textTransform: 'capitalize'
            }}>
              {status}
            </span>
          )}
        </div>
        <div style={{
          fontSize: '24px',
          fontWeight: '700',
          color: color,
          letterSpacing: '-0.025em',
          marginBottom: '6px',
          fontFamily: 'var(--chivo), sans-serif'
        }}>
          {value}
        </div>
      </div>
      <p style={{
        fontSize: '12px',
        color: '#64748b',
        lineHeight: '1.5',
        margin: '0',
        fontFamily: 'var(--noto), sans-serif'
      }}>
        {description}
      </p>
    </div>
  );
};

export default MetricCard;
