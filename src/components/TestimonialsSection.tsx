import { MapPin, Star } from "lucide-react";
import { useGsapFade } from "@/hooks/use-gsap-fade";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
{
  name: "Marcos",
  context: "Mercado Central — Câmara fria",
  text: "Câmara fria desligou numa sexta à noite. Atenderam rápido e salvaram nossa mercadoria.",
  initials: "MC"
},
{
  name: "Carlos M.",
  context: "Residencial — Freezer",
  text: "Chamei de manhã, à tarde já estava resolvido. Freezer voltou a funcionar sem trocar peça.",
  initials: "CM"
},
{
  name: "Dona Maria",
  context: "Residencial — Geladeira",
  text: "O Vagner explicou direitinho o que era antes de mexer. Orçamento justo e geladeira funcionando até hoje.",
  initials: "DM"
},
{
  name: "Roberto S.",
  context: "Sorveteria — Expositor",
  text: "Expositor parou no sábado. Vieram no mesmo dia e resolveram sem enrolação. Recomendo demais.",
  initials: "RS"
},
{
  name: "Ana Paula",
  context: "Residencial — Lavadora",
  text: "Lavadora travava na centrifugação. Diagnóstico rápido e conserto no mesmo dia. Muito profissional.",
  initials: "AP"
},
{
  name: "João Pedro",
  context: "Padaria — Balcão refrigerado",
  text: "Manutenção preventiva todo mês. Nunca mais tive problema com o balcão. Serviço sério.",
  initials: "JP"
},
{
  name: "Fernanda L.",
  context: "Restaurante — Ar-condicionado",
  text: "Ar do salão parou no meio do almoço. Vieram em menos de 2 horas e resolveram na hora.",
  initials: "FL"
},
{
  name: "Sérgio R.",
  context: "Açougue — Câmara fria",
  text: "Fazem manutenção preventiva mensal. Zero surpresas desde então. Confiança total.",
  initials: "SR"
},
{
  name: "Luciana T.",
  context: "Residencial — Ar-condicionado inverter",
  text: "Instalação limpa, sem bagunça. Funcionou perfeito de primeira. Super atenciosos.",
  initials: "LT"
},
{
  name: "Eduardo K.",
  context: "Supermercado — Balcão refrigerado",
  text: "Consertaram o balcão sem precisar desligar os outros equipamentos. Profissionais de verdade.",
  initials: "EK"
},
{
  name: "Patrícia N.",
  context: "Residencial — Geladeira",
  text: "Geladeira de 15 anos, achei que ia ter que trocar. Consertaram e ficou nova.",
  initials: "PN"
},
{
  name: "Thiago M.",
  context: "Farmácia — Refrigerador de medicamentos",
  text: "Equipamento crítico para vacinas. Atenderam com urgência real. Nota 10.",
  initials: "TM"
}];


const firstColumn = testimonials.slice(0, 6);
const secondColumn = testimonials.slice(6, 9);
const thirdColumn = testimonials.slice(9, 12);

export default function TestimonialsSection() {
  const sectionRef = useGsapFade<HTMLDivElement>();

  return (
    <section id="provas" data-reveal style={{ visibility: "hidden" }} className="py-20 md:py-28 border-accent-foreground bg-primary-foreground" aria-label="Depoimentos de clientes">
      <div ref={sectionRef} className="container">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-border bg-muted/50 mx-auto">
            <span className="text-xs font-semibold text-primary tracking-wide uppercase">Prova social</span>
          </div>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[32px]">
            Quem já confiou no nosso trabalho
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Veja o que nossos clientes dizem sobre a experiência com nosso atendimento.
          </p>
        </div>

        {/* Credibilidade */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center gap-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <Star size={28} className="fill-amber-400 text-amber-400" />
            <div>
              <span className="text-3xl font-semibold text-foreground">4.9</span>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">no Google</p>
            </div>
          </div>
          <div className="hidden h-8 w-px bg-border sm:block" />
          <div className="text-center">
            <span className="text-3xl font-semibold text-foreground">50+</span>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">avaliações reais</p>
          </div>
          <div className="hidden h-8 w-px bg-border sm:block" />
          <div className="flex items-center gap-3">
            <MapPin size={22} className="text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Atendimento local</p>
              <p className="text-xs text-muted-foreground">Três Lagoas e região</p>
            </div>
          </div>
        </div>
      </div>

      {/* Colunas verticais animadas */}
      <div className="relative mt-12 flex justify-center gap-6 overflow-hidden px-4 max-h-[450px] md:max-h-[600px] border-primary-foreground bg-primary-foreground">
        {/* Máscara gradiente top/bottom */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-primary-foreground to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-primary-foreground to-transparent" />

        <TestimonialsColumn testimonials={firstColumn} duration={15} className="max-w-full md:max-w-[340px] flex-1" />
        <TestimonialsColumn testimonials={secondColumn} duration={20} className="hidden max-w-[340px] flex-1 md:block" />
        <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden max-w-[340px] flex-1 lg:block" />
      </div>
    </section>);

}