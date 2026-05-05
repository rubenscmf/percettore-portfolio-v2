import { FormEvent, useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionLabel } from "@/components/SectionLabel";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensagem recebida. Retornaremos em até 24h úteis.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <Layout>
      <section className="container pt-40 pb-16">
        <SectionLabel index="01" className="mb-6">Contato</SectionLabel>
        <h1 className="font-display text-5xl md:text-8xl tracking-tighter leading-[0.92] text-balance">
          Vamos calcular sua <span className="text-primary">estrutura</span>.
        </h1>
      </section>

      <section className="container pb-32 grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4 space-y-10">
          {[
            { k: "Escritório", v: "Av. das Estruturas, 1810\nCuritiba — PR" },
            { k: "Email", v: "contato@percettore.com.br" },
            { k: "Telefone", v: "+55 (41) 3322-9900" },
            { k: "Horário", v: "Seg–Sex · 08h–18h" },
          ].map((c) => (
            <div key={c.k}>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-concrete-500 mb-2">
                {c.k}
              </div>
              <div className="font-display text-xl whitespace-pre-line">{c.v}</div>
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="col-span-12 md:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Field label="Nome" name="name" required />
            <Field label="Empresa" name="company" />
            <Field label="Email" name="email" type="email" required />
            <Field label="Telefone" name="phone" />
          </div>
          <Field label="Tipo de Projeto" name="project" />
          <div>
            <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-concrete-500">
              Mensagem
            </label>
            <textarea
              name="message"
              required
              rows={6}
              className="mt-2 w-full bg-transparent border-b border-foreground/30 focus:border-primary py-3 text-lg outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group inline-flex items-center gap-4 bg-foreground text-background px-8 py-5 font-mono text-xs uppercase tracking-[0.2em] hover:bg-primary transition-colors disabled:opacity-50"
          >
            {loading ? "Enviando…" : "Enviar Mensagem"}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </section>

      <section className="bg-concrete-100 aspect-[21/9] w-full">
        <iframe
          title="Mapa Percettore"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-49.31%2C-25.45%2C-49.21%2C-25.40&amp;layer=mapnik"
          className="w-full h-full grayscale"
          loading="lazy"
        />
      </section>
    </Layout>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-concrete-500">
      {label}{required && <span className="text-primary"> *</span>}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      className="mt-2 w-full bg-transparent border-b border-foreground/30 focus:border-primary py-3 text-lg outline-none transition-colors"
    />
  </div>
);

export default Contact;
