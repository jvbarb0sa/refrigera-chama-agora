import { useGsapFade } from "@/hooks/use-gsap-fade";
import { whatsappLink } from "@/lib/constants";

const tags = ["Três Lagoas · MS", "Comércio & Indústria", "Residencial"];

export default function ServiceAreaSection() {
  const ref = useGsapFade<HTMLDivElement>();

  return (
    <section className="border-t border-[#D7D7D7] py-20 bg-white">
      <div ref={ref} className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Left column */}
          <div className="lg:col-span-2 flex flex-col justify-center pr-0 lg:pr-8 pb-8 lg:pb-0">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#118CD9]">
              Área de atendimento
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#163573] tracking-tight">
              Atendimento local
            </h2>
            <p className="mt-3 text-[15px] text-[#4B5563] leading-[1.7] max-w-md">
              Atuamos em Três Lagoas e região, com atendimento para comércios,
              indústrias alimentícias e residências.
            </p>

            <div className="mt-6 flex flex-col gap-2">
              {tags.map((tag) => (
                <p key={tag} className="text-sm text-foreground">
                  <span className="text-[#BF5D39] mr-2">·</span>
                  {tag}
                </p>
              ))}
            </div>

            <a
              href={whatsappLink("Olá, gostaria de informações sobre atendimento na minha região.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 text-[#118CD9] font-medium text-sm hover:underline w-fit h-10 inline-flex items-center"
            >
              Fale com a gente →
            </a>
          </div>

          {/* Right column — Map */}
          <div className="lg:col-span-3 overflow-hidden border border-[#D7D7D9]">
            <iframe
              title="Localização Três Lagoas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118889.7!2d-51.73!3d-20.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e4f4c4c4c4c1%3A0x1!2sTr%C3%AAs%20Lagoas%2C%20MS!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              className="lg:!min-h-[400px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
