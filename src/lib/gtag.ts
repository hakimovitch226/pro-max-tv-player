export const GA_ID = 'AW-18114514421'
export const CONVERSION_SEND_TO = 'AW-18114514421/1t-cCN70vaEcEPWb1r1D'

export function fireWhatsAppConversion() {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', 'conversion', {
      send_to: CONVERSION_SEND_TO,
      value: 30.0,
      currency: 'MAD',
    })
  }
}
