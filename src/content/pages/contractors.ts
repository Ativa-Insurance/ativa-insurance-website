// Contractors industry page. DRAFT: content written for site v2 under the content rules (the design
// package has only placeholders for industry pages). Needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// The Florida construction workers' comp threshold links to the Florida Division of Workers'
// Compensation; licensing requirements are written generally (they vary by state and trade).

import type { IndustryContent, Source } from "./types";

const FL_DWC: Source = { label: "Florida Division of Workers' Compensation, Coverage requirements", href: "https://www.myfloridacfo.com/division/wc/employer/coverage-requirements" };

const contractors: IndustryContent = {
  id: "contractors",
  status: "draft",
  updated: "2026-11-25",
  copy: {
    en: {
      seo: { title: "Contractor Insurance, Explained | Ativa Insurance", description: "The coverage construction and renovation contractors usually carry: general liability, workers' comp, commercial auto and umbrella. Independent agency." },
      h1: "Insurance for contractors",
      sub: "Job sites, crews, tools and trucks: the coverage construction and renovation contractors usually carry.",
      line: "Job sites, crews, tools and trucks.",
      quickQ: "What insurance does a contractor need?",
      quick: "Most contractors carry general liability for damage or injuries their work causes to others, workers' compensation for employees, and commercial auto for work vehicles. Tools and equipment usually need separate coverage, and an umbrella can add the higher limits general contractors often ask for. Licensing rules and requirements vary by state and trade.",
      needed: [
        { id: "gl", why: "General contractors and clients usually ask for proof before work starts." },
        { id: "workers-comp", why: "Construction work carries injury risk, and some states require coverage from the first employee." },
        { id: "commercial-auto", why: "Pickups and vans that carry tools, materials and crews." },
        { id: "commercial-umbrella", why: "Higher limits when contracts require more than a standard policy." },
        { id: "bop", why: "Smaller contractors may qualify for a BOP, depending on the trade and the carrier." },
      ],
      factors: [
        { t: "Trade and type of work", d: "Roofing, electrical, painting and remodeling each rate differently." },
        { t: "Payroll and subcontractor costs", d: "Uninsured subcontractors can be charged to your policy at audit." },
        { t: "Residential or commercial work", d: "Project types and contract requirements differ." },
        { t: "Vehicles and equipment", d: "How many there are, what they carry and where they go." },
        { t: "Experience and claims history", d: "Years in business and past claims shape how carriers view the risk." },
      ],
      faq: [
        { q: "Do I need insurance to get a contractor's license?", a: "Many states and local licensing boards require proof of general liability or workers' compensation for certain trades. Requirements vary by state and trade; a licensed agent can check what your license needs." },
        { q: "Is workers' comp required for construction in Florida?", a: "In Florida, construction employers need workers' compensation with one or more employees, counting corporate officers. Other states set their own rules.", sources: [FL_DWC] },
        { q: "What happens if a subcontractor has no insurance?", a: "At the premium audit, an uninsured subcontractor's payroll can be added to your workers' comp and liability policies. Collecting certificates from every subcontractor helps avoid that." },
        { q: "Does general liability cover my tools?", a: "No. General liability covers damage to others. Tools and equipment are usually insured under an inland marine or contractor's equipment policy." },
        { q: "What is additional insured status?", a: "A general contractor or client added to your policy by endorsement, so they're protected for claims arising from your work. A certificate alone doesn't do it." },
      ],
    },
    pt: {
      seo: { title: "Seguro para construção e reformas, explicado | Ativa", description: "As coberturas que empreiteiros de construção e reforma costumam ter: general liability, workers' comp, auto comercial e umbrella. Agência independente." },
      h1: "Seguro para construção e reformas",
      sub: "Obras, equipes, ferramentas e caminhonetes: as coberturas que empreiteiros de construção e reforma costumam ter.",
      line: "Obras, equipes, ferramentas e caminhonetes.",
      quickQ: "De qual seguro um empreiteiro precisa?",
      quick: "A maioria dos empreiteiros (contractors) tem general liability para danos ou lesões que o trabalho causa a terceiros, workers' compensation para os funcionários e auto comercial para os veículos de trabalho. Ferramentas e equipamentos costumam precisar de cobertura própria, e um umbrella pode somar os limites mais altos que as construtoras pedem. As regras de licença e as exigências mudam conforme o estado e a profissão.",
      needed: [
        { id: "gl", why: "Construtoras e clientes costumam pedir comprovante antes de a obra começar." },
        { id: "workers-comp", why: "A construção tem risco de lesões, e alguns estados exigem cobertura desde o primeiro funcionário." },
        { id: "commercial-auto", why: "Picapes e vans que levam ferramentas, materiais e equipes." },
        { id: "commercial-umbrella", why: "Limites mais altos quando os contratos exigem mais do que uma apólice padrão." },
        { id: "bop", why: "Empreiteiros menores podem se qualificar para um BOP, conforme a profissão e a seguradora." },
      ],
      factors: [
        { t: "Profissão e tipo de trabalho", d: "Telhado, elétrica, pintura e reforma têm preços diferentes." },
        { t: "Folha de pagamento e custos com subempreiteiros", d: "Subempreiteiros sem seguro podem ser cobrados na sua apólice na auditoria." },
        { t: "Obras residenciais ou comerciais", d: "Os tipos de projeto e as exigências dos contratos mudam." },
        { t: "Veículos e equipamentos", d: "Quantos são, o que levam e para onde vão." },
        { t: "Experiência e histórico de sinistros", d: "Tempo de empresa e sinistros anteriores influenciam como as seguradoras avaliam o risco." },
      ],
      faq: [
        { q: "Preciso de seguro para tirar a licença de empreiteiro?", a: "Muitos estados e conselhos locais exigem comprovante de general liability ou de workers' compensation para certas profissões. As exigências mudam conforme o estado e a profissão; um agente licenciado pode verificar o que a sua licença pede." },
        { q: "O workers' comp é obrigatório na construção na Flórida?", a: "Na Flórida, empresas de construção precisam de workers' compensation a partir de um funcionário, contando os diretores (corporate officers). Outros estados têm regras próprias.", sources: [FL_DWC] },
        { q: "E se um subempreiteiro não tiver seguro?", a: "Na auditoria do prêmio, a folha de um subempreiteiro sem seguro pode ser somada às suas apólices de workers' comp e de responsabilidade. Pedir certificados de todos os subempreiteiros ajuda a evitar isso." },
        { q: "O general liability cobre as minhas ferramentas?", a: "Não. O general liability cobre danos a terceiros. Ferramentas e equipamentos costumam ser segurados por uma apólice de inland marine ou de equipamentos (contractor's equipment)." },
        { q: "O que é a condição de additional insured?", a: "Uma construtora ou cliente incluído na sua apólice por endosso, para ficar protegido em reclamações decorrentes do seu trabalho. Só o certificado não faz isso." },
      ],
    },
    es: {
      seo: { title: "Seguro para contratistas, explicado | Ativa Insurance", description: "Las coberturas que suelen tener los contratistas de construcción y remodelación: general liability, workers' comp, auto comercial y umbrella." },
      h1: "Seguros para contratistas",
      sub: "Obras, cuadrillas, herramientas y camionetas: las coberturas que suelen tener los contratistas de construcción y remodelación.",
      line: "Obras, cuadrillas, herramientas y camionetas.",
      quickQ: "¿Qué seguro necesita un contratista?",
      quick: "La mayoría de los contratistas tiene general liability para daños o lesiones que su trabajo causa a otros, compensación laboral (workers' comp) para los empleados y auto comercial para los vehículos de trabajo. Las herramientas y los equipos suelen necesitar su propia cobertura, y un umbrella puede sumar los límites más altos que suelen pedir los contratistas generales. Las reglas de licencia y los requisitos cambian según el estado y el oficio.",
      needed: [
        { id: "gl", why: "Los contratistas generales y los clientes suelen pedir comprobante antes de empezar la obra." },
        { id: "workers-comp", why: "La construcción tiene riesgo de lesiones, y algunos estados exigen cobertura desde el primer empleado." },
        { id: "commercial-auto", why: "Pickups y vans que llevan herramientas, materiales y cuadrillas." },
        { id: "commercial-umbrella", why: "Límites más altos cuando los contratos exigen más que una póliza estándar." },
        { id: "bop", why: "Los contratistas pequeños pueden calificar para una BOP, según el oficio y la aseguradora." },
      ],
      factors: [
        { t: "Oficio y tipo de trabajo", d: "Techos, electricidad, pintura y remodelación tienen precios distintos." },
        { t: "Nómina y costos de subcontratistas", d: "Los subcontratistas sin seguro pueden cobrarse en su póliza en la auditoría." },
        { t: "Obras residenciales o comerciales", d: "Los tipos de proyecto y los requisitos de los contratos cambian." },
        { t: "Vehículos y equipos", d: "Cuántos hay, qué llevan y a dónde van." },
        { t: "Experiencia e historial de reclamos", d: "Los años en el negocio y los reclamos anteriores influyen en cómo las aseguradoras ven el riesgo." },
      ],
      faq: [
        { q: "¿Necesito seguro para obtener la licencia de contratista?", a: "Muchos estados y juntas locales exigen comprobante de general liability o de compensación laboral para ciertos oficios. Los requisitos cambian según el estado y el oficio; un agente con licencia puede revisar lo que pide su licencia." },
        { q: "¿La compensación laboral es obligatoria en la construcción en Florida?", a: "En Florida, los negocios de construcción necesitan compensación laboral desde un empleado, contando a los directivos (corporate officers). Otros estados tienen sus propias reglas.", sources: [FL_DWC] },
        { q: "¿Qué pasa si un subcontratista no tiene seguro?", a: "En la auditoría de la prima, la nómina de un subcontratista sin seguro puede sumarse a sus pólizas de compensación laboral y de responsabilidad. Pedir certificados a todos los subcontratistas ayuda a evitarlo." },
        { q: "¿El general liability cubre mis herramientas?", a: "No. El general liability cubre daños a otros. Las herramientas y los equipos suelen asegurarse con una póliza de inland marine o de equipos (contractor's equipment)." },
        { q: "¿Qué es la condición de asegurado adicional?", a: "Un contratista general o cliente agregado a su póliza por endoso, para quedar protegido en reclamos derivados de su trabajo. Un certificado por sí solo no lo hace." },
      ],
    },
  },
};

export default contractors;
