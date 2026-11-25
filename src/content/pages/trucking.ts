// Trucking insurance landing page. DRAFT: needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Source copy: design/claude-design/site-v2/source (lib/ativa-landing.js products, i18n/pages.js
// ATIVA_LANDING, i18n/landing.pt.js / landing.es.js). Explorer footnote = the design's state note.
// Changes from the design copy, under the content rules:
// - FMCSA filing and household-goods cargo statements could not be checked on an official page
//   (fmcsa.dot.gov and ecfr.gov refused automated access), so they are written generally and
//   the agency name is left out.
// Hero description = first sentence of the quick answer and button = "Get a quote" (as the design does
// for pages without their own hero copy).

import type { LandingContent } from "./types";

const trucking: LandingContent = {
  id: "trucking",
  status: "draft",
  updated: "2026-11-25",
  scene: "trucking",
  hero: {
    file: "trucking-full.webp",
    layout: "partial",
    imgW: "66%",
    subW: "38ch",
    side: "left",
    mdH: 420,
    w: 1774,
    h: 887,
    pos: {
      lg: "40% 40%",
      md: "40% 50%",
      sm: "40% 50%"
    }
  },
  related: [
    "commercial-auto",
    "workers-comp",
    "commercial-umbrella",
    "bop"
  ],
  copy: {
    en: {
      seo: {
        title: "Trucking Insurance, Explained | Ativa Insurance",
        description: "How trucking coverage fits together: primary liability, physical damage, motor truck cargo, general liability and trailer interchange. Independent agency."
      },
      h1: "Trucking insurance",
      sub: "Trucking insurance is a group of coverages for motor carriers and owner-operators.",
      cta: "Get a quote",
      alt: "Blue semi-truck with a trailer on a highway at sunrise",
      quickQ: "What is trucking insurance?",
      quick: "Trucking insurance is a group of coverages for motor carriers and owner-operators. Primary auto liability covers injuries and damage to others and is required to operate. Physical damage covers the truck and trailer. Cargo covers the freight being hauled.",
      explorer: {
        title: "Around the rig",
        lead: "Select a part of the truck to see the coverage that goes with it.",
        legend: "Requirements, policy forms and terms differ by state. A licensed agent confirms what applies in yours.",
        items: [
          {
            t: "Primary auto liability",
            d: "Injuries and property damage the truck causes to others. Minimum limits depend on the type of operation and freight, under federal and state rules.",
            rows: [
              {
                k: "Example",
                v: "A lane change sideswipes a car."
              }
            ]
          },
          {
            t: "Physical damage",
            d: "Collision and comprehensive for your own tractor and trailer, minus your deductible.",
            rows: [
              {
                k: "Example",
                v: "A tractor is damaged in a jackknife on ice."
              }
            ]
          },
          {
            t: "Motor truck cargo",
            d: "Loss of or damage to the freight you're hauling for others. Some commodities are excluded or limited.",
            rows: [
              {
                k: "Example",
                v: "A load is damaged when the trailer overturns."
              }
            ]
          },
          {
            t: "General liability",
            d: "Claims from business activities that aren't driving, such as incidents at a customer's dock.",
            rows: [
              {
                k: "Example",
                v: "A driver damages a customer's property while unloading."
              }
            ]
          },
          {
            t: "Trailer interchange",
            d: "Damage to a trailer you don't own while it's in your possession under a written interchange agreement.",
            rows: [
              {
                k: "Example",
                v: "A borrowed trailer is damaged in your yard."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "A loaded truck is rear-ended and the refrigerated freight spoils.",
          parts: [
            "Physical damage",
            "Motor truck cargo"
          ],
          d: "Physical damage repairs the equipment. Cargo can respond for the freight; spoilage often requires a reefer breakdown endorsement."
        },
        {
          t: "A trailer pulled under an interchange agreement is damaged in a crash.",
          parts: [
            "Trailer interchange",
            "Primary auto liability"
          ],
          d: "Trailer interchange covers the non-owned trailer. Liability responds to others' injuries and damage."
        }
      ],
      myths: [
        {
          m: "Cargo coverage pays for any load I haul.",
          f: "Cargo policies list excluded and limited commodities. The freight you haul has to match what the policy covers."
        },
        {
          m: "The motor carrier's policy covers me when I'm not under dispatch.",
          f: "Leased owner-operators usually need non-trucking liability or bobtail coverage for those times."
        }
      ],
      notCovered: [
        "Excluded commodities",
        "Wear and mechanical breakdown",
        "Driver injuries, covered by workers' comp or occupational accident",
        "Non-owned trailers without an interchange agreement"
      ],
      who: [
        {
          t: "Motor carriers with their own authority",
          d: "Operating authority usually requires proof of liability insurance on file."
        },
        {
          t: "Leased owner-operators",
          d: "Coverage depends on what the motor carrier provides."
        },
        {
          t: "Private fleets",
          d: "Businesses hauling their own goods."
        }
      ],
      factors: [
        "Operating radius and states",
        "Type of freight",
        "Drivers' experience and records",
        "Equipment value",
        "Safety and inspection history",
        "Years in business"
      ],
      faq: [
        {
          q: "What filings do I need?",
          a: "Carriers that need operating authority usually must have proof of liability insurance filed with the regulator, and some states require their own filings. A licensed agent confirms which apply and requests them from the carrier."
        },
        {
          q: "What's the difference between bobtail and non-trucking liability?",
          a: "Both apply to a leased truck outside dispatch, but they're defined differently. The lease agreement usually says which one is required."
        },
        {
          q: "Is cargo insurance required?",
          a: "For most freight, shippers and brokers require it rather than the law. Some types of carriers have their own legal requirements; a licensed agent confirms what applies to your operation."
        }
      ]
    },
    pt: {
      seo: {
        title: "Seguro para caminhões, explicado | Ativa Insurance",
        description: "Como as coberturas de trucking se encaixam: responsabilidade civil primária, physical damage, motor truck cargo, general liability e trailer interchange."
      },
      h1: "Seguro para caminhões (trucking)",
      sub: "O seguro para caminhões (trucking) é um conjunto de coberturas para transportadoras e owner-operators.",
      cta: "Fazer cotação",
      alt: "Caminhão azul com carreta em uma rodovia ao nascer do sol",
      quickQ: "O que é seguro para caminhões?",
      quick: "O seguro para caminhões (trucking) é um conjunto de coberturas para transportadoras e owner-operators. A responsabilidade civil primária cobre lesões e danos a terceiros e é obrigatória para operar. A cobertura de danos físicos protege o caminhão e a carreta. A cobertura de carga protege o frete transportado.",
      explorer: {
        title: "Em volta do caminhão",
        lead: "Selecione uma parte do caminhão para ver a cobertura que acompanha.",
        legend: "Exigências, formulários e termos mudam de estado para estado. Um agente licenciado confirma o que vale no seu.",
        items: [
          {
            t: "Responsabilidade civil primária",
            d: "Lesões e danos materiais que o caminhão causa a terceiros. Os limites mínimos dependem do tipo de operação e de carga, conforme regras federais e estaduais.",
            rows: [
              {
                k: "Exemplo",
                v: "Uma troca de faixa raspa a lateral de um carro."
              }
            ],
            term: "primary auto liability"
          },
          {
            t: "Danos físicos (physical damage)",
            d: "Collision e comprehensive para o seu cavalo mecânico e a sua carreta, descontada a franquia.",
            rows: [
              {
                k: "Exemplo",
                v: "Um cavalo mecânico é danificado ao fechar em L no gelo."
              }
            ]
          },
          {
            t: "Carga (motor truck cargo)",
            d: "Perda ou dano ao frete que você transporta para terceiros. Algumas mercadorias são excluídas ou limitadas.",
            rows: [
              {
                k: "Exemplo",
                v: "Uma carga é danificada quando a carreta tomba."
              }
            ]
          },
          {
            t: "General liability",
            d: "Reclamações por atividades da empresa que não são dirigir, como incidentes na doca de um cliente.",
            rows: [
              {
                k: "Exemplo",
                v: "Um motorista danifica um bem do cliente ao descarregar."
              }
            ]
          },
          {
            t: "Trailer interchange",
            d: "Dano a uma carreta que não é sua enquanto está sob a sua posse por um contrato de interchange por escrito.",
            rows: [
              {
                k: "Exemplo",
                v: "Uma carreta emprestada é danificada no seu pátio."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "Um caminhão carregado leva uma batida por trás e a carga refrigerada estraga.",
          parts: [
            "Danos físicos",
            "Carga"
          ],
          d: "Os danos físicos consertam o equipamento. A cobertura de carga pode responder pelo frete; a deterioração muitas vezes exige um endosso de quebra de refrigeração."
        },
        {
          t: "Uma carreta puxada sob contrato de interchange é danificada em um acidente.",
          parts: [
            "Trailer interchange",
            "Responsabilidade civil primária"
          ],
          d: "O trailer interchange cobre a carreta de terceiros. A responsabilidade civil responde pelas lesões e pelos danos de outras pessoas."
        }
      ],
      myths: [
        {
          m: "A cobertura de carga paga qualquer carga que eu transportar.",
          f: "As apólices de carga listam mercadorias excluídas e limitadas. O frete que você transporta precisa corresponder ao que a apólice cobre."
        },
        {
          m: "A apólice da transportadora me cobre quando não estou em despacho.",
          f: "Owner-operators agregados normalmente precisam de non-trucking liability ou bobtail para esses momentos."
        }
      ],
      notCovered: [
        "Mercadorias excluídas",
        "Desgaste e defeitos mecânicos",
        "Lesões do motorista, cobertas por workers' comp ou occupational accident",
        "Carretas de terceiros sem contrato de interchange"
      ],
      who: [
        {
          t: "Transportadoras com authority própria",
          d: "Para ter authority, normalmente é preciso comprovante de responsabilidade civil registrado."
        },
        {
          t: "Owner-operators agregados",
          d: "A cobertura depende do que a transportadora fornece."
        },
        {
          t: "Frotas próprias",
          d: "Empresas que transportam as próprias mercadorias."
        }
      ],
      factors: [
        "Raio de operação e estados",
        "Tipo de carga",
        "Experiência e histórico dos motoristas",
        "Valor dos equipamentos",
        "Histórico de segurança e inspeções",
        "Tempo de empresa"
      ],
      faq: [
        {
          q: "De quais registros (filings) eu preciso?",
          a: "Transportadoras que precisam de authority normalmente precisam de comprovante de responsabilidade civil registrado no órgão regulador, e alguns estados exigem registros próprios. Um agente licenciado confirma quais se aplicam e solicita à seguradora."
        },
        {
          q: "Qual a diferença entre bobtail e non-trucking liability?",
          a: "As duas valem para um caminhão agregado fora de despacho, mas têm definições diferentes. O contrato de lease normalmente diz qual é exigida."
        },
        {
          q: "O seguro de carga é obrigatório?",
          a: "Para a maioria dos fretes, quem exige são os embarcadores e os brokers, não a lei. Alguns tipos de transportadora têm exigências legais próprias; um agente licenciado confirma o que vale para a sua operação."
        }
      ]
    },
    es: {
      seo: {
        title: "Seguro para camiones, explicado | Ativa Insurance",
        description: "Cómo encajan las coberturas de trucking: responsabilidad civil primaria, physical damage, motor truck cargo, general liability y trailer interchange."
      },
      h1: "Seguro para camiones (trucking)",
      sub: "El seguro para camiones (trucking) es un grupo de coberturas para transportistas y owner-operators.",
      cta: "Cotizar",
      alt: "Camión azul con remolque en una autopista al amanecer",
      quickQ: "¿Qué es el seguro para camiones?",
      quick: "El seguro para camiones (trucking) es un grupo de coberturas para transportistas y owner-operators. La responsabilidad civil primaria cubre lesiones y daños a otras personas y es obligatoria para operar. La cobertura de daños físicos protege el camión y el remolque. La cobertura de carga protege la mercancía que se transporta.",
      explorer: {
        title: "Alrededor del camión",
        lead: "Seleccione una parte del camión para ver la cobertura que le corresponde.",
        legend: "Los requisitos, formularios y términos cambian según el estado. Un agente con licencia confirma lo que aplica en el suyo.",
        items: [
          {
            t: "Responsabilidad civil primaria",
            d: "Lesiones y daños a la propiedad que el camión causa a otras personas. Los límites mínimos dependen del tipo de operación y de carga, según reglas federales y estatales.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un cambio de carril raspa el costado de un auto."
              }
            ],
            term: "primary auto liability"
          },
          {
            t: "Daños físicos (physical damage)",
            d: "Collision y comprehensive para su propio tractor y remolque, menos su deducible.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un tractor se daña al hacer tijera sobre hielo."
              }
            ]
          },
          {
            t: "Carga (motor truck cargo)",
            d: "Pérdida o daño de la mercancía que usted transporta para otros. Algunas mercancías están excluidas o limitadas.",
            rows: [
              {
                k: "Ejemplo",
                v: "Una carga se daña cuando el remolque se vuelca."
              }
            ]
          },
          {
            t: "Responsabilidad general",
            d: "Reclamos por actividades del negocio que no son manejar, como incidentes en el muelle de un cliente.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un conductor daña la propiedad de un cliente al descargar."
              }
            ],
            term: "general liability"
          },
          {
            t: "Trailer interchange",
            d: "Daño a un remolque que no es suyo mientras está en su poder bajo un contrato de intercambio por escrito.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un remolque prestado se daña en su patio."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "Un camión cargado recibe un choque por detrás y la carga refrigerada se echa a perder.",
          parts: [
            "Daños físicos",
            "Carga"
          ],
          d: "Los daños físicos reparan el equipo. La cobertura de carga puede responder por la mercancía; el deterioro muchas veces requiere un endoso por falla de refrigeración."
        },
        {
          t: "Un remolque arrastrado bajo un contrato de intercambio se daña en un choque.",
          parts: [
            "Trailer interchange",
            "Responsabilidad civil primaria"
          ],
          d: "Trailer interchange cubre el remolque ajeno. La responsabilidad civil responde por las lesiones y los daños de otras personas."
        }
      ],
      myths: [
        {
          m: "La cobertura de carga paga cualquier carga que yo transporte.",
          f: "Las pólizas de carga enumeran mercancías excluidas y limitadas. Lo que usted transporta tiene que coincidir con lo que cubre la póliza."
        },
        {
          m: "La póliza del transportista me cubre cuando no estoy despachado.",
          f: "Los owner-operators arrendados normalmente necesitan non-trucking liability o bobtail para esos momentos."
        }
      ],
      notCovered: [
        "Mercancías excluidas",
        "Desgaste y fallas mecánicas",
        "Lesiones del conductor, cubiertas por compensación laboral u occupational accident",
        "Remolques ajenos sin contrato de intercambio"
      ],
      who: [
        {
          t: "Transportistas con authority propia",
          d: "Para tener authority normalmente se necesita un comprobante de responsabilidad civil registrado."
        },
        {
          t: "Owner-operators arrendados",
          d: "La cobertura depende de lo que proporcione el transportista."
        },
        {
          t: "Flotas privadas",
          d: "Negocios que transportan su propia mercancía."
        }
      ],
      factors: [
        "Radio de operación y estados",
        "Tipo de carga",
        "Experiencia e historial de los conductores",
        "Valor de los equipos",
        "Historial de seguridad e inspecciones",
        "Años en el negocio"
      ],
      faq: [
        {
          q: "¿Qué registros (filings) necesito?",
          a: "Los transportistas que necesitan authority normalmente deben tener un comprobante de responsabilidad civil registrado ante el regulador, y algunos estados exigen registros propios. Un agente con licencia confirma cuáles aplican y los solicita a la aseguradora."
        },
        {
          q: "¿Cuál es la diferencia entre bobtail y non-trucking liability?",
          a: "Las dos se aplican a un camión arrendado fuera de despacho, pero se definen de manera distinta. El contrato de arrendamiento normalmente indica cuál se exige."
        },
        {
          q: "¿El seguro de carga es obligatorio?",
          a: "Para la mayoría de las cargas lo exigen los embarcadores y los brokers, no la ley. Algunos tipos de transportistas tienen requisitos legales propios; un agente con licencia confirma lo que aplica a su operación."
        }
      ]
    }
  }
};

export default trucking;
