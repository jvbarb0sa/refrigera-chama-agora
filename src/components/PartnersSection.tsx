import { ShieldCheck, BadgeCheck, MapPin, ArrowUpRight } from "lucide-react";

export default function PartnersSection() {
  return (
    <section data-reveal style={{ visibility: "hidden" }} className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Grid técnico sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-16 items-center">
        {/* Coluna Esquerda */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border-none mb-4">
            <ShieldCheck className="h-4 w-4 text-blue-700" strokeWidth={1.8} />
            <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">Aliança Estratégica</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
            Padrão de excelência no Distrito Federal.
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Para clientes e empresas que precisam de atendimento em Brasília e região,
            somos parceiros oficiais da RB Refrigeração. O mesmo rigor técnico, peças
            originais e diagnóstico presencial com laudo que você confia.
          </p>
        </div>

        {/* Coluna Direita – Card Premium */}
        <div className="group relative p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-sky-200 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1">
          {/* Selo */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-6">
            <BadgeCheck className="h-4 w-4" />
            Parceiro Oficial Certificado
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">
            RB Refrigeração
          </h3>

          <div className="flex items-center gap-2 text-slate-500 mb-8 font-medium">
            <MapPin className="h-4 w-4" />
            Brasília · Samambaia Sul · DF
          </div>

          <a
            href="https://rbrefrigeracaodf.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all duration-300 group-hover:shadow-[0_8px_20px_rgba(14,165,233,0.15)] cursor-pointer font-medium"
          >
            Acessar site do parceiro
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
