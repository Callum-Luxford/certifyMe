/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./server/views/**/*.ejs",
    "./server/templates/**/*.ejs",
    "./client/js/**/*.js",
    "./client/css/**/*.css",
  ],
  safelist: [
    "icon-filter-1",
    "icon-filter-2",
    "icon-filter-3",
    "icon-filter-4",
    "icon-filter-4-shadow",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      colors: {
        theme_clr_1: "var(--theme-clr-1)", // dark green
        theme_clr_2: "var(--theme-clr-2)", // mid green
        theme_clr_3: "var(--theme-clr-3)", // light accent green
        theme_clr_4: "var(--theme-clr-4)", // light accent green
        theme_clr_5: "var(--theme-clr-5)", // light accent green
        theme_clr_6: "var(--theme-clr-6)", // light accent green
        theme_clr_7: "var(--theme-clr-7)", // light accent green
        form_clr_1: "var(--form-clr-1)", // light accent green
        section_clr_1: "var(--section-clr-1)", // light accent green
        button_clr_1: "var(--button-clr-1)", // primary CTA green
        text_clr_1: "var(--font-clr-1)", // light text
        text_clr_2: "var(--font-clr-2)", // subtle text
        text_clr_3: "var(--font-clr-3)", // subtle text
        text_clr_4: "var(--font-clr-4)", // subtle text
        text_clr_5: "var(--font-clr-5)", // subtle text
        text_clr_6: "var(--font-clr-6)", // subtle text
        text_dark: "var(--text-dark)", // black text on white bg
        bg_light: "var(--bg-light)", // white cards/navbar
        border_muted: "var(--border-muted)", // card borders
      },
      fontSize: {
        "2xs": "var(--font-size-2xs)",
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
        "5xl": "var(--font-size-5xl)",
        "6xl": "var(--font-size-6xl)",
        "7xl": "var(--font-size-7xl)",
        "8xl": "var(--font-size-8xl)",
        "9xl": "var(--font-size-9xl)",
        "10xl": "var(--font-size-10xl)",
        "11xl": "var(--font-size-11xl)",
        "12xl": "var(--font-size-12xl)",
      },
      boxShadow: {
        "2xs": "var(--shadow-2xs)",
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
        focus: "var(--shadow-focus)",
        success: "var(--shadow-success)",
        warning: "var(--shadow-warning)",
        danger: "var(--shadow-danger)",
        info: "var(--shadow-info)",
      },
      backgroundImage: {
        gradient_1: "var(--bg-gradient-1)",
        card_background_1:
          "linear-gradient(135deg, rgba(120, 0, 190, 0.1) 5%, rgba(20, 20, 30, 0.98) 30%, rgba(10, 10, 10, 1) 100%)",
      },
      fontFamily: {
        base: "var(--font-family-base)",
        playfair: ['"Playfair Display"', "serif"],
        vibes: ['"Great Vibes"', "cursive"],
        roboto: ['"Roboto"', "sans-serif"],
        merriweather: ['"Merriweather"', "serif"],
      },
      zIndex: {
        "-5": "-5",
        "-10": "-10",
        100: "100",
        200: "200",
      },
      dropShadow: {
        monitor: "0 12px 32px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
