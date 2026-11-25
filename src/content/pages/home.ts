// Homeowners insurance landing page. DRAFT: needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Source copy: design/claude-design/site-v2/source (lib/ativa-landing.js products, i18n/pages.js
// ATIVA_LANDING, i18n/landing.pt.js / landing.es.js). Explorer footnote = the design's state note.
// Changes from the design copy, under the content rules:
// - "Is it required by law?" is written generally ("generally", "usually").
// - PT/ES: the English policy term shows beside the explorer item title (term field).

import type { LandingContent } from "./types";

const home: LandingContent = {
  id: "home",
  status: "draft",
  updated: "2026-11-25",
  scene: "home",
  hero: {
    file: "home-full.webp",
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
    "auto",
    "flood",
    "condo",
    "renters"
  ],
  copy: {
    en: {
      seo: {
        title: "Homeowners Insurance, Explained | Ativa Insurance",
        description: "What a homeowners policy covers: dwelling, other structures, belongings, loss of use and liability. An independent agency compares carriers for you."
      },
      h1: "Homeowners insurance",
      sub: "Coverage for the home you own. Share a few details about the property, and a licensed agent compares options for you.",
      cta: "Get My Home Insurance Quote",
      alt: "Two-story suburban home with a front lawn at golden hour",
      quickQ: "What is homeowners insurance?",
      quick: "Homeowners insurance protects the house you own, the things inside it and your responsibility to others. It typically pays to repair or rebuild after covered events such as fire or wind, and covers liability if someone is hurt on your property. Flood is not included and needs its own policy.",
      explorer: {
        title: "Walk through the house",
        lead: "Each part of the picture is one part of a homeowners policy. Select one to see what it does.",
        legend: "Requirements, policy forms and terms differ by state. A licensed agent confirms what applies in yours.",
        items: [
          {
            t: "Dwelling",
            d: "The house itself: walls, roof, floors and built-in systems. Pays to repair or rebuild after a covered loss.",
            rows: [
              {
                k: "Example",
                v: "A kitchen fire damages cabinets, walls and wiring."
              }
            ]
          },
          {
            t: "Other structures",
            d: "Structures on the property that aren't attached to the house.",
            rows: [
              {
                k: "Example",
                v: "A detached garage, shed or fence damaged by a fallen tree."
              }
            ]
          },
          {
            t: "Personal property",
            d: "Your belongings, such as furniture, clothing and electronics. High-value items can have lower sub-limits.",
            rows: [
              {
                k: "Example",
                v: "Furniture and a TV destroyed in a fire."
              }
            ]
          },
          {
            t: "Loss of use",
            d: "Extra living costs while your home can't be lived in after a covered loss.",
            rows: [
              {
                k: "Example",
                v: "Hotel and meals while repairs are done."
              }
            ]
          },
          {
            t: "Personal liability",
            d: "Injury or property damage you're legally responsible for, including legal defense, up to your limit.",
            rows: [
              {
                k: "Example",
                v: "A visitor falls on your steps and sues."
              }
            ]
          },
          {
            t: "Medical payments to others",
            d: "Smaller medical bills for guests hurt on your property, regardless of fault.",
            rows: [
              {
                k: "Example",
                v: "A neighbor's child is hurt playing in your yard."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "A storm tears shingles off the roof and rain damages the ceiling.",
          parts: [
            "Dwelling",
            "Personal property"
          ],
          d: "Wind damage is typically covered. In some coastal areas a separate wind or hurricane deductible applies."
        },
        {
          t: "A pipe bursts while you're away and the floor has to be replaced.",
          parts: [
            "Dwelling",
            "Loss of use"
          ],
          d: "Sudden, accidental water damage is typically covered. Slow leaks and neglected maintenance usually are not."
        },
        {
          t: "A delivery driver slips on your walkway.",
          parts: [
            "Personal liability",
            "Medical payments to others"
          ],
          d: "Medical payments can respond to smaller bills. Liability responds if you're found responsible."
        }
      ],
      myths: [
        {
          m: "Homeowners insurance covers flooding.",
          f: "Standard homeowners policies exclude flood. Flood coverage is bought separately."
        },
        {
          m: "I should insure the house for what I paid for it.",
          f: "The dwelling limit is based on the cost to rebuild, which can differ a lot from market price or your loan balance."
        },
        {
          m: "Everything I own is covered at full value.",
          f: "Items such as jewelry, art and collectibles often have sub-limits unless they're scheduled separately."
        }
      ],
      notCovered: [
        "Flood and rising water",
        "Earth movement such as earthquake or sinkhole, unless added",
        "Wear, rot, mold and deferred maintenance",
        "Business activity run from the home"
      ],
      who: [
        {
          t: "Owners with a mortgage",
          d: "Lenders require the home to be insured for the life of the loan."
        },
        {
          t: "Owners without a mortgage",
          d: "The house is usually a family's largest asset, with or without a lender."
        },
        {
          t: "Landlords",
          d: "A rented house needs a different policy form than one you live in."
        }
      ],
      factors: [
        "Location and exposure to wind or storms",
        "Cost to rebuild the house",
        "Age and condition of the roof",
        "Construction type and updates",
        "Claims history",
        "Deductibles you choose"
      ],
      faq: [
        {
          q: "Does homeowners insurance cover hurricanes?",
          a: "Wind damage is typically covered, often with a separate hurricane or wind deductible in coastal states. Storm surge and flooding are not; that takes a flood policy."
        },
        {
          q: "What's the difference between replacement cost and actual cash value?",
          a: "Replacement cost pays to repair or replace with new materials. Actual cash value subtracts depreciation. Your policy states which one applies to the house, the roof and your belongings."
        },
        {
          q: "Is homeowners insurance required by law?",
          a: "Generally no state law requires it, but mortgage lenders usually do."
        }
      ]
    },
    pt: {
      seo: {
        title: "Seguro residencial, explicado | Ativa Insurance",
        description: "O que cobre a apólice residencial (homeowners): estrutura, outras estruturas, bens, perda de uso e responsabilidade civil. Agência independente."
      },
      h1: "Seguro residencial",
      sub: "Proteção para a casa que é sua. Informe alguns dados do imóvel, e um agente licenciado compara as opções para você.",
      cta: "Fazer minha cotação residencial",
      alt: "Casa de dois andares com gramado na frente ao entardecer",
      quickQ: "O que é seguro residencial?",
      quick: "O seguro residencial (homeowners) protege a casa que é sua, o que está dentro dela e a sua responsabilidade perante terceiros. Normalmente paga o conserto ou a reconstrução após eventos cobertos, como incêndio ou vento, e cobre a responsabilidade civil se alguém se machucar na sua propriedade. Enchente não está incluída e exige uma apólice própria.",
      explorer: {
        title: "Um passeio pela casa",
        lead: "Cada parte da imagem é uma parte da apólice residencial. Selecione uma para ver o que ela faz.",
        legend: "Exigências, formulários e termos mudam de estado para estado. Um agente licenciado confirma o que vale no seu.",
        items: [
          {
            t: "Estrutura da casa (dwelling)",
            d: "A casa em si: paredes, telhado, pisos e sistemas embutidos. Paga o conserto ou a reconstrução após um sinistro coberto.",
            rows: [
              {
                k: "Exemplo",
                v: "Um incêndio na cozinha danifica armários, paredes e fiação."
              }
            ]
          },
          {
            t: "Outras estruturas",
            d: "Construções no terreno que não são ligadas à casa.",
            rows: [
              {
                k: "Exemplo",
                v: "Garagem separada, galpão ou cerca danificados pela queda de uma árvore."
              }
            ],
            term: "other structures"
          },
          {
            t: "Bens pessoais",
            d: "Seus pertences, como móveis, roupas e eletrônicos. Itens de alto valor podem ter sublimites menores.",
            rows: [
              {
                k: "Exemplo",
                v: "Móveis e uma TV destruídos em um incêndio."
              }
            ],
            term: "personal property"
          },
          {
            t: "Perda de uso",
            d: "Custos extras de moradia enquanto a casa não pode ser habitada após um sinistro coberto.",
            rows: [
              {
                k: "Exemplo",
                v: "Hotel e refeições durante a reforma."
              }
            ],
            term: "loss of use"
          },
          {
            t: "Responsabilidade civil pessoal",
            d: "Lesões ou danos materiais pelos quais você é legalmente responsável, incluindo defesa jurídica, até o seu limite.",
            rows: [
              {
                k: "Exemplo",
                v: "Uma visita cai na sua escada e entra com processo."
              }
            ],
            term: "personal liability"
          },
          {
            t: "Despesas médicas de terceiros",
            d: "Pequenas despesas médicas de visitantes que se machucam na sua propriedade, independentemente de culpa.",
            rows: [
              {
                k: "Exemplo",
                v: "O filho do vizinho se machuca brincando no seu quintal."
              }
            ],
            term: "medical payments to others"
          }
        ]
      },
      scenarios: [
        {
          t: "Uma tempestade arranca telhas e a chuva danifica o teto.",
          parts: [
            "Estrutura da casa",
            "Bens pessoais"
          ],
          d: "Danos por vento normalmente são cobertos. Em algumas áreas costeiras vale uma franquia separada para vento ou furacão."
        },
        {
          t: "Um cano estoura enquanto você viaja e o piso precisa ser trocado.",
          parts: [
            "Estrutura da casa",
            "Perda de uso"
          ],
          d: "Danos por água súbitos e acidentais normalmente são cobertos. Vazamentos lentos e falta de manutenção, em geral, não."
        },
        {
          t: "Um entregador escorrega na entrada da sua casa.",
          parts: [
            "Responsabilidade civil pessoal",
            "Despesas médicas de terceiros"
          ],
          d: "As despesas médicas de terceiros podem cobrir contas menores. A responsabilidade civil responde se você for considerado responsável."
        }
      ],
      myths: [
        {
          m: "O seguro residencial cobre enchente.",
          f: "As apólices residenciais padrão excluem enchente. Essa cobertura é contratada à parte."
        },
        {
          m: "Devo segurar a casa pelo valor que paguei por ela.",
          f: "O limite da estrutura se baseia no custo de reconstrução, que pode ser bem diferente do preço de mercado ou do saldo do financiamento."
        },
        {
          m: "Tudo o que tenho está coberto pelo valor total.",
          f: "Itens como joias, obras de arte e coleções costumam ter sublimites, a menos que sejam declarados separadamente."
        }
      ],
      notCovered: [
        "Enchente e água que sobe do solo",
        "Movimentos de terra, como terremoto ou sinkhole, salvo se incluídos",
        "Desgaste, apodrecimento, mofo e falta de manutenção",
        "Atividade comercial exercida na casa"
      ],
      who: [
        {
          t: "Proprietários com financiamento",
          d: "O banco exige que a casa esteja segurada durante todo o financiamento."
        },
        {
          t: "Proprietários sem financiamento",
          d: "A casa costuma ser o maior patrimônio da família, com ou sem banco envolvido."
        },
        {
          t: "Quem aluga a casa para terceiros",
          d: "Uma casa alugada precisa de um tipo de apólice diferente daquela em que você mora."
        }
      ],
      factors: [
        "Localização e exposição a vento ou tempestades",
        "Custo de reconstrução da casa",
        "Idade e estado do telhado",
        "Tipo de construção e reformas",
        "Histórico de sinistros",
        "Franquias escolhidas"
      ],
      faq: [
        {
          q: "O seguro residencial cobre furacões?",
          a: "Danos por vento normalmente são cobertos, muitas vezes com uma franquia separada para furacão ou vento nos estados costeiros. Maré de tempestade e enchente não são; para isso é preciso uma apólice de enchente."
        },
        {
          q: "Qual a diferença entre custo de reposição e valor real (actual cash value)?",
          a: "O custo de reposição paga o conserto ou a troca por materiais novos. O valor real desconta a depreciação. A sua apólice indica qual dos dois vale para a casa, o telhado e os seus pertences."
        },
        {
          q: "O seguro residencial é obrigatório por lei?",
          a: "Em geral, nenhuma lei estadual exige, mas os bancos que financiam o imóvel costumam exigir."
        }
      ]
    },
    es: {
      seo: {
        title: "Seguro de vivienda, explicado | Ativa Insurance",
        description: "Qué cubre la póliza de vivienda (homeowners): estructura, otras estructuras, bienes, pérdida de uso y responsabilidad civil. Agencia independiente."
      },
      h1: "Seguro de vivienda",
      sub: "Cobertura para la casa que es suya. Comparta algunos datos de la propiedad, y un agente con licencia compara opciones para usted.",
      cta: "Cotizar mi seguro de vivienda",
      alt: "Casa de dos pisos con jardín al frente al atardecer",
      quickQ: "¿Qué es el seguro de vivienda?",
      quick: "El seguro de vivienda (homeowners) protege la casa que es suya, lo que hay dentro de ella y su responsabilidad frente a otras personas. Normalmente paga la reparación o la reconstrucción después de eventos cubiertos, como incendio o viento, y cubre la responsabilidad civil si alguien se lesiona en su propiedad. La inundación no está incluida y requiere una póliza aparte.",
      explorer: {
        title: "Un recorrido por la casa",
        lead: "Cada parte de la imagen es una parte de la póliza de vivienda. Seleccione una para ver qué hace.",
        legend: "Los requisitos, formularios y términos cambian según el estado. Un agente con licencia confirma lo que aplica en el suyo.",
        items: [
          {
            t: "Estructura de la vivienda (dwelling)",
            d: "La casa en sí: paredes, techo, pisos y sistemas integrados. Paga la reparación o la reconstrucción después de una pérdida cubierta.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un incendio en la cocina daña gabinetes, paredes y cableado."
              }
            ]
          },
          {
            t: "Otras estructuras",
            d: "Construcciones dentro de la propiedad que no están unidas a la casa.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un garaje separado, un cobertizo o una cerca dañados por la caída de un árbol."
              }
            ],
            term: "other structures"
          },
          {
            t: "Bienes personales",
            d: "Sus pertenencias, como muebles, ropa y aparatos electrónicos. Los artículos de alto valor pueden tener sublímites menores.",
            rows: [
              {
                k: "Ejemplo",
                v: "Muebles y un televisor destruidos en un incendio."
              }
            ],
            term: "personal property"
          },
          {
            t: "Pérdida de uso",
            d: "Gastos adicionales de vivienda mientras la casa no se puede habitar después de una pérdida cubierta.",
            rows: [
              {
                k: "Ejemplo",
                v: "Hotel y comidas mientras se hacen las reparaciones."
              }
            ],
            term: "loss of use"
          },
          {
            t: "Responsabilidad civil personal",
            d: "Lesiones o daños a la propiedad de los que usted es legalmente responsable, incluida la defensa legal, hasta su límite.",
            rows: [
              {
                k: "Ejemplo",
                v: "Una visita se cae en sus escalones y lo demanda."
              }
            ],
            term: "personal liability"
          },
          {
            t: "Pagos médicos a terceros",
            d: "Gastos médicos menores de invitados que se lesionan en su propiedad, sin importar quién tuvo la culpa.",
            rows: [
              {
                k: "Ejemplo",
                v: "El hijo de un vecino se lastima jugando en su patio."
              }
            ],
            term: "medical payments to others"
          }
        ]
      },
      scenarios: [
        {
          t: "Una tormenta arranca tejas del techo y la lluvia daña el cielo raso.",
          parts: [
            "Estructura de la vivienda",
            "Bienes personales"
          ],
          d: "Los daños por viento normalmente están cubiertos. En algunas zonas costeras se aplica un deducible aparte por viento o huracán."
        },
        {
          t: "Una tubería se rompe mientras usted está de viaje y hay que cambiar el piso.",
          parts: [
            "Estructura de la vivienda",
            "Pérdida de uso"
          ],
          d: "Los daños por agua repentinos y accidentales normalmente están cubiertos. Las filtraciones lentas y la falta de mantenimiento, por lo general, no."
        },
        {
          t: "Un repartidor se resbala en la entrada de su casa.",
          parts: [
            "Responsabilidad civil personal",
            "Pagos médicos a terceros"
          ],
          d: "Los pagos médicos pueden cubrir cuentas menores. La responsabilidad civil responde si usted resulta responsable."
        }
      ],
      myths: [
        {
          m: "El seguro de vivienda cubre inundaciones.",
          f: "Las pólizas de vivienda estándar excluyen la inundación. Esa cobertura se compra por separado."
        },
        {
          m: "Debo asegurar la casa por lo que pagué por ella.",
          f: "El límite de la estructura se basa en el costo de reconstrucción, que puede ser muy distinto del precio de mercado o del saldo de su préstamo."
        },
        {
          m: "Todo lo que tengo está cubierto por su valor total.",
          f: "Artículos como joyas, obras de arte y colecciones suelen tener sublímites, a menos que se declaren por separado."
        }
      ],
      notCovered: [
        "Inundación y agua que sube del suelo",
        "Movimientos de tierra, como terremotos o socavones, salvo que se agreguen",
        "Desgaste, pudrición, moho y falta de mantenimiento",
        "Actividad comercial que se realiza en la casa"
      ],
      who: [
        {
          t: "Propietarios con hipoteca",
          d: "El banco exige que la casa esté asegurada durante todo el préstamo."
        },
        {
          t: "Propietarios sin hipoteca",
          d: "La casa suele ser el mayor patrimonio de una familia, con o sin banco de por medio."
        },
        {
          t: "Quienes alquilan su casa a otros",
          d: "Una casa alquilada necesita un tipo de póliza distinto del de la casa donde usted vive."
        }
      ],
      factors: [
        "Ubicación y exposición a viento o tormentas",
        "Costo de reconstrucción de la casa",
        "Antigüedad y estado del techo",
        "Tipo de construcción y renovaciones",
        "Historial de reclamos",
        "Deducibles que elija"
      ],
      faq: [
        {
          q: "¿El seguro de vivienda cubre huracanes?",
          a: "Los daños por viento normalmente están cubiertos, muchas veces con un deducible aparte por huracán o viento en los estados costeros. La marejada ciclónica y la inundación no lo están; para eso se necesita una póliza de inundación."
        },
        {
          q: "¿Cuál es la diferencia entre costo de reemplazo y valor real en efectivo?",
          a: "El costo de reemplazo paga la reparación o el reemplazo con materiales nuevos. El valor real en efectivo descuenta la depreciación. Su póliza indica cuál se aplica a la casa, al techo y a sus pertenencias."
        },
        {
          q: "¿El seguro de vivienda es obligatorio por ley?",
          a: "En general, ninguna ley estatal lo exige, pero los bancos que financian la vivienda suelen exigirlo."
        }
      ]
    }
  }
};

export default home;
