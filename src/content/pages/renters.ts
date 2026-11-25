// Renters insurance landing page. DRAFT: needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Source copy: design/claude-design/site-v2/source (lib/ativa-landing.js products, i18n/pages.js
// ATIVA_LANDING, i18n/landing.pt.js / landing.es.js). Explorer footnote = the design's state note.
// Changes from the design copy, under the content rules:
// - "Is it required?" is written generally.
// - Hero description = first sentence of the quick answer and button = "Get a quote" (as the design does
//   for pages without their own hero copy).
// - PT/ES: the English policy term shows beside the explorer item title (term field).

import type { LandingContent } from "./types";

const renters: LandingContent = {
  id: "renters",
  status: "draft",
  updated: "2026-11-25",
  scene: "renters",
  hero: {
    file: "renters-full.webp",
    layout: "partial",
    imgW: "66%",
    subW: "38ch",
    side: "left",
    mdH: 420,
    w: 1774,
    h: 887,
    pos: {
      lg: "100% 50%",
      md: "100% 50%",
      sm: "100% 50%"
    }
  },
  related: [
    "auto",
    "pet",
    "condo",
    "home"
  ],
  copy: {
    en: {
      seo: {
        title: "Renters Insurance, Explained | Ativa Insurance",
        description: "What renters insurance covers: your belongings, your liability and extra living costs after a covered loss. An independent agency compares carriers."
      },
      h1: "Renters insurance",
      sub: "Renters insurance covers your belongings and your liability when you rent.",
      cta: "Get a quote",
      alt: "Furnished apartment living room with a balcony and a moving box labeled Rental",
      quickQ: "What is renters insurance?",
      quick: "Renters insurance covers your belongings and your liability when you rent. The landlord's policy covers the building, not what's inside your unit. A renters policy typically also helps with extra living costs if a covered loss forces you out.",
      explorer: {
        title: "Look inside the apartment",
        lead: "The building belongs to the landlord. Select what a renters policy adds for you.",
        legend: "Requirements, policy forms and terms differ by state. A licensed agent confirms what applies in yours.",
        items: [
          {
            t: "Personal belongings",
            d: "Furniture, clothing, electronics and other things you own, at home and often away from it.",
            rows: [
              {
                k: "Example",
                v: "A laptop stolen from your apartment or your car."
              }
            ]
          },
          {
            t: "Personal liability",
            d: "Injury or damage to others that you're legally responsible for, up to your limit.",
            rows: [
              {
                k: "Example",
                v: "Your bathtub overflows and damages the unit below."
              }
            ]
          },
          {
            t: "Additional living expenses",
            d: "Extra costs to live elsewhere while your unit is repaired after a covered loss.",
            rows: [
              {
                k: "Example",
                v: "A hotel stay after a kitchen fire."
              }
            ]
          },
          {
            t: "Medical payments to others",
            d: "Smaller medical bills for a guest hurt in your home, regardless of fault.",
            rows: [
              {
                k: "Example",
                v: "A friend trips over a rug and needs stitches."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "A fire in a neighboring unit fills your apartment with smoke.",
          parts: [
            "Personal belongings",
            "Additional living expenses"
          ],
          d: "Smoke damage to your things is typically covered, along with temporary housing while the unit is cleaned."
        },
        {
          t: "Your bike is stolen from the building's rack.",
          parts: [
            "Personal belongings"
          ],
          d: "Theft is typically covered, minus your deductible."
        }
      ],
      myths: [
        {
          m: "My landlord's insurance covers my things.",
          f: "The landlord's policy covers the building. Your belongings and your liability are yours to insure."
        },
        {
          m: "I don't own enough to need it.",
          f: "Liability is a large part of the policy. Damage you cause to the building or a neighbor can cost far more than your belongings."
        }
      ],
      notCovered: [
        "Flood",
        "A roommate's belongings, unless they're on the policy",
        "Damage from pests",
        "Your car, which needs an auto policy"
      ],
      who: [
        {
          t: "Anyone renting a home or apartment",
          d: "Many leases require proof of renters insurance."
        },
        {
          t: "Students living off campus",
          d: "A parent's policy may not extend to an off-campus rental."
        },
        {
          t: "Roommates",
          d: "Each person usually needs to be named or carry a separate policy."
        }
      ],
      factors: [
        "Location of the rental",
        "Amount of personal property coverage",
        "Liability limit",
        "Deductible",
        "Claims history"
      ],
      faq: [
        {
          q: "Does renters insurance cover my roommate?",
          a: "Only if the roommate is named on the policy. Otherwise each person needs a separate policy."
        },
        {
          q: "Are my things covered outside the apartment?",
          a: "Most policies cover belongings away from home, sometimes at a reduced limit."
        },
        {
          q: "Is renters insurance required?",
          a: "Generally not by state law, but many landlords require it in the lease."
        }
      ]
    },
    pt: {
      seo: {
        title: "Seguro para inquilinos, explicado | Ativa Insurance",
        description: "O que cobre o seguro de inquilino (renters): seus pertences, sua responsabilidade civil e despesas extras de moradia. Uma agência independente compara."
      },
      h1: "Seguro para inquilinos",
      sub: "O seguro para inquilinos (renters) cobre os seus pertences e a sua responsabilidade civil quando você mora de aluguel.",
      cta: "Fazer cotação",
      alt: "Sala de apartamento mobiliada com varanda e uma caixa de mudança marcada Rental",
      quickQ: "O que é seguro para inquilinos?",
      quick: "O seguro para inquilinos (renters) cobre os seus pertences e a sua responsabilidade civil quando você mora de aluguel. A apólice do proprietário cobre o prédio, não o que está dentro da sua unidade. Em geral, o seguro de inquilino também ajuda com custos extras de moradia se um sinistro coberto obrigar você a sair.",
      explorer: {
        title: "Por dentro do apartamento",
        lead: "O prédio é do proprietário. Selecione o que o seguro de inquilino acrescenta para você.",
        legend: "Exigências, formulários e termos mudam de estado para estado. Um agente licenciado confirma o que vale no seu.",
        items: [
          {
            t: "Pertences pessoais",
            d: "Móveis, roupas, eletrônicos e outras coisas suas, em casa e muitas vezes fora dela.",
            rows: [
              {
                k: "Exemplo",
                v: "Um laptop furtado do apartamento ou do carro."
              }
            ],
            term: "personal property"
          },
          {
            t: "Responsabilidade civil pessoal",
            d: "Lesões ou danos a terceiros pelos quais você é legalmente responsável, até o seu limite.",
            rows: [
              {
                k: "Exemplo",
                v: "Sua banheira transborda e danifica o apartamento de baixo."
              }
            ],
            term: "personal liability"
          },
          {
            t: "Despesas extras de moradia",
            d: "Custos adicionais para morar em outro lugar enquanto a unidade é consertada após um sinistro coberto.",
            rows: [
              {
                k: "Exemplo",
                v: "Diárias de hotel depois de um incêndio na cozinha."
              }
            ],
            term: "additional living expenses"
          },
          {
            t: "Despesas médicas de terceiros",
            d: "Pequenas despesas médicas de uma visita que se machuca na sua casa, independentemente de culpa.",
            rows: [
              {
                k: "Exemplo",
                v: "Um amigo tropeça no tapete e precisa levar pontos."
              }
            ],
            term: "medical payments to others"
          }
        ]
      },
      scenarios: [
        {
          t: "Um incêndio no apartamento vizinho enche o seu de fumaça.",
          parts: [
            "Pertences pessoais",
            "Despesas extras de moradia"
          ],
          d: "Danos de fumaça aos seus pertences normalmente são cobertos, assim como a moradia temporária enquanto a unidade é limpa."
        },
        {
          t: "Sua bicicleta é furtada do bicicletário do prédio.",
          parts: [
            "Pertences pessoais"
          ],
          d: "Furto normalmente é coberto, descontada a franquia."
        }
      ],
      myths: [
        {
          m: "O seguro do proprietário cobre as minhas coisas.",
          f: "A apólice do proprietário cobre o prédio. Os seus pertences e a sua responsabilidade civil cabem a você segurar."
        },
        {
          m: "Não tenho bens suficientes para precisar de seguro.",
          f: "A responsabilidade civil é uma parte importante da apólice. Um dano que você cause ao prédio ou a um vizinho pode custar muito mais do que os seus pertences."
        }
      ],
      notCovered: [
        "Enchente",
        "Pertences de quem divide a moradia, se a pessoa não estiver na apólice",
        "Danos causados por pragas",
        "O seu carro, que precisa de um seguro de auto"
      ],
      who: [
        {
          t: "Quem aluga casa ou apartamento",
          d: "Muitos contratos de aluguel exigem comprovante de seguro de inquilino."
        },
        {
          t: "Estudantes que moram fora do campus",
          d: "A apólice dos pais pode não se estender a um imóvel alugado fora do campus."
        },
        {
          t: "Quem divide moradia",
          d: "Em geral cada pessoa precisa constar na apólice ou ter a sua própria."
        }
      ],
      factors: [
        "Localização do imóvel alugado",
        "Valor da cobertura de pertences",
        "Limite de responsabilidade civil",
        "Franquia",
        "Histórico de sinistros"
      ],
      faq: [
        {
          q: "O seguro de inquilino cobre quem mora comigo?",
          a: "Somente se a pessoa constar na apólice. Caso contrário, cada um precisa de uma apólice própria."
        },
        {
          q: "Minhas coisas estão cobertas fora do apartamento?",
          a: "A maioria das apólices cobre pertences fora de casa, às vezes com um limite reduzido."
        },
        {
          q: "O seguro de inquilino é obrigatório?",
          a: "Em geral não por lei estadual, mas muitos proprietários exigem no contrato de aluguel."
        }
      ]
    },
    es: {
      seo: {
        title: "Seguro para inquilinos, explicado | Ativa Insurance",
        description: "Qué cubre el seguro para inquilinos (renters): sus pertenencias, su responsabilidad civil y gastos adicionales de vivienda. Agencia independiente."
      },
      h1: "Seguro para inquilinos",
      sub: "El seguro para inquilinos (renters) cubre sus pertenencias y su responsabilidad civil cuando usted alquila.",
      cta: "Cotizar",
      alt: "Sala de apartamento amueblada con balcón y una caja de mudanza marcada Rental",
      quickQ: "¿Qué es el seguro para inquilinos?",
      quick: "El seguro para inquilinos (renters) cubre sus pertenencias y su responsabilidad civil cuando usted alquila. La póliza del propietario cubre el edificio, no lo que hay dentro de su unidad. Por lo general, la póliza de inquilinos también ayuda con gastos adicionales de vivienda si una pérdida cubierta lo obliga a salir.",
      explorer: {
        title: "El apartamento por dentro",
        lead: "El edificio es del propietario. Seleccione lo que la póliza de inquilinos agrega para usted.",
        legend: "Los requisitos, formularios y términos cambian según el estado. Un agente con licencia confirma lo que aplica en el suyo.",
        items: [
          {
            t: "Pertenencias personales",
            d: "Muebles, ropa, aparatos electrónicos y otras cosas suyas, en casa y muchas veces fuera de ella.",
            rows: [
              {
                k: "Ejemplo",
                v: "Una laptop robada de su apartamento o de su auto."
              }
            ],
            term: "personal property"
          },
          {
            t: "Responsabilidad civil personal",
            d: "Lesiones o daños a otras personas de los que usted es legalmente responsable, hasta su límite.",
            rows: [
              {
                k: "Ejemplo",
                v: "Su bañera se desborda y daña la unidad de abajo."
              }
            ],
            term: "personal liability"
          },
          {
            t: "Gastos adicionales de vivienda",
            d: "Costos extra para vivir en otro lugar mientras reparan su unidad después de una pérdida cubierta.",
            rows: [
              {
                k: "Ejemplo",
                v: "Una estadía en hotel después de un incendio en la cocina."
              }
            ],
            term: "additional living expenses"
          },
          {
            t: "Pagos médicos a terceros",
            d: "Gastos médicos menores de un invitado que se lesiona en su casa, sin importar quién tuvo la culpa.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un amigo tropieza con una alfombra y necesita puntos."
              }
            ],
            term: "medical payments to others"
          }
        ]
      },
      scenarios: [
        {
          t: "Un incendio en la unidad vecina llena de humo su apartamento.",
          parts: [
            "Pertenencias personales",
            "Gastos adicionales de vivienda"
          ],
          d: "Los daños por humo a sus cosas normalmente están cubiertos, igual que el alojamiento temporal mientras limpian la unidad."
        },
        {
          t: "Le roban la bicicleta del estacionamiento de bicicletas del edificio.",
          parts: [
            "Pertenencias personales"
          ],
          d: "El robo normalmente está cubierto, menos su deducible."
        }
      ],
      myths: [
        {
          m: "El seguro del propietario cubre mis cosas.",
          f: "La póliza del propietario cubre el edificio. Sus pertenencias y su responsabilidad civil le corresponde asegurarlas a usted."
        },
        {
          m: "No tengo suficientes cosas como para necesitarlo.",
          f: "La responsabilidad civil es una parte importante de la póliza. Un daño que usted cause al edificio o a un vecino puede costar mucho más que sus pertenencias."
        }
      ],
      notCovered: [
        "Inundación",
        "Las pertenencias de un compañero de vivienda, si no figura en la póliza",
        "Daños causados por plagas",
        "Su auto, que necesita una póliza de auto"
      ],
      who: [
        {
          t: "Quien alquila una casa o un apartamento",
          d: "Muchos contratos de alquiler exigen comprobante de seguro para inquilinos."
        },
        {
          t: "Estudiantes que viven fuera del campus",
          d: "La póliza de los padres puede no extenderse a un alquiler fuera del campus."
        },
        {
          t: "Compañeros de vivienda",
          d: "Por lo general cada persona debe figurar en la póliza o tener una propia."
        }
      ],
      factors: [
        "Ubicación del alquiler",
        "Monto de la cobertura de pertenencias",
        "Límite de responsabilidad civil",
        "Deducible",
        "Historial de reclamos"
      ],
      faq: [
        {
          q: "¿El seguro para inquilinos cubre a mi compañero de vivienda?",
          a: "Solo si figura en la póliza. De lo contrario, cada persona necesita una póliza aparte."
        },
        {
          q: "¿Mis cosas están cubiertas fuera del apartamento?",
          a: "La mayoría de las pólizas cubre las pertenencias fuera de casa, a veces con un límite reducido."
        },
        {
          q: "¿El seguro para inquilinos es obligatorio?",
          a: "En general no por ley estatal, pero muchos propietarios lo exigen en el contrato de alquiler."
        }
      ]
    }
  }
};

export default renters;
