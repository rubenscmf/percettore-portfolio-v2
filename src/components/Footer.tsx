import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-foreground/[0.08] bg-card relative z-10">
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* BRAND & BIO */}
        <div className="md:col-span-5 space-y-4">
          <Logo className="text-3xl tracking-tighter" />
          <p className="max-w-sm text-concrete-600 text-sm leading-relaxed">
            Engenharia de precisão em estruturas de concreto armado para empreendimentos residenciais de alto luxo,
            torres corporativas e complexos industriais.
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-concrete-500">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Conformidade ABNT NBR 6118 & NBR 14931</span>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="md:col-span-3 space-y-4 font-sans text-xs uppercase tracking-wider">
          <div className="text-concrete-500 font-bold tracking-[0.2em]">Navegação</div>
          <ul className="flex flex-col gap-3 text-concrete-700 font-semibold">
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
                Sobre a Percettore
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-primary transition-colors">
                Contato & Orçamento
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="md:col-span-4 space-y-4 font-sans text-xs uppercase tracking-wider">
          <div className="text-concrete-500 font-bold tracking-[0.2em]">Canais Oficiais</div>
          <address className="not-italic flex flex-col gap-3 text-foreground font-semibold">
            <a
              href="mailto:contato@percettore.com.br"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>contato@percettore.com.br</span>
            </a>
            <a
              href="tel:1124470892"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>11 2447-0892</span>
            </a>
            <div className="flex items-center gap-2 text-concrete-600 font-normal">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>São Paulo · Paraná · Santa Catarina</span>
            </div>
          </address>
        </div>
      </div>

      {/* BOTTOM LEGAL & COPYRIGHT */}
      <div className="mt-16 pt-8 border-t border-foreground/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs text-concrete-500 font-medium">
        <span>© {new Date().getFullYear()} Percettore Engenharia de Estruturas. Todos os direitos reservados.</span>
        <span>CREA Registrado · Projetos de Alta Complexidade</span>
      </div>
    </div>
  </footer>
);
