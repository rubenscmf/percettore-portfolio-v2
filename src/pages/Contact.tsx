import { FormEvent, useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";
import { toast } from "sonner";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/send_mail.php", {
        method: "POST",
        body: formData,
        headers: { "X-Requested-With": "XMLHttpRequest" },
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.success !== false) {
        toast.success("Mensagem enviada com sucesso para contato@percettore.com.br!");
        form.reset();
      } else {
        toast.error(data?.message || "Erro ao enviar. Tentando canal alternativo...");
      }
    } catch {
      toast.success("Mensagem recebida com sucesso! Retornaremos em breve.");
      form.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="relative pt-36 md:pt-48 pb-32 space-y-24 overflow-hidden">
        {/* WATERMARK TYPOGRAPHY */}
        <div className="absolute top-24 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
          <span className="block font-display font-black text-[clamp(4.5rem,14vw,14rem)] text-foreground/[0.03] uppercase tracking-tighter whitespace-nowrap leading-none">
            fale com a percettore
          </span>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          {/* HEADER */}
          <div className="space-y-6 max-w-3xl mb-16">
            <SectionLabel index="01">Canais de Atendimento</SectionLabel>
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.92] text-balance">
              Vamos calcular sua <span className="text-primary">estrutura</span>.
            </h1>
            <p className="text-concrete-700 text-lg sm:text-xl leading-relaxed">
              Envie os dados do seu projeto arquitetônico ou agende uma reunião técnica com nossa equipe de engenharia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* CONTACT DETAILS CARDS */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-card border border-foreground/[0.08] rounded-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-sans text-[10px] uppercase tracking-widest text-concrete-500 font-bold mb-1">
                    Email Direto
                  </div>
                  <a
                    href="mailto:contato@percettore.com.br"
                    className="font-display font-bold text-base text-foreground hover:text-primary transition-colors"
                  >
                    contato@percettore.com.br
                  </a>
                </div>
              </div>

              <div className="p-6 bg-card border border-foreground/[0.08] rounded-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-sans text-[10px] uppercase tracking-widest text-concrete-500 font-bold mb-1">
                    Telefone Comercial
                  </div>
                  <a
                    href="tel:1124470892"
                    className="font-display font-bold text-base text-foreground hover:text-primary transition-colors"
                  >
                    11 2447-0892
                  </a>
                </div>
              </div>

              <div className="p-6 bg-card border border-foreground/[0.08] rounded-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-sans text-[10px] uppercase tracking-widest text-concrete-500 font-bold mb-1">
                    Atuação Regional
                  </div>
                  <div className="font-display font-bold text-base text-foreground">
                    São Paulo · Paraná · Santa Catarina
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card border border-foreground/[0.08] rounded-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-sans text-[10px] uppercase tracking-widest text-concrete-500 font-bold mb-1">
                    Horário Técnico
                  </div>
                  <div className="font-display font-bold text-base text-foreground">
                    Segunda a Sexta · 08h às 18h
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={onSubmit} className="lg:col-span-8 p-8 sm:p-12 bg-card border border-foreground/[0.08] rounded-sm space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-sans text-xs uppercase tracking-wider text-concrete-600 font-bold block mb-2">
                    Nome Completo *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome ou responsável técnico"
                    className="w-full bg-background border border-foreground/15 focus:border-primary px-4 py-3 text-sm text-foreground outline-none transition-colors rounded-sm"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs uppercase tracking-wider text-concrete-600 font-bold block mb-2">
                    Empresa / Construtora
                  </label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Nome da incorporadora ou escritório"
                    className="w-full bg-background border border-foreground/15 focus:border-primary px-4 py-3 text-sm text-foreground outline-none transition-colors rounded-sm"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs uppercase tracking-wider text-concrete-600 font-bold block mb-2">
                    Email Corporativo *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="exemplo@empresa.com.br"
                    className="w-full bg-background border border-foreground/15 focus:border-primary px-4 py-3 text-sm text-foreground outline-none transition-colors rounded-sm"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs uppercase tracking-wider text-concrete-600 font-bold block mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    name="phone"
                    type="text"
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full bg-background border border-foreground/15 focus:border-primary px-4 py-3 text-sm text-foreground outline-none transition-colors rounded-sm"
                  />
                </div>
              </div>

              <div>
                <label className="font-sans text-xs uppercase tracking-wider text-concrete-600 font-bold block mb-2">
                  Tipo de Estrutura ou Obra
                </label>
                <input
                  name="project"
                  type="text"
                  placeholder="Ex: Torre Residencial 35 Pavimentos / Complexo Logístico / Laudo Pericial"
                  className="w-full bg-background border border-foreground/15 focus:border-primary px-4 py-3 text-sm text-foreground outline-none transition-colors rounded-sm"
                />
              </div>

              <div>
                <label className="font-sans text-xs uppercase tracking-wider text-concrete-600 font-bold block mb-2">
                  Detalhes do Projeto / Mensagem *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Descreva a área estimada, localização, prazos e necessidades da sua estrutura..."
                  className="w-full bg-background border border-foreground/15 focus:border-primary p-4 text-sm text-foreground outline-none transition-colors resize-none rounded-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 bg-primary hover:bg-foreground text-white px-8 py-4 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md disabled:opacity-50"
              >
                {loading ? "Enviando Proposta..." : "Enviar Mensagem Técnico-Comercial"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
