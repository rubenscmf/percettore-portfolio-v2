import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/projetos", label: "Projetos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre a Percettore" },
  { to: "/contato", label: "Contato" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-foreground/[0.08] py-4 shadow-sm"
          : "bg-background/70 backdrop-blur-sm border-b border-foreground/[0.04] py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" aria-label="Percettore — Início" className="flex items-center gap-3">
          <Logo className="text-2xl tracking-tighter" />
        </Link>

        {/* CENTER NAVIGATION (SWISS ARCHITECTURAL STYLE WITH RED INDICATOR) */}
        <nav className="hidden md:flex items-center gap-10 font-sans text-xs font-semibold uppercase tracking-[0.18em]">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative py-2 transition-colors duration-200 ${
                  isActive
                    ? "text-foreground font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary"
                    : "text-concrete-500 hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTION BUTTON */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-primary hover:bg-foreground text-white px-5 py-2.5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow"
          >
            Falar com Engenheiro
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <nav className="md:hidden bg-background border-b border-foreground/10 px-6 py-8 flex flex-col gap-6 font-sans text-sm uppercase tracking-widest shadow-xl">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `flex items-center justify-between py-2 border-b border-foreground/5 ${
                  isActive ? "text-primary font-bold" : "text-foreground"
                }`
              }
            >
              <span>{l.label}</span>
              {location.pathname === l.to && (
                <span className="w-2 h-2 rounded-full bg-primary" />
              )}
            </NavLink>
          ))}
          <Link
            to="/contato"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-full font-sans text-xs font-semibold uppercase tracking-wider mt-2"
          >
            Falar com Engenheiro
          </Link>
        </nav>
      )}
    </header>
  );
};
