// scripts/site.config.js
// Gerado pelo Workr Lite CMS — não editar manualmente.
export const siteConfig = {

  // Ligado via Painel de Controle (super_admin) — quando true, page.js
  // mostra só uma tela de aviso e não inicializa o resto do site.
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
    items: [
      { symbol: 'WRLT3', price: 'R$ 00,00', change: '0,00%', direction: 'up' }
    ],
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
    { id: "principal-1785263312217", label: "Fingage", short: "F" }
  ],

  header: { variant: 'banner' },

  languages: ["pt-BR","en","es"],

  topbar: {
    ri: { label: "Relações com Investidores", url: "/" },
    institucional: { label: "Institucional", url: "#" },
    showTicker: true,
  },

  restrictedNav: [],

  footer: {
    variant: "full",
    model: "completo",
    email: "",
    content: {"pt-BR":{"address":"","phone":"","hours":"","copyright":"©Copyright Fingage 2026","disclaimer":"As informações contidas neste site são de caráter meramente informativo e não constituem oferta de valores mobiliários."}},
    social: { linkedin: "#", instagram: "#", facebook: "#" },
    legalLinks: [
      { label: "Termos e Condições", href: "/termos-e-condicoes.html" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade.html" },
      { label: "Definições de Cookies", href: "/definicao-de-cookies.html" }
    ],
  },

  splash: {
    enabled: false,
    size: 'md',
    titulo: '',
    texto: '',
    conteudo: '',
    legenda: '',
    buttons: [],
  },

  cookies: {
    enabled: true,
    layout: 'full',
    theme: 'light',
    title: 'Utilizamos cookies',
    description: 'Usamos cookies para melhorar sua experiência.',
    acceptLabel: 'Aceitar todos',
    rejectLabel: 'Rejeitar',
    showReject: true,
    showCustomize: false,
  },

  errorPages: [],

  banner: [
    {
      "id": "b1",
      "imagem": null,
      "content": {
        "pt-BR": {
          "cta": "Saiba mais",
          "titulo": "Relações com Investidores TESTE",
          "subtitulo": "Transparência e geração de valor para nossos acionistas."
        }
      }
    }
  ],

  // Home hero shortcuts (Banner com navbar) — null = derive from siteConfig.nav.
  home: {
    shortcuts: null,
  },

  supabase: {
    url:      "https://mmhuwlpsgnvoxyuofliq.supabase.co",
    anonKey:  "sb_publishable_BBSPbQc2kZngiK45ecfXaA_X4NANiGj",
    portalId: "98f1e725-2375-4910-95ac-55f2463b783e",
  },

};
