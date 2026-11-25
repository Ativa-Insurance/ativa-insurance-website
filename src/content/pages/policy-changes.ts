// Policy changes service page. DRAFT: content written for site v2 under the content rules (the design
// package has no content for this page). Needs licensed-agent review (English) and Gabriel's native
// review (Portuguese, Spanish) before the owner approves.
// Layout: the COI service template with a light hero and no photo (DECISIONS-v2 C). No explorer.
// No quote button: the primary action opens WhatsApp with the existing policy-change message
// (a27.wa.changes). No form. The carrier confirms every change; no promised timing.

import type { LandingContent } from "./types";

const policyChanges: LandingContent = {
  id: "policy-changes",
  status: "draft",
  updated: "2026-11-25",
  related: ["claims-help", "id-cards", "coi"],
  waKey: "changes",
  copy: {
    en: {
      seo: {
        title: "Policy Changes | Ativa Insurance",
        description: "How to change your insurance policy: add or remove a vehicle or driver, update an address or adjust coverage. Request it by WhatsApp, phone or e-mail.",
      },
      h1: "Policy changes",
      sub: "Adding a vehicle, a driver or a new address? Tell us what changed, and we request it from your carrier.",
      cta: "Request a policy change",
      quickQ: "How do I change my insurance policy?",
      quick: "A policy change, also called an endorsement, updates your policy during its term: adding or removing a vehicle or driver, changing an address, adjusting coverage or adding an additional insured. You tell us what changed, we request it from the carrier, and the carrier reviews it and issues updated documents. A change can raise or lower the premium.",
      scenarios: [],
      myths: [
        { m: "The change is in effect as soon as I send the message.", f: "A change takes effect when the carrier confirms it. Until then, the policy stays as it was." },
        { m: "A driver who rarely uses the car doesn't need to be listed.", f: "Carriers generally expect household drivers to be listed. Adding or excluding a driver can change both the premium and the coverage." },
      ],
      notCovered: [],
      who: [],
      factors: [],
      faq: [
        { q: "Will a change affect my premium?", a: "It can. Adding a vehicle or driver, or changing limits, usually changes the premium. The carrier calculates the new amount." },
        { q: "Can a change start on a past date?", a: "Carriers set their own rules for effective dates. Tell us as soon as something changes." },
        { q: "What is an endorsement?", a: "A written change to a policy that adds, removes or modifies coverage. Once issued, it becomes part of the policy." },
      ],
      service: {
        note: "A change takes effect only when the carrier confirms it. Until then, your policy stays as it was.",
        howto: [
          { t: "Tell us what changed", d: "Message or call us with the change and the date it should start." },
          { t: "We request it from the carrier", d: "We send the request and tell you if the carrier needs more information." },
          { t: "Receive the confirmation", d: "Once the carrier confirms, we send the updated documents, such as new ID cards or a revised declarations page." },
        ],
        ready: [
          "Your name and policy number",
          "What should change and from what date",
          "For a vehicle: year, make, model and VIN",
          "For a driver: name, date of birth and license number",
          "For an address: the new address",
        ],
        turnaround: "Timing depends on the carrier and the type of change. Some changes are confirmed quickly; others need the carrier's review first.",
      },
    },
    pt: {
      seo: {
        title: "Alterações na apólice | Ativa Insurance",
        description: "Como alterar a sua apólice: incluir ou excluir veículo ou motorista, atualizar o endereço ou ajustar coberturas. Peça por WhatsApp, telefone ou e-mail.",
      },
      h1: "Alterações na apólice",
      sub: "Vai incluir um veículo, um motorista ou mudou de endereço? Conte o que mudou, e pedimos a alteração à sua seguradora.",
      cta: "Pedir uma alteração",
      quickQ: "Como alterar a minha apólice?",
      quick: "Uma alteração na apólice, também chamada de endosso (endorsement), atualiza a apólice durante a vigência: incluir ou excluir um veículo ou motorista, mudar o endereço, ajustar coberturas ou incluir um additional insured. Você conta o que mudou, pedimos à seguradora, e ela analisa e emite os documentos atualizados. Uma alteração pode aumentar ou reduzir o prêmio.",
      scenarios: [],
      myths: [
        { m: "A alteração vale assim que eu mando a mensagem.", f: "A alteração passa a valer quando a seguradora confirma. Até lá, a apólice continua como estava." },
        { m: "Quem quase não dirige o carro não precisa constar.", f: "As seguradoras costumam exigir que os motoristas da casa constem na apólice. Incluir ou excluir um motorista pode mudar o prêmio e a cobertura." },
      ],
      notCovered: [],
      who: [],
      factors: [],
      faq: [
        { q: "Uma alteração muda o prêmio?", a: "Pode mudar. Incluir um veículo ou motorista, ou alterar limites, normalmente muda o prêmio. A seguradora calcula o novo valor." },
        { q: "Uma alteração pode valer a partir de uma data passada?", a: "Cada seguradora tem regras próprias para a data de início. Avise a gente assim que algo mudar." },
        { q: "O que é endosso (endorsement)?", a: "Uma alteração por escrito que inclui, exclui ou modifica coberturas. Depois de emitido, passa a fazer parte da apólice." },
      ],
      service: {
        note: "A alteração só passa a valer quando a seguradora confirma. Até lá, a sua apólice continua como estava.",
        howto: [
          { t: "Conte o que mudou", d: "Mande mensagem ou ligue com a alteração e a data em que ela deve começar." },
          { t: "Pedimos à seguradora", d: "Enviamos o pedido e avisamos se a seguradora precisar de mais informações." },
          { t: "Receba a confirmação", d: "Quando a seguradora confirmar, enviamos os documentos atualizados, como novos cartões de seguro ou a declarations page revisada." },
        ],
        ready: [
          "Seu nome e número da apólice",
          "O que deve mudar e a partir de qual data",
          "Para veículo: ano, marca, modelo e VIN",
          "Para motorista: nome, data de nascimento e número da habilitação",
          "Para endereço: o endereço novo",
        ],
        turnaround: "O prazo depende da seguradora e do tipo de alteração. Algumas são confirmadas rapidamente; outras precisam da análise da seguradora antes.",
      },
    },
    es: {
      seo: {
        title: "Cambios en la póliza | Ativa Insurance",
        description: "Cómo cambiar su póliza: agregar o quitar un vehículo o conductor, actualizar la dirección o ajustar coberturas. Pídalo por WhatsApp, teléfono o correo.",
      },
      h1: "Cambios en la póliza",
      sub: "¿Va a agregar un vehículo, un conductor o cambió de dirección? Cuéntenos qué cambió, y lo solicitamos a su aseguradora.",
      cta: "Solicitar un cambio",
      quickQ: "¿Cómo cambio mi póliza?",
      quick: "Un cambio en la póliza, también llamado endoso (endorsement), actualiza su póliza durante la vigencia: agregar o quitar un vehículo o conductor, cambiar la dirección, ajustar coberturas o agregar un asegurado adicional. Usted nos cuenta qué cambió, lo solicitamos a la aseguradora, y ella lo revisa y emite los documentos actualizados. Un cambio puede subir o bajar la prima.",
      scenarios: [],
      myths: [
        { m: "El cambio aplica en cuanto envío el mensaje.", f: "El cambio aplica cuando la aseguradora lo confirma. Hasta entonces, la póliza sigue como estaba." },
        { m: "Un conductor que casi no usa el auto no necesita estar en la póliza.", f: "Las aseguradoras suelen exigir que los conductores del hogar estén en la póliza. Agregar o excluir a un conductor puede cambiar la prima y la cobertura." },
      ],
      notCovered: [],
      who: [],
      factors: [],
      faq: [
        { q: "¿Un cambio afecta mi prima?", a: "Puede afectarla. Agregar un vehículo o conductor, o cambiar límites, normalmente cambia la prima. La aseguradora calcula el nuevo monto." },
        { q: "¿Un cambio puede aplicar desde una fecha pasada?", a: "Cada aseguradora tiene sus propias reglas para la fecha de inicio. Avísenos en cuanto algo cambie." },
        { q: "¿Qué es un endoso (endorsement)?", a: "Un cambio por escrito que agrega, quita o modifica coberturas. Una vez emitido, forma parte de la póliza." },
      ],
      service: {
        note: "Un cambio aplica solo cuando la aseguradora lo confirma. Hasta entonces, su póliza sigue como estaba.",
        howto: [
          { t: "Cuéntenos qué cambió", d: "Escríbanos o llámenos con el cambio y la fecha en que debe empezar." },
          { t: "Lo solicitamos a la aseguradora", d: "Enviamos la solicitud y le avisamos si la aseguradora necesita más información." },
          { t: "Reciba la confirmación", d: "Cuando la aseguradora lo confirme, le enviamos los documentos actualizados, como tarjetas de seguro nuevas o la declarations page revisada." },
        ],
        ready: [
          "Su nombre y número de póliza",
          "Qué debe cambiar y desde qué fecha",
          "Para un vehículo: año, marca, modelo y VIN",
          "Para un conductor: nombre, fecha de nacimiento y número de licencia",
          "Para una dirección: la dirección nueva",
        ],
        turnaround: "El tiempo depende de la aseguradora y del tipo de cambio. Algunos se confirman rápido; otros necesitan primero la revisión de la aseguradora.",
      },
    },
  },
};

export default policyChanges;
