// Claims help service page. DRAFT: content written for site v2 under the content rules (the design
// package has no content for this page). Needs licensed-agent review (English) and Gabriel's native
// review (Portuguese, Spanish) before the owner approves.
// Layout: the COI service template with a light hero and no photo (DECISIONS-v2 C). No explorer.
// No quote button: the primary action opens WhatsApp with a claims message (a27.wa.claims). No form.
// Rules applied: the carrier decides claims; no promised timing; no invented numbers.

import type { LandingContent } from "./types";

const claimsHelp: LandingContent = {
  id: "claims-help",
  status: "draft",
  updated: "2026-11-25",
  related: ["id-cards", "policy-changes", "coi"],
  waKey: "claims",
  copy: {
    en: {
      seo: {
        title: "Claims Help | Ativa Insurance",
        description: "How to report an insurance claim, what to have ready, and how Ativa helps you reach your carrier. WhatsApp, phone or e-mail. No form to fill in.",
      },
      h1: "Claims help",
      sub: "Had a loss? Tell us what happened, and we help you report it to your carrier and understand the next steps.",
      cta: "Get claims help",
      quickQ: "How do I file an insurance claim?",
      quick: "A claim is a request to your insurance carrier to pay for a covered loss. You report it to the carrier, usually by phone, app or website, and the carrier assigns an adjuster who reviews it under your policy. As your agency, we help you report it and understand what happens next. The carrier decides the claim.",
      scenarios: [],
      myths: [
        { m: "My agent decides whether my claim is paid.", f: "The carrier reviews and decides claims under the policy terms. We help you report the claim and follow up, but we don't make the decision." },
        { m: "I should wait until repairs are done to report it.", f: "Most policies ask you to report a loss promptly and to take reasonable steps to prevent more damage. Talk to us or your carrier before major repairs." },
      ],
      notCovered: [],
      who: [],
      factors: [],
      faq: [
        { q: "Can I report a claim directly to my carrier?", a: "Yes. Most carriers take claims by phone, app or website, and the contact is usually on your policy documents or ID card. You can also message us and we help you start it." },
        { q: "What is a deductible?", a: "The amount you pay toward a covered loss before the policy pays. It's listed on your policy and can differ by coverage." },
        { q: "Will filing a claim affect my premium?", a: "It can. Carriers consider claims history when they price a policy, and each carrier treats it differently. We can talk it through before you file." },
      ],
      service: {
        note: "The carrier, not the agency, decides whether a loss is covered and what it pays. If anyone is hurt or in danger, call 911 first.",
        howto: [
          { t: "Make sure everyone is safe", d: "Get help for anyone who is hurt and, if it's safe, take steps to prevent further damage." },
          { t: "Tell us what happened", d: "Message or call us with your name, your policy and a short description. Photos help." },
          { t: "Report it to the carrier", d: "We help you report the claim to your carrier or give you its claims contact. An adjuster follows up." },
        ],
        ready: [
          "Your name and policy number, if you have it",
          "Date, time and place of the loss",
          "A short description of what happened",
          "Photos or video of the damage",
          "Police or incident report number, if there is one",
          "Names and contact details of others involved",
        ],
        turnaround: "Timing depends on the carrier and the claim. Policies usually ask that losses be reported promptly; yours says how.",
      },
    },
    pt: {
      seo: {
        title: "Ajuda com sinistros | Ativa Insurance",
        description: "Como comunicar um sinistro (claim), o que ter em mãos e como a Ativa ajuda você a falar com a seguradora. WhatsApp, telefone ou e-mail. Sem formulário.",
      },
      h1: "Ajuda com sinistros",
      sub: "Aconteceu um sinistro? Conte o que houve, e ajudamos você a comunicar à seguradora e a entender os próximos passos.",
      cta: "Pedir ajuda com sinistro",
      quickQ: "Como abrir um sinistro (claim)?",
      quick: "Um sinistro (claim) é o pedido para que a seguradora pague uma perda coberta. Você comunica à seguradora, normalmente por telefone, aplicativo ou site, e ela designa um regulador (adjuster) que analisa o caso conforme a apólice. Como sua agência, ajudamos você a comunicar e a entender o que acontece depois. Quem decide o sinistro é a seguradora.",
      scenarios: [],
      myths: [
        { m: "O meu agente decide se o sinistro será pago.", f: "A seguradora analisa e decide os sinistros conforme os termos da apólice. Ajudamos você a comunicar e a acompanhar, mas a decisão não é nossa." },
        { m: "Devo esperar o conserto terminar para comunicar.", f: "A maioria das apólices pede que a perda seja comunicada sem demora e que você tome medidas razoáveis para evitar mais danos. Fale com a gente ou com a seguradora antes de grandes reparos." },
      ],
      notCovered: [],
      who: [],
      factors: [],
      faq: [
        { q: "Posso comunicar o sinistro direto à seguradora?", a: "Sim. A maioria das seguradoras recebe sinistros por telefone, aplicativo ou site, e o contato costuma estar nos documentos da apólice ou no cartão de seguro (ID card). Você também pode mandar mensagem para nós, e ajudamos a abrir." },
        { q: "O que é franquia (deductible)?", a: "O valor que você paga em uma perda coberta antes de a apólice pagar. Ele consta na apólice e pode ser diferente para cada cobertura." },
        { q: "Abrir um sinistro aumenta o prêmio?", a: "Pode aumentar. As seguradoras consideram o histórico de sinistros ao calcular a apólice, e cada uma trata isso de um jeito. Podemos conversar antes de você abrir." },
      ],
      service: {
        note: "Quem decide se a perda está coberta e quanto será pago é a seguradora, não a agência. Se alguém estiver ferido ou em perigo, ligue primeiro para o 911.",
        howto: [
          { t: "Garanta que todos estão seguros", d: "Busque ajuda para quem se machucou e, se for seguro, tome medidas para evitar mais danos." },
          { t: "Conte o que aconteceu", d: "Mande mensagem ou ligue com seu nome, sua apólice e uma breve descrição. Fotos ajudam." },
          { t: "Comunique à seguradora", d: "Ajudamos você a comunicar o sinistro à seguradora ou passamos o contato de sinistros dela. Um regulador (adjuster) entra em contato." },
        ],
        ready: [
          "Seu nome e número da apólice, se tiver",
          "Data, hora e local da perda",
          "Uma breve descrição do que aconteceu",
          "Fotos ou vídeo dos danos",
          "Número do boletim de ocorrência, se houver",
          "Nomes e contatos de outras pessoas envolvidas",
        ],
        turnaround: "O prazo depende da seguradora e do sinistro. As apólices costumam pedir que a perda seja comunicada sem demora; a sua diz como.",
      },
    },
    es: {
      seo: {
        title: "Ayuda con reclamos | Ativa Insurance",
        description: "Cómo reportar un reclamo (claim), qué tener a mano y cómo Ativa le ayuda a comunicarse con su aseguradora. WhatsApp, teléfono o correo. Sin formulario.",
      },
      h1: "Ayuda con reclamos",
      sub: "¿Tuvo una pérdida? Cuéntenos qué pasó, y le ayudamos a reportarla a su aseguradora y a entender los próximos pasos.",
      cta: "Pedir ayuda con un reclamo",
      quickQ: "¿Cómo presento un reclamo (claim)?",
      quick: "Un reclamo (claim) es la solicitud para que su aseguradora pague una pérdida cubierta. Usted lo reporta a la aseguradora, normalmente por teléfono, aplicación o sitio web, y ella asigna un ajustador (adjuster) que lo revisa según su póliza. Como su agencia, le ayudamos a reportarlo y a entender qué sigue. La aseguradora decide el reclamo.",
      scenarios: [],
      myths: [
        { m: "Mi agente decide si mi reclamo se paga.", f: "La aseguradora revisa y decide los reclamos según los términos de la póliza. Le ayudamos a reportarlo y a darle seguimiento, pero la decisión no es nuestra." },
        { m: "Debo esperar a terminar las reparaciones para reportarlo.", f: "La mayoría de las pólizas pide reportar la pérdida sin demora y tomar medidas razonables para evitar más daños. Hable con nosotros o con su aseguradora antes de reparaciones grandes." },
      ],
      notCovered: [],
      who: [],
      factors: [],
      faq: [
        { q: "¿Puedo reportar un reclamo directamente a mi aseguradora?", a: "Sí. La mayoría de las aseguradoras recibe reclamos por teléfono, aplicación o sitio web, y el contacto suele estar en los documentos de la póliza o en la tarjeta de seguro (ID card). También puede escribirnos y le ayudamos a iniciarlo." },
        { q: "¿Qué es el deducible (deductible)?", a: "El monto que usted paga en una pérdida cubierta antes de que pague la póliza. Aparece en su póliza y puede variar según la cobertura." },
        { q: "¿Presentar un reclamo afecta mi prima?", a: "Puede afectarla. Las aseguradoras consideran el historial de reclamos al calcular la póliza, y cada una lo trata de forma distinta. Podemos conversarlo antes de que lo presente." },
      ],
      service: {
        note: "La aseguradora, no la agencia, decide si una pérdida está cubierta y cuánto paga. Si alguien está herido o en peligro, llame primero al 911.",
        howto: [
          { t: "Asegúrese de que todos estén a salvo", d: "Busque ayuda para quien esté herido y, si es seguro, tome medidas para evitar más daños." },
          { t: "Cuéntenos qué pasó", d: "Escríbanos o llámenos con su nombre, su póliza y una breve descripción. Las fotos ayudan." },
          { t: "Repórtelo a la aseguradora", d: "Le ayudamos a reportar el reclamo a su aseguradora o le damos su contacto de reclamos. Un ajustador (adjuster) le da seguimiento." },
        ],
        ready: [
          "Su nombre y número de póliza, si lo tiene",
          "Fecha, hora y lugar de la pérdida",
          "Una breve descripción de lo que pasó",
          "Fotos o video de los daños",
          "Número del reporte policial o de incidente, si lo hay",
          "Nombres y datos de contacto de otras personas involucradas",
        ],
        turnaround: "El tiempo depende de la aseguradora y del reclamo. Las pólizas suelen pedir que las pérdidas se reporten sin demora; la suya indica cómo.",
      },
    },
  },
};

export default claimsHelp;
