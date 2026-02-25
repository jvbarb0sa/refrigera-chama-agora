export const WHATSAPP_NUMBER = "5567981097179";
export const PHONE_NUMBER = "5567992597710";
export const PHONE_DISPLAY = "(67) 99259-7710";
export const WHATSAPP_DISPLAY = "(67) 98109-7179";
export const EMAIL = "refrigeracaotaboadoms@gmail.com";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function phoneLink() {
  return `tel:+${PHONE_NUMBER}`;
}
