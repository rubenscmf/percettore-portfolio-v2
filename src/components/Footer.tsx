import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Footer = () => (
  <footer className="relative z-10 w-full overflow-hidden">
    {/* =========================================================================
        TIER 1: ARCHITECTURAL VISUAL WITH FLOATING GLASS CARD (REFERÊNCIA TELA ANEXO)
    ========================================================================= */}
    <div className="relative min-h-[520px] md:min-h-[580px] w-full flex items-center justify-end overflow-hidden bg-concrete-900">
      {/* BACKGROUND ARCHITECTURAL IMAGE WITH CONTRAST & DEPTH */}
      <img
        src={hero}
        alt="Engenharia de estruturas e concreto armado Percettore"
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-40 will-change-transform"
      />
      {/* VIGNETTE & RED ACCENT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-concrete-900/95 via-concrete-900/60 to-black/80" />
      <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-primary" />

      {/* WATERMARK ACCENT IN FOOTER HERO */}
      <div className="absolute left-8 bottom-8 pointer-events-none select-none font-display font-black text-6xl sm:text-8xl md:text-9xl text-white/[0.04] uppercase tracking-tighter leading-none hidden sm:block">
        PERCETTORE
      </div>

      {/* FLOATING TRANSLUCENT GLASS CARD (EXACT BIMAT FOOTER REFERENCE) */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 py-12 flex justify-end">
        <div className="w-full max-w-lg bg-black/60 backdrop-blur-xl border border-white/20 p-8 sm:p-10 md:p-12 text-white shadow-2xl rounded-sm space-y-8">
          {/* ACCENT DASH & TITLE */}
          <div className="space-y-3">
            <div className="w-8 h-0.5 bg-primary" />
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-tight uppercase leading-tight text-white">
              Central de Engenharia <br />& Projetos
            </h2>
          </div>

          {/* CONTACT DETAILS LIST */}
          <div className="space-y-5 text-sm">
            {/* PHONE */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mb-1">
                  Telefone / WhatsApp Comercial:
                </div>
                <a
                  href="tel:1124470892"
                  className="font-display font-bold text-base sm:text-lg text-white hover:text-primary transition-colors"
                >
                  +55 11 2447-0892
                </a>
                <div className="text-xs text-white/60">Atendimento Técnico & Novos Contratos</div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mb-1">
                  Email Corporativo:
                </div>
                <a
                  href="mailto:contato@percettore.com.br"
                  className="font-display font-bold text-base sm:text-lg text-white hover:text-primary transition-colors"
                >
                  contato@percettore.com.br
                </a>
              </div>
            </div>

            {/* AVAILABILITY */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mb-1">
                  Disponibilidade Operacional:
                </div>
                <div className="font-medium text-white/90">
                  Segunda a Sexta · 08h às 18h
                </div>
              </div>
            </div>

            {/* REGIONAL PRESENCE */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-white">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mb-1">
                  Atuação em Todo o Brasil:
                </div>
                <div className="font-medium text-white/90">
                  São Paulo · Paraná · Santa Catarina
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SPATIAL TAG */}
          <div className="pt-4 border-t border-white/15 flex items-center justify-between text-[11px] font-mono tracking-[0.3em] text-white/60">
            <span>C O N T A T O S</span>
            <span className="text-primary font-bold">NBR 6118 / 14931</span>
          </div>
        </div>
      </div>
    </div>

    {/* =========================================================================
        TIER 2: PURE WHITE MODERN NAV BAR (EXACT BIMAT REFERENCE)
    ========================================================================= */}
    <div className="bg-background border-t border-foreground/[0.08] py-8">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* BRAND & YEAR */}
        <div className="font-sans text-xs text-concrete-500 font-medium tracking-wider">
          <span className="font-bold text-foreground">percettore</span> {new Date().getFullYear()} · CREA registrado
        </div>

        {/* CENTER NAVIGATION WITH CIRCULAR RED ARROW ICON */}
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-sans text-xs uppercase tracking-[0.18em] font-semibold text-concrete-600">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
            <ArrowRight className="w-4 h-4" />
          </div>
          <Link to="/projetos" className="hover:text-primary transition-colors">
            Projetos
          </Link>
          <Link to="/servicos" className="hover:text-primary transition-colors">
            Serviços
          </Link>
          <Link to="/sobre" className="hover:text-primary transition-colors">
            Sobre Nós
          </Link>
          <Link to="/contato" className="hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>

        {/* RIGHT RED PILL BUTTON */}
        <div>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-primary hover:bg-foreground text-white px-6 py-2.5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Falar com Percettore
          </Link>
        </div>
      </div>

      {/* ULTRA-DISCREET SUB-LINE */}
      <div className="max-w-[1440px] mx-auto px-6 mt-6 pt-4 border-t border-foreground/[0.04] flex items-center justify-between text-[11px] text-concrete-500 font-sans">
        <span>Estruturas de Concreto Armado · Engenharia de Alto Rigor</span>
        <span>Vida Útil Normativa de 100 Anos</span>
      </div>
    </div>
  </footer>
);
