import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/projetos", label: "Projetos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isDarkHeroPage = location.pathname === "/";
  const isDarkHeader = isDarkHeroPage && !scrolled;

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
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-foreground/10 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" aria-label="Percettore — Início" className="group">
          <Logo
            className={`text-2xl md:text-3xl transition-colors duration-500 ${
              isDarkHeader ? "text-white" : "text-foreground"
            }`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.2em]">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-colors duration-300 hover:text-primary ${
                  isActive
                    ? "text-primary font-bold"
                    : isDarkHeader
                    ? "text-white/80"
                    : "text-foreground/70"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`md:hidden p-2 -mr-2 transition-colors duration-300 ${
            isDarkHeader ? "text-white" : "text-foreground"
          }`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background border-t border-foreground/10 px-6 py-8 flex flex-col gap-6 font-mono text-sm uppercase tracking-widest shadow-2xl">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `${isActive ? "text-primary font-bold" : "text-foreground"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};
