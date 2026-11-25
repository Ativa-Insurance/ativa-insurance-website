// Workers' compensation insurance landing page. DRAFT: needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Source copy: design/claude-design/site-v2/source (lib/ativa-landing.js products, i18n/pages.js
// ATIVA_LANDING, i18n/landing.pt.js / landing.es.js). Explorer footnote = the design's state note.
// Changes from the design copy, under the content rules:
// - The FAQ "Is it required in my state?" adds the Florida thresholds, linked to the Florida Division of
//   Workers' Compensation (construction: 1+ employees; other employers: 4+, counting corporate officers).

import type { LandingContent, Source } from "./types";

const FL_DWC: Source = { label: "Florida Division of Workers' Compensation, Coverage requirements", href: "https://www.myfloridacfo.com/division/wc/employer/coverage-requirements" };

const workersComp: LandingContent = {
  id: "workers-comp",
  status: "draft",
  updated: "2026-11-25",
  scene: "workers-comp",
  hero: {
    file: "workers-comp-1600.webp",
    layout: "full",
    side: "right",
    mdH: 330,
    w: 1600,
    h: 533,
    pos: {
      lg: "50% 50%",
      md: "50% 50%",
      sm: "0% 50%"
    }
  },
  related: [
    "gl",
    "bop",
    "commercial-auto",
    "commercial-umbrella"
  ],
  copy: {
    en: {
      seo: {
        title: "Workers' Compensation Insurance, Explained | Ativa",
        description: "How workers' compensation pays medical care and lost wages after a job injury, who must carry it, and what affects the premium. An independent agency."
      },
      h1: "Workers' compensation insurance",
      sub: "Coverage for employees who are injured on the job, and for the employer responsible for them.",
      cta: "Get a Workers' Compensation Quote",
      alt: "Construction worker in a hard hat and safety vest looking over a job site",
      quickQ: "What is workers' compensation?",
      quick: "Workers' compensation pays medical care and part of lost wages for employees hurt or made ill by their job, regardless of fault. In return, employees generally can't sue the employer for those injuries. Each state sets its own rules on who must carry it.",
      explorer: {
        title: "From injury to return to work",
        lead: "Follow the path after a workplace injury. Select a step to see what the coverage does.",
        legend: "Requirements, policy forms and terms differ by state. A licensed agent confirms what applies in yours.",
        items: [
          {
            t: "Medical benefits",
            d: "Doctor visits, hospital care, surgery and medication for the work injury.",
            rows: [
              {
                k: "Example",
                v: "Emergency care after a fall from a ladder."
              }
            ]
          },
          {
            t: "Lost wages",
            d: "A portion of the employee's pay while they can't work. The percentage and waiting period are set by state law.",
            rows: [
              {
                k: "Example",
                v: "Six weeks off with a broken wrist."
              }
            ]
          },
          {
            t: "Rehabilitation",
            d: "Physical therapy and, in some cases, retraining to help the employee return to work.",
            rows: [
              {
                k: "Example",
                v: "Therapy to regain strength before returning to the job."
              }
            ]
          },
          {
            t: "Employer responsibilities",
            d: "Carry coverage when the state requires it, report injuries promptly and keep payroll records for the premium audit.",
            rows: [
              {
                k: "Example",
                v: "Reporting the injury to the carrier within the state's deadline."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "A roofer falls and breaks a leg.",
          parts: [
            "Medical benefits",
            "Lost wages",
            "Rehabilitation"
          ],
          d: "Treatment is paid, part of the wages is replaced during recovery, and therapy supports the return to work."
        },
        {
          t: "A kitchen employee develops a repetitive strain injury over months.",
          parts: [
            "Medical benefits"
          ],
          d: "Conditions that develop from the job over time can be covered, depending on state rules."
        }
      ],
      myths: [
        {
          m: "I only use 1099 subcontractors, so I don't need it.",
          f: "States decide who counts as an employee. Uninsured subcontractors can be treated as your employees at audit, and their payroll charged to your policy."
        },
        {
          m: "Small businesses are exempt.",
          f: "Thresholds differ by state and by industry. In some states construction businesses must cover even one employee."
        },
        {
          m: "General liability will cover an injured worker.",
          f: "General liability excludes injuries to your own employees."
        }
      ],
      notCovered: [
        "Injuries outside the course of work",
        "Injuries caused by intoxication, under many state laws",
        "Independent contractors with their own coverage",
        "Owners or officers who have elected exemption, where the state allows it"
      ],
      who: [
        {
          t: "Employers who meet their state's threshold",
          d: "The number of employees that triggers the requirement differs by state and industry."
        },
        {
          t: "Contractors on commercial jobs",
          d: "General contractors commonly require proof before work starts."
        },
        {
          t: "Owners who want cover for themselves",
          d: "Some states let owners opt in or out."
        }
      ],
      factors: [
        "State",
        "Payroll",
        "Job classification codes",
        "Claims history and experience modifier",
        "Use of uninsured subcontractors"
      ],
      faq: [
        {
          q: "Is workers' compensation required in my state?",
          a: "Each of the states we serve sets its own threshold, often by number of employees and industry. In Florida, for example, construction employers need it with one or more employees and most other employers with four or more, counting corporate officers. An agent confirms the rule for your state and type of work.",
          sources: [FL_DWC]
        },
        {
          q: "What is the premium audit?",
          a: "After the policy period the carrier compares estimated payroll with actual payroll and adjusts the premium up or down."
        },
        {
          q: "Can an owner be excluded?",
          a: "Many states allow owners or officers to exclude themselves. The rules and paperwork differ by state."
        }
      ]
    },
    pt: {
      seo: {
        title: "Workers' compensation, explicado | Ativa Insurance",
        description: "Como o workers' compensation paga tratamento e salários perdidos após acidente de trabalho, quem precisa ter e o que influencia o prêmio."
      },
      h1: "Seguro workers' compensation",
      sub: "Cobertura para funcionários que se machucam no trabalho e para o empregador responsável por eles.",
      cta: "Fazer cotação de workers' compensation",
      alt: "Trabalhador de capacete e colete de segurança observando um canteiro de obras",
      quickQ: "O que é workers' compensation?",
      quick: "O workers' compensation paga o atendimento médico e parte dos salários perdidos de funcionários que se machucam ou adoecem por causa do trabalho, independentemente de culpa. Em troca, os funcionários em geral não podem processar o empregador por essas lesões. Cada estado define as próprias regras sobre quem precisa ter.",
      explorer: {
        title: "Da lesão à volta ao trabalho",
        lead: "Acompanhe o caminho depois de um acidente de trabalho. Selecione uma etapa para ver o que a cobertura faz.",
        legend: "Exigências, formulários e termos mudam de estado para estado. Um agente licenciado confirma o que vale no seu.",
        items: [
          {
            t: "Benefícios médicos",
            d: "Consultas, hospital, cirurgia e medicamentos para a lesão de trabalho.",
            rows: [
              {
                k: "Exemplo",
                v: "Atendimento de emergência depois de uma queda de escada."
              }
            ],
            term: "medical benefits"
          },
          {
            t: "Salários perdidos",
            d: "Uma parte do salário do funcionário enquanto ele não pode trabalhar. A porcentagem e a carência são definidas pela lei estadual.",
            rows: [
              {
                k: "Exemplo",
                v: "Seis semanas afastado com o punho quebrado."
              }
            ],
            term: "lost wages"
          },
          {
            t: "Reabilitação",
            d: "Fisioterapia e, em alguns casos, requalificação para ajudar o funcionário a voltar ao trabalho.",
            rows: [
              {
                k: "Exemplo",
                v: "Fisioterapia para recuperar a força antes de voltar à função."
              }
            ]
          },
          {
            t: "Responsabilidades do empregador",
            d: "Ter a cobertura quando o estado exige, comunicar os acidentes rapidamente e manter os registros da folha para a auditoria do prêmio.",
            rows: [
              {
                k: "Exemplo",
                v: "Comunicar o acidente à seguradora dentro do prazo do estado."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "Um telhadista cai e quebra a perna.",
          parts: [
            "Benefícios médicos",
            "Salários perdidos",
            "Reabilitação"
          ],
          d: "O tratamento é pago, parte do salário é reposta durante a recuperação e a fisioterapia apoia a volta ao trabalho."
        },
        {
          t: "Um funcionário de cozinha desenvolve uma lesão por esforço repetitivo ao longo de meses.",
          parts: [
            "Benefícios médicos"
          ],
          d: "Condições que se desenvolvem com o trabalho ao longo do tempo podem ser cobertas, conforme as regras do estado."
        }
      ],
      myths: [
        {
          m: "Só uso subempreiteiros 1099, então não preciso.",
          f: "É o estado que decide quem conta como funcionário. Subempreiteiros sem seguro podem ser tratados como seus funcionários na auditoria, e a folha deles cobrada na sua apólice."
        },
        {
          m: "Empresas pequenas são isentas.",
          f: "Os critérios mudam conforme o estado e o setor. Em alguns estados, empresas de construção precisam cobrir até mesmo um único funcionário."
        },
        {
          m: "O general liability cobre um trabalhador acidentado.",
          f: "O general liability exclui lesões dos seus próprios funcionários."
        }
      ],
      notCovered: [
        "Lesões fora do exercício do trabalho",
        "Lesões causadas por embriaguez, em muitas leis estaduais",
        "Prestadores independentes com cobertura própria",
        "Sócios ou diretores que optaram pela isenção, onde o estado permite"
      ],
      who: [
        {
          t: "Empregadores que atingem o critério do estado",
          d: "O número de funcionários que torna a cobertura obrigatória muda conforme o estado e o setor."
        },
        {
          t: "Empreiteiros em obras comerciais",
          d: "As construtoras costumam exigir comprovante antes de o trabalho começar."
        },
        {
          t: "Donos que querem cobertura para si",
          d: "Alguns estados permitem que o dono entre ou saia da cobertura."
        }
      ],
      factors: [
        "Estado",
        "Folha de pagamento",
        "Códigos de classificação das funções",
        "Histórico de sinistros e experience modifier",
        "Uso de subempreiteiros sem seguro"
      ],
      faq: [
        {
          q: "O workers' compensation é obrigatório no meu estado?",
          a: "Cada estado que atendemos define o próprio critério, muitas vezes por número de funcionários e setor. Na Flórida, por exemplo, empresas de construção precisam ter a partir de um funcionário, e a maioria das outras a partir de quatro, contando os diretores (corporate officers). Um agente confirma a regra para o seu estado e tipo de trabalho.",
          sources: [FL_DWC]
        },
        {
          q: "O que é a auditoria do prêmio?",
          a: "Ao fim do período da apólice, a seguradora compara a folha estimada com a folha real e ajusta o prêmio para cima ou para baixo."
        },
        {
          q: "O dono pode ficar de fora?",
          a: "Muitos estados permitem que sócios ou diretores se excluam. As regras e a documentação mudam de estado para estado."
        }
      ]
    },
    es: {
      seo: {
        title: "Compensación laboral, explicada | Ativa Insurance",
        description: "Cómo la compensación laboral paga atención médica y salarios perdidos tras una lesión laboral, quién debe tenerla y qué influye en la prima."
      },
      h1: "Seguro de compensación laboral",
      sub: "Cobertura para empleados que se lesionan en el trabajo y para el empleador responsable de ellos.",
      cta: "Cotizar compensación laboral",
      alt: "Trabajador con casco y chaleco de seguridad observando una obra",
      quickQ: "¿Qué es la compensación laboral?",
      quick: "La compensación laboral (workers' compensation) paga la atención médica y parte de los salarios perdidos de los empleados que se lesionan o se enferman por su trabajo, sin importar quién tuvo la culpa. A cambio, los empleados por lo general no pueden demandar al empleador por esas lesiones. Cada estado fija sus propias reglas sobre quién debe tenerla.",
      explorer: {
        title: "De la lesión al regreso al trabajo",
        lead: "Siga el camino después de una lesión en el trabajo. Seleccione un paso para ver qué hace la cobertura.",
        legend: "Los requisitos, formularios y términos cambian según el estado. Un agente con licencia confirma lo que aplica en el suyo.",
        items: [
          {
            t: "Beneficios médicos",
            d: "Consultas, hospital, cirugía y medicamentos para la lesión de trabajo.",
            rows: [
              {
                k: "Ejemplo",
                v: "Atención de emergencia después de caerse de una escalera."
              }
            ],
            term: "medical benefits"
          },
          {
            t: "Salarios perdidos",
            d: "Una parte del salario del empleado mientras no puede trabajar. El porcentaje y el período de espera los fija la ley estatal.",
            rows: [
              {
                k: "Ejemplo",
                v: "Seis semanas sin trabajar por una muñeca fracturada."
              }
            ],
            term: "lost wages"
          },
          {
            t: "Rehabilitación",
            d: "Terapia física y, en algunos casos, recapacitación para ayudar al empleado a volver al trabajo.",
            rows: [
              {
                k: "Ejemplo",
                v: "Terapia para recuperar la fuerza antes de volver al puesto."
              }
            ]
          },
          {
            t: "Responsabilidades del empleador",
            d: "Tener la cobertura cuando el estado la exige, reportar las lesiones a tiempo y conservar los registros de nómina para la auditoría de la prima.",
            rows: [
              {
                k: "Ejemplo",
                v: "Reportar la lesión a la aseguradora dentro del plazo del estado."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "Un techador se cae y se fractura una pierna.",
          parts: [
            "Beneficios médicos",
            "Salarios perdidos",
            "Rehabilitación"
          ],
          d: "Se paga el tratamiento, se repone parte del salario durante la recuperación y la terapia apoya el regreso al trabajo."
        },
        {
          t: "Un empleado de cocina desarrolla una lesión por esfuerzo repetitivo a lo largo de varios meses.",
          parts: [
            "Beneficios médicos"
          ],
          d: "Las condiciones que se desarrollan por el trabajo con el tiempo pueden estar cubiertas, según las reglas del estado."
        }
      ],
      myths: [
        {
          m: "Solo uso subcontratistas 1099, así que no la necesito.",
          f: "Es el estado el que decide quién cuenta como empleado. Los subcontratistas sin seguro pueden tratarse como empleados suyos en la auditoría, y su nómina cobrarse a su póliza."
        },
        {
          m: "Los negocios pequeños están exentos.",
          f: "Los requisitos cambian según el estado y la industria. En algunos estados, los negocios de construcción deben cubrir incluso a un solo empleado."
        },
        {
          m: "La responsabilidad general cubre a un trabajador lesionado.",
          f: "La responsabilidad general excluye las lesiones de sus propios empleados."
        }
      ],
      notCovered: [
        "Lesiones fuera del desempeño del trabajo",
        "Lesiones causadas por intoxicación, según muchas leyes estatales",
        "Contratistas independientes con cobertura propia",
        "Dueños o directivos que eligieron la exención, donde el estado lo permite"
      ],
      who: [
        {
          t: "Empleadores que alcanzan el requisito de su estado",
          d: "El número de empleados que hace obligatoria la cobertura cambia según el estado y la industria."
        },
        {
          t: "Contratistas en obras comerciales",
          d: "Los contratistas generales suelen exigir comprobante antes de que empiece el trabajo."
        },
        {
          t: "Dueños que quieren cobertura para sí mismos",
          d: "Algunos estados permiten que el dueño se incluya o se excluya."
        }
      ],
      factors: [
        "Estado",
        "Nómina",
        "Códigos de clasificación de los puestos",
        "Historial de reclamos y experience modifier",
        "Uso de subcontratistas sin seguro"
      ],
      faq: [
        {
          q: "¿La compensación laboral es obligatoria en mi estado?",
          a: "Cada estado donde trabajamos fija su propio requisito, muchas veces según el número de empleados y la industria. En Florida, por ejemplo, los negocios de construcción lo necesitan desde un empleado y la mayoría de los demás desde cuatro, contando a los directivos (corporate officers). Un agente confirma la regla para su estado y su tipo de trabajo.",
          sources: [FL_DWC]
        },
        {
          q: "¿Qué es la auditoría de la prima?",
          a: "Al terminar el período de la póliza, la aseguradora compara la nómina estimada con la nómina real y ajusta la prima hacia arriba o hacia abajo."
        },
        {
          q: "¿Se puede excluir al dueño?",
          a: "Muchos estados permiten que los dueños o directivos se excluyan. Las reglas y los trámites cambian según el estado."
        }
      ]
    }
  }
};

export default workersComp;
