// Auto insurance landing page. DRAFT: needs licensed-agent review (English)
// and Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Source copy: design/claude-design/site-v2/source (pages.js ATIVA_LANDING.auto,
// lib/ativa-landing.js products.auto, i18n/auto.js, i18n/landing.pt.js / .es.js).
// Changes from the design copy, under the content rules:
// - Florida statements carry official sources (FLHSMV, Florida Statutes).
// - "Florida is a no-fault state" is written as what the source says: PIP pays no matter who caused the crash.
// - Uninsured motorist: the statute includes it with bodily injury liability unless rejected in writing.
// - The SR-22 / FR-44 answer is generalized: the FR-44 name, the Virginia mention and the SR-22 comparison
//   could not be matched to an official source; the higher post-DUI limits are sourced (Fla. Stat. 324.023).
// - PT/ES: US policy terms keep the English term beside the translation.

import type { LandingContent, Source } from "./types";

const FLHSMV: Source = { label: "FLHSMV, Insurance requirements", href: "https://www.flhsmv.gov/insurance/" };
const S324022: Source = { label: "Fla. Stat. 324.022", href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0324/Sections/0324.022.html" };
const S324023: Source = { label: "Fla. Stat. 324.023", href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0324/Sections/0324.023.html" };
const S627736: Source = { label: "Fla. Stat. 627.736", href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.736.html" };
const S627727: Source = { label: "Fla. Stat. 627.727", href: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.727.html" };

const auto: LandingContent = {
  id: "auto",
  status: "draft",
  updated: "2026-11-25",
  scene: "auto",
  hero: { file: "auto-1600.webp", w: 1600, h: 533, layout: "full", side: "left", mdH: 330, pos: { lg: "50% 50%", md: "50% 50%", sm: "79% 50%" } },
  related: ["home", "renters", "condo", "flood", "pet"],
  copy: {
    en: {
      seo: {
        title: "Auto Insurance, Explained | Ativa Insurance",
        description: "How an auto policy fits together: liability, PIP, uninsured motorist, collision and comprehensive. An independent agency compares carriers for you.",
      },
      h1: "Auto insurance",
      sub: "Coverage for the cars your household drives every day. Tell us about your drivers and vehicles, and a licensed agent compares options for you.",
      cta: "Get My Auto Quote",
      alt: "Silver SUV driving a lakeside road at sunset",
      quickQ: "What is auto insurance?",
      quick: "Auto insurance is a set of coverages in one policy. Liability pays for injuries and damage you cause to others. Injury coverages help with medical bills for you and your passengers. Collision and comprehensive repair or replace your own car, minus your deductible. Required coverages differ by state.",
      protects: [
        { icon: "users", t: "Other people", d: "Liability pays for injuries and damage you cause to others, up to your limits.", items: ["Bodily injury liability", "Property damage liability"] },
        { icon: "umbrella", t: "You and your passengers", d: "Injury coverages pay medical bills for the people in your car.", items: ["Personal injury protection (PIP)", "Uninsured motorist"] },
        { icon: "auto", t: "Your car", d: "Physical damage coverages repair or replace your own vehicle, minus your deductible.", items: ["Collision", "Comprehensive"] },
      ],
      explorer: {
        title: "How the coverage fits together",
        lead: "Each layer of the canopy is one coverage. Select a layer to see what it does and who it protects.",
        legend: "Deductible: what you pay first on a physical damage claim. Limit: the most a coverage pays. Florida example. Rules differ in each of the 10 states we serve.",
        items: [
          { t: "Bodily injury liability", d: "Pays for injuries you cause to other people in a crash, up to your limit.", rows: [{ k: "Protects", v: "Other people" }, { k: "In Florida", v: "Not part of Florida's basic requirement for most drivers." }], sources: [FLHSMV] },
          { t: "Property damage liability", d: "Pays for damage you cause to someone else's car or property, up to your limit.", rows: [{ k: "Protects", v: "Other people's property" }, { k: "In Florida", v: "Required. The minimum is $10,000." }], sources: [FLHSMV, S324022] },
          { t: "Personal injury protection", d: "Pays a share of medical bills and lost income after a crash, whoever caused it.", rows: [{ k: "Protects", v: "You and your passengers" }, { k: "In Florida", v: "Required. The minimum is $10,000, and it pays no matter who caused the crash." }], sources: [FLHSMV, S627736] },
          { t: "Uninsured motorist", d: "Pays for your injuries when the driver at fault has no insurance or not enough.", rows: [{ k: "Protects", v: "You and your passengers" }, { k: "In Florida", v: "Included when you carry bodily injury liability, unless you reject it in writing." }], sources: [S627727] },
          { t: "Collision", d: "Repairs or replaces your car after it hits a vehicle or an object, minus your deductible.", rows: [{ k: "Protects", v: "Your car" }, { k: "In Florida", v: "Optional by law. Lenders and lessors usually require it." }], sources: [FLHSMV] },
          { t: "Comprehensive", d: "Pays for theft, fire, storms, flood, falling objects or hitting an animal, minus your deductible.", rows: [{ k: "Protects", v: "Your car" }, { k: "In Florida", v: "Optional by law. Lenders and lessors usually require it." }], sources: [FLHSMV] },
        ],
      },
      scenarios: [
        { t: "A palm frond cracks your windshield during a summer storm.", parts: ["Comprehensive"], d: "Storm and falling-object damage to your own car falls under comprehensive." },
        { t: "A driver with no insurance hits you at a red light.", parts: ["PIP", "Uninsured motorist", "Collision"], d: "In Florida, PIP pays first for your own injuries. Uninsured motorist can pay beyond that if you carry it. Collision repairs your car." },
        { t: "You back into a concrete pillar in a parking garage.", parts: ["Collision", "Property damage liability"], d: "Collision covers your car. Property damage liability covers the garage owner's property." },
        { t: "Hurricane floodwater reaches your parked car.", parts: ["Comprehensive"], d: "Flood damage to a vehicle falls under the auto policy's comprehensive coverage, not under a home flood policy." },
      ],
      myths: [
        { m: "Full coverage means everything is covered.", f: "\"Full coverage\" isn't a policy term. It usually means liability plus collision and comprehensive, each with its own limits, deductibles and exclusions." },
        { m: "My insurance follows me, not my car.", f: "In most cases the policy on the vehicle responds first, even when someone else is driving it with your permission." },
        { m: "The state minimum is enough.", f: "Minimum limits satisfy the law, but a serious crash can cost more than the minimum. Amounts above your limit can fall on you." },
      ],
      notCovered: ["Normal wear and mechanical breakdown", "Business use such as delivery or rideshare, unless added", "Drivers excluded from the policy", "Personal belongings stolen from the car"],
      who: [
        { t: "Anyone who owns or leases a car", d: "Every state we serve sets its own requirement to register and drive a vehicle." },
        { t: "Households with more than one driver", d: "Carriers generally expect every licensed driver in the home to be listed." },
        { t: "Drivers with a loan or lease", d: "Lenders and lessors usually require collision and comprehensive." },
      ],
      factors: ["Your state and ZIP code", "Driving record and prior claims", "The vehicle's year, make and model", "Who drives and how many miles", "Limits and deductibles you choose", "Prior insurance history"],
      faq: [
        { q: "What does Florida require?", a: "Most Florida drivers must carry personal injury protection (PIP) and property damage liability, each with at least $10,000 of coverage. The other states we serve have different requirements.", sources: [FLHSMV, S324022, S627736] },
        { q: "What's the difference between collision and comprehensive?", a: "Collision covers your car after it hits another vehicle or an object. Comprehensive covers most other damage, like theft, storms, flood or a falling branch." },
        { q: "Does my policy cover me in another state?", a: "Most auto policies include an out-of-state provision that applies when you drive in other U.S. states. Your policy documents describe exactly how it works." },
        { q: "What is an SR-22?", a: "It's a filing your carrier sends to the state to certify that you carry the required liability insurance, usually after certain violations. After a DUI conviction, Florida law requires higher liability limits than usual. A licensed agent can tell you what applies in your state.", sources: [FLHSMV, S324023] },
        { q: "Can I add a driver or a car later?", a: "Yes. Send a service request on WhatsApp and we'll make the change with your carrier. Changes can affect your premium." },
        { q: "Do you compare more than one carrier for auto?", a: "Yes. We check the carriers we're appointed with that write auto coverage in your state and show you the options side by side." },
      ],
    },
    pt: {
      seo: {
        title: "Seguro de automóvel, explicado | Ativa Insurance",
        description: "Como as coberturas de uma apólice de auto se encaixam: liability, PIP, uninsured motorist, collision e comprehensive. Uma agência independente compara.",
      },
      h1: "Seguro de automóvel",
      sub: "Proteção para os carros que a sua família dirige todos os dias. Conte quem dirige e quais são os veículos, e um agente licenciado compara as opções para você.",
      cta: "Fazer minha cotação de auto",
      alt: "SUV prata em uma estrada à beira de um lago ao pôr do sol",
      quickQ: "O que é seguro de automóvel?",
      quick: "O seguro de auto reúne várias coberturas em uma única apólice. A responsabilidade civil paga lesões e danos que você causa a terceiros. As coberturas de lesões ajudam com as despesas médicas suas e dos seus passageiros. Collision e comprehensive consertam ou repõem o seu carro, descontada a franquia. As coberturas obrigatórias mudam de estado para estado.",
      protects: [
        { icon: "users", t: "Outras pessoas", d: "A responsabilidade civil paga lesões e danos que você causa a outros, até os seus limites.", items: ["Lesões corporais (bodily injury liability)", "Danos materiais (property damage liability)"] },
        { icon: "umbrella", t: "Você e seus passageiros", d: "As coberturas de lesões pagam as despesas médicas de quem está no seu carro.", items: ["Proteção contra lesões pessoais (PIP)", "Motorista sem seguro (uninsured motorist)"] },
        { icon: "auto", t: "O seu carro", d: "As coberturas de danos físicos consertam ou repõem o seu veículo, menos a franquia.", items: ["Colisão (collision)", "Compreensiva (comprehensive)"] },
      ],
      explorer: {
        title: "Como as coberturas se encaixam",
        lead: "Cada camada do arco é uma cobertura. Selecione uma camada para ver o que ela faz e quem ela protege.",
        legend: "Franquia (deductible): o que você paga primeiro num sinistro de danos físicos. Limite (limit): o máximo que uma cobertura paga. Exemplo da Flórida. As regras mudam em cada um dos 10 estados que atendemos.",
        items: [
          { t: "Responsabilidade por lesões corporais (bodily injury liability)", d: "Paga as lesões que você causa a outras pessoas num acidente, até o seu limite.", rows: [{ k: "Protege", v: "Outras pessoas" }, { k: "Na Flórida", v: "Não faz parte da exigência básica da Flórida para a maioria dos motoristas." }], sources: [FLHSMV] },
          { t: "Responsabilidade por danos materiais (property damage liability)", d: "Paga os danos que você causa ao carro ou aos bens de outra pessoa, até o seu limite.", rows: [{ k: "Protege", v: "Bens de outras pessoas" }, { k: "Na Flórida", v: "Obrigatória. O mínimo é US$ 10.000." }], sources: [FLHSMV, S324022] },
          { t: "Proteção contra lesões pessoais (PIP)", d: "Paga parte das despesas médicas e da renda perdida depois de um acidente, seja quem for o culpado.", rows: [{ k: "Protege", v: "Você e seus passageiros" }, { k: "Na Flórida", v: "Obrigatória. O mínimo é US$ 10.000, e ela paga seja quem for o culpado pelo acidente." }], sources: [FLHSMV, S627736] },
          { t: "Motorista sem seguro (uninsured motorist)", d: "Paga as suas lesões quando o motorista culpado não tem seguro ou tem pouco.", rows: [{ k: "Protege", v: "Você e seus passageiros" }, { k: "Na Flórida", v: "Vem incluída quando você tem responsabilidade por lesões corporais, a menos que você recuse por escrito." }], sources: [S627727] },
          { t: "Colisão (collision)", d: "Conserta ou repõe o seu carro depois de bater em um veículo ou objeto, menos a franquia.", rows: [{ k: "Protege", v: "O seu carro" }, { k: "Na Flórida", v: "Opcional por lei. Financeiras e locadoras costumam exigir." }], sources: [FLHSMV] },
          { t: "Compreensiva (comprehensive)", d: "Paga roubo, incêndio, tempestades, enchente, queda de objetos ou atropelar um animal, menos a franquia.", rows: [{ k: "Protege", v: "O seu carro" }, { k: "Na Flórida", v: "Opcional por lei. Financeiras e locadoras costumam exigir." }], sources: [FLHSMV] },
        ],
      },
      scenarios: [
        { t: "Uma folha de palmeira trinca o seu para-brisa numa tempestade de verão.", parts: ["Compreensiva (comprehensive)"], d: "Danos por tempestade e queda de objetos no seu carro entram na cobertura compreensiva." },
        { t: "Um motorista sem seguro bate no seu carro num sinal vermelho.", parts: ["PIP", "Motorista sem seguro (uninsured motorist)", "Colisão (collision)"], d: "Na Flórida, o PIP paga primeiro pelas suas lesões. A cobertura de motorista sem seguro pode pagar além disso, se você tiver. A colisão conserta o seu carro." },
        { t: "Você dá ré e bate numa coluna de concreto no estacionamento.", parts: ["Colisão (collision)", "Danos materiais (property damage liability)"], d: "A colisão cobre o seu carro. A responsabilidade por danos materiais cobre o patrimônio do dono do estacionamento." },
        { t: "A água de uma enchente de furacão chega ao seu carro estacionado.", parts: ["Compreensiva (comprehensive)"], d: "Danos de enchente em veículos entram na cobertura compreensiva da apólice de auto, não no seguro de enchente da casa." },
      ],
      myths: [
        { m: "Cobertura completa (full coverage) cobre tudo.", f: "“Full coverage” não é um termo da apólice. Em geral significa responsabilidade civil mais collision e comprehensive, cada uma com seus limites, franquias e exclusões." },
        { m: "O seguro acompanha o motorista, não o carro.", f: "Na maioria dos casos, a apólice do veículo responde primeiro, mesmo quando outra pessoa dirige com a sua permissão." },
        { m: "O mínimo exigido pelo estado é suficiente.", f: "Os limites mínimos atendem à lei, mas um acidente grave pode custar mais do que o mínimo. O que passar do seu limite pode ficar por sua conta." },
      ],
      notCovered: ["Desgaste normal e defeitos mecânicos", "Uso comercial, como entregas ou aplicativos de transporte, salvo se incluído", "Motoristas excluídos da apólice", "Objetos pessoais furtados de dentro do carro"],
      who: [
        { t: "Quem tem carro próprio ou em leasing", d: "Cada estado que atendemos define o que é exigido para registrar e dirigir um veículo." },
        { t: "Casas com mais de um motorista", d: "As seguradoras costumam exigir que todos os motoristas habilitados da casa constem na apólice." },
        { t: "Quem tem financiamento ou leasing", d: "Bancos e empresas de leasing normalmente exigem collision e comprehensive." },
      ],
      factors: ["Seu estado e CEP (ZIP code)", "Histórico de direção e sinistros anteriores", "Ano, marca e modelo do veículo", "Quem dirige e quantas milhas roda", "Limites e franquias escolhidos", "Histórico de seguro anterior"],
      faq: [
        { q: "O que a Flórida exige?", a: "A maioria dos motoristas na Flórida precisa ter proteção contra lesões pessoais (PIP) e responsabilidade por danos materiais (property damage liability), cada uma com pelo menos US$ 10.000 de cobertura. Os outros estados que atendemos têm exigências diferentes.", sources: [FLHSMV, S324022, S627736] },
        { q: "Qual a diferença entre colisão (collision) e compreensiva (comprehensive)?", a: "A colisão cobre o seu carro depois de bater em outro veículo ou objeto. A compreensiva cobre a maior parte dos outros danos, como roubo, tempestades, enchente ou um galho que cai." },
        { q: "Minha apólice me cobre em outro estado?", a: "A maioria das apólices de auto tem uma cláusula para outros estados, que vale quando você dirige em outros estados americanos. Os documentos da sua apólice explicam exatamente como funciona." },
        { q: "O que é um SR-22?", a: "É um registro que a seguradora envia ao estado para certificar que você tem o seguro de responsabilidade civil exigido, normalmente depois de certas infrações. Depois de uma condenação por dirigir alcoolizado (DUI), a lei da Flórida exige limites de responsabilidade maiores que o normal. Um agente licenciado explica o que vale no seu estado.", sources: [FLHSMV, S324023] },
        { q: "Posso incluir um motorista ou um carro depois?", a: "Sim. Envie um pedido pelo WhatsApp e fazemos a alteração com a sua seguradora. Alterações podem mudar o prêmio." },
        { q: "Vocês comparam mais de uma seguradora para auto?", a: "Sim. Verificamos as seguradoras com que trabalhamos que oferecem seguro auto no seu estado e mostramos as opções lado a lado." },
      ],
    },
    es: {
      seo: {
        title: "Seguro de auto, explicado | Ativa Insurance",
        description: "Cómo encajan las coberturas de una póliza de auto: liability, PIP, uninsured motorist, collision y comprehensive. Una agencia independiente compara por usted.",
      },
      h1: "Seguro de auto",
      sub: "Cobertura para los autos que su familia maneja todos los días. Cuéntenos quién maneja y qué vehículos tiene, y un agente con licencia compara opciones para usted.",
      cta: "Cotizar mi auto",
      alt: "SUV plateada en una carretera junto a un lago al atardecer",
      quickQ: "¿Qué es el seguro de auto?",
      quick: "El seguro de auto reúne varias coberturas en una sola póliza. La responsabilidad civil paga las lesiones y los daños que usted causa a otras personas. Las coberturas de lesiones ayudan con los gastos médicos suyos y de sus pasajeros. Collision y comprehensive reparan o reemplazan su propio auto, menos el deducible. Las coberturas obligatorias cambian según el estado.",
      protects: [
        { icon: "users", t: "Otras personas", d: "La responsabilidad paga las lesiones y daños que usted causa a otros, hasta sus límites.", items: ["Lesiones corporales (bodily injury liability)", "Daños a la propiedad (property damage liability)"] },
        { icon: "umbrella", t: "Usted y sus pasajeros", d: "Las coberturas de lesiones pagan los gastos médicos de quienes van en su auto.", items: ["Protección contra lesiones personales (PIP)", "Conductor sin seguro (uninsured motorist)"] },
        { icon: "auto", t: "Su auto", d: "Las coberturas de daños físicos reparan o reemplazan su vehículo, menos su deducible.", items: ["Colisión (collision)", "Comprensiva (comprehensive)"] },
      ],
      explorer: {
        title: "Cómo encajan las coberturas",
        lead: "Cada capa del arco es una cobertura. Seleccione una capa para ver qué hace y a quién protege.",
        legend: "Deducible (deductible): lo que usted paga primero en un reclamo de daños físicos. Límite (limit): lo máximo que paga una cobertura. Ejemplo de Florida. Las reglas cambian en cada uno de los 10 estados que atendemos.",
        items: [
          { t: "Responsabilidad por lesiones corporales (bodily injury liability)", d: "Paga las lesiones que usted causa a otras personas en un choque, hasta su límite.", rows: [{ k: "Protege", v: "Otras personas" }, { k: "En Florida", v: "No forma parte del requisito básico de Florida para la mayoría de los conductores." }], sources: [FLHSMV] },
          { t: "Responsabilidad por daños a la propiedad (property damage liability)", d: "Paga los daños que usted causa al auto o a la propiedad de otra persona, hasta su límite.", rows: [{ k: "Protege", v: "Bienes de otras personas" }, { k: "En Florida", v: "Obligatoria. El mínimo es de US$10,000." }], sources: [FLHSMV, S324022] },
          { t: "Protección contra lesiones personales (PIP)", d: "Paga parte de los gastos médicos y del ingreso perdido después de un choque, sin importar quién lo causó.", rows: [{ k: "Protege", v: "Usted y sus pasajeros" }, { k: "En Florida", v: "Obligatoria. El mínimo es de US$10,000, y paga sin importar quién causó el choque." }], sources: [FLHSMV, S627736] },
          { t: "Conductor sin seguro (uninsured motorist)", d: "Paga sus lesiones cuando el conductor culpable no tiene seguro o no tiene suficiente.", rows: [{ k: "Protege", v: "Usted y sus pasajeros" }, { k: "En Florida", v: "Se incluye cuando usted tiene responsabilidad por lesiones corporales, salvo que la rechace por escrito." }], sources: [S627727] },
          { t: "Colisión (collision)", d: "Repara o reemplaza su auto después de chocar con un vehículo o un objeto, menos su deducible.", rows: [{ k: "Protege", v: "Su auto" }, { k: "En Florida", v: "Opcional por ley. Los prestamistas y arrendadores suelen exigirla." }], sources: [FLHSMV] },
          { t: "Comprensiva (comprehensive)", d: "Paga robo, incendio, tormentas, inundación, caída de objetos o golpear a un animal, menos su deducible.", rows: [{ k: "Protege", v: "Su auto" }, { k: "En Florida", v: "Opcional por ley. Los prestamistas y arrendadores suelen exigirla." }], sources: [FLHSMV] },
        ],
      },
      scenarios: [
        { t: "Una hoja de palmera agrieta su parabrisas durante una tormenta de verano.", parts: ["Comprensiva (comprehensive)"], d: "Los daños por tormenta y caída de objetos en su propio auto entran en la cobertura comprensiva." },
        { t: "Un conductor sin seguro le choca en un semáforo en rojo.", parts: ["PIP", "Conductor sin seguro (uninsured motorist)", "Colisión (collision)"], d: "En Florida, el PIP paga primero sus propias lesiones. La cobertura de conductor sin seguro puede pagar más allá, si la tiene. La colisión repara su auto." },
        { t: "Usted da reversa y golpea una columna de concreto en un estacionamiento.", parts: ["Colisión (collision)", "Daños a la propiedad (property damage liability)"], d: "La colisión cubre su auto. La responsabilidad por daños a la propiedad cubre los bienes del dueño del estacionamiento." },
        { t: "El agua de una inundación por huracán llega a su auto estacionado.", parts: ["Comprensiva (comprehensive)"], d: "Los daños por inundación en un vehículo entran en la cobertura comprensiva de la póliza de auto, no en la póliza de inundación de su casa." },
      ],
      myths: [
        { m: "Cobertura completa (full coverage) significa que todo está cubierto.", f: "“Full coverage” no es un término de la póliza. Por lo general significa responsabilidad civil más collision y comprehensive, cada una con sus límites, deducibles y exclusiones." },
        { m: "El seguro me sigue a mí, no a mi auto.", f: "En la mayoría de los casos responde primero la póliza del vehículo, incluso cuando otra persona lo maneja con su permiso." },
        { m: "El mínimo que exige el estado es suficiente.", f: "Los límites mínimos cumplen con la ley, pero un choque grave puede costar más que el mínimo. Lo que supere su límite puede quedar a su cargo." },
      ],
      notCovered: ["Desgaste normal y fallas mecánicas", "Uso comercial, como entregas o aplicaciones de transporte, salvo que se agregue", "Conductores excluidos de la póliza", "Objetos personales robados del auto"],
      who: [
        { t: "Quien tiene un auto propio o en leasing", d: "Cada estado donde trabajamos define lo que se exige para registrar y manejar un vehículo." },
        { t: "Hogares con más de un conductor", d: "Las aseguradoras suelen exigir que todos los conductores con licencia del hogar figuren en la póliza." },
        { t: "Conductores con préstamo o leasing", d: "Los bancos y las empresas de leasing normalmente exigen collision y comprehensive." },
      ],
      factors: ["Su estado y código postal", "Historial de manejo y reclamos anteriores", "Año, marca y modelo del vehículo", "Quién maneja y cuántas millas recorre", "Límites y deducibles que elija", "Historial de seguro anterior"],
      faq: [
        { q: "¿Qué exige Florida?", a: "La mayoría de los conductores en Florida debe tener protección contra lesiones personales (PIP) y responsabilidad por daños a la propiedad (property damage liability), cada una con al menos US$10,000 de cobertura. Los otros estados que atendemos tienen requisitos distintos.", sources: [FLHSMV, S324022, S627736] },
        { q: "¿Cuál es la diferencia entre colisión (collision) y comprensiva (comprehensive)?", a: "La colisión cubre su auto después de chocar con otro vehículo o un objeto. La comprensiva cubre la mayoría de los otros daños, como robo, tormentas, inundación o una rama que cae." },
        { q: "¿Mi póliza me cubre en otro estado?", a: "La mayoría de las pólizas de auto incluye una cláusula para otros estados, que aplica cuando maneja en otros estados de EE. UU. Los documentos de su póliza explican exactamente cómo funciona." },
        { q: "¿Qué es un SR-22?", a: "Es un registro que su aseguradora envía al estado para certificar que usted tiene el seguro de responsabilidad civil requerido, normalmente después de ciertas infracciones. Después de una condena por manejar bajo los efectos del alcohol (DUI), la ley de Florida exige límites de responsabilidad más altos de lo normal. Un agente con licencia le explica lo que aplica en su estado.", sources: [FLHSMV, S324023] },
        { q: "¿Puedo agregar un conductor o un auto después?", a: "Sí. Envíe una solicitud por WhatsApp y hacemos el cambio con su aseguradora. Los cambios pueden afectar su prima." },
        { q: "¿Comparan más de una aseguradora para auto?", a: "Sí. Revisamos las aseguradoras con las que trabajamos que ofrecen seguro de auto en su estado y le mostramos las opciones lado a lado." },
      ],
    },
  },
};

export default auto;
