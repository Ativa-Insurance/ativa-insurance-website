// Flood insurance landing page. DRAFT: needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Source copy: design/claude-design/site-v2/source (lib/ativa-landing.js products, i18n/pages.js
// ATIVA_LANDING, i18n/landing.pt.js / landing.es.js). Explorer footnote = the design's state note.
// Changes from the design copy, under the content rules (sources checked on floodsmart.gov and fema.gov):
// - Building/contents, the 30-day NFIP wait, the definition of a flood and the NFIP exclusions link to
//   FloodSmart "Buy a policy". The lender requirement uses FEMA's wording ("government-backed lenders").
// - Removed "moisture or mold that could have been prevented": no official page states that exclusion.
// - "Most contents in basements" -> "personal property kept in basements" (FloodSmart's wording).
// - "Optional, and often lower in cost" (outside high-risk zones) -> no price claim.
// - The homeowners exclusion names home and renters policies as FloodSmart does; condo is said generally.
// - Added FAQ "Is flood insurance required?" built only from the FEMA and FloodSmart statements.
// - Hero description = first sentence of the quick answer and button = "Get a quote".

import type { LandingContent, Source } from "./types";

const FS_BUY: Source = { label: "FloodSmart (NFIP), Buy a policy", href: "https://www.floodsmart.gov/get-insured/buy-a-policy" };
const FEMA_FI: Source = { label: "FEMA, Flood insurance", href: "https://www.fema.gov/flood-insurance" };
const FS_FLOOD: Source = { label: "FloodSmart (NFIP), What is a flood?", href: "https://www.floodsmart.gov/know-your-risk/what-is-a-flood" };

const flood: LandingContent = {
  id: "flood",
  status: "draft",
  updated: "2026-11-25",
  scene: "flood",
  hero: {
    file: "flood-full.webp",
    layout: "partial",
    imgW: "66%",
    subW: "38ch",
    side: "left",
    mdH: 420,
    w: 1774,
    h: 887,
    pos: {
      lg: "55% 20%",
      md: "55% 50%",
      sm: "55% 50%"
    }
  },
  related: [
    "home",
    "condo",
    "renters",
    "auto"
  ],
  copy: {
    en: {
      seo: {
        title: "Flood Insurance, Explained | Ativa Insurance",
        description: "Flood is excluded from most home and renters policies. How building and contents coverage work, NFIP or private, and the usual waiting period."
      },
      h1: "Flood insurance",
      sub: "Flood insurance covers damage from rising water, which standard home, condo and renters policies exclude.",
      cta: "Get a quote",
      alt: "Two-story home surrounded by floodwater, with sandbags at the entrance",
      quickQ: "What is flood insurance?",
      quick: "Flood insurance covers damage from rising water, which standard home, condo and renters policies exclude. It is sold as two separate coverages: building and contents. Policies come from the National Flood Insurance Program or private carriers, and there is usually a waiting period before coverage starts.",
      explorer: {
        title: "Watch the water rise",
        lead: "Select a part of the house to see how flood water reaches it and which coverage applies.",
        legend: "Requirements, policy forms and terms differ by state. A licensed agent confirms what applies in yours.",
        items: [
          {
            t: "Building structure",
            d: "Foundation, walls, floors and built-in cabinets.",
            rows: [
              {
                k: "Falls under",
                v: "Building coverage"
              },
              {
                k: "Example",
                v: "Drywall and flooring that have to be torn out after water sits in the house."
              }
            ],
            sources: [FS_BUY]
          },
          {
            t: "Electrical systems",
            d: "Wiring, outlets and the electrical panel.",
            rows: [
              {
                k: "Falls under",
                v: "Building coverage"
              },
              {
                k: "Example",
                v: "Outlets and wiring submerged along the first floor."
              }
            ],
            sources: [FS_BUY]
          },
          {
            t: "HVAC",
            d: "Furnace, water heater and central air equipment.",
            rows: [
              {
                k: "Falls under",
                v: "Building coverage"
              },
              {
                k: "Example",
                v: "An outdoor condenser unit under water."
              }
            ],
            sources: [FS_BUY]
          },
          {
            t: "Appliances",
            d: "Built-in appliances count as building. A washer, dryer or freezer you can move usually counts as contents.",
            rows: [
              {
                k: "Falls under",
                v: "Building or contents, depending on the appliance"
              },
              {
                k: "Example",
                v: "A washer and dryer on the ground floor."
              }
            ],
            sources: [FS_BUY]
          },
          {
            t: "Personal belongings",
            d: "Furniture, clothing and electronics. Covered only if you buy contents coverage.",
            rows: [
              {
                k: "Falls under",
                v: "Contents coverage"
              },
              {
                k: "Example",
                v: "A sofa and rugs soaked by a few inches of water."
              }
            ],
            sources: [FS_BUY]
          }
        ]
      },
      scenarios: [
        {
          t: "Heavy rain overwhelms the street drains and water enters the ground floor.",
          parts: [
            "Building coverage",
            "Contents coverage"
          ],
          d: "This is flood. A homeowners policy typically won't respond; a flood policy can."
        },
        {
          t: "A storm pushes water from the coast into your neighborhood.",
          parts: [
            "Building coverage",
            "Contents coverage"
          ],
          d: "Storm surge is treated as flood, even when it comes with a hurricane."
        }
      ],
      myths: [
        {
          m: "My homeowners policy covers flood.",
          f: "Most home and renters policies don't cover flood damage, and condo policies generally exclude it too. Flood needs its own policy."
        },
        {
          m: "I'm not in a flood zone, so I don't need it.",
          f: "Floods happen outside high-risk zones too. Being outside one usually means the lender doesn't require the policy, not that the risk is zero."
        },
        {
          m: "I can buy it when a storm is coming.",
          f: "Most flood policies have a waiting period before they take effect, commonly 30 days under the NFIP."
        }
      ],
      notCovered: [
        "Personal property kept in basements",
        "Landscaping, decks, fences and pools outside the building",
        "Temporary housing, under NFIP policies",
        "Vehicles, which fall under auto comprehensive"
      ],
      who: [
        {
          t: "Owners in high-risk flood zones",
          d: "Homes in high-risk flood areas with a mortgage from a government-backed lender must carry it."
        },
        {
          t: "Owners outside those zones",
          d: "The lender may not require it, but floods also happen outside high-risk zones."
        },
        {
          t: "Renters and condo owners",
          d: "Contents coverage is available without owning the building."
        }
      ],
      factors: [
        "Flood zone and distance to water",
        "Elevation of the lowest floor",
        "Building age and foundation type",
        "Coverage amounts for building and contents",
        "Deductible",
        "NFIP or private carrier"
      ],
      faq: [
        {
          q: "What counts as a flood?",
          a: "Generally, water covering normally dry land from overflow, heavy rain, storm surge or runoff. A burst pipe inside the house is not flood.",
          sources: [FS_BUY]
        },
        {
          q: "Are building and contents one policy?",
          a: "They are separate coverages with separate limits and deductibles. You can buy one or both.",
          sources: [FS_BUY]
        },
        {
          q: "How long before coverage starts?",
          a: "NFIP policies usually take effect 30 days after purchase, with some exceptions. Private carriers set their own waiting periods.",
          sources: [FS_BUY]
        },
        {
          q: "Is flood insurance required?",
          a: "It's required for homes in high-risk flood areas with a mortgage from a government-backed lender. Elsewhere it's usually optional, although floods also happen outside high-risk zones.",
          sources: [FEMA_FI, FS_FLOOD]
        }
      ]
    },
    pt: {
      seo: {
        title: "Seguro contra enchente, explicado | Ativa Insurance",
        description: "Enchente fica fora da maioria das apólices de casa e inquilino. Como funcionam as coberturas de estrutura e conteúdo, NFIP ou privada, e a carência."
      },
      h1: "Seguro contra enchente",
      sub: "O seguro contra enchente (flood) cobre danos causados por água que sobe, o que as apólices padrão de casa, condomínio e inquilino excluem.",
      cta: "Fazer cotação",
      alt: "Casa de dois andares cercada por água de enchente, com sacos de areia na entrada",
      quickQ: "O que é seguro contra enchente?",
      quick: "O seguro contra enchente (flood) cobre danos causados por água que sobe, o que as apólices padrão de casa, condomínio e inquilino excluem. Ele é vendido como duas coberturas separadas: estrutura (building) e conteúdo (contents). As apólices vêm do National Flood Insurance Program (NFIP) ou de seguradoras privadas, e em geral há um período de carência antes de a cobertura começar.",
      explorer: {
        title: "Veja a água subir",
        lead: "Selecione uma parte da casa para ver como a água da enchente chega até ela e qual cobertura se aplica.",
        legend: "Exigências, formulários e termos mudam de estado para estado. Um agente licenciado confirma o que vale no seu.",
        items: [
          {
            t: "Estrutura do imóvel",
            d: "Fundação, paredes, pisos e armários embutidos.",
            rows: [
              {
                k: "Entra em",
                v: "Cobertura de estrutura (building)"
              },
              {
                k: "Exemplo",
                v: "Drywall e piso que precisam ser arrancados depois que a água fica parada dentro de casa."
              }
            ],
            sources: [FS_BUY]
          },
          {
            t: "Sistema elétrico",
            d: "Fiação, tomadas e quadro de energia.",
            rows: [
              {
                k: "Entra em",
                v: "Cobertura de estrutura (building)"
              },
              {
                k: "Exemplo",
                v: "Tomadas e fiação submersas no térreo."
              }
            ],
            sources: [FS_BUY]
          },
          {
            t: "Climatização (HVAC)",
            d: "Aquecedor, aquecedor de água e equipamento de ar-condicionado central.",
            rows: [
              {
                k: "Entra em",
                v: "Cobertura de estrutura (building)"
              },
              {
                k: "Exemplo",
                v: "A condensadora externa debaixo d'água."
              }
            ],
            sources: [FS_BUY]
          },
          {
            t: "Eletrodomésticos",
            d: "Eletrodomésticos embutidos contam como estrutura. Lavadora, secadora ou freezer que você pode levar embora normalmente contam como conteúdo.",
            rows: [
              {
                k: "Entra em",
                v: "Estrutura ou conteúdo, conforme o aparelho"
              },
              {
                k: "Exemplo",
                v: "Lavadora e secadora no térreo."
              }
            ],
            sources: [FS_BUY]
          },
          {
            t: "Pertences pessoais",
            d: "Móveis, roupas e eletrônicos. Só são cobertos se você contratar a cobertura de conteúdo.",
            rows: [
              {
                k: "Entra em",
                v: "Cobertura de conteúdo (contents)"
              },
              {
                k: "Exemplo",
                v: "Um sofá e tapetes encharcados por alguns centímetros de água."
              }
            ],
            sources: [FS_BUY]
          }
        ]
      },
      scenarios: [
        {
          t: "Uma chuva forte sobrecarrega os bueiros e a água entra no térreo.",
          parts: [
            "Cobertura de estrutura",
            "Cobertura de conteúdo"
          ],
          d: "Isso é enchente. A apólice residencial normalmente não responde; a apólice de enchente pode responder."
        },
        {
          t: "Uma tempestade empurra a água do mar para dentro do seu bairro.",
          parts: [
            "Cobertura de estrutura",
            "Cobertura de conteúdo"
          ],
          d: "A maré de tempestade (storm surge) é tratada como enchente, mesmo quando vem com um furacão."
        }
      ],
      myths: [
        {
          m: "Minha apólice residencial cobre enchente.",
          f: "A maioria das apólices de casa e de inquilino não cobre danos de enchente, e as de condomínio em geral também excluem. Enchente exige uma apólice própria."
        },
        {
          m: "Não estou em zona de enchente, então não preciso.",
          f: "Enchentes também acontecem fora das zonas de alto risco. Estar fora delas normalmente significa que o banco não exige a apólice, não que o risco seja zero."
        },
        {
          m: "Posso contratar quando a tempestade estiver chegando.",
          f: "A maioria das apólices de enchente tem carência antes de entrar em vigor, normalmente de 30 dias no NFIP."
        }
      ],
      notCovered: [
        "Bens pessoais guardados em porões",
        "Jardins, decks, cercas e piscinas fora do imóvel",
        "Moradia temporária, nas apólices do NFIP",
        "Veículos, que entram no comprehensive do seguro de auto"
      ],
      who: [
        {
          t: "Proprietários em zonas de alto risco",
          d: "Imóveis em áreas de alto risco com financiamento de um credor garantido pelo governo precisam ter."
        },
        {
          t: "Proprietários fora dessas zonas",
          d: "O banco pode não exigir, mas enchentes também acontecem fora das zonas de alto risco."
        },
        {
          t: "Inquilinos e donos de condo",
          d: "A cobertura de conteúdo está disponível mesmo para quem não é dono do prédio."
        }
      ],
      factors: [
        "Zona de enchente e distância da água",
        "Elevação do piso mais baixo",
        "Idade do imóvel e tipo de fundação",
        "Valores de cobertura de estrutura e de conteúdo",
        "Franquia",
        "NFIP ou seguradora privada"
      ],
      faq: [
        {
          q: "O que conta como enchente?",
          a: "Em geral, água cobrindo um terreno normalmente seco por transbordamento, chuva forte, maré de tempestade ou enxurrada. Um cano estourado dentro de casa não é enchente.",
          sources: [FS_BUY]
        },
        {
          q: "Estrutura e conteúdo são uma apólice só?",
          a: "São coberturas separadas, com limites e franquias separados. Você pode contratar uma ou as duas.",
          sources: [FS_BUY]
        },
        {
          q: "Quanto tempo até a cobertura começar?",
          a: "As apólices do NFIP normalmente entram em vigor 30 dias após a contratação, com algumas exceções. As seguradoras privadas definem a própria carência.",
          sources: [FS_BUY]
        },
        {
          q: "O seguro contra enchente é obrigatório?",
          a: "É obrigatório para imóveis em áreas de alto risco com financiamento de um credor garantido pelo governo. Fora delas costuma ser opcional, embora enchentes também aconteçam fora das zonas de alto risco.",
          sources: [FEMA_FI, FS_FLOOD]
        }
      ]
    },
    es: {
      seo: {
        title: "Seguro contra inundaciones, explicado | Ativa Insurance",
        description: "La inundación queda fuera de la mayoría de pólizas de vivienda e inquilinos. Cómo funcionan edificio y contenido, NFIP o privada, y el período de espera."
      },
      h1: "Seguro contra inundaciones",
      sub: "El seguro contra inundaciones (flood) cubre los daños causados por agua que sube, algo que las pólizas estándar de vivienda, condominio e inquilinos excluyen.",
      cta: "Cotizar",
      alt: "Casa de dos pisos rodeada de agua de inundación, con sacos de arena en la entrada",
      quickQ: "¿Qué es el seguro contra inundaciones?",
      quick: "El seguro contra inundaciones (flood) cubre los daños causados por agua que sube, algo que las pólizas estándar de vivienda, condominio e inquilinos excluyen. Se vende como dos coberturas separadas: edificio (building) y contenido (contents). Las pólizas provienen del National Flood Insurance Program (NFIP) o de aseguradoras privadas, y normalmente hay un período de espera antes de que empiece la cobertura.",
      explorer: {
        title: "Vea cómo sube el agua",
        lead: "Seleccione una parte de la casa para ver cómo la alcanza el agua de la inundación y qué cobertura se aplica.",
        legend: "Los requisitos, formularios y términos cambian según el estado. Un agente con licencia confirma lo que aplica en el suyo.",
        items: [
          {
            t: "Estructura del edificio",
            d: "Cimientos, paredes, pisos y gabinetes empotrados.",
            rows: [
              {
                k: "Corresponde a",
                v: "Cobertura de edificio (building)"
              },
              {
                k: "Ejemplo",
                v: "Paneles de yeso y pisos que hay que arrancar después de que el agua queda estancada en la casa."
              }
            ],
            sources: [FS_BUY]
          },
          {
            t: "Sistema eléctrico",
            d: "Cableado, tomacorrientes y panel eléctrico.",
            rows: [
              {
                k: "Corresponde a",
                v: "Cobertura de edificio (building)"
              },
              {
                k: "Ejemplo",
                v: "Tomacorrientes y cableado sumergidos en el primer piso."
              }
            ],
            sources: [FS_BUY]
          },
          {
            t: "Climatización (HVAC)",
            d: "Calefacción, calentador de agua y equipo de aire acondicionado central.",
            rows: [
              {
                k: "Corresponde a",
                v: "Cobertura de edificio (building)"
              },
              {
                k: "Ejemplo",
                v: "La unidad condensadora exterior bajo el agua."
              }
            ],
            sources: [FS_BUY]
          },
          {
            t: "Electrodomésticos",
            d: "Los electrodomésticos empotrados cuentan como edificio. Una lavadora, secadora o congelador que usted puede llevarse normalmente cuenta como contenido.",
            rows: [
              {
                k: "Corresponde a",
                v: "Edificio o contenido, según el aparato"
              },
              {
                k: "Ejemplo",
                v: "Una lavadora y una secadora en la planta baja."
              }
            ],
            sources: [FS_BUY]
          },
          {
            t: "Pertenencias personales",
            d: "Muebles, ropa y aparatos electrónicos. Solo están cubiertos si usted compra la cobertura de contenido.",
            rows: [
              {
                k: "Corresponde a",
                v: "Cobertura de contenido (contents)"
              },
              {
                k: "Ejemplo",
                v: "Un sofá y alfombras empapados por unas pulgadas de agua."
              }
            ],
            sources: [FS_BUY]
          }
        ]
      },
      scenarios: [
        {
          t: "Una lluvia fuerte desborda los desagües de la calle y el agua entra a la planta baja.",
          parts: [
            "Cobertura de edificio",
            "Cobertura de contenido"
          ],
          d: "Esto es inundación. La póliza de vivienda normalmente no responde; la póliza de inundación puede hacerlo."
        },
        {
          t: "Una tormenta empuja el agua de la costa hacia su vecindario.",
          parts: [
            "Cobertura de edificio",
            "Cobertura de contenido"
          ],
          d: "La marejada ciclónica (storm surge) se trata como inundación, aunque llegue con un huracán."
        }
      ],
      myths: [
        {
          m: "Mi póliza de vivienda cubre inundaciones.",
          f: "La mayoría de las pólizas de vivienda y de inquilinos no cubre daños por inundación, y las de condominio en general también la excluyen. La inundación necesita su propia póliza."
        },
        {
          m: "No estoy en zona de inundación, así que no lo necesito.",
          f: "Las inundaciones también ocurren fuera de las zonas de alto riesgo. Estar fuera de ellas normalmente significa que el banco no exige la póliza, no que el riesgo sea cero."
        },
        {
          m: "Puedo comprarlo cuando se acerque una tormenta.",
          f: "La mayoría de las pólizas de inundación tiene un período de espera antes de entrar en vigor, normalmente de 30 días en el NFIP."
        }
      ],
      notCovered: [
        "Bienes personales guardados en sótanos",
        "Jardines, terrazas, cercas y piscinas fuera del edificio",
        "Alojamiento temporal, en las pólizas del NFIP",
        "Vehículos, que entran en el comprehensive del seguro de auto"
      ],
      who: [
        {
          t: "Propietarios en zonas de alto riesgo",
          d: "Las viviendas en zonas de alto riesgo con préstamo de un prestamista respaldado por el gobierno deben tenerlo."
        },
        {
          t: "Propietarios fuera de esas zonas",
          d: "El banco puede no exigirlo, pero las inundaciones también ocurren fuera de las zonas de alto riesgo."
        },
        {
          t: "Inquilinos y dueños de condominios",
          d: "La cobertura de contenido está disponible sin ser dueño del edificio."
        }
      ],
      factors: [
        "Zona de inundación y distancia al agua",
        "Elevación del piso más bajo",
        "Antigüedad del edificio y tipo de cimientos",
        "Montos de cobertura de edificio y de contenido",
        "Deducible",
        "NFIP o aseguradora privada"
      ],
      faq: [
        {
          q: "¿Qué se considera inundación?",
          a: "En general, agua que cubre un terreno normalmente seco por desbordamiento, lluvia intensa, marejada ciclónica o escorrentía. Una tubería rota dentro de la casa no es inundación.",
          sources: [FS_BUY]
        },
        {
          q: "¿Edificio y contenido son una sola póliza?",
          a: "Son coberturas separadas, con límites y deducibles separados. Usted puede comprar una o las dos.",
          sources: [FS_BUY]
        },
        {
          q: "¿Cuánto tarda en empezar la cobertura?",
          a: "Las pólizas del NFIP normalmente entran en vigor 30 días después de la compra, con algunas excepciones. Las aseguradoras privadas fijan sus propios períodos de espera.",
          sources: [FS_BUY]
        },
        {
          q: "¿El seguro contra inundaciones es obligatorio?",
          a: "Es obligatorio para viviendas en zonas de alto riesgo con préstamo de un prestamista respaldado por el gobierno. En otras zonas suele ser opcional, aunque las inundaciones también ocurren fuera de las zonas de alto riesgo.",
          sources: [FEMA_FI, FS_FLOOD]
        }
      ]
    }
  }
};

export default flood;
