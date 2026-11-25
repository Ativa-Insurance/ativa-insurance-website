// Condo insurance landing page. DRAFT: needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Source copy: design/claude-design/site-v2/source (lib/ativa-landing.js products, i18n/pages.js
// ATIVA_LANDING, i18n/landing.pt.js / landing.es.js). Explorer footnote = the design's state note.
// Changes from the design copy, under the content rules:
// - Hero description = first sentence of the quick answer and button = "Get a quote".
// - PT/ES: the English policy term shows beside the explorer item title (term field).

import type { LandingContent } from "./types";

const condo: LandingContent = {
  id: "condo",
  status: "draft",
  updated: "2026-11-25",
  scene: "condo",
  hero: {
    file: "condo-full.webp",
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
    "home",
    "flood",
    "auto",
    "renters"
  ],
  copy: {
    en: {
      seo: {
        title: "Condo Insurance (HO-6), Explained | Ativa Insurance",
        description: "How a condo policy works with the association's master policy: interior, belongings, liability and loss assessment. An independent agency compares."
      },
      h1: "Condo insurance",
      sub: "Condo insurance (HO-6) covers what the association's master policy doesn't: the inside of your unit, your belongings and your liability.",
      cta: "Get a quote",
      alt: "Modern condo building with glass balconies at golden hour",
      quickQ: "What is condo insurance?",
      quick: "Condo insurance (HO-6) covers what the association's master policy doesn't: the inside of your unit, your belongings and your liability. The master policy covers the building and shared areas. Where one ends and the other begins is set by the association's governing documents.",
      explorer: {
        title: "Two policies, one building",
        lead: "Start with the association's master policy, then select what your own condo policy adds.",
        legend: "Requirements, policy forms and terms differ by state. A licensed agent confirms what applies in yours.",
        items: [
          {
            t: "Association's master policy",
            d: "Bought by the association. Covers the building structure and common areas such as the roof, lobby and pool. It is not your policy.",
            rows: [
              {
                k: "Example",
                v: "Hail damages the building's roof."
              }
            ]
          },
          {
            t: "Interior improvements",
            d: "The inside of your unit that you're responsible for, such as flooring, cabinets and fixtures. How far this goes depends on the association's documents.",
            rows: [
              {
                k: "Example",
                v: "A leak ruins your kitchen cabinets and flooring."
              }
            ]
          },
          {
            t: "Personal property",
            d: "Your furniture, clothing, electronics and other belongings.",
            rows: [
              {
                k: "Example",
                v: "A burglary while you're traveling."
              }
            ]
          },
          {
            t: "Personal liability",
            d: "Injury or damage to others that you're legally responsible for.",
            rows: [
              {
                k: "Example",
                v: "Your washing machine hose fails and floods the unit below."
              }
            ]
          },
          {
            t: "Loss assessment",
            d: "Helps pay your share when the association bills owners for a covered loss to shared property.",
            rows: [
              {
                k: "Example",
                v: "The association assesses each owner after storm damage exceeds the master policy."
              }
            ]
          },
          {
            t: "Additional living expenses",
            d: "Extra costs to live elsewhere while your unit is repaired after a covered loss.",
            rows: [
              {
                k: "Example",
                v: "A short-term rental during repairs."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "A pipe inside your wall bursts and damages your floors and the unit below.",
          parts: [
            "Interior improvements",
            "Personal liability"
          ],
          d: "Who pays for what depends on the association's documents and where the pipe is. Your policy can respond to your interior and your liability."
        },
        {
          t: "A storm damages the roof and the association bills each owner.",
          parts: [
            "Loss assessment"
          ],
          d: "Loss assessment coverage can help with your share, up to its limit."
        }
      ],
      myths: [
        {
          m: "The association's insurance covers my unit.",
          f: "The master policy covers the building and common areas. Your interior finishes, belongings and liability usually aren't included."
        },
        {
          m: "All master policies work the same way.",
          f: "Some cover only the bare walls, others include original fixtures. The association's documents say which, and that changes what you need."
        }
      ],
      notCovered: [
        "Flood",
        "Wear and maintenance",
        "Damage covered by the master policy",
        "Assessments for non-covered reasons, such as planned upgrades"
      ],
      who: [
        {
          t: "Condo owners with a mortgage",
          d: "Lenders typically require an HO-6 policy."
        },
        {
          t: "Owners who rent out the unit",
          d: "A rented unit needs a different form."
        },
        {
          t: "Townhome owners in an association",
          d: "Depends on what the association insures."
        }
      ],
      factors: [
        "What the master policy covers",
        "Value of interior improvements",
        "Personal property amount",
        "Location and building age",
        "Deductible"
      ],
      faq: [
        {
          q: "How do I know what the master policy covers?",
          a: "Ask the association or property manager for the master policy and the governing documents. An agent can read them with you."
        },
        {
          q: "How much dwelling coverage do I need on a condo policy?",
          a: "Enough to rebuild the interior you're responsible for. That depends on the association's documents and the finishes in your unit."
        },
        {
          q: "Does condo insurance cover flood?",
          a: "No. Flood needs a separate policy, for the building and for your unit's contents."
        }
      ]
    },
    pt: {
      seo: {
        title: "Seguro de condomínio (HO-6), explicado | Ativa Insurance",
        description: "Como a apólice de condo (HO-6) se soma à apólice master da associação: interior, pertences, responsabilidade civil e loss assessment. Agência independente."
      },
      h1: "Seguro de condomínio",
      sub: "O seguro de condomínio (HO-6) cobre o que a apólice master da associação não cobre: o interior da sua unidade, os seus pertences e a sua responsabilidade civil.",
      cta: "Fazer cotação",
      alt: "Prédio de condomínio moderno com varandas de vidro ao entardecer",
      quickQ: "O que é seguro de condomínio?",
      quick: "O seguro de condomínio (HO-6) cobre o que a apólice master da associação não cobre: o interior da sua unidade, os seus pertences e a sua responsabilidade civil. A apólice master cobre o prédio e as áreas comuns. Onde uma termina e a outra começa é definido pelos documentos da associação.",
      explorer: {
        title: "Duas apólices, um prédio",
        lead: "Comece pela apólice master da associação e depois selecione o que a sua apólice de condomínio acrescenta.",
        legend: "Exigências, formulários e termos mudam de estado para estado. Um agente licenciado confirma o que vale no seu.",
        items: [
          {
            t: "Apólice master da associação",
            d: "Contratada pela associação. Cobre a estrutura do prédio e as áreas comuns, como telhado, lobby e piscina. Não é a sua apólice.",
            rows: [
              {
                k: "Exemplo",
                v: "Granizo danifica o telhado do prédio."
              }
            ]
          },
          {
            t: "Benfeitorias internas",
            d: "O interior da unidade que é de sua responsabilidade, como pisos, armários e acabamentos. Até onde vai depende dos documentos da associação.",
            rows: [
              {
                k: "Exemplo",
                v: "Um vazamento estraga os armários e o piso da cozinha."
              }
            ],
            term: "interior improvements"
          },
          {
            t: "Bens pessoais",
            d: "Seus móveis, roupas, eletrônicos e demais pertences.",
            rows: [
              {
                k: "Exemplo",
                v: "Um arrombamento enquanto você está viajando."
              }
            ],
            term: "personal property"
          },
          {
            t: "Responsabilidade civil pessoal",
            d: "Lesões ou danos a terceiros pelos quais você é legalmente responsável.",
            rows: [
              {
                k: "Exemplo",
                v: "A mangueira da máquina de lavar rompe e alaga a unidade de baixo."
              }
            ],
            term: "personal liability"
          },
          {
            t: "Rateio de prejuízos (loss assessment)",
            d: "Ajuda a pagar a sua parte quando a associação cobra dos proprietários um sinistro coberto em área comum.",
            rows: [
              {
                k: "Exemplo",
                v: "A associação rateia entre os proprietários os danos de uma tempestade que superaram a apólice master."
              }
            ]
          },
          {
            t: "Despesas extras de moradia",
            d: "Custos adicionais para morar em outro lugar enquanto a unidade é consertada após um sinistro coberto.",
            rows: [
              {
                k: "Exemplo",
                v: "Um aluguel de curta duração durante a obra."
              }
            ],
            term: "additional living expenses"
          }
        ]
      },
      scenarios: [
        {
          t: "Um cano dentro da sua parede estoura e danifica o seu piso e a unidade de baixo.",
          parts: [
            "Benfeitorias internas",
            "Responsabilidade civil pessoal"
          ],
          d: "Quem paga o quê depende dos documentos da associação e de onde fica o cano. A sua apólice pode responder pelo interior da unidade e pela sua responsabilidade."
        },
        {
          t: "Uma tempestade danifica o telhado e a associação cobra cada proprietário.",
          parts: [
            "Rateio de prejuízos"
          ],
          d: "A cobertura de rateio pode ajudar com a sua parte, até o limite contratado."
        }
      ],
      myths: [
        {
          m: "O seguro da associação cobre a minha unidade.",
          f: "A apólice master cobre o prédio e as áreas comuns. Os acabamentos internos, os seus pertences e a sua responsabilidade civil normalmente ficam de fora."
        },
        {
          m: "Todas as apólices master funcionam do mesmo jeito.",
          f: "Algumas cobrem só as paredes nuas, outras incluem os acabamentos originais. Os documentos da associação dizem qual é o caso, e isso muda o que você precisa."
        }
      ],
      notCovered: [
        "Enchente",
        "Desgaste e manutenção",
        "Danos cobertos pela apólice master",
        "Rateios por motivos não cobertos, como melhorias planejadas"
      ],
      who: [
        {
          t: "Proprietários de condo com financiamento",
          d: "Os bancos normalmente exigem uma apólice HO-6."
        },
        {
          t: "Proprietários que alugam a unidade",
          d: "Uma unidade alugada precisa de outro tipo de apólice."
        },
        {
          t: "Donos de townhome em associação",
          d: "Depende do que a associação segura."
        }
      ],
      factors: [
        "O que a apólice master cobre",
        "Valor das benfeitorias internas",
        "Valor dos bens pessoais",
        "Localização e idade do prédio",
        "Franquia"
      ],
      faq: [
        {
          q: "Como saber o que a apólice master cobre?",
          a: "Peça à associação ou à administradora a apólice master e os documentos do condomínio. Um agente pode ler com você."
        },
        {
          q: "Quanto de cobertura de estrutura eu preciso na apólice de condo?",
          a: "O suficiente para reconstruir o interior que é de sua responsabilidade. Isso depende dos documentos da associação e dos acabamentos da unidade."
        },
        {
          q: "O seguro de condomínio cobre enchente?",
          a: "Não. Enchente exige uma apólice à parte, para o prédio e para o conteúdo da sua unidade."
        }
      ]
    },
    es: {
      seo: {
        title: "Seguro de condominio (HO-6), explicado | Ativa Insurance",
        description: "Cómo la póliza de condominio (HO-6) se suma a la póliza maestra: interior, pertenencias, responsabilidad civil y loss assessment. Agencia independiente."
      },
      h1: "Seguro de condominio",
      sub: "El seguro de condominio (HO-6) cubre lo que la póliza maestra de la asociación no cubre: el interior de su unidad, sus pertenencias y su responsabilidad civil.",
      cta: "Cotizar",
      alt: "Edificio de condominios moderno con balcones de vidrio al atardecer",
      quickQ: "¿Qué es el seguro de condominio?",
      quick: "El seguro de condominio (HO-6) cubre lo que la póliza maestra de la asociación no cubre: el interior de su unidad, sus pertenencias y su responsabilidad civil. La póliza maestra cubre el edificio y las áreas comunes. Dónde termina una y empieza la otra lo definen los documentos de la asociación.",
      explorer: {
        title: "Dos pólizas, un edificio",
        lead: "Empiece por la póliza maestra de la asociación y luego seleccione lo que agrega su propia póliza de condominio.",
        legend: "Los requisitos, formularios y términos cambian según el estado. Un agente con licencia confirma lo que aplica en el suyo.",
        items: [
          {
            t: "Póliza maestra de la asociación",
            d: "La contrata la asociación. Cubre la estructura del edificio y las áreas comunes, como el techo, el lobby y la piscina. No es su póliza.",
            rows: [
              {
                k: "Ejemplo",
                v: "El granizo daña el techo del edificio."
              }
            ]
          },
          {
            t: "Mejoras interiores",
            d: "El interior de su unidad que le corresponde a usted, como pisos, gabinetes y accesorios. Hasta dónde llega depende de los documentos de la asociación.",
            rows: [
              {
                k: "Ejemplo",
                v: "Una filtración arruina los gabinetes y el piso de su cocina."
              }
            ],
            term: "interior improvements"
          },
          {
            t: "Bienes personales",
            d: "Sus muebles, ropa, aparatos electrónicos y demás pertenencias.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un robo mientras usted está de viaje."
              }
            ],
            term: "personal property"
          },
          {
            t: "Responsabilidad civil personal",
            d: "Lesiones o daños a otras personas de los que usted es legalmente responsable.",
            rows: [
              {
                k: "Ejemplo",
                v: "La manguera de su lavadora falla e inunda la unidad de abajo."
              }
            ],
            term: "personal liability"
          },
          {
            t: "Cuotas extraordinarias (loss assessment)",
            d: "Ayuda a pagar su parte cuando la asociación cobra a los propietarios una pérdida cubierta en áreas comunes.",
            rows: [
              {
                k: "Ejemplo",
                v: "La asociación cobra a cada propietario después de que los daños de una tormenta superan la póliza maestra."
              }
            ]
          },
          {
            t: "Gastos adicionales de vivienda",
            d: "Costos extra para vivir en otro lugar mientras reparan su unidad después de una pérdida cubierta.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un alquiler temporal durante las reparaciones."
              }
            ],
            term: "additional living expenses"
          }
        ]
      },
      scenarios: [
        {
          t: "Una tubería dentro de su pared se rompe y daña sus pisos y la unidad de abajo.",
          parts: [
            "Mejoras interiores",
            "Responsabilidad civil personal"
          ],
          d: "Quién paga qué depende de los documentos de la asociación y de dónde está la tubería. Su póliza puede responder por su interior y por su responsabilidad."
        },
        {
          t: "Una tormenta daña el techo y la asociación le cobra a cada propietario.",
          parts: [
            "Cuotas extraordinarias"
          ],
          d: "La cobertura de cuotas extraordinarias puede ayudar con su parte, hasta su límite."
        }
      ],
      myths: [
        {
          m: "El seguro de la asociación cubre mi unidad.",
          f: "La póliza maestra cubre el edificio y las áreas comunes. Los acabados interiores, sus pertenencias y su responsabilidad civil por lo general no están incluidos."
        },
        {
          m: "Todas las pólizas maestras funcionan igual.",
          f: "Algunas cubren solo las paredes desnudas, otras incluyen los accesorios originales. Los documentos de la asociación dicen cuál es el caso, y eso cambia lo que usted necesita."
        }
      ],
      notCovered: [
        "Inundación",
        "Desgaste y mantenimiento",
        "Daños cubiertos por la póliza maestra",
        "Cuotas por motivos no cubiertos, como mejoras planificadas"
      ],
      who: [
        {
          t: "Propietarios de condominio con hipoteca",
          d: "Los bancos normalmente exigen una póliza HO-6."
        },
        {
          t: "Propietarios que alquilan la unidad",
          d: "Una unidad alquilada necesita otro tipo de póliza."
        },
        {
          t: "Dueños de townhomes en una asociación",
          d: "Depende de lo que asegure la asociación."
        }
      ],
      factors: [
        "Lo que cubre la póliza maestra",
        "Valor de las mejoras interiores",
        "Monto de bienes personales",
        "Ubicación y antigüedad del edificio",
        "Deducible"
      ],
      faq: [
        {
          q: "¿Cómo sé qué cubre la póliza maestra?",
          a: "Pida a la asociación o al administrador la póliza maestra y los documentos del condominio. Un agente puede revisarlos con usted."
        },
        {
          q: "¿Cuánta cobertura de estructura necesito en una póliza de condominio?",
          a: "La suficiente para reconstruir el interior que le corresponde. Eso depende de los documentos de la asociación y de los acabados de su unidad."
        },
        {
          q: "¿El seguro de condominio cubre inundaciones?",
          a: "No. La inundación requiere una póliza aparte, para el edificio y para el contenido de su unidad."
        }
      ]
    }
  }
};

export default condo;
