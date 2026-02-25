import { useFadeIn } from "@/hooks/use-fade-in";

const diffs = [
  {
    title: "Diagnóstico Transparente",
    desc: "Você sabe exatamente o que tem antes de aprovar qualquer serviço. Sem peça trocada sem necessidade.",
  },
  {
    title: "Garantia Técnica Real",
    desc: "Garantia emitida por escrito. Se der problema dentro do prazo, voltamos sem custo.",
  },
  {
    title: "Equipe Qualificada",
    desc: "Técnicos com experiência em refrigeração comercial e linha branca. Formação contínua.",
  },
  {
    title: "Resposta Rápida",
    desc: "Atendimento no mesmo dia para urgências comerciais. Priorizamos quem não pode parar.",
  },
];

export default function DifferentialsSection() {
  const fadeRef = useFadeIn<HTMLDivElement>();

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div ref={fadeRef} className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left — list */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Por que escolher a gente
            </span>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
              O que nos diferencia.
            </h2>

            <div className="mt-10 space-y-8">
              {diffs.map((d, i) => (
                <div key={d.title} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {d.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — placeholder image */}
          <div className="hidden lg:block">
            <div className="aspect-[4/3] rounded-xl bg-foreground/5 border border-border flex items-center justify-center">
              <span className="text-sm text-muted-foreground">
                Foto da equipe ou atendimento
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
