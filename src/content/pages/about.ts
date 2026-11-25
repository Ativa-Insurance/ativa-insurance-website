// About page. DRAFT: uses only facts already on the live site (independent agency, Stuart office
// address, phone, e-mail, the 10 licensed states, English/Portuguese/Spanish). Founding year, team
// and office hours are [OWNER TO FILL] slots that stay hidden until the owner supplies them
// (DECISIONS-pages C). Needs licensed-agent review (English) and Gabriel's native review (PT, ES).

import type { AboutContent } from "./types";

const STATES = {
  en: "Connecticut, Florida, Georgia, Maryland, North Carolina, New Jersey, Ohio, Pennsylvania, South Carolina and Tennessee",
  pt: "Connecticut, Flórida, Geórgia, Maryland, Carolina do Norte, Nova Jersey, Ohio, Pensilvânia, Carolina do Sul e Tennessee",
  es: "Connecticut, Florida, Georgia, Maryland, Carolina del Norte, Nueva Jersey, Ohio, Pensilvania, Carolina del Sur y Tennessee",
};

const about: AboutContent = {
  id: "about",
  status: "draft",
  updated: "2026-11-25",
  team: [],
  hours: null,
  copy: {
    en: {
      seo: { title: "About Ativa Insurance | Independent Agency", description: "Ativa Insurance is an independent agency in Stuart, Florida, licensed in 10 states. We compare carriers for personal and business insurance in EN, PT and ES." },
      h1: "About Ativa",
      sub: "An independent insurance agency in Stuart, Florida, licensed in 10 states and working in English, Portuguese and Spanish.",
      quickQ: "What is Ativa Insurance?",
      quick: `Ativa Insurance is an independent insurance agency based in Stuart, Florida, and licensed in 10 states: ${STATES.en}. We compare policies from multiple carriers for personal and business insurance and help in English, Portuguese and Spanish. Policies are issued by the carriers.`,
      facts: ["Independent agency", "Licensed in 10 states", "English · Português · Español"],
      whatWeDo: [
        { t: "Compare carriers", d: "We aren't tied to one insurance company, so we can check several carriers for the same coverage." },
        { t: "Explain the options", d: "We go through coverages, limits and deductibles side by side before you decide." },
        { t: "Stay your contact", d: "After you buy, we help with ID cards, certificates, policy changes and claims." },
      ],
      faq: [
        { q: "Is Ativa an insurance company?", a: "No. Ativa is an independent insurance agency. Policies are issued, and claims are paid, by the insurance carriers we work with." },
        { q: "Which states do you serve?", a: `We're licensed in 10 states: ${STATES.en}.` },
        { q: "Which languages do you speak?", a: "English, Portuguese and Spanish." },
        { q: "How do I reach you?", a: "By WhatsApp or phone at 561-946-8261, or by e-mail at info@ativainsurance.com. Our office is at 1 SE Ocean Blvd, Stuart, FL 34994." },
      ],
    },
    pt: {
      seo: { title: "Sobre a Ativa Insurance | Agência independente", description: "A Ativa Insurance é uma agência independente em Stuart, Flórida, licenciada em 10 estados. Comparamos seguradoras para seguros pessoais e empresariais." },
      h1: "Sobre a Ativa",
      sub: "Uma agência de seguros independente em Stuart, na Flórida, licenciada em 10 estados e com atendimento em inglês, português e espanhol.",
      quickQ: "O que é a Ativa Insurance?",
      quick: `A Ativa Insurance é uma agência de seguros independente com sede em Stuart, na Flórida, licenciada em 10 estados: ${STATES.pt}. Comparamos apólices de várias seguradoras para seguros pessoais e empresariais e atendemos em inglês, português e espanhol. As apólices são emitidas pelas seguradoras.`,
      facts: ["Agência independente", "Licenciada em 10 estados", "English · Português · Español"],
      whatWeDo: [
        { t: "Comparamos seguradoras", d: "Não somos ligados a uma única seguradora, então podemos consultar várias para a mesma cobertura." },
        { t: "Explicamos as opções", d: "Mostramos coberturas, limites e franquias lado a lado antes de você decidir." },
        { t: "Continuamos com você", d: "Depois da contratação, ajudamos com cartões de seguro, certificados, alterações na apólice e sinistros." },
      ],
      faq: [
        { q: "A Ativa é uma seguradora?", a: "Não. A Ativa é uma agência de seguros independente. As apólices são emitidas, e os sinistros pagos, pelas seguradoras com que trabalhamos." },
        { q: "Quais estados vocês atendem?", a: `Somos licenciados em 10 estados: ${STATES.pt}.` },
        { q: "Quais idiomas vocês falam?", a: "Inglês, português e espanhol." },
        { q: "Como falo com vocês?", a: "Por WhatsApp ou telefone no 561-946-8261, ou por e-mail em info@ativainsurance.com. O escritório fica em 1 SE Ocean Blvd, Stuart, FL 34994." },
      ],
    },
    es: {
      seo: { title: "Sobre Ativa Insurance | Agencia independiente", description: "Ativa Insurance es una agencia independiente en Stuart, Florida, con licencia en 10 estados. Comparamos aseguradoras para seguros personales y de negocios." },
      h1: "Sobre Ativa",
      sub: "Una agencia de seguros independiente en Stuart, Florida, con licencia en 10 estados y atención en inglés, portugués y español.",
      quickQ: "¿Qué es Ativa Insurance?",
      quick: `Ativa Insurance es una agencia de seguros independiente con sede en Stuart, Florida, y con licencia en 10 estados: ${STATES.es}. Comparamos pólizas de varias aseguradoras para seguros personales y de negocios y atendemos en inglés, portugués y español. Las pólizas las emiten las aseguradoras.`,
      facts: ["Agencia independiente", "Con licencia en 10 estados", "English · Português · Español"],
      whatWeDo: [
        { t: "Comparamos aseguradoras", d: "No estamos atados a una sola aseguradora, así que podemos consultar varias para la misma cobertura." },
        { t: "Explicamos las opciones", d: "Revisamos coberturas, límites y deducibles lado a lado antes de que usted decida." },
        { t: "Seguimos a su lado", d: "Después de la compra, le ayudamos con tarjetas de seguro, certificados, cambios en la póliza y reclamos." },
      ],
      faq: [
        { q: "¿Ativa es una aseguradora?", a: "No. Ativa es una agencia de seguros independiente. Las pólizas las emiten, y los reclamos los pagan, las aseguradoras con las que trabajamos." },
        { q: "¿Qué estados atienden?", a: `Tenemos licencia en 10 estados: ${STATES.es}.` },
        { q: "¿Qué idiomas hablan?", a: "Inglés, portugués y español." },
        { q: "¿Cómo me comunico con ustedes?", a: "Por WhatsApp o teléfono al 561-946-8261, o por correo a info@ativainsurance.com. La oficina está en 1 SE Ocean Blvd, Stuart, FL 34994." },
      ],
    },
  },
};

export default about;
