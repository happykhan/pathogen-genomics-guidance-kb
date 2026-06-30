import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./docs/**/*.{md,mdx}",
    "./knowledge-base/**/*.{md,mdx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        accent: {
          500: "#E57A66",
        },
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
        header: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      boxShadow: {
        card: "0 6px 18px rgba(19, 31, 63, 0.06)",
        btn: "0 4px 10px rgba(19, 31, 63, 0.06)",
      },
      borderRadius: {
        xl: "0.75rem",
      },
      container: {
        center: true,
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "80rem",
          "2xl": "80rem",
        },
        padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: "var(--gx-text)",
            a: {
              color: "var(--gx-accent)",
              fontWeight: "500",
              "&:hover": { color: "var(--gx-accent-hover)" },
            },
            strong: { color: "var(--gx-text)" },
            hr: { borderColor: "var(--gx-border)" },
            h1: { color: "var(--gx-text)" },
            h2: { color: "var(--gx-text)" },
            h3: { color: "var(--gx-text)" },
            p: { lineHeight: "1.8", marginTop: "0.65rem", marginBottom: "0.65rem" },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
