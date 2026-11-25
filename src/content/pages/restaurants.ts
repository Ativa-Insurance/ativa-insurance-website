// Restaurants industry page. DRAFT: content written for site v2 under the content rules (the design
// package has only placeholders for industry pages). Needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Coverage cards link to built product pages only (commercial property has no page yet, so it is
// left out). No prices, statistics or legal requirements stated as fact.

import type { IndustryContent } from "./types";

const restaurants: IndustryContent = {
  id: "restaurants",
  status: "draft",
  updated: "2026-11-25",
  copy: {
    en: {
      seo: { title: "Restaurant Insurance, Explained | Ativa Insurance", description: "The coverage restaurants usually carry: general liability, property, workers' comp, commercial auto and umbrella. An independent agency compares carriers." },
      h1: "Insurance for restaurants",
      sub: "Kitchens, customers, staff and deliveries: the coverage a restaurant usually carries, explained.",
      line: "Kitchens, customers, staff and deliveries.",
      quickQ: "What insurance does a restaurant need?",
      quick: "Most restaurants carry general liability for injuries to customers, property coverage for equipment and stock, and workers' compensation for staff, often packaged in a business owner's policy. Delivery or catering vehicles need commercial auto, and an umbrella can add liability limits. What's required depends on your state, your lease and your contracts.",
      needed: [
        { id: "gl", why: "Slips, falls and other injuries to customers on your premises." },
        { id: "bop", why: "Property, liability and business income in one policy, often a fit for smaller restaurants." },
        { id: "workers-comp", why: "Kitchens involve burns, cuts and slips; staff injuries fall under workers' comp." },
        { id: "commercial-auto", why: "Delivery or catering vehicles owned by the business need their own policy." },
        { id: "commercial-umbrella", why: "More liability limits above general liability and auto when contracts or assets call for it." },
      ],
      factors: [
        { t: "Type of service", d: "Full service, quick service, bar or catering each carry different risks." },
        { t: "Revenue and payroll", d: "Common rating bases for liability and workers' comp." },
        { t: "Cooking equipment and fire protection", d: "Fryers, open flames and hood suppression systems affect the property risk." },
        { t: "Alcohol sales", d: "Serving alcohol can call for liquor liability, rated separately." },
        { t: "Claims history", d: "Past claims shape how carriers view the risk." },
      ],
      faq: [
        { q: "Do I need liquor liability?", a: "If you serve or sell alcohol, general liability usually excludes claims that arise from it, so liquor liability is often added separately. Some states and landlords require it. A licensed agent confirms what applies to you." },
        { q: "Does general liability cover food poisoning claims?", a: "Claims that food you served made someone sick are generally handled under the products and completed operations part of general liability, subject to the policy terms." },
        { q: "Is a business owner's policy enough for a restaurant?", a: "Many smaller restaurants start with a BOP, but it doesn't include workers' compensation, commercial auto or liquor liability. Eligibility depends on the carrier and on the size and type of restaurant." },
        { q: "What about food that spoils during a power outage?", a: "Food spoilage is often an add-on to the property coverage, with its own limit. Policies differ on which causes of power loss they cover." },
        { q: "Do part-time employees count for workers' comp?", a: "States generally count part-time employees toward their requirements, and each state sets its own threshold. A licensed agent confirms the rule for yours." },
      ],
    },
    pt: {
      seo: { title: "Seguro para restaurantes, explicado | Ativa Insurance", description: "As coberturas que restaurantes costumam ter: general liability, patrimônio, workers' comp, auto comercial e umbrella. Uma agência independente compara." },
      h1: "Seguro para restaurantes",
      sub: "Cozinha, clientes, equipe e entregas: as coberturas que um restaurante costuma ter, explicadas.",
      line: "Cozinha, clientes, equipe e entregas.",
      quickQ: "De qual seguro um restaurante precisa?",
      quick: "A maioria dos restaurantes tem general liability para lesões de clientes, cobertura de patrimônio para equipamentos e estoque e workers' compensation para a equipe, muitas vezes reunidos em um BOP (business owner's policy). Veículos de entrega ou de buffet precisam de auto comercial, e um umbrella pode somar limites de responsabilidade. O que é exigido depende do seu estado, do contrato de locação e dos seus contratos.",
      needed: [
        { id: "gl", why: "Escorregões, quedas e outras lesões de clientes no seu estabelecimento." },
        { id: "bop", why: "Patrimônio, responsabilidade e lucros cessantes em uma apólice, muitas vezes adequado a restaurantes menores." },
        { id: "workers-comp", why: "Cozinhas envolvem queimaduras, cortes e escorregões; lesões da equipe entram no workers' comp." },
        { id: "commercial-auto", why: "Veículos de entrega ou de buffet da empresa precisam de apólice própria." },
        { id: "commercial-umbrella", why: "Mais limites de responsabilidade acima do general liability e do auto quando contratos ou patrimônio pedem." },
      ],
      factors: [
        { t: "Tipo de serviço", d: "Serviço completo, fast food, bar ou buffet têm riscos diferentes." },
        { t: "Faturamento e folha de pagamento", d: "Bases comuns de cálculo para responsabilidade e workers' comp." },
        { t: "Equipamentos de cozinha e proteção contra incêndio", d: "Fritadeiras, chamas abertas e sistemas de supressão na coifa afetam o risco do patrimônio." },
        { t: "Venda de bebidas alcoólicas", d: "Servir álcool pode exigir liquor liability, calculado à parte." },
        { t: "Histórico de sinistros", d: "Sinistros anteriores influenciam como as seguradoras avaliam o risco." },
      ],
      faq: [
        { q: "Preciso de liquor liability?", a: "Se você serve ou vende bebidas alcoólicas, o general liability normalmente exclui as reclamações ligadas a isso, então o liquor liability costuma ser contratado à parte. Alguns estados e proprietários exigem. Um agente licenciado confirma o que vale para você." },
        { q: "O general liability cobre intoxicação alimentar?", a: "Reclamações de que a comida servida fez alguém passar mal costumam entrar na parte de products and completed operations do general liability, conforme os termos da apólice." },
        { q: "Um BOP basta para um restaurante?", a: "Muitos restaurantes menores começam com um BOP, mas ele não inclui workers' compensation, auto comercial nem liquor liability. A elegibilidade depende da seguradora e do porte e tipo de restaurante." },
        { q: "E a comida que estraga numa falta de energia?", a: "A perda de alimentos (food spoilage) costuma ser um adicional da cobertura de patrimônio, com limite próprio. As apólices variam quanto às causas de falta de energia que cobrem." },
        { q: "Funcionários de meio período contam para o workers' comp?", a: "Os estados em geral contam funcionários de meio período nas suas exigências, e cada estado define o próprio critério. Um agente licenciado confirma a regra do seu." },
      ],
    },
    es: {
      seo: { title: "Seguro para restaurantes, explicado | Ativa Insurance", description: "Las coberturas que suelen tener los restaurantes: general liability, propiedad, workers' comp, auto comercial y umbrella. Una agencia independiente compara." },
      h1: "Seguros para restaurantes",
      sub: "Cocina, clientes, personal y entregas: las coberturas que suele tener un restaurante, explicadas.",
      line: "Cocina, clientes, personal y entregas.",
      quickQ: "¿Qué seguro necesita un restaurante?",
      quick: "La mayoría de los restaurantes tiene general liability para lesiones de clientes, cobertura de propiedad para equipos e inventario y compensación laboral (workers' comp) para el personal, muchas veces reunidos en una BOP (business owner's policy). Los vehículos de entrega o catering necesitan auto comercial, y un umbrella puede sumar límites de responsabilidad. Lo que se exige depende de su estado, su contrato de arrendamiento y sus contratos.",
      needed: [
        { id: "gl", why: "Resbalones, caídas y otras lesiones de clientes en su local." },
        { id: "bop", why: "Propiedad, responsabilidad e interrupción del negocio en una póliza, muchas veces adecuada para restaurantes pequeños." },
        { id: "workers-comp", why: "Las cocinas implican quemaduras, cortes y resbalones; las lesiones del personal entran en workers' comp." },
        { id: "commercial-auto", why: "Los vehículos de entrega o catering del negocio necesitan su propia póliza." },
        { id: "commercial-umbrella", why: "Más límites de responsabilidad sobre general liability y auto cuando los contratos o los activos lo piden." },
      ],
      factors: [
        { t: "Tipo de servicio", d: "Servicio completo, comida rápida, bar o catering tienen riesgos distintos." },
        { t: "Ingresos y nómina", d: "Bases comunes de cálculo para responsabilidad y compensación laboral." },
        { t: "Equipos de cocina y protección contra incendios", d: "Freidoras, llamas abiertas y sistemas de supresión en la campana afectan el riesgo de la propiedad." },
        { t: "Venta de alcohol", d: "Servir alcohol puede requerir liquor liability, calculado aparte." },
        { t: "Historial de reclamos", d: "Los reclamos anteriores influyen en cómo las aseguradoras ven el riesgo." },
      ],
      faq: [
        { q: "¿Necesito liquor liability?", a: "Si sirve o vende alcohol, el general liability normalmente excluye los reclamos relacionados, así que el liquor liability suele agregarse aparte. Algunos estados y propietarios lo exigen. Un agente con licencia confirma lo que aplica a usted." },
        { q: "¿El general liability cubre intoxicaciones alimentarias?", a: "Los reclamos de que la comida servida enfermó a alguien suelen manejarse en la parte de products and completed operations del general liability, según los términos de la póliza." },
        { q: "¿Una BOP es suficiente para un restaurante?", a: "Muchos restaurantes pequeños empiezan con una BOP, pero no incluye compensación laboral, auto comercial ni liquor liability. La elegibilidad depende de la aseguradora y del tamaño y tipo de restaurante." },
        { q: "¿Y la comida que se echa a perder por un apagón?", a: "La pérdida de alimentos (food spoilage) suele ser un adicional de la cobertura de propiedad, con su propio límite. Las pólizas varían en las causas de apagón que cubren." },
        { q: "¿Los empleados de medio tiempo cuentan para workers' comp?", a: "Los estados en general cuentan a los empleados de medio tiempo en sus requisitos, y cada estado fija su propio umbral. Un agente con licencia confirma la regla del suyo." },
      ],
    },
  },
};

export default restaurants;
