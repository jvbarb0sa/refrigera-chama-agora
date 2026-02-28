export const WHATSAPP_TECNICO = "5567981097179";
export const WHATSAPP_LOJA = "5567992599771";
export const PHONE_NUMBER = "5567981097179";
export const PHONE_DISPLAY = "(67) 9925-9771";
export const WHATSAPP_DISPLAY_TECNICO = "(67) 98109-7179";
export const WHATSAPP_DISPLAY_LOJA = "(67) 99259-9771";
export const EMAIL = "refrigeracaotaboadoms@gmail.com";

export function whatsappLink(message?: string, target: "tecnico" | "loja" = "tecnico") {
  const number = target === "loja" ? WHATSAPP_LOJA : WHATSAPP_TECNICO;
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function phoneLink() {
  return `tel:+${PHONE_NUMBER}`;
}
