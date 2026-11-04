/* Line icons for the pricing page (24×24 grid, 2px stroke, round joins).
   Colour follows currentColor, so set it with CSS. Decorative: aria-hidden. */
const P = {
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z" /></>,
    cart: <><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2.5 3.5h3l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.4a1.5 1.5 0 0 0 1.5-1.1L21 7.5H6.2" /></>,
    layout: <><rect x="3" y="3.5" width="18" height="17" rx="2.5" /><path d="M3 9h18" /><path d="M9 9v11.5" /></>,
    cog: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></>,
    pen: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>,
    doc: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h4" /></>,
    calendar: <><rect x="3" y="4.5" width="18" height="16" rx="2.5" /><path d="M16 2.5v4M8 2.5v4M3 10h18" /><path d="m9 15 2 2 4-4" /></>,
    bot: <><rect x="4" y="8" width="16" height="12" rx="3" /><path d="M12 4v4" /><circle cx="12" cy="3.5" r="1" /><path d="M9 13v1.5M15 13v1.5" /><path d="M2 13v3M22 13v3" /></>,
    languages: <><path d="M4 5h9M8.5 3v2M6 5c.5 3 2.5 5.5 6 7" /><path d="M11 5c-.5 3-3 6-7 7.5" /><path d="m13 21 4-9 4 9M14.5 18h5" /></>,
    truck: <><path d="M2 6h11v10H2z" /><path d="M13 9h4l4 4v3h-8" /><circle cx="6.5" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>,
    shield: <><path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6z" /><path d="m9 12 2 2 4-4" /></>,
    rocket: <><path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.8-.9.8-2.3-.1-3.1A2.2 2.2 0 0 0 5 15z" /><path d="M12 15 9 12a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z" /><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" /></>,
    building: <><rect x="4" y="2.5" width="16" height="19" rx="2" /><path d="M9 21.5v-4h6v4" /><path d="M8 6.5h.01M12 6.5h.01M16 6.5h.01M8 10.5h.01M12 10.5h.01M16 10.5h.01M8 14.5h.01M12 14.5h.01M16 14.5h.01" /></>,
    trend: <><path d="M3 17 9 11l4 4 8-8" /><path d="M15 7h6v6" /></>,
    chart: <><path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="5" rx=".5" /><rect x="12" y="8" width="3" height="9" rx=".5" /><rect x="17" y="5" width="3" height="12" rx=".5" /></>,
    chat: <><path d="M21 12a8 8 0 0 1-11.8 7L3 21l2-6.2A8 8 0 1 1 21 12z" /><path d="M8 11h8M8 14.5h5" /></>,
    palette: <><path d="M12 21a9 9 0 1 1 9-9c0 2.5-2 3.5-3.5 3.5H15a1.8 1.8 0 0 0-1.3 3c.4.5.3 2.5-1.7 2.5z" /><circle cx="7.5" cy="11" r="1" /><circle cx="10.5" cy="7" r="1" /><circle cx="15" cy="7.5" r="1" /></>,
    receipt: <><path d="M5 2.5h14v19l-2.5-1.5L14 21.5l-2-1.5-2 1.5-2.5-1.5L5 21.5z" /><path d="M9 7.5h6M9 11.5h6M9 15.5h3" /></>,
    eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
    key: <><circle cx="7.5" cy="15.5" r="4.5" /><path d="m10.7 12.3 9.8-9.8M17 6l3 3M14.5 8.5l2 2" /></>,
    sparkle: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /></>,
    box: <><path d="M21 8 12 3 3 8v8l9 5 9-5z" /><path d="m3 8 9 5 9-5M12 13v8" /></>,
    scale: <><path d="M12 3v18M7 21h10M5 7h14" /><path d="m5 7-3 7a3.5 3.5 0 0 0 6 0zM19 7l-3 7a3.5 3.5 0 0 0 6 0z" /></>,
    puzzle: <><path d="M10 3h4v3a2 2 0 1 0 4 0V3h3v7h-3a2 2 0 1 0 0 4h3v7h-7v-3a2 2 0 1 0-4 0v3H3v-7h3a2 2 0 1 0 0-4H3V3z" /></>,
    map: <><path d="M9 4 3 6.5v13.5L9 17.5l6 2.5 6-2.5V4L15 6.5z" /><path d="M9 4v13.5M15 6.5V20" /></>,
    help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14" /><path d="M12 17.5h.01" /></>,
}

export default function Icon({ name, size = 24, className = "", strokeWidth = 2 }) {
    return (
        <svg className={`bfs-ico ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            {P[name] || P.sparkle}
        </svg>
    )
}
