import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="border-t border-foreground/10 bg-background">
    <div className="container py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Logo className="text-3xl" />
          <p className="mt-6 max-w-sm text-concrete-500 text-pretty">
            Engenharia de estruturas de concreto armado para empreendimentos de alto padrão e
            infraestrutura industrial.
          </p>
        </div>

        <div className="md:col-span-3 font-sans text-xs font-semibold uppercase tracking-wider">
          <span className="text-concrete-500 block mb-5 font-medium">Navegação</span>
          <ul className="flex flex-col gap-3">
            <li><Link to="/projetos" className="hover:text-primary transition-colors">Projetos</Link></li>
            <li><Link to="/servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
            <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 font-sans text-xs font-semibold uppercase tracking-wider">
          <span className="text-concrete-500 block mb-5 font-medium">Contato</span>
          <address className="not-italic flex flex-col gap-3 text-foreground font-medium">
            <span>contato@percettore.com.br</span>
            <span>+55 (41) 3322-9900</span>
            <span>Av. das Estruturas, 1810 — Curitiba, PR</span>
          </address>
        </div>
      </div>

      <div className="mt-20 pt-6 border-t border-foreground/10 flex flex-col md:flex-row justify-between gap-4 font-sans text-xs uppercase tracking-wider text-concrete-500 font-medium">
        <span>© {new Date().getFullYear()} Percettore Engenharia de Estruturas</span>
        <span>Estruturas de Concreto Armado · CREA registrado</span>
      </div>
    </div>
  </footer>
);
