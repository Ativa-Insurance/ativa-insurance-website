// Cleaning businesses industry page. DRAFT: content written for site v2 under the content rules (the
// design package has only placeholders for industry pages). Needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Coverage cards link to built product pages only. No prices, statistics or legal requirements
// stated as fact.

import type { IndustryContent } from "./types";

const cleaning: IndustryContent = {
  id: "cleaning",
  status: "draft",
  updated: "2026-11-25",
  copy: {
    en: {
      seo: { title: "Cleaning Business Insurance, Explained | Ativa", description: "The coverage cleaning businesses usually carry: general liability, workers' comp, commercial auto and a janitorial bond. An independent agency compares." },
      h1: "Insurance for cleaning businesses",
      sub: "Work in clients' homes and offices, crews on the move and keys in your care: what cleaning businesses usually carry.",
      line: "Clients' property, employees and vehicles.",
      quickQ: "What insurance does a cleaning business need?",
      quick: "Most cleaning businesses carry general liability for damage or injuries at a client's site, workers' compensation for employees, and commercial auto for vehicles used for the business. Many also carry a janitorial bond, which can reimburse a client if an employee is found to have stolen from them, because clients often ask for one. Requirements depend on your state and your contracts.",
      needed: [
        { id: "gl", why: "Damage to a client's property or an injury at the job site, such as a slip on a wet floor." },
        { id: "workers-comp", why: "Lifting, chemicals and repetitive tasks; employee injuries fall under workers' comp." },
        { id: "commercial-auto", why: "Vans and cars used to reach job sites, including employees' cars used for work." },
        { id: "bop", why: "Equipment, supplies and liability in one policy, when the carrier finds the business eligible." },
        { id: "commercial-umbrella", why: "More liability limits when commercial contracts ask for them." },
      ],
      factors: [
        { t: "Type of clients", d: "Homes, offices, medical or industrial sites carry different risks." },
        { t: "Number of employees and payroll", d: "Drives workers' comp and often liability pricing." },
        { t: "Vehicles", d: "How many there are, who drives them and how far." },
        { t: "Services offered", d: "Floor care, windows at height or biohazard cleanup change the risk." },
        { t: "Claims history", d: "Past claims shape how carriers view the risk." },
      ],
      faq: [
        { q: "What is a janitorial bond?", a: "A bond that can reimburse a client if an employee is found to have stolen from them. It protects the client rather than the business, and commercial contracts often ask for one." },
        { q: "Does general liability cover something I break while cleaning?", a: "Accidental damage to a client's property is generally covered, subject to the policy. Coverage for property in your care, custody or control can be limited, so the policy wording matters." },
        { q: "Do I need workers' comp if I work alone?", a: "It depends on your state and on whether you have employees. Some states let owners choose to be covered. A licensed agent confirms what applies to you." },
        { q: "Are employees' cars covered when they drive to jobs?", a: "Their personal auto policies respond first, but the business can still be sued. Hired and non-owned auto coverage protects the business in that situation." },
        { q: "Will commercial clients ask for a certificate?", a: "Often. Offices and property managers commonly ask for a certificate of insurance, and sometimes additional insured status, before work starts." },
      ],
    },
    pt: {
      seo: { title: "Seguro para empresas de limpeza, explicado | Ativa", description: "As coberturas que empresas de limpeza costumam ter: general liability, workers' comp, auto comercial e janitorial bond. Uma agência independente compara." },
      h1: "Seguro para empresas de limpeza",
      sub: "Trabalho na casa e no escritório dos clientes, equipes em deslocamento e chaves sob sua guarda: o que empresas de limpeza costumam ter.",
      line: "Bens dos clientes, funcionários e veículos.",
      quickQ: "De qual seguro uma empresa de limpeza precisa?",
      quick: "A maioria das empresas de limpeza tem general liability para danos ou lesões no local do cliente, workers' compensation para os funcionários e auto comercial para os veículos usados no trabalho. Muitas também têm um janitorial bond, que pode reembolsar o cliente se for comprovado que um funcionário furtou algo, porque os clientes costumam pedir. As exigências dependem do seu estado e dos seus contratos.",
      needed: [
        { id: "gl", why: "Danos aos bens do cliente ou lesões no local de trabalho, como um escorregão em piso molhado." },
        { id: "workers-comp", why: "Carregar peso, produtos químicos e tarefas repetitivas; lesões de funcionários entram no workers' comp." },
        { id: "commercial-auto", why: "Vans e carros usados para chegar aos clientes, inclusive carros de funcionários usados no trabalho." },
        { id: "bop", why: "Equipamentos, materiais e responsabilidade em uma apólice, quando a seguradora considera a empresa elegível." },
        { id: "commercial-umbrella", why: "Mais limites de responsabilidade quando contratos comerciais pedem." },
      ],
      factors: [
        { t: "Tipo de cliente", d: "Casas, escritórios, clínicas ou indústrias têm riscos diferentes." },
        { t: "Número de funcionários e folha de pagamento", d: "Define o workers' comp e muitas vezes o preço da responsabilidade." },
        { t: "Veículos", d: "Quantos são, quem dirige e quanto rodam." },
        { t: "Serviços oferecidos", d: "Tratamento de pisos, vidros em altura ou limpeza de risco biológico mudam o risco." },
        { t: "Histórico de sinistros", d: "Sinistros anteriores influenciam como as seguradoras avaliam o risco." },
      ],
      faq: [
        { q: "O que é janitorial bond?", a: "Uma garantia que pode reembolsar o cliente se for comprovado que um funcionário furtou algo dele. Ela protege o cliente, não a empresa, e contratos comerciais costumam pedir." },
        { q: "O general liability cobre algo que eu quebrar limpando?", a: "Danos acidentais aos bens do cliente costumam estar cobertos, conforme a apólice. A cobertura de bens sob seus cuidados, guarda ou controle (care, custody or control) pode ser limitada, então o texto da apólice importa." },
        { q: "Preciso de workers' comp se trabalho sozinho?", a: "Depende do seu estado e de você ter funcionários. Alguns estados permitem que o dono opte por ser coberto. Um agente licenciado confirma o que vale para você." },
        { q: "Os carros dos funcionários estão cobertos quando vão aos clientes?", a: "As apólices pessoais deles respondem primeiro, mas a empresa ainda pode ser processada. A cobertura hired and non-owned auto protege a empresa nessa situação." },
        { q: "Clientes comerciais vão pedir certificado?", a: "Com frequência. Escritórios e administradoras costumam pedir um certificado de seguro (COI) e, às vezes, a condição de additional insured antes de o trabalho começar." },
      ],
    },
    es: {
      seo: { title: "Seguro para empresas de limpieza, explicado | Ativa", description: "Las coberturas que suelen tener las empresas de limpieza: general liability, workers' comp, auto comercial y janitorial bond. Una agencia independiente compara." },
      h1: "Seguros para empresas de limpieza",
      sub: "Trabajo en casas y oficinas de clientes, equipos en movimiento y llaves bajo su cuidado: lo que suelen tener las empresas de limpieza.",
      line: "Bienes de clientes, empleados y vehículos.",
      quickQ: "¿Qué seguro necesita una empresa de limpieza?",
      quick: "La mayoría de las empresas de limpieza tiene general liability para daños o lesiones en el local del cliente, compensación laboral (workers' comp) para los empleados y auto comercial para los vehículos del negocio. Muchas también tienen un janitorial bond, que puede reembolsar al cliente si se comprueba que un empleado le robó, porque los clientes suelen pedirlo. Los requisitos dependen de su estado y de sus contratos.",
      needed: [
        { id: "gl", why: "Daños a los bienes del cliente o lesiones en el lugar de trabajo, como un resbalón en un piso mojado." },
        { id: "workers-comp", why: "Cargar peso, químicos y tareas repetitivas; las lesiones de empleados entran en workers' comp." },
        { id: "commercial-auto", why: "Vans y autos para llegar a los clientes, incluidos los autos de empleados usados para el trabajo." },
        { id: "bop", why: "Equipos, insumos y responsabilidad en una póliza, cuando la aseguradora considera elegible el negocio." },
        { id: "commercial-umbrella", why: "Más límites de responsabilidad cuando los contratos comerciales lo piden." },
      ],
      factors: [
        { t: "Tipo de clientes", d: "Casas, oficinas, sitios médicos o industriales tienen riesgos distintos." },
        { t: "Número de empleados y nómina", d: "Define la compensación laboral y a menudo el precio de la responsabilidad." },
        { t: "Vehículos", d: "Cuántos hay, quién los maneja y cuánto recorren." },
        { t: "Servicios ofrecidos", d: "Cuidado de pisos, ventanas en altura o limpieza de riesgo biológico cambian el riesgo." },
        { t: "Historial de reclamos", d: "Los reclamos anteriores influyen en cómo las aseguradoras ven el riesgo." },
      ],
      faq: [
        { q: "¿Qué es un janitorial bond?", a: "Una garantía que puede reembolsar al cliente si se comprueba que un empleado le robó. Protege al cliente, no al negocio, y los contratos comerciales suelen pedirla." },
        { q: "¿El general liability cubre algo que rompa al limpiar?", a: "Los daños accidentales a los bienes del cliente suelen estar cubiertos, según la póliza. La cobertura de bienes bajo su cuidado, custodia o control (care, custody or control) puede ser limitada, así que el texto de la póliza importa." },
        { q: "¿Necesito workers' comp si trabajo solo?", a: "Depende de su estado y de si tiene empleados. Algunos estados permiten que el dueño elija estar cubierto. Un agente con licencia confirma lo que aplica a usted." },
        { q: "¿Los autos de los empleados están cubiertos cuando van a los trabajos?", a: "Sus pólizas personales responden primero, pero el negocio aún puede ser demandado. La cobertura hired and non-owned auto protege al negocio en esa situación." },
        { q: "¿Los clientes comerciales pedirán un certificado?", a: "Con frecuencia. Las oficinas y administradoras suelen pedir un certificado de seguro (COI) y, a veces, la condición de asegurado adicional antes de empezar el trabajo." },
      ],
    },
  },
};

export default cleaning;
