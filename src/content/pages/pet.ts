// Pet insurance landing page. DRAFT: needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Source copy: design/claude-design/site-v2/source (lib/ativa-landing.js products, i18n/pages.js
// ATIVA_LANDING, i18n/landing.pt.js / landing.es.js). Explorer footnote = the design's state note.
// Hero description = first sentence of the quick answer and button = "Get a quote".

import type { LandingContent } from "./types";

const pet: LandingContent = {
  id: "pet",
  status: "draft",
  updated: "2026-11-25",
  scene: "pet",
  hero: {
    file: "pet-full.webp",
    layout: "partial",
    imgW: "66%",
    subW: "38ch",
    side: "left",
    mdH: 420,
    w: 1774,
    h: 887,
    pos: {
      lg: "100% 30%",
      md: "75% 50%",
      sm: "75% 50%"
    }
  },
  related: [
    "renters",
    "home",
    "auto",
    "condo"
  ],
  copy: {
    en: {
      seo: {
        title: "Pet Insurance, Explained | Ativa Insurance",
        description: "How pet insurance reimburses eligible vet bills for accidents and illnesses, what's usually excluded, and what affects the price. Independent agency."
      },
      h1: "Pet insurance",
      sub: "Pet insurance reimburses part of eligible veterinary bills when a dog or cat is hurt or gets sick.",
      cta: "Get a quote",
      alt: "Tabby cat and Bernese mountain dog puppy lying together on a rug with toys",
      quickQ: "What is pet insurance?",
      quick: "Pet insurance reimburses part of eligible veterinary bills when a dog or cat is hurt or gets sick. You pay the vet, send in the claim, and the plan pays back a percentage after your deductible. Conditions that started before the policy are generally excluded.",
      explorer: {
        title: "What a plan can help pay for",
        lead: "Select a type of veterinary cost to see how a plan typically treats it.",
        legend: "Requirements, policy forms and terms differ by state. A licensed agent confirms what applies in yours.",
        items: [
          {
            t: "Accidents",
            d: "Injuries such as broken bones, cuts, bites or swallowed objects.",
            rows: [
              {
                k: "Example",
                v: "A dog swallows a sock and needs it removed."
              }
            ]
          },
          {
            t: "Illnesses",
            d: "Conditions such as infections, digestive problems, cancer or diabetes that begin after the waiting period.",
            rows: [
              {
                k: "Example",
                v: "A cat develops a urinary infection."
              }
            ]
          },
          {
            t: "Diagnostic testing",
            d: "X-rays, blood work, ultrasounds and other tests for a covered condition.",
            rows: [
              {
                k: "Example",
                v: "Blood work and an ultrasound to find the cause of vomiting."
              }
            ]
          },
          {
            t: "Surgery",
            d: "Operations and hospital stays for a covered accident or illness.",
            rows: [
              {
                k: "Example",
                v: "Surgery for a torn knee ligament."
              }
            ]
          },
          {
            t: "Prescription medications",
            d: "Medication prescribed for a covered condition.",
            rows: [
              {
                k: "Example",
                v: "Antibiotics after an infection."
              }
            ]
          },
          {
            t: "Veterinary exam fees",
            d: "The office visit for an accident or illness. Some plans include it, others offer it as an add-on.",
            rows: [
              {
                k: "Example",
                v: "The emergency clinic's exam charge."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "Your dog needs emergency surgery after eating something it shouldn't.",
          parts: [
            "Accidents",
            "Diagnostic testing",
            "Surgery"
          ],
          d: "You pay the clinic, file the claim, and the plan reimburses its percentage of eligible costs after the deductible."
        },
        {
          t: "Your cat is diagnosed with a chronic illness two years into the policy.",
          parts: [
            "Illnesses",
            "Prescription medications"
          ],
          d: "Ongoing treatment is typically eligible if the condition started after the policy and its waiting periods."
        }
      ],
      myths: [
        {
          m: "It works like my own health insurance.",
          f: "Most plans reimburse you after you pay the vet. There are usually no networks, and you can use any licensed veterinarian."
        },
        {
          m: "It covers conditions my pet already has.",
          f: "Pre-existing conditions are generally excluded, which is why enrolling earlier matters."
        },
        {
          m: "Coverage starts the day I sign up.",
          f: "Plans have waiting periods, often shorter for accidents than for illnesses."
        }
      ],
      notCovered: [
        "Pre-existing conditions",
        "Routine and preventive care, unless a wellness add-on is bought",
        "Cosmetic or elective procedures",
        "Breeding and pregnancy costs"
      ],
      who: [
        {
          t: "Owners of puppies and kittens",
          d: "Enrolling before conditions appear keeps more eligible later."
        },
        {
          t: "Owners of breeds prone to hereditary conditions",
          d: "Check how each plan treats them."
        },
        {
          t: "Anyone who'd struggle with a large vet bill",
          d: "Emergency care can be costly."
        }
      ],
      factors: [
        "Species, breed and age",
        "Where you live",
        "Deductible",
        "Reimbursement percentage",
        "Annual limit"
      ],
      faq: [
        {
          q: "How does reimbursement work?",
          a: "You pay the vet, submit the invoice, and the plan pays back its percentage of eligible costs once the deductible is met, up to the plan's limit."
        },
        {
          q: "Can I use any vet?",
          a: "Most plans let you visit any licensed veterinarian, including emergency and specialty clinics."
        },
        {
          q: "Does it cover vaccines and checkups?",
          a: "Not in a standard accident and illness plan. Some carriers sell a wellness add-on for routine care."
        }
      ]
    },
    pt: {
      seo: {
        title: "Seguro pet, explicado | Ativa Insurance",
        description: "Como o seguro pet reembolsa despesas veterinárias elegíveis com acidentes e doenças, o que costuma ficar de fora e o que influencia o preço."
      },
      h1: "Seguro pet",
      sub: "O seguro pet reembolsa parte das despesas veterinárias elegíveis quando um cão ou gato se machuca ou adoece.",
      cta: "Fazer cotação",
      alt: "Gato rajado e filhote de boiadeiro bernês deitados juntos em um tapete com brinquedos",
      quickQ: "O que é seguro pet?",
      quick: "O seguro pet reembolsa parte das despesas veterinárias elegíveis quando um cão ou gato se machuca ou adoece. Você paga o veterinário, envia o pedido, e o plano devolve uma porcentagem depois da franquia. Condições que começaram antes da apólice em geral são excluídas.",
      explorer: {
        title: "O que um plano pode ajudar a pagar",
        lead: "Selecione um tipo de despesa veterinária para ver como um plano normalmente trata.",
        legend: "Exigências, formulários e termos mudam de estado para estado. Um agente licenciado confirma o que vale no seu.",
        items: [
          {
            t: "Acidentes",
            d: "Lesões como fraturas, cortes, mordidas ou objetos engolidos.",
            rows: [
              {
                k: "Exemplo",
                v: "Um cachorro engole uma meia e precisa removê-la."
              }
            ]
          },
          {
            t: "Doenças",
            d: "Condições como infecções, problemas digestivos, câncer ou diabetes que começam depois da carência.",
            rows: [
              {
                k: "Exemplo",
                v: "Uma gata desenvolve infecção urinária."
              }
            ]
          },
          {
            t: "Exames diagnósticos",
            d: "Raios X, exames de sangue, ultrassons e outros exames para uma condição coberta.",
            rows: [
              {
                k: "Exemplo",
                v: "Exame de sangue e ultrassom para descobrir a causa dos vômitos."
              }
            ]
          },
          {
            t: "Cirurgia",
            d: "Operações e internações por acidente ou doença cobertos.",
            rows: [
              {
                k: "Exemplo",
                v: "Cirurgia de ligamento rompido no joelho."
              }
            ]
          },
          {
            t: "Medicamentos com receita",
            d: "Medicamentos prescritos para uma condição coberta.",
            rows: [
              {
                k: "Exemplo",
                v: "Antibióticos depois de uma infecção."
              }
            ]
          },
          {
            t: "Consultas veterinárias",
            d: "A consulta por acidente ou doença. Alguns planos incluem, outros oferecem como adicional.",
            rows: [
              {
                k: "Exemplo",
                v: "A taxa de consulta da clínica de emergência."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "Seu cachorro precisa de cirurgia de emergência depois de comer o que não devia.",
          parts: [
            "Acidentes",
            "Exames diagnósticos",
            "Cirurgia"
          ],
          d: "Você paga a clínica, envia o pedido, e o plano reembolsa a sua porcentagem dos custos elegíveis depois da franquia."
        },
        {
          t: "Sua gata recebe o diagnóstico de uma doença crônica dois anos depois de contratada a apólice.",
          parts: [
            "Doenças",
            "Medicamentos com receita"
          ],
          d: "O tratamento contínuo normalmente é elegível se a condição começou depois da apólice e das carências."
        }
      ],
      myths: [
        {
          m: "Funciona como o meu plano de saúde.",
          f: "A maioria dos planos reembolsa você depois que paga o veterinário. Em geral não há rede credenciada, e você pode usar qualquer veterinário licenciado."
        },
        {
          m: "Cobre problemas que o meu pet já tem.",
          f: "Condições preexistentes em geral são excluídas, por isso contratar cedo faz diferença."
        },
        {
          m: "A cobertura começa no dia em que eu contrato.",
          f: "Os planos têm carências, muitas vezes menores para acidentes do que para doenças."
        }
      ],
      notCovered: [
        "Condições preexistentes",
        "Cuidados de rotina e prevenção, salvo com um adicional de bem-estar",
        "Procedimentos estéticos ou eletivos",
        "Custos de reprodução e gestação"
      ],
      who: [
        {
          t: "Tutores de filhotes",
          d: "Contratar antes de surgirem condições mantém mais coisas elegíveis depois."
        },
        {
          t: "Tutores de raças com tendência a doenças hereditárias",
          d: "Verifique como cada plano trata esses casos."
        },
        {
          t: "Quem teria dificuldade com uma conta veterinária alta",
          d: "O atendimento de emergência pode custar caro."
        }
      ],
      factors: [
        "Espécie, raça e idade",
        "Onde você mora",
        "Franquia",
        "Porcentagem de reembolso",
        "Limite anual"
      ],
      faq: [
        {
          q: "Como funciona o reembolso?",
          a: "Você paga o veterinário, envia a fatura, e o plano devolve a sua porcentagem dos custos elegíveis depois de atingida a franquia, até o limite do plano."
        },
        {
          q: "Posso usar qualquer veterinário?",
          a: "A maioria dos planos permite qualquer veterinário licenciado, incluindo clínicas de emergência e de especialidades."
        },
        {
          q: "Cobre vacinas e check-ups?",
          a: "Não em um plano padrão de acidentes e doenças. Algumas seguradoras vendem um adicional de bem-estar para cuidados de rotina."
        }
      ]
    },
    es: {
      seo: {
        title: "Seguro para mascotas, explicado | Ativa Insurance",
        description: "Cómo el seguro para mascotas reembolsa gastos veterinarios elegibles por accidentes y enfermedades, qué suele excluirse y qué influye en el precio."
      },
      h1: "Seguro para mascotas",
      sub: "El seguro para mascotas reembolsa parte de las cuentas veterinarias elegibles cuando un perro o un gato se lesiona o se enferma.",
      cta: "Cotizar",
      alt: "Gato atigrado y cachorro boyero de Berna acostados juntos sobre una alfombra con juguetes",
      quickQ: "¿Qué es el seguro para mascotas?",
      quick: "El seguro para mascotas reembolsa parte de las cuentas veterinarias elegibles cuando un perro o un gato se lesiona o se enferma. Usted le paga al veterinario, envía el reclamo y el plan le devuelve un porcentaje después del deducible. Las condiciones que comenzaron antes de la póliza por lo general quedan excluidas.",
      explorer: {
        title: "Lo que un plan puede ayudar a pagar",
        lead: "Seleccione un tipo de gasto veterinario para ver cómo lo trata normalmente un plan.",
        legend: "Los requisitos, formularios y términos cambian según el estado. Un agente con licencia confirma lo que aplica en el suyo.",
        items: [
          {
            t: "Accidentes",
            d: "Lesiones como fracturas, cortes, mordeduras u objetos tragados.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un perro se traga un calcetín y hay que extraerlo."
              }
            ]
          },
          {
            t: "Enfermedades",
            d: "Condiciones como infecciones, problemas digestivos, cáncer o diabetes que comienzan después del período de espera.",
            rows: [
              {
                k: "Ejemplo",
                v: "Una gata desarrolla una infección urinaria."
              }
            ]
          },
          {
            t: "Pruebas de diagnóstico",
            d: "Radiografías, análisis de sangre, ultrasonidos y otras pruebas para una condición cubierta.",
            rows: [
              {
                k: "Ejemplo",
                v: "Análisis de sangre y un ultrasonido para encontrar la causa de los vómitos."
              }
            ]
          },
          {
            t: "Cirugía",
            d: "Operaciones y hospitalizaciones por un accidente o una enfermedad cubiertos.",
            rows: [
              {
                k: "Ejemplo",
                v: "Cirugía por un ligamento roto en la rodilla."
              }
            ]
          },
          {
            t: "Medicamentos con receta",
            d: "Medicamentos recetados para una condición cubierta.",
            rows: [
              {
                k: "Ejemplo",
                v: "Antibióticos después de una infección."
              }
            ]
          },
          {
            t: "Consultas veterinarias",
            d: "La consulta por un accidente o una enfermedad. Algunos planes la incluyen, otros la ofrecen como adicional.",
            rows: [
              {
                k: "Ejemplo",
                v: "El cargo por consulta de la clínica de emergencias."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "Su perro necesita una cirugía de emergencia después de comer algo que no debía.",
          parts: [
            "Accidentes",
            "Pruebas de diagnóstico",
            "Cirugía"
          ],
          d: "Usted le paga a la clínica, presenta el reclamo y el plan reembolsa su porcentaje de los costos elegibles después del deducible."
        },
        {
          t: "A su gata le diagnostican una enfermedad crónica a los dos años de tener la póliza.",
          parts: [
            "Enfermedades",
            "Medicamentos con receta"
          ],
          d: "El tratamiento continuo normalmente es elegible si la condición comenzó después de la póliza y de sus períodos de espera."
        }
      ],
      myths: [
        {
          m: "Funciona como mi propio seguro médico.",
          f: "La mayoría de los planes le reembolsa después de que usted le paga al veterinario. Por lo general no hay redes, y puede usar cualquier veterinario con licencia."
        },
        {
          m: "Cubre condiciones que mi mascota ya tiene.",
          f: "Las condiciones preexistentes por lo general quedan excluidas, por eso importa inscribirse antes."
        },
        {
          m: "La cobertura empieza el día que me inscribo.",
          f: "Los planes tienen períodos de espera, muchas veces más cortos para accidentes que para enfermedades."
        }
      ],
      notCovered: [
        "Condiciones preexistentes",
        "Cuidado de rutina y preventivo, salvo que se compre un adicional de bienestar",
        "Procedimientos estéticos o electivos",
        "Costos de reproducción y gestación"
      ],
      who: [
        {
          t: "Dueños de cachorros y gatitos",
          d: "Inscribirlos antes de que aparezcan condiciones mantiene más cosas elegibles después."
        },
        {
          t: "Dueños de razas propensas a condiciones hereditarias",
          d: "Revise cómo las trata cada plan."
        },
        {
          t: "Quien tendría dificultades con una cuenta veterinaria alta",
          d: "La atención de emergencia puede ser costosa."
        }
      ],
      factors: [
        "Especie, raza y edad",
        "Dónde vive",
        "Deducible",
        "Porcentaje de reembolso",
        "Límite anual"
      ],
      faq: [
        {
          q: "¿Cómo funciona el reembolso?",
          a: "Usted le paga al veterinario, envía la factura y el plan le devuelve su porcentaje de los costos elegibles una vez cumplido el deducible, hasta el límite del plan."
        },
        {
          q: "¿Puedo usar cualquier veterinario?",
          a: "La mayoría de los planes le permite ir a cualquier veterinario con licencia, incluidas clínicas de emergencia y de especialidades."
        },
        {
          q: "¿Cubre vacunas y chequeos?",
          a: "No en un plan estándar de accidentes y enfermedades. Algunas aseguradoras venden un adicional de bienestar para el cuidado de rutina."
        }
      ]
    }
  }
};

export default pet;
