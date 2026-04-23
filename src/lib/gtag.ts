export const GA_ID = 'AW-18114514421'

// Remplace par ton label de conversion Google Ads (ex: AW-18114514421/AbCdEfGh)
export const CONVERSION_LABEL = 'CONVERSION_LABEL_ICI'

export function fireWhatsAppConversion() {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', 'conversion', {
      send_to: `${GA_ID}/${CONVERSION_LABEL}`,
    })
  }
}
