// Coverages explained (hub). DRAFT. Index cards link to built pages only (products without a page,
// such as personal Umbrella, Cargo, Commercial property and Fleet, are left out). Glossary: the
// design's seven terms (i18n/home.js learn.terms, first sentence) plus terms already explained on the
// landing pages, held to the content rules (no numbers or legal claims). Needs licensed-agent review
// (English) and Gabriel's native review (PT, ES).

import type { HubContent } from "./types";

const coverages: HubContent = {
  id: "coverages",
  status: "draft",
  updated: "2026-11-25",
  indexP: ["auto", "home", "renters", "condo", "flood", "pet"],
  indexB: ["commercial-auto", "trucking", "gl", "bop", "workers-comp", "commercial-umbrella", "eo"],
  indexI: ["contractors", "restaurants", "cleaning"],
  copy: {
    en: {
      seo: { title: "Coverages Explained | Ativa Insurance", description: "Plain explanations of personal and business insurance, by coverage and by industry, plus a glossary of the words you'll see on a policy." },
      h1: "Coverages explained",
      sub: "Plain explanations of personal and business coverage, and of the words you'll see on a policy.",
      faq: [],
      glossary: [
        { t: "Liability", d: "Pays for injuries or damage you cause to other people or their property, up to your policy's limits." },
        { t: "Collision", d: "Pays to repair or replace your own car after it hits another vehicle or an object, whoever was at fault, minus your deductible." },
        { t: "Comprehensive", d: "Pays for damage to your car that doesn't come from a collision: theft, fire, falling objects, hail, flood or hitting an animal, minus your deductible." },
        { t: "Deductible", d: "The amount you pay on a covered claim before the insurance pays the rest." },
        { t: "Limits", d: "The most a policy will pay for a covered loss." },
        { t: "Premium", d: "The price of the policy for a set period, usually six or twelve months." },
        { t: "Uninsured motorist", d: "Pays for your injuries, and in some states your car, when the driver at fault has no insurance or not enough." },
        { t: "Additional insured", d: "Another person or company added to your policy by endorsement, often a client or landlord." },
        { t: "Certificate of insurance (COI)", d: "A one-page summary showing which policies a business has. It doesn't create or change coverage." },
        { t: "Claims-made", d: "A policy that responds to claims first made while it's in force, for work done after its retroactive date." },
        { t: "Endorsement", d: "A written change to a policy that adds, removes or modifies coverage." },
        { t: "Exclusion", d: "Something a policy states it doesn't cover." },
        { t: "Named insured", d: "The person or business the policy is issued to, as written on the policy." },
        { t: "Personal injury protection (PIP)", d: "Auto coverage that pays a share of medical bills and lost income after a crash, whoever caused it, where a state requires or offers it." },
      ],
    },
    pt: {
      seo: { title: "Coberturas explicadas | Ativa Insurance", description: "Explicações simples sobre seguros pessoais e empresariais, por cobertura e por setor, e um glossário das palavras que aparecem na apólice." },
      h1: "Coberturas explicadas",
      sub: "Explicações simples sobre seguros pessoais e empresariais, e sobre as palavras que aparecem na apólice.",
      faq: [],
      glossary: [
        { t: "Responsabilidade civil (liability)", d: "Paga pelos danos ou lesões que você causa a outras pessoas ou aos bens delas, até os limites da apólice." },
        { t: "Colisão (collision)", d: "Paga o conserto ou a reposição do seu carro depois de bater em outro veículo ou em um objeto, independentemente de quem teve a culpa, menos a franquia." },
        { t: "Compreensiva (comprehensive)", d: "Paga danos ao seu carro que não vêm de colisão: roubo, incêndio, queda de objetos, granizo, enchente ou atropelar um animal, menos a franquia." },
        { t: "Franquia (deductible)", d: "O valor que você paga em um sinistro coberto antes de o seguro pagar o restante." },
        { t: "Limites (limits)", d: "O máximo que a apólice paga por uma perda coberta." },
        { t: "Prêmio (premium)", d: "O preço da apólice por um período, normalmente seis ou doze meses." },
        { t: "Motorista sem seguro (uninsured motorist)", d: "Paga pelas suas lesões, e em alguns estados pelo seu carro, quando o motorista culpado não tem seguro ou tem pouco." },
        { t: "Segurado adicional (additional insured)", d: "Outra pessoa ou empresa incluída na sua apólice por endosso, muitas vezes um cliente ou o dono do imóvel." },
        { t: "Certificado de seguro (COI)", d: "Um resumo de uma página que mostra quais apólices a empresa tem. Ele não cria nem altera cobertura." },
        { t: "Base de reclamação (claims-made)", d: "Apólice que responde a reclamações feitas pela primeira vez enquanto está em vigor, por trabalhos feitos depois da data retroativa." },
        { t: "Endosso (endorsement)", d: "Uma alteração por escrito que inclui, exclui ou modifica coberturas da apólice." },
        { t: "Exclusão (exclusion)", d: "Algo que a apólice declara que não cobre." },
        { t: "Segurado (named insured)", d: "A pessoa ou empresa em nome de quem a apólice é emitida, como consta nela." },
        { t: "Proteção contra lesões pessoais (PIP)", d: "Cobertura de auto que paga parte das despesas médicas e da renda perdida após um acidente, seja quem for o culpado, onde o estado exige ou oferece." },
      ],
    },
    es: {
      seo: { title: "Coberturas explicadas | Ativa Insurance", description: "Explicaciones simples de seguros personales y de negocios, por cobertura y por industria, y un glosario de las palabras que verá en una póliza." },
      h1: "Coberturas explicadas",
      sub: "Explicaciones simples de seguros personales y de negocios, y de las palabras que verá en una póliza.",
      faq: [],
      glossary: [
        { t: "Responsabilidad (liability)", d: "Paga las lesiones o daños que usted causa a otras personas o a sus bienes, hasta los límites de su póliza." },
        { t: "Colisión (collision)", d: "Paga la reparación o el reemplazo de su auto después de chocar con otro vehículo o un objeto, sin importar quién tuvo la culpa, menos su deducible." },
        { t: "Comprensiva (comprehensive)", d: "Paga daños a su auto que no vienen de un choque: robo, incendio, caída de objetos, granizo, inundación o golpear a un animal, menos su deducible." },
        { t: "Deducible (deductible)", d: "La cantidad que usted paga en un reclamo cubierto antes de que el seguro pague el resto." },
        { t: "Límites (limits)", d: "Lo máximo que paga una póliza por una pérdida cubierta." },
        { t: "Prima (premium)", d: "El precio de la póliza por un período, normalmente seis o doce meses." },
        { t: "Conductor sin seguro (uninsured motorist)", d: "Paga sus lesiones, y en algunos estados su auto, cuando el conductor culpable no tiene seguro o no tiene suficiente." },
        { t: "Asegurado adicional (additional insured)", d: "Otra persona o empresa agregada a su póliza por endoso, muchas veces un cliente o el dueño del local." },
        { t: "Certificado de seguro (COI)", d: "Un resumen de una página que muestra qué pólizas tiene un negocio. No crea ni cambia la cobertura." },
        { t: "Base de reclamo (claims-made)", d: "Póliza que responde a reclamos presentados por primera vez mientras está vigente, por trabajos hechos después de la fecha retroactiva." },
        { t: "Endoso (endorsement)", d: "Un cambio por escrito que agrega, quita o modifica coberturas de una póliza." },
        { t: "Exclusión (exclusion)", d: "Algo que la póliza declara que no cubre." },
        { t: "Asegurado (named insured)", d: "La persona o negocio a cuyo nombre se emite la póliza, como aparece en ella." },
        { t: "Protección contra lesiones personales (PIP)", d: "Cobertura de auto que paga parte de los gastos médicos y del ingreso perdido tras un choque, sin importar quién lo causó, donde el estado la exige u ofrece." },
      ],
    },
  },
};

export default coverages;
