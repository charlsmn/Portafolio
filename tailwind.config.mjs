import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            sans: ['Inter Tight Variable', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                primary: '#FF3466',
            },
            animation: {
                'loop-scroll': 'loop-scroll 50s linear infinite',
            },
            keyframes: {
                'loop-scroll': {
                    from: { trasform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    darkMode: 'selector',
    plugins: [],
}
