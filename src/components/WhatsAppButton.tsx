'use client'

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/12096768909?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Pro%20Max%20Tv%20Player%2C%20pouvez-vous%20me%20donner%20plus%20d%27infos%20%3F`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 9999,
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        textDecoration: 'none',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.1)'
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="white"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.827 1.78 6.857L2 30l7.34-1.742A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.46 11.46 0 0 1-5.845-1.598l-.418-.248-4.354 1.033 1.062-4.24-.272-.434A11.463 11.463 0 0 1 4.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.61c-.344-.172-2.04-1.006-2.356-1.12-.316-.115-.547-.172-.777.172-.23.344-.893 1.12-1.094 1.35-.2.23-.402.258-.746.086-.344-.172-1.453-.535-2.768-1.707-1.023-.912-1.713-2.037-1.913-2.381-.2-.344-.02-.53.15-.702.154-.154.344-.402.516-.602.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.602-.086-.172-.777-1.873-1.064-2.564-.28-.672-.564-.58-.777-.59L10.4 11c-.23 0-.602.086-.918.43-.316.344-1.207 1.178-1.207 2.873s1.236 3.332 1.408 3.562c.172.23 2.43 3.71 5.888 5.203.823.355 1.465.567 1.966.726.826.263 1.578.226 2.172.137.662-.099 2.04-.834 2.327-1.638.287-.805.287-1.494.2-1.638-.086-.143-.316-.23-.66-.402z" />
      </svg>
    </a>
  )
}
