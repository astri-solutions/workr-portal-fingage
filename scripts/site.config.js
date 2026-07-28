// scripts/site.config.js
// Gerado pelo Workr Lite CMS — não editar manualmente.
export const siteConfig = {

  maintenance: false,

  company: {
    name:        "Fingage",
    nameShort:   "Fingage",
    description: 'Relações com Investidores — Fingage.',
    logoOriginal: '/assets/logotipo/logotipo-original.svg',
    logoNegative: '/assets/logotipo/logotipo-negative.svg',
    logoContrast: '/assets/logotipo/logotipo-negative.svg',
    favicon:      '/favicon.png',
  },

  colors: {
    primary:   "#0B5B68",
    secondary: "#00D865",
    tertiary:  "#F4A261",
  },

  fonts: {
    display: "nunito",
    body:    "nunito",
  },

  ticker: {
    type:      "iframe",
    iframeUrl: "",
    items: [],
  },

  nav: [
    { id: "a-companhia", label: "A Companhia", href: "/a-companhia.html", children: [] },
    { id: "governanca", label: "Governança", children: [
      { id: "composicao", label: "Composição Acionária", href: "/composicao-acionaria.html" },
      { id: "atas", label: "Atas e Assembleias", href: "/atas-assembleias.html" },
      { id: "docs-cvm", label: "Documentos CVM", href: "/documentos-cvm.html" },
    ] },
    { id: "investidores", label: "Investidores", children: [
      { id: "resultados", label: "Resultados", href: "/central-resultados.html" },
      { id: "calendario", label: "Calendário de Eventos", href: "/calendario-eventos.html" },
      { id: "ratings", label: "Ratings", href: "/ratings.html" },
    ] },
    { id: "contato", label: "Contato", children: [
      { id: "fale-ri", label: "Fale com RI", href: "/fale-com-ri.html" },
      { id: "mailing", label: "Mailing", href: "/mailing.html" },
    ] },
  ],

  empresas: [
    { id: 'principal', label: "Fingage", short: 'F' },
  ],

  supabase: {
    url:      "https://mmhuwlpsgnvoxyuofliq.supabase.co",
    anonKey:  "sb_publishable_BBSPbQc2kZngiK45ecfXaA_X4NANiGj",
    portalId: "98f1e725-2375-4910-95ac-55f2463b783e",
  },

  header: { variant: 'banner' },

  seo: {
    title:             "Fingage",
    description:       "Site RI",
    googleAnalyticsId: "",
    clarityId:         "",
  },

  contact: {
    email: "d.sousa@astri.solutions",
  },

  languages: ["pt-BR","en","es"],

  topbar: {
    ri: { label: 'Relações com Investidores', url: '/' },
    institucional: { label: 'Institucional', url: '#' },
    showTicker: true,
  },

  restrictedNav: [],

  footer: {
    variant:   'simple',
    address:   "",
    email:     "",
    phone:     "",
    hours:     "",
    copyright: "©Copyright Fingage 2026",
    social: { linkedin: "#", instagram: "#", facebook: "#" },
    legalLinks: [
      { label: "Termos e Condições", href: "/termos-e-condicoes.html" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade.html" },
      { label: "Definições de Cookies", href: "/definicao-de-cookies.html" }
    ],
    legalText: "As informações contidas neste site são de caráter meramente informativo e não constituem oferta de valores mobiliários.",
  },

};
