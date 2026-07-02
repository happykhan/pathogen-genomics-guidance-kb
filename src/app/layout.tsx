import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "../styles/global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pathogen Genomics Guidance",
    template: "%s | Pathogen Genomics Guidance",
  },
  description: "Profile-aware guidance for pathogen genomics data, bioinformatics, and compute infrastructure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased min-h-screen`}>
        <div className="site-shell">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-[var(--gx-accent)] focus:px-4 focus:py-2 focus:text-[var(--gx-text-inverted)]"
          >
            Skip to content
          </a>
          <header className="topbar no-print">
            <div className="topbar-inner">
              <Link className="brand" href="/">
                <strong>Pathogen genomics guidance</strong>
                <span>Data, bioinformatics, compute, and implementation</span>
              </Link>
              <nav className="nav" aria-label="Main navigation">
                <Link href="/">Guidance</Link>
                <Link href="/resources">Resource finder</Link>
                <Link href="/who-iris">WHO IRIS</Link>
                <Link href="/quizzes">Tools</Link>
                <Link href="/api-docs">API</Link>
                <Link href="/about">About</Link>
              </nav>
              <details className="mobile-nav">
                <summary aria-label="Open main navigation">
                  <span className="hamburger-lines" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </summary>
                <nav aria-label="Mobile navigation">
                  <Link href="/">Guidance</Link>
                  <Link href="/resources">Resource finder</Link>
                  <Link href="/who-iris">WHO IRIS</Link>
                  <Link href="/quizzes">Tools</Link>
                  <Link href="/api-docs">API</Link>
                  <Link href="/about">About</Link>
                </nav>
              </details>
            </div>
          </header>
          <main id="main-content" className="page">{children}</main>
          <footer className="gx-footer no-print">
            <div className="gx-footer-inner">
              <h3>Pathogen genomics guidance</h3>
              <p>Source-backed guidance for data, bioinformatics, compute, and implementation decisions.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
