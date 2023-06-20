const plugin = require("tailwindcss/plugin");
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: true,
    theme: {
        container: {
            center: true
        },
        extend: {
            animation: {
                bounce: 'bounce 7s infinite'
            },
            keyframes: {
                bounce: {
                    '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'linear' },
                    '50%': { transform: 'translateY(-20%)', animationTimingFunction: 'linear' }
                }
            },
        }
    },
    variants: {
        animationDelay: ["responsive", "hover"]
    },
    plugins: [
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    "animation-delay": ( value ) => {
                        return {
                            "animation-delay": value,
                        };
                    }
                },
                {
                    values: theme("transitionDelay")
                }
            );
        })
    ]
}