import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

export const Footer = () => (
  <footer className="relative z-10 w-full bg-background border-t border-foreground/[0.08] overflow-hidden">
    {/* SUBTLE WATERMARK IN FOOTER */}
    <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
      <span className="block font-display font-black text-[clamp(4.5rem,14vw,14rem)] text-foreground/[0.02] uppercase tracking-tighter whitespace-nowrap leading-none">
        percettore engenharia
      </span>
    </div>

    <div className="max-w-[1440px] mx-auto px-6 pt-20 pb-12 relative z-10 space-y-16">
      {/* 4 CLEAN EDITORIAL COLUMNS */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* COL 1: BRAND & MISSION */}
        <div className="md:col-span-4 space-y-4">
          <Logo className="text-3xl tracking-tighter" />
          <p className="text-concrete-600 text-sm leading-relaxed max-w-sm">
            Engenharia de precisão em estruturas de concreto armado de alta complexidade.
            Segurança matemática, conformidade ABNT NBR e durabilidade secular para grandes obras.
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-concrete-500">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>CREA Registrado · NBR 6118 & 14931</span>
          </div>
        </div>

        {/* COL 2: QUICK NAVIGATION */}
        <div className="md:col-span-2 space-y-4 font-sans text-xs uppercase tracking-wider">
          <div className="text-concrete-500 font-bold tracking-[0.2em]">Navegação</div>
          <ul className="flex flex-col gap-3 font-semibold text-foreground">
            <li>
              <Link to="/projetos" className="hover:text-primary transition-colors">
                Portfólio de Obras
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="hover:text-primary transition-colors">
                Serviços Técnicos
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-primary transition-colors">
                Sobre a Empresa
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-primary transition-colors">
                Contato Direto
              </Link>
            </li>
          </ul>
        </div>

        {/* COL 3: CONTACT CHANNELS */}
        <div className="md:col-span-3 space-y-4 font-sans text-xs uppercase tracking-wider">
          <div className="text-concrete-500 font-bold tracking-[0.2em]">Canais Oficiais</div>
          <address className="not-italic flex flex-col gap-3 text-foreground font-semibold">
            <a
              href="mailto:contato@percettore.com.br"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span>contato@percettore.com.br</span>
            </a>
            <a
              href="tel:1124470892"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <span>+55 11 2447-0892</span>
            </a>
            <div className="flex items-center gap-2 text-concrete-600 font-normal">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>SP · PR · SC · Atuação Nacional</span>
            </div>
          </address>
        </div>

        {/* COL 4: FAST ACTION PILL CARD */}
        <div className="md:col-span-3 p-6 bg-card border border-foreground/[0.08] rounded-sm space-y-4 shadow-sm">
          <div className="font-display font-bold text-base text-foreground">
            Tem um projeto que exige rigor estrutural?
          </div>
          <p className="text-xs text-concrete-600 leading-relaxed">
            Consulte nossos engenheiros calculistas para um estudo preliminar de viabilidade técnica.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center justify-between w-full bg-primary hover:bg-foreground text-white px-5 py-3 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm"
          >
            <span>Falar com Engenheiro</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* BOTTOM LEGAL BAR */}
      <div className="pt-8 border-t border-foreground/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-concrete-500 font-medium">
        <span>© {new Date().getFullYear()} Percettore Engenharia de Estruturas. Todos os direitos reservados.</span>
        <div className="flex items-center gap-6">
          <span>ABNT NBR 6118 / 14931</span>
          <span>·</span>
          <span>100 Anos de Vida Útil</span>
        </div>
      </div>
    </div>
  </footer>
);
