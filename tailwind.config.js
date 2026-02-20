/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050508",
                card: "rgba(25, 25, 35, 0.6)",
                accent: {
                    blue: "#4361ee",
                    purple: "#7209b7",
                    cyan: "#4cc9f0",
                },
                text: {
                    primary: "#f8f9fa",
                    secondary: "#c9d1d9",
                    muted: "#8b949e",
                }
            },
            backdropBlur: {
                xs: "2px",
            },
            borderRadius: {
                '4xl': '2rem',
            },
            animation: {
                'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            backgroundImage: {
                'mesh-gradient': 'radial-gradient(at 0% 0%, rgba(67, 97, 238, 0.08) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(114, 9, 183, 0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(76, 201, 240, 0.08) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(67, 97, 238, 0.08) 0px, transparent 50%)',
            }
        },
    },
    plugins: [],
}
