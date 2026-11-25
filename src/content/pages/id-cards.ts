// Insurance ID cards service page. DRAFT: content written for site v2 under the content rules (the
// design package has no content for this page). Needs licensed-agent review (English) and Gabriel's
// native review (Portuguese, Spanish) before the owner approves.
// Layout: the COI service template with a light hero and no photo (DECISIONS-v2 C). No explorer.
// No quote button: the primary action opens WhatsApp with the existing ID-cards message
// (a27.wa.idcards). No form. Proof-of-insurance rules are written generally (they vary by state).

import type { LandingContent } from "./types";

const idCards: LandingContent = {
  id: "id-cards",
  status: "draft",
  updated: "2026-11-25",
  related: ["claims-help", "policy-changes", "coi"],
  waKey: "idcards",
  copy: {
    en: {
      seo: {
        title: "Insurance ID Cards | Ativa Insurance",
        description: "How to get your auto insurance ID cards from Ativa by WhatsApp, phone or e-mail, and what to have ready. No form to fill in.",
      },
      h1: "Insurance ID cards",
      sub: "Need proof of auto insurance? Message us, and we send your ID cards in the same conversation.",
      cta: "Request my ID cards",
      quickQ: "What is an insurance ID card?",
      quick: "An auto insurance ID card is a document from your carrier showing that a vehicle is insured: the insured's name, the carrier, the policy number, the policy dates and the vehicles listed. States set their own rules on carrying proof of insurance, and lenders, dealers or the DMV may ask for it.",
      scenarios: [],
      myths: [
        { m: "A photo of my old card is enough.", f: "Each card shows specific policy dates. After a renewal or a vehicle change, you need the current card." },
        { m: "The ID card shows what my policy covers.", f: "The card is proof of insurance. Your policy documents describe the coverages, limits and exclusions." },
      ],
      notCovered: [],
      who: [],
      factors: [],
      faq: [
        { q: "Can I keep my ID cards on my phone?", a: "Many carriers offer digital ID cards in their app or on their website. We can also send a copy by WhatsApp or e-mail. Whether a digital card is accepted depends on who asks for it and on your state's rules." },
        { q: "When do I need new ID cards?", a: "Usually after a renewal, when you add or replace a vehicle, or when the policy changes. Ask us anytime." },
        { q: "Who can request ID cards?", a: "The named insured or someone authorized on the policy." },
      ],
      service: {
        note: "ID cards show the policy as of the day they're issued. After a renewal or a vehicle change, ask for new ones.",
        howto: [
          { t: "Send the request", d: "Message us with your name and the vehicle or policy the cards are for." },
          { t: "We check the policy", d: "We confirm the policy dates and the vehicles listed on it." },
          { t: "Receive the cards", d: "We send them back in the same conversation, ready to save on your phone or print." },
        ],
        ready: [
          "Your name as it appears on the policy",
          "Policy number, if you have it",
          "Which vehicles you need cards for",
          "Where to send them",
        ],
        turnaround: "Timing depends on the request. Cards for a new vehicle can take longer when the policy has to change first.",
      },
    },
    pt: {
      seo: {
        title: "Cartões de seguro (ID cards) | Ativa Insurance",
        description: "Como receber os cartões do seu seguro de auto (ID cards) pela Ativa por WhatsApp, telefone ou e-mail, e o que ter em mãos. Sem formulário para preencher.",
      },
      h1: "Cartões de seguro (ID cards)",
      sub: "Precisa do comprovante do seguro de auto? Mande uma mensagem, e enviamos os seus cartões na mesma conversa.",
      cta: "Pedir meus cartões",
      quickQ: "O que é o cartão de seguro (ID card)?",
      quick: "O cartão do seguro de auto (ID card) é um documento da seguradora que mostra que o veículo tem seguro: o nome do segurado, a seguradora, o número da apólice, as datas de vigência e os veículos incluídos. Cada estado define as próprias regras sobre levar o comprovante de seguro, e bancos, concessionárias ou o DMV podem pedir.",
      scenarios: [],
      myths: [
        { m: "Uma foto do cartão antigo basta.", f: "Cada cartão mostra datas específicas da apólice. Depois de uma renovação ou da troca de veículo, você precisa do cartão atual." },
        { m: "O cartão mostra o que a apólice cobre.", f: "O cartão é o comprovante de seguro. Os documentos da apólice descrevem as coberturas, os limites e as exclusões." },
      ],
      notCovered: [],
      who: [],
      factors: [],
      faq: [
        { q: "Posso ter os cartões no celular?", a: "Muitas seguradoras oferecem o cartão digital no aplicativo ou no site. Também podemos enviar uma cópia por WhatsApp ou e-mail. Se o cartão digital é aceito depende de quem pede e das regras do seu estado." },
        { q: "Quando preciso de cartões novos?", a: "Normalmente depois de uma renovação, quando você inclui ou troca um veículo, ou quando a apólice muda. Peça quando quiser." },
        { q: "Quem pode pedir os cartões?", a: "O segurado (named insured) ou alguém autorizado na apólice." },
      ],
      service: {
        note: "Os cartões mostram a apólice como estava no dia da emissão. Depois de uma renovação ou da troca de veículo, peça novos.",
        howto: [
          { t: "Envie o pedido", d: "Mande uma mensagem com seu nome e o veículo ou a apólice dos cartões." },
          { t: "Conferimos a apólice", d: "Confirmamos as datas de vigência e os veículos incluídos." },
          { t: "Receba os cartões", d: "Enviamos na mesma conversa, prontos para salvar no celular ou imprimir." },
        ],
        ready: [
          "Seu nome como consta na apólice",
          "Número da apólice, se tiver",
          "Para quais veículos você precisa dos cartões",
          "Para onde enviar",
        ],
        turnaround: "O prazo depende do pedido. Cartões para um veículo novo podem demorar mais quando a apólice precisa mudar antes.",
      },
    },
    es: {
      seo: {
        title: "Tarjetas de seguro (ID cards) | Ativa Insurance",
        description: "Cómo recibir las tarjetas de su seguro de auto (ID cards) de Ativa por WhatsApp, teléfono o correo, y qué tener a mano. Sin formulario que llenar.",
      },
      h1: "Tarjetas de seguro (ID cards)",
      sub: "¿Necesita el comprobante de su seguro de auto? Escríbanos, y le enviamos sus tarjetas en la misma conversación.",
      cta: "Pedir mis tarjetas",
      quickQ: "¿Qué es la tarjeta de seguro (ID card)?",
      quick: "La tarjeta del seguro de auto (ID card) es un documento de la aseguradora que muestra que un vehículo está asegurado: el nombre del asegurado, la aseguradora, el número de póliza, las fechas de vigencia y los vehículos incluidos. Cada estado fija sus propias reglas sobre llevar el comprobante de seguro, y los bancos, concesionarios o el DMV pueden pedirlo.",
      scenarios: [],
      myths: [
        { m: "Una foto de mi tarjeta vieja es suficiente.", f: "Cada tarjeta muestra fechas específicas de la póliza. Después de una renovación o de cambiar de vehículo, necesita la tarjeta vigente." },
        { m: "La tarjeta muestra lo que cubre mi póliza.", f: "La tarjeta es el comprobante de seguro. Los documentos de la póliza describen las coberturas, los límites y las exclusiones." },
      ],
      notCovered: [],
      who: [],
      factors: [],
      faq: [
        { q: "¿Puedo tener mis tarjetas en el celular?", a: "Muchas aseguradoras ofrecen la tarjeta digital en su aplicación o sitio web. También podemos enviarle una copia por WhatsApp o correo. Si la tarjeta digital se acepta depende de quién la pide y de las reglas de su estado." },
        { q: "¿Cuándo necesito tarjetas nuevas?", a: "Normalmente después de una renovación, cuando agrega o cambia un vehículo, o cuando cambia la póliza. Pídalas cuando quiera." },
        { q: "¿Quién puede pedir las tarjetas?", a: "El asegurado (named insured) o alguien autorizado en la póliza." },
      ],
      service: {
        note: "Las tarjetas muestran la póliza como estaba el día en que se emitieron. Después de una renovación o de cambiar de vehículo, pida tarjetas nuevas.",
        howto: [
          { t: "Envíe la solicitud", d: "Escríbanos con su nombre y el vehículo o la póliza de las tarjetas." },
          { t: "Revisamos la póliza", d: "Confirmamos las fechas de vigencia y los vehículos incluidos." },
          { t: "Reciba las tarjetas", d: "Se las enviamos en la misma conversación, listas para guardar en el celular o imprimir." },
        ],
        ready: [
          "Su nombre como aparece en la póliza",
          "Número de póliza, si lo tiene",
          "Para qué vehículos necesita las tarjetas",
          "A dónde enviarlas",
        ],
        turnaround: "El tiempo depende de la solicitud. Las tarjetas para un vehículo nuevo pueden tardar más cuando primero hay que cambiar la póliza.",
      },
    },
  },
};

export default idCards;
