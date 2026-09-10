import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
      {/* ARCHITECTURAL VERTICAL GRID GUIDE LINES (SWISS/BIMAT EDITORIAL REFERENCE) */}
      <div className="fixed inset-0 pointer-events-none z-0 max-w-[1440px] mx-auto px-6 grid grid-cols-6 md:grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-full border-r border-foreground/[0.04] first:border-l"
          />
        ))}
      </div>

      <Header />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </div>
  );
};
