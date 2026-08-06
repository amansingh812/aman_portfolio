import { SITE } from '@/content/site'

function WhatsAppButton() {
    return (
        <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            style={{
                position: 'fixed',
                bottom: '28px',
                right: '28px',
                zIndex: 2147483647,
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(37,211,102,0.45)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                textDecoration: 'none',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.08)'
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.6)'
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.45)'
            }}
        >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15 2C7.82 2 2 7.82 2 15c0 2.3.62 4.45 1.7 6.3L2 28l6.87-1.67A12.93 12.93 0 0015 28c7.18 0 13-5.82 13-13S22.18 2 15 2z"
                    fill="#fff"
                />
                <path
                    d="M15 3.8c-6.18 0-11.2 5.02-11.2 11.2 0 2.1.58 4.06 1.6 5.73l.26.42-1.1 4.02 4.13-1.08.4.24A11.17 11.17 0 0015 26.2c6.18 0 11.2-5.02 11.2-11.2S21.18 3.8 15 3.8zm5.54 15.44c-.23.65-1.35 1.24-1.86 1.31-.48.07-1.07.1-1.73-.11a15.9 15.9 0 01-1.56-.58c-2.74-1.18-4.53-3.94-4.67-4.12-.14-.18-1.12-1.49-1.12-2.84 0-1.35.71-2.01 1-2.3.28-.3.61-.37.81-.37.2 0 .4.002.58.01.19.01.44-.07.69.53.25.6.85 2.08.93 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.49-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.28.14.44.12.6-.07.17-.2.71-.83.9-1.11.2-.29.39-.24.65-.14.27.1 1.7.8 2 .95.28.14.47.21.54.33.07.12.07.68-.16 1.33z"
                    fill="#25D366"
                />
            </svg>
        </a>
    )
}

export default WhatsAppButton
