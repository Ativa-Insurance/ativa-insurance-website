// Business owner's policy (BOP) landing page. DRAFT: needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Source copy: design/claude-design/site-v2/source (lib/ativa-landing.js products, i18n/pages.js
// ATIVA_LANDING, i18n/landing.pt.js / landing.es.js). Explorer footnote = the design's state note.
// The quote button opens the existing BOP application link (amsApplyUrl("business", lang)), same tab.
// No globe (the design's BOP globe has words baked in): related cards use the line icon.
// Changes from the design copy, under the content rules:
// - "Is a BOP cheaper?": "often costs less" -> "can cost less, but not always" (no price claim).
// Hero description = first sentence of the quick answer and button = "Get a quote" (as the design does
// for pages without their own hero copy).

import type { LandingContent } from "./types";

const bop: LandingContent = {
  id: "bop",
  status: "draft",
  updated: "2026-11-25",
  scene: "bop",
  hero: {
    file: "bop-full.webp",
    layout: "partial",
    imgW: "66%",
    subW: "38ch",
    side: "left",
    mdH: 420,
    w: 1774,
    h: 887,
    pos: {
      lg: "70% 40%",
      md: "70% 50%",
      sm: "70% 50%"
    }
  },
  related: [
    "workers-comp",
    "commercial-auto",
    "commercial-umbrella",
    "eo"
  ],
  copy: {
    en: {
      seo: {
        title: "Business Owner's Policy (BOP), Explained | Ativa",
        description: "How a business owner's policy packages commercial property, general liability and business income for small businesses. An independent agency compares."
      },
      h1: "Business owner's policy (BOP)",
      sub: "A business owner's policy (BOP) packages commercial property and general liability into one policy for small and mid-sized businesses.",
      cta: "Get a quote",
      alt: "Small storefront with outdoor seating and a white work van parked in front",
      quickQ: "What is a business owner's policy?",
      quick: "A business owner's policy (BOP) packages commercial property and general liability into one policy for small and mid-sized businesses. Most also include business income coverage, which replaces lost income when a covered loss forces the business to close temporarily.",
      explorer: {
        title: "One policy, three parts",
        lead: "Select a part of the business to see what a BOP includes for it.",
        legend: "Requirements, policy forms and terms differ by state. A licensed agent confirms what applies in yours.",
        items: [
          {
            t: "Commercial property",
            d: "The building if you own it, plus equipment, inventory and furniture, against covered losses such as fire or theft.",
            rows: [
              {
                k: "Example",
                v: "A fire destroys kitchen equipment and stock."
              }
            ]
          },
          {
            t: "General liability",
            d: "Injury or property damage to others caused by your premises or operations.",
            rows: [
              {
                k: "Example",
                v: "A customer trips at the entrance."
              }
            ]
          },
          {
            t: "Business interruption",
            d: "Lost income and ongoing expenses while the business is closed for repairs after a covered property loss. Included in most BOPs.",
            rows: [
              {
                k: "Example",
                v: "Three weeks closed while fire damage is repaired."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "A break-in damages the storefront and inventory is stolen.",
          parts: [
            "Commercial property"
          ],
          d: "Property coverage can respond to the damage and the stolen stock, minus the deductible."
        },
        {
          t: "A fire next door forces you to close for a month.",
          parts: [
            "Commercial property",
            "Business interruption"
          ],
          d: "Business income coverage generally requires direct physical damage to your own premises from a covered cause."
        }
      ],
      myths: [
        {
          m: "A BOP covers everything a business needs.",
          f: "It doesn't include workers' compensation, commercial auto or professional liability. Those are separate policies."
        },
        {
          m: "Business interruption pays for any closure.",
          f: "It responds to closures caused by covered physical damage, not to slow seasons or most government-ordered shutdowns."
        }
      ],
      notCovered: [
        "Flood and earthquake, unless added",
        "Employee injuries",
        "Business vehicles",
        "Professional errors"
      ],
      who: [
        {
          t: "Retail stores and restaurants",
          d: "Property and customers in one place."
        },
        {
          t: "Offices and professional firms",
          d: "Equipment, furniture and visitor liability."
        },
        {
          t: "Small contractors and service businesses",
          d: "Eligibility depends on the carrier and the type of work."
        }
      ],
      factors: [
        "Type of business",
        "Location and building construction",
        "Value of property insured",
        "Revenue",
        "Limits and deductibles",
        "Claims history"
      ],
      faq: [
        {
          q: "Who qualifies for a BOP?",
          a: "Carriers set eligibility by industry, size and revenue. Larger or higher-risk businesses are written on separate property and liability policies."
        },
        {
          q: "Is a BOP cheaper than separate policies?",
          a: "Packaging can cost less than buying each coverage alone, but not always. It depends on the business and the carrier."
        },
        {
          q: "Can coverages be added?",
          a: "Yes. Common additions include equipment breakdown, cyber and hired and non-owned auto."
        }
      ]
    },
    pt: {
      seo: {
        title: "BOP (pacote empresarial), explicado | Ativa Insurance",
        description: "Como o BOP (business owner's policy) junta patrimônio comercial, general liability e lucros cessantes para pequenas empresas. Agência independente."
      },
      h1: "BOP (pacote empresarial)",
      sub: "O BOP (business owner's policy) reúne o seguro patrimonial comercial e o general liability em uma única apólice para pequenas e médias empresas.",
      cta: "Fazer cotação",
      alt: "Loja pequena com mesas na calçada e uma van branca estacionada na frente",
      quickQ: "O que é um BOP?",
      quick: "O BOP (business owner's policy) reúne o seguro patrimonial comercial e o general liability em uma única apólice para pequenas e médias empresas. A maioria também inclui a cobertura de lucros cessantes, que repõe a renda perdida quando um sinistro coberto obriga a empresa a fechar temporariamente.",
      explorer: {
        title: "Uma apólice, três partes",
        lead: "Selecione uma parte da empresa para ver o que o BOP inclui para ela.",
        legend: "Exigências, formulários e termos mudam de estado para estado. Um agente licenciado confirma o que vale no seu.",
        items: [
          {
            t: "Patrimônio comercial",
            d: "O imóvel, se for seu, além de equipamentos, estoque e móveis, contra sinistros cobertos como incêndio ou furto.",
            rows: [
              {
                k: "Exemplo",
                v: "Um incêndio destrói os equipamentos da cozinha e o estoque."
              }
            ],
            term: "commercial property"
          },
          {
            t: "General liability",
            d: "Lesões ou danos materiais a terceiros causados pelo seu estabelecimento ou pelas suas operações.",
            rows: [
              {
                k: "Exemplo",
                v: "Um cliente tropeça na entrada."
              }
            ]
          },
          {
            t: "Lucros cessantes (business interruption)",
            d: "Renda perdida e despesas correntes enquanto a empresa fica fechada para reparos após um sinistro patrimonial coberto. Incluída na maioria dos BOPs.",
            rows: [
              {
                k: "Exemplo",
                v: "Três semanas fechado enquanto os danos do incêndio são reparados."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "Um arrombamento danifica a fachada e o estoque é furtado.",
          parts: [
            "Patrimônio comercial"
          ],
          d: "A cobertura patrimonial pode responder pelos danos e pelo estoque furtado, descontada a franquia."
        },
        {
          t: "Um incêndio no vizinho obriga você a fechar por um mês.",
          parts: [
            "Patrimônio comercial",
            "Lucros cessantes"
          ],
          d: "A cobertura de lucros cessantes em geral exige dano físico direto ao seu próprio estabelecimento por uma causa coberta."
        }
      ],
      myths: [
        {
          m: "O BOP cobre tudo de que uma empresa precisa.",
          f: "Ele não inclui workers' compensation, auto comercial nem responsabilidade profissional. São apólices separadas."
        },
        {
          m: "A cobertura de lucros cessantes paga qualquer fechamento.",
          f: "Ela responde a fechamentos causados por dano físico coberto, não a temporadas fracas nem à maioria dos fechamentos determinados pelo governo."
        }
      ],
      notCovered: [
        "Enchente e terremoto, salvo se incluídos",
        "Lesões de funcionários",
        "Veículos da empresa",
        "Erros profissionais"
      ],
      who: [
        {
          t: "Lojas e restaurantes",
          d: "Patrimônio e clientes no mesmo lugar."
        },
        {
          t: "Escritórios e empresas de serviços profissionais",
          d: "Equipamentos, móveis e responsabilidade perante visitantes."
        },
        {
          t: "Pequenos empreiteiros e prestadores de serviço",
          d: "A elegibilidade depende da seguradora e do tipo de trabalho."
        }
      ],
      factors: [
        "Tipo de empresa",
        "Localização e construção do imóvel",
        "Valor do patrimônio segurado",
        "Faturamento",
        "Limites e franquias",
        "Histórico de sinistros"
      ],
      faq: [
        {
          q: "Quem pode contratar um BOP?",
          a: "As seguradoras definem a elegibilidade por setor, porte e faturamento. Empresas maiores ou de maior risco contratam apólices separadas de patrimônio e de responsabilidade."
        },
        {
          q: "O BOP sai mais barato do que apólices separadas?",
          a: "O pacote pode custar menos do que contratar cada cobertura sozinha, mas nem sempre. Depende da empresa e da seguradora."
        },
        {
          q: "Dá para incluir outras coberturas?",
          a: "Sim. As inclusões mais comuns são quebra de equipamentos, cyber e hired and non-owned auto."
        }
      ]
    },
    es: {
      seo: {
        title: "BOP (póliza para negocios), explicada | Ativa Insurance",
        description: "Cómo la BOP (business owner's policy) combina propiedad comercial, general liability e interrupción del negocio en una póliza. Agencia independiente."
      },
      h1: "BOP (póliza para negocios)",
      sub: "La póliza para dueños de negocios (BOP) reúne la propiedad comercial y la responsabilidad general en una sola póliza para negocios pequeños y medianos.",
      cta: "Cotizar",
      alt: "Tienda pequeña con mesas al aire libre y una van blanca estacionada al frente",
      quickQ: "¿Qué es una BOP?",
      quick: "La póliza para dueños de negocios (BOP) reúne la propiedad comercial y la responsabilidad general en una sola póliza para negocios pequeños y medianos. La mayoría también incluye la cobertura de ingresos del negocio, que repone los ingresos perdidos cuando una pérdida cubierta obliga a cerrar temporalmente.",
      explorer: {
        title: "Una póliza, tres partes",
        lead: "Seleccione una parte del negocio para ver qué incluye la BOP para ella.",
        legend: "Los requisitos, formularios y términos cambian según el estado. Un agente con licencia confirma lo que aplica en el suyo.",
        items: [
          {
            t: "Propiedad comercial",
            d: "El edificio, si es suyo, además de equipos, inventario y muebles, frente a pérdidas cubiertas como incendio o robo.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un incendio destruye los equipos de cocina y la mercancía."
              }
            ],
            term: "commercial property"
          },
          {
            t: "Responsabilidad general",
            d: "Lesiones o daños a la propiedad de otras personas causados por su local o por sus operaciones.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un cliente tropieza en la entrada."
              }
            ],
            term: "general liability"
          },
          {
            t: "Interrupción del negocio",
            d: "Ingresos perdidos y gastos corrientes mientras el negocio está cerrado por reparaciones después de una pérdida de propiedad cubierta. Incluida en la mayoría de las BOP.",
            rows: [
              {
                k: "Ejemplo",
                v: "Tres semanas cerrado mientras se reparan los daños del incendio."
              }
            ],
            term: "business interruption"
          }
        ]
      },
      scenarios: [
        {
          t: "Un robo con fuerza daña la fachada y se llevan el inventario.",
          parts: [
            "Propiedad comercial"
          ],
          d: "La cobertura de propiedad puede responder por los daños y por la mercancía robada, menos el deducible."
        },
        {
          t: "Un incendio en el local vecino lo obliga a cerrar durante un mes.",
          parts: [
            "Propiedad comercial",
            "Interrupción del negocio"
          ],
          d: "La cobertura de ingresos del negocio por lo general exige daño físico directo en su propio local por una causa cubierta."
        }
      ],
      myths: [
        {
          m: "Una BOP cubre todo lo que un negocio necesita.",
          f: "No incluye compensación laboral, auto comercial ni responsabilidad profesional. Son pólizas aparte."
        },
        {
          m: "La interrupción del negocio paga cualquier cierre.",
          f: "Responde a cierres causados por daño físico cubierto, no a temporadas bajas ni a la mayoría de los cierres ordenados por el gobierno."
        }
      ],
      notCovered: [
        "Inundación y terremoto, salvo que se agreguen",
        "Lesiones de empleados",
        "Vehículos del negocio",
        "Errores profesionales"
      ],
      who: [
        {
          t: "Tiendas y restaurantes",
          d: "Propiedad y clientes en un mismo lugar."
        },
        {
          t: "Oficinas y firmas profesionales",
          d: "Equipos, muebles y responsabilidad frente a visitantes."
        },
        {
          t: "Contratistas pequeños y negocios de servicios",
          d: "La elegibilidad depende de la aseguradora y del tipo de trabajo."
        }
      ],
      factors: [
        "Tipo de negocio",
        "Ubicación y construcción del edificio",
        "Valor de la propiedad asegurada",
        "Ingresos",
        "Límites y deducibles",
        "Historial de reclamos"
      ],
      faq: [
        {
          q: "¿Quién califica para una BOP?",
          a: "Las aseguradoras definen la elegibilidad según la industria, el tamaño y los ingresos. Los negocios más grandes o de mayor riesgo contratan pólizas separadas de propiedad y de responsabilidad."
        },
        {
          q: "¿Una BOP cuesta menos que las pólizas por separado?",
          a: "El paquete puede costar menos que comprar cada cobertura sola, pero no siempre. Depende del negocio y de la aseguradora."
        },
        {
          q: "¿Se pueden agregar coberturas?",
          a: "Sí. Las más comunes son avería de equipos, cyber y hired and non-owned auto."
        }
      ]
    }
  }
};

export default bop;
