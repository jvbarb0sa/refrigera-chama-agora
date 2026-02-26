export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary/5 border-b border-border hidden md:block">
      <div className="container flex h-10 items-center justify-center gap-6 text-[13px] text-muted-foreground">
        <span>📍 Três Lagoas – MS e região</span>
        <span className="text-border">|</span>
        <span>✅ Atendimento comercial, industrial e residencial</span>
        <span className="text-border">|</span>
        <span>🛡️ Diagnóstico + orçamento com transparência</span>
      </div>
    </div>
  );
}
