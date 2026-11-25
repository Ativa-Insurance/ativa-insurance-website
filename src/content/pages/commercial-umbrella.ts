// Commercial umbrella insurance landing page. DRAFT: needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Source copy: design/claude-design/site-v2/source (lib/ativa-landing.js products, i18n/pages.js
// ATIVA_LANDING, i18n/landing.pt.js / landing.es.js). Explorer footnote = the design's state note.
// Changes from the design copy, under the content rules (no amounts recommended):
// - Explorer example "$1,000,000 per-occurrence limit" -> no amount.
// - "Limits are commonly sold in $1,000,000 steps" -> removed; a licensed agent explains the options.
// Hero description = first sentence of the quick answer and button = "Get a quote" (as the design does
// for pages without their own hero copy).

import type { LandingContent } from "./types";

const commercialUmbrella: LandingContent = {
  id: "commercial-umbrella",
  status: "draft",
  updated: "2026-11-25",
  scene: "commercial-umbrella",
  hero: {
    file: "commercial-umbrella-full.webp",
    layout: "partial",
    imgW: "66%",
    subW: "38ch",
    side: "left",
    mdH: 420,
    w: 1774,
    h: 887,
    pos: {
      lg: "50% 12%",
      md: "50% 50%",
      sm: "50% 50%"
    }
  },
  related: [
    "bop",
    "commercial-auto",
    "workers-comp",
    "eo"
  ],
  copy: {
    en: {
      seo: {
        title: "Commercial Umbrella Insurance, Explained | Ativa",
        description: "How a commercial umbrella adds liability limits above general liability, commercial auto and employer's liability. An independent agency compares carriers."
      },
      h1: "Commercial umbrella insurance",
      sub: "A commercial umbrella adds liability limits above a business's underlying policies, such as general liability, commercial auto and employer's liability.",
      cta: "Get a quote",
      alt: "Glass umbrella over a commercial building, a work pickup and an excavator",
      quickQ: "What is commercial umbrella insurance?",
      quick: "A commercial umbrella adds liability limits above a business's underlying policies, such as general liability, commercial auto and employer's liability. When a covered claim uses up an underlying limit, the umbrella can pay the rest, up to its own limit.",
      explorer: {
        title: "Layers of liability",
        lead: "The three columns are underlying policies. The umbrella sits on top. Select a layer.",
        legend: "Requirements, policy forms and terms differ by state. A licensed agent confirms what applies in yours.",
        items: [
          {
            t: "General liability",
            d: "The first layer for injury and property damage claims from your premises and operations.",
            rows: [
              {
                k: "Example",
                v: "The per-occurrence limit pays first."
              }
            ]
          },
          {
            t: "Commercial auto liability",
            d: "The first layer for crashes involving business vehicles.",
            rows: [
              {
                k: "Example",
                v: "A serious multi-vehicle crash."
              }
            ]
          },
          {
            t: "Employer's liability",
            d: "Part of a workers' compensation policy. Responds when an employee's injury leads to a lawsuit against the employer.",
            rows: [
              {
                k: "Example",
                v: "A suit alleging employer negligence, where state law allows it."
              }
            ]
          },
          {
            t: "Umbrella layer",
            d: "Additional limits that can respond once a scheduled underlying policy has paid its limit. It only sits over the policies listed on it.",
            rows: [
              {
                k: "Example",
                v: "A judgment larger than the auto liability limit."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "A company truck causes a crash with several serious injuries.",
          parts: [
            "Commercial auto liability",
            "Umbrella layer"
          ],
          d: "The auto policy pays up to its limit. The umbrella can respond to covered amounts above it."
        }
      ],
      myths: [
        {
          m: "An umbrella covers anything my other policies don't.",
          f: "It mainly adds limits over the policies scheduled on it. It doesn't replace property, professional liability or workers' compensation benefits."
        },
        {
          m: "Umbrella and excess liability are the same thing.",
          f: "They're similar, but an excess policy strictly follows the underlying policy, while an umbrella's terms can be broader or narrower. The policy wording decides."
        }
      ],
      notCovered: [
        "Damage to your own property",
        "Professional errors, unless specifically included",
        "Workers' compensation benefits",
        "Claims an underlying policy excludes, in most cases"
      ],
      who: [
        {
          t: "Businesses with contract requirements",
          d: "Clients often ask for limits above a standard policy."
        },
        {
          t: "Businesses with vehicles on the road",
          d: "Auto claims are a common source of large losses."
        },
        {
          t: "Businesses with significant assets",
          d: "Higher limits protect more of what the business owns."
        }
      ],
      factors: [
        "Underlying limits and carriers",
        "Industry",
        "Number of vehicles",
        "Revenue and payroll",
        "Umbrella limit chosen",
        "Claims history"
      ],
      faq: [
        {
          q: "What underlying limits are required?",
          a: "Umbrella carriers set minimum limits for each underlying policy before they'll sit above it."
        },
        {
          q: "How much umbrella does a business need?",
          a: "It depends on contracts, assets and exposure. We don't recommend an amount; a licensed agent explains the limits carriers offer."
        },
        {
          q: "Does it cover every policy I have?",
          a: "Only the ones scheduled on the umbrella."
        }
      ]
    },
    pt: {
      seo: {
        title: "Umbrella comercial, explicado | Ativa Insurance",
        description: "Como o umbrella comercial soma limites de responsabilidade acima do general liability, do auto comercial e do employer's liability. Agência independente."
      },
      h1: "Seguro umbrella comercial",
      sub: "O umbrella comercial acrescenta limites de responsabilidade acima das apólices básicas da empresa, como general liability, auto comercial e employer's liability.",
      cta: "Fazer cotação",
      alt: "Guarda-chuva de vidro sobre um prédio comercial, uma picape de trabalho e uma escavadeira",
      quickQ: "O que é umbrella comercial?",
      quick: "O umbrella comercial acrescenta limites de responsabilidade acima das apólices básicas da empresa, como general liability, auto comercial e employer's liability. Quando um sinistro coberto esgota o limite de uma apólice básica, o umbrella pode pagar o restante, até o seu próprio limite.",
      explorer: {
        title: "Camadas de responsabilidade",
        lead: "As três colunas são as apólices básicas. O umbrella fica por cima. Selecione uma camada.",
        legend: "Exigências, formulários e termos mudam de estado para estado. Um agente licenciado confirma o que vale no seu.",
        items: [
          {
            t: "General liability",
            d: "A primeira camada para reclamações de lesão e dano material ligadas ao seu estabelecimento e às suas operações.",
            rows: [
              {
                k: "Exemplo",
                v: "O limite por ocorrência paga primeiro."
              }
            ]
          },
          {
            t: "Responsabilidade civil do auto comercial",
            d: "A primeira camada para acidentes com veículos da empresa.",
            rows: [
              {
                k: "Exemplo",
                v: "Um acidente grave com vários veículos."
              }
            ],
            term: "commercial auto liability"
          },
          {
            t: "Employer's liability",
            d: "Faz parte da apólice de workers' compensation. Responde quando a lesão de um funcionário leva a um processo contra o empregador.",
            rows: [
              {
                k: "Exemplo",
                v: "Um processo alegando negligência do empregador, onde a lei estadual permite."
              }
            ]
          },
          {
            t: "Camada umbrella",
            d: "Limites adicionais que podem responder depois que uma apólice básica listada pagou o seu limite. Só fica acima das apólices relacionadas nele.",
            rows: [
              {
                k: "Exemplo",
                v: "Uma condenação maior do que o limite de responsabilidade do auto."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "Um caminhão da empresa causa um acidente com várias vítimas graves.",
          parts: [
            "Responsabilidade civil do auto comercial",
            "Camada umbrella"
          ],
          d: "A apólice de auto paga até o seu limite. O umbrella pode responder pelos valores cobertos acima dele."
        }
      ],
      myths: [
        {
          m: "O umbrella cobre tudo o que as outras apólices não cobrem.",
          f: "Ele basicamente acrescenta limites sobre as apólices relacionadas nele. Não substitui o seguro patrimonial, a responsabilidade profissional nem os benefícios do workers' compensation."
        },
        {
          m: "Umbrella e excess liability são a mesma coisa.",
          f: "São parecidos, mas a apólice excess segue estritamente a apólice básica, enquanto os termos do umbrella podem ser mais amplos ou mais restritos. O texto da apólice é que decide."
        }
      ],
      notCovered: [
        "Danos aos seus próprios bens",
        "Erros profissionais, salvo se incluídos expressamente",
        "Benefícios do workers' compensation",
        "Sinistros que a apólice básica exclui, na maioria dos casos"
      ],
      who: [
        {
          t: "Empresas com exigências contratuais",
          d: "Clientes muitas vezes pedem limites acima de uma apólice padrão."
        },
        {
          t: "Empresas com veículos na rua",
          d: "Sinistros de auto são uma fonte comum de grandes prejuízos."
        },
        {
          t: "Empresas com patrimônio relevante",
          d: "Limites mais altos protegem mais do que a empresa tem."
        }
      ],
      factors: [
        "Limites e seguradoras das apólices básicas",
        "Setor",
        "Número de veículos",
        "Faturamento e folha de pagamento",
        "Limite de umbrella escolhido",
        "Histórico de sinistros"
      ],
      faq: [
        {
          q: "Quais limites básicos são exigidos?",
          a: "As seguradoras de umbrella definem limites mínimos para cada apólice básica antes de aceitarem ficar acima dela."
        },
        {
          q: "De quanto umbrella uma empresa precisa?",
          a: "Depende dos contratos, do patrimônio e da exposição. Não recomendamos um valor; um agente licenciado explica os limites que as seguradoras oferecem."
        },
        {
          q: "Ele cobre todas as apólices que eu tenho?",
          a: "Somente as que estão relacionadas no umbrella."
        }
      ]
    },
    es: {
      seo: {
        title: "Umbrella comercial, explicado | Ativa Insurance",
        description: "Cómo el umbrella comercial suma límites de responsabilidad sobre el general liability, el auto comercial y el employer's liability. Agencia independiente."
      },
      h1: "Seguro umbrella comercial",
      sub: "El umbrella comercial agrega límites de responsabilidad por encima de las pólizas subyacentes del negocio, como responsabilidad general, auto comercial y employer's liability.",
      cta: "Cotizar",
      alt: "Paraguas de vidrio sobre un edificio comercial, una pickup de trabajo y una excavadora",
      quickQ: "¿Qué es el umbrella comercial?",
      quick: "El umbrella comercial agrega límites de responsabilidad por encima de las pólizas subyacentes del negocio, como responsabilidad general, auto comercial y employer's liability. Cuando un reclamo cubierto agota el límite de una póliza subyacente, el umbrella puede pagar el resto, hasta su propio límite.",
      explorer: {
        title: "Capas de responsabilidad",
        lead: "Las tres columnas son las pólizas subyacentes. El umbrella va encima. Seleccione una capa.",
        legend: "Los requisitos, formularios y términos cambian según el estado. Un agente con licencia confirma lo que aplica en el suyo.",
        items: [
          {
            t: "Responsabilidad general",
            d: "La primera capa para reclamos por lesiones y daños a la propiedad relacionados con su local y sus operaciones.",
            rows: [
              {
                k: "Ejemplo",
                v: "El límite por ocurrencia paga primero."
              }
            ],
            term: "general liability"
          },
          {
            t: "Responsabilidad civil de auto comercial",
            d: "La primera capa para choques con vehículos del negocio.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un choque grave con varios vehículos."
              }
            ],
            term: "commercial auto liability"
          },
          {
            t: "Employer's liability",
            d: "Forma parte de la póliza de compensación laboral. Responde cuando la lesión de un empleado lleva a una demanda contra el empleador.",
            rows: [
              {
                k: "Ejemplo",
                v: "Una demanda que alega negligencia del empleador, donde la ley estatal lo permite."
              }
            ]
          },
          {
            t: "Capa umbrella",
            d: "Límites adicionales que pueden responder una vez que una póliza subyacente listada pagó su límite. Solo va encima de las pólizas que figuran en él.",
            rows: [
              {
                k: "Ejemplo",
                v: "Una sentencia mayor que el límite de responsabilidad del auto."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "Un camión de la empresa causa un choque con varios heridos graves.",
          parts: [
            "Responsabilidad civil de auto comercial",
            "Capa umbrella"
          ],
          d: "La póliza de auto paga hasta su límite. El umbrella puede responder por los montos cubiertos que lo superen."
        }
      ],
      myths: [
        {
          m: "Un umbrella cubre todo lo que mis otras pólizas no cubren.",
          f: "Principalmente agrega límites sobre las pólizas que figuran en él. No reemplaza la propiedad, la responsabilidad profesional ni los beneficios de la compensación laboral."
        },
        {
          m: "Umbrella y excess liability son lo mismo.",
          f: "Se parecen, pero la póliza excess sigue estrictamente a la póliza subyacente, mientras que los términos del umbrella pueden ser más amplios o más limitados. El texto de la póliza es el que decide."
        }
      ],
      notCovered: [
        "Daños a su propia propiedad",
        "Errores profesionales, salvo que se incluyan expresamente",
        "Beneficios de la compensación laboral",
        "Reclamos que la póliza subyacente excluye, en la mayoría de los casos"
      ],
      who: [
        {
          t: "Negocios con requisitos contractuales",
          d: "Los clientes muchas veces piden límites por encima de una póliza estándar."
        },
        {
          t: "Negocios con vehículos en la calle",
          d: "Los reclamos de auto son una fuente común de pérdidas grandes."
        },
        {
          t: "Negocios con activos importantes",
          d: "Los límites más altos protegen más de lo que el negocio tiene."
        }
      ],
      factors: [
        "Límites y aseguradoras de las pólizas subyacentes",
        "Industria",
        "Número de vehículos",
        "Ingresos y nómina",
        "Límite de umbrella elegido",
        "Historial de reclamos"
      ],
      faq: [
        {
          q: "¿Qué límites subyacentes se exigen?",
          a: "Las aseguradoras de umbrella fijan límites mínimos para cada póliza subyacente antes de aceptar ir encima de ella."
        },
        {
          q: "¿Cuánto umbrella necesita un negocio?",
          a: "Depende de los contratos, los activos y la exposición. No recomendamos un monto; un agente con licencia explica los límites que ofrecen las aseguradoras."
        },
        {
          q: "¿Cubre todas las pólizas que tengo?",
          a: "Solo las que figuran en el umbrella."
        }
      ]
    }
  }
};

export default commercialUmbrella;
