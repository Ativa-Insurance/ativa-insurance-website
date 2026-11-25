// Professional liability (E&O) insurance landing page. DRAFT: needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Source copy: design/claude-design/site-v2/source (lib/ativa-landing.js products, i18n/pages.js
// ATIVA_LANDING, i18n/landing.pt.js / landing.es.js). Explorer footnote = the design's state note.
// No globe (the design's E&O globe has words baked in): the explorer centre and related cards use the
// line icon in a soft-blue circle.
// Hero description = first sentence of the quick answer and button = "Get a quote" (as the design does
// for pages without their own hero copy).

import type { LandingContent } from "./types";

const eo: LandingContent = {
  id: "eo",
  status: "draft",
  updated: "2026-11-25",
  scene: "eo",
  hero: {
    file: "eo-full.webp",
    layout: "partial",
    imgW: "66%",
    subW: "38ch",
    side: "left",
    mdH: 420,
    w: 1774,
    h: 887,
    pos: {
      lg: "100% 30%",
      md: "100% 50%",
      sm: "100% 50%"
    }
  },
  related: [
    "bop",
    "commercial-umbrella",
    "workers-comp",
    "commercial-auto"
  ],
  copy: {
    en: {
      seo: {
        title: "Professional Liability (E&O) Insurance, Explained",
        description: "How errors and omissions insurance covers claims that your professional services caused a client financial loss, and what claims-made means."
      },
      h1: "Professional liability (E&O) insurance",
      sub: "Professional liability, also called errors and omissions (E&O), covers claims that a business's professional services, advice or work caused a client financial loss.",
      cta: "Get a quote",
      alt: "Glass shield with a document icon on an office desk, beside books labeled E&O and Professional Liability",
      quickQ: "What is professional liability (E&O)?",
      quick: "Professional liability, also called errors and omissions (E&O), covers claims that a business's professional services, advice or work caused a client financial loss. It pays for legal defense and for settlements or judgments, up to the limit. Most policies are written on a claims-made basis.",
      explorer: {
        title: "Where claims come from",
        lead: "Select a type of claim to see how professional liability treats it.",
        legend: "Requirements, policy forms and terms differ by state. A licensed agent confirms what applies in yours.",
        items: [
          {
            t: "Errors in your work",
            d: "A mistake in the service you provided that costs a client money.",
            rows: [
              {
                k: "Example",
                v: "A bookkeeping error leads to a client's tax penalty."
              }
            ]
          },
          {
            t: "Omissions",
            d: "Something you were expected to do and didn't.",
            rows: [
              {
                k: "Example",
                v: "A missed filing deadline."
              }
            ]
          },
          {
            t: "Negligence claims",
            d: "A client alleges your advice or service fell below professional standards, whether or not it did.",
            rows: [
              {
                k: "Example",
                v: "A client blames a consultant's recommendation for a loss."
              }
            ]
          },
          {
            t: "Legal defense",
            d: "Attorney fees and court costs, even when the claim has no merit. Defense costs may reduce the limit, depending on the policy.",
            rows: [
              {
                k: "Example",
                v: "Defending a lawsuit that is later dismissed."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "A client sues over advice given two years ago.",
          parts: [
            "Negligence claims",
            "Legal defense"
          ],
          d: "On a claims-made policy, the claim is covered only if the policy is active when it's made and the work was done after the retroactive date."
        }
      ],
      myths: [
        {
          m: "General liability covers professional mistakes.",
          f: "General liability is for bodily injury and property damage. Financial loss from your services needs professional liability."
        },
        {
          m: "I'm covered for past work once I cancel.",
          f: "Claims-made policies respond only while active, unless you buy an extended reporting period (tail)."
        }
      ],
      notCovered: [
        "Bodily injury and property damage",
        "Intentional or fraudulent acts",
        "Work done before the retroactive date",
        "Employee disputes"
      ],
      who: [
        {
          t: "Consultants and advisors",
          d: "Anyone paid for expertise or recommendations."
        },
        {
          t: "Agents, brokers and accountants",
          d: "Often required by licensing bodies or clients."
        },
        {
          t: "Technology and design firms",
          d: "Contracts commonly require it."
        }
      ],
      factors: [
        "Profession and services offered",
        "Revenue",
        "Limit and deductible",
        "Retroactive date",
        "Contracts and client types",
        "Claims history"
      ],
      faq: [
        {
          q: "What does claims-made mean?",
          a: "The policy responds to claims first made while it's in force, for work done after the retroactive date."
        },
        {
          q: "What is tail coverage?",
          a: "An extended reporting period that lets you report claims after a claims-made policy ends, for work done while it was active."
        },
        {
          q: "Is E&O the same as malpractice insurance?",
          a: "They are the same kind of coverage. Malpractice is the name used for medical and legal professions."
        }
      ]
    },
    pt: {
      seo: {
        title: "Responsabilidade profissional (E&O), explicada | Ativa",
        description: "Como o seguro de erros e omissões (E&O) cobre alegações de que seus serviços profissionais causaram prejuízo a um cliente, e o que significa claims-made."
      },
      h1: "Seguro de responsabilidade profissional (E&O)",
      sub: "O seguro de responsabilidade profissional, também chamado de errors and omissions (E&O), cobre alegações de que os serviços, as orientações ou o trabalho profissional de uma empresa causaram prejuízo financeiro a um cliente.",
      cta: "Fazer cotação",
      alt: "Escudo de vidro com ícone de documento em uma mesa de escritório, ao lado de livros com os títulos E&O e Professional Liability",
      quickQ: "O que é responsabilidade profissional (E&O)?",
      quick: "O seguro de responsabilidade profissional, também chamado de errors and omissions (E&O), cobre alegações de que os serviços, as orientações ou o trabalho profissional de uma empresa causaram prejuízo financeiro a um cliente. Ele paga a defesa jurídica e os acordos ou condenações, até o limite. A maioria das apólices é do tipo claims-made.",
      explorer: {
        title: "De onde vêm as reclamações",
        lead: "Selecione um tipo de reclamação para ver como a responsabilidade profissional trata.",
        legend: "Exigências, formulários e termos mudam de estado para estado. Um agente licenciado confirma o que vale no seu.",
        items: [
          {
            t: "Erros no seu trabalho",
            d: "Um erro no serviço prestado que custa dinheiro ao cliente.",
            rows: [
              {
                k: "Exemplo",
                v: "Um erro de contabilidade gera uma multa fiscal para o cliente."
              }
            ]
          },
          {
            t: "Omissões",
            d: "Algo que se esperava que você fizesse e não foi feito.",
            rows: [
              {
                k: "Exemplo",
                v: "Um prazo de entrega de documentos perdido."
              }
            ]
          },
          {
            t: "Alegações de negligência",
            d: "O cliente alega que a sua orientação ou o seu serviço ficou abaixo do padrão profissional, tenha ficado ou não.",
            rows: [
              {
                k: "Exemplo",
                v: "Um cliente culpa a recomendação de um consultor por um prejuízo."
              }
            ]
          },
          {
            t: "Defesa jurídica",
            d: "Honorários de advogado e custas, mesmo quando a reclamação não tem fundamento. Os custos de defesa podem reduzir o limite, conforme a apólice.",
            rows: [
              {
                k: "Exemplo",
                v: "Defender um processo que depois é arquivado."
              }
            ],
            term: "defense costs"
          }
        ]
      },
      scenarios: [
        {
          t: "Um cliente processa por uma orientação dada dois anos atrás.",
          parts: [
            "Alegações de negligência",
            "Defesa jurídica"
          ],
          d: "Em uma apólice claims-made, a reclamação só é coberta se a apólice estiver ativa quando ela é feita e se o trabalho tiver sido realizado depois da data retroativa."
        }
      ],
      myths: [
        {
          m: "O general liability cobre erros profissionais.",
          f: "O general liability é para lesão corporal e dano material. Prejuízo financeiro causado pelos seus serviços exige responsabilidade profissional."
        },
        {
          m: "Continuo coberto pelo trabalho antigo depois de cancelar.",
          f: "As apólices claims-made só respondem enquanto estão ativas, a menos que você contrate um período estendido de aviso (tail)."
        }
      ],
      notCovered: [
        "Lesão corporal e dano material",
        "Atos intencionais ou fraudulentos",
        "Trabalho realizado antes da data retroativa",
        "Disputas com funcionários"
      ],
      who: [
        {
          t: "Consultores e assessores",
          d: "Quem é pago por conhecimento ou recomendações."
        },
        {
          t: "Agentes, corretores e contadores",
          d: "Muitas vezes exigido por órgãos de licenciamento ou por clientes."
        },
        {
          t: "Empresas de tecnologia e design",
          d: "Os contratos costumam exigir."
        }
      ],
      factors: [
        "Profissão e serviços oferecidos",
        "Faturamento",
        "Limite e franquia",
        "Data retroativa",
        "Contratos e tipos de cliente",
        "Histórico de sinistros"
      ],
      faq: [
        {
          q: "O que significa claims-made?",
          a: "A apólice responde a reclamações feitas pela primeira vez enquanto está em vigor, por trabalho realizado depois da data retroativa."
        },
        {
          q: "O que é a cobertura tail?",
          a: "É um período estendido de aviso que permite comunicar reclamações depois que a apólice claims-made termina, por trabalho feito enquanto ela estava ativa."
        },
        {
          q: "E&O é o mesmo que seguro de malpractice?",
          a: "São o mesmo tipo de cobertura. Malpractice é o nome usado para profissões da área médica e jurídica."
        }
      ]
    },
    es: {
      seo: {
        title: "Responsabilidad profesional (E&O), explicada | Ativa",
        description: "Cómo el seguro de errores y omisiones (E&O) cubre reclamos de que sus servicios profesionales causaron una pérdida a un cliente, y qué es claims-made."
      },
      h1: "Seguro de responsabilidad profesional (E&O)",
      sub: "La responsabilidad profesional, también llamada errors and omissions (E&O), cubre reclamos de que los servicios, los consejos o el trabajo profesional de un negocio le causaron una pérdida económica a un cliente.",
      cta: "Cotizar",
      alt: "Escudo de vidrio con ícono de documento en un escritorio de oficina, junto a libros titulados E&O y Professional Liability",
      quickQ: "¿Qué es la responsabilidad profesional (E&O)?",
      quick: "La responsabilidad profesional, también llamada errors and omissions (E&O), cubre reclamos de que los servicios, los consejos o el trabajo profesional de un negocio le causaron una pérdida económica a un cliente. Paga la defensa legal y los acuerdos o sentencias, hasta el límite. La mayoría de las pólizas son de tipo claims-made.",
      explorer: {
        title: "De dónde vienen los reclamos",
        lead: "Seleccione un tipo de reclamo para ver cómo lo trata la responsabilidad profesional.",
        legend: "Los requisitos, formularios y términos cambian según el estado. Un agente con licencia confirma lo que aplica en el suyo.",
        items: [
          {
            t: "Errores en su trabajo",
            d: "Un error en el servicio que usted prestó y que le cuesta dinero a un cliente.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un error de contabilidad le genera una multa de impuestos a un cliente."
              }
            ]
          },
          {
            t: "Omisiones",
            d: "Algo que se esperaba que usted hiciera y no hizo.",
            rows: [
              {
                k: "Ejemplo",
                v: "Una fecha límite de presentación que se pasó."
              }
            ]
          },
          {
            t: "Reclamos por negligencia",
            d: "Un cliente alega que su consejo o su servicio estuvo por debajo del estándar profesional, haya sido así o no.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un cliente culpa a la recomendación de un consultor por una pérdida."
              }
            ]
          },
          {
            t: "Defensa legal",
            d: "Honorarios de abogados y costos judiciales, incluso cuando el reclamo no tiene fundamento. Los costos de defensa pueden reducir el límite, según la póliza.",
            rows: [
              {
                k: "Ejemplo",
                v: "Defender una demanda que luego se desestima."
              }
            ],
            term: "defense costs"
          }
        ]
      },
      scenarios: [
        {
          t: "Un cliente demanda por un consejo que se dio hace dos años.",
          parts: [
            "Reclamos por negligencia",
            "Defensa legal"
          ],
          d: "En una póliza claims-made, el reclamo solo está cubierto si la póliza está activa cuando se presenta y si el trabajo se hizo después de la fecha retroactiva."
        }
      ],
      myths: [
        {
          m: "La responsabilidad general cubre los errores profesionales.",
          f: "La responsabilidad general es para lesiones corporales y daños a la propiedad. La pérdida económica por sus servicios requiere responsabilidad profesional."
        },
        {
          m: "Sigo cubierto por el trabajo anterior después de cancelar.",
          f: "Las pólizas claims-made solo responden mientras están activas, a menos que usted compre un período extendido de reporte (tail)."
        }
      ],
      notCovered: [
        "Lesiones corporales y daños a la propiedad",
        "Actos intencionales o fraudulentos",
        "Trabajo hecho antes de la fecha retroactiva",
        "Disputas con empleados"
      ],
      who: [
        {
          t: "Consultores y asesores",
          d: "Quien cobra por su conocimiento o sus recomendaciones."
        },
        {
          t: "Agentes, corredores y contadores",
          d: "Muchas veces lo exigen los organismos de licencias o los clientes."
        },
        {
          t: "Empresas de tecnología y diseño",
          d: "Los contratos suelen exigirlo."
        }
      ],
      factors: [
        "Profesión y servicios que ofrece",
        "Ingresos",
        "Límite y deducible",
        "Fecha retroactiva",
        "Contratos y tipos de clientes",
        "Historial de reclamos"
      ],
      faq: [
        {
          q: "¿Qué significa claims-made?",
          a: "La póliza responde a los reclamos que se presentan por primera vez mientras está vigente, por trabajo hecho después de la fecha retroactiva."
        },
        {
          q: "¿Qué es la cobertura tail?",
          a: "Es un período extendido de reporte que permite reportar reclamos después de que termina una póliza claims-made, por trabajo hecho mientras estaba activa."
        },
        {
          q: "¿E&O es lo mismo que el seguro de malpractice?",
          a: "Son el mismo tipo de cobertura. Malpractice es el nombre que se usa para las profesiones médicas y legales."
        }
      ]
    }
  }
};

export default eo;
