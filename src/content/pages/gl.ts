// General liability insurance landing page. DRAFT: needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Source copy: design/claude-design/site-v2/source (lib/ativa-landing.js products, i18n/pages.js
// ATIVA_LANDING, i18n/landing.pt.js / landing.es.js). Explorer footnote = the design's state note.

import type { LandingContent } from "./types";

const gl: LandingContent = {
  id: "gl",
  status: "draft",
  updated: "2026-11-25",
  scene: "gl",
  hero: {
    file: "gl-full.webp",
    layout: "partial",
    imgW: "66%",
    subW: "38ch",
    side: "left",
    mdH: 420,
    w: 1774,
    h: 887,
    pos: {
      lg: "50% 30%",
      md: "50% 50%",
      sm: "50% 50%"
    }
  },
  related: [
    "bop",
    "commercial-auto",
    "workers-comp",
    "commercial-umbrella"
  ],
  copy: {
    en: {
      seo: {
        title: "General Liability Insurance, Explained | Ativa Insurance",
        description: "What general liability covers: bodily injury, property damage, personal and advertising injury, and medical payments. An independent agency compares."
      },
      h1: "General liability insurance",
      sub: "Liability coverage for contractors and small businesses when a third party claims bodily injury or property damage from your operations.",
      cta: "Explore General Liability",
      alt: "Glass shield with a storefront icon on a desk, beside a hard hat, blueprints and a tape measure",
      quickQ: "What is general liability insurance?",
      quick: "General liability insurance protects a business when someone outside the company claims it caused bodily injury, property damage, or personal and advertising injury. It pays for legal defense and for settlements or judgments, up to the policy limits. Many contracts and landlords require it.",
      explorer: {
        title: "A day at the business",
        lead: "Select a situation to see which part of a general liability policy responds.",
        legend: "Requirements, policy forms and terms differ by state. A licensed agent confirms what applies in yours.",
        items: [
          {
            t: "Bodily injury",
            d: "Injury to someone who isn't your employee, caused by your premises or operations.",
            rows: [
              {
                k: "Example",
                v: "A customer slips on a wet floor in your shop."
              }
            ]
          },
          {
            t: "Property damage",
            d: "Damage your work or operations cause to someone else's property.",
            rows: [
              {
                k: "Example",
                v: "A painter's ladder breaks a client's window."
              }
            ]
          },
          {
            t: "Personal and advertising injury",
            d: "Claims such as libel, slander or using someone's image or slogan in your advertising.",
            rows: [
              {
                k: "Example",
                v: "A competitor says your ad copied their slogan."
              }
            ]
          },
          {
            t: "Medical payments",
            d: "Smaller medical bills for someone hurt on your premises, regardless of fault.",
            rows: [
              {
                k: "Example",
                v: "A visitor cuts a hand on a display and needs stitches."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "A subcontractor's client trips over your extension cord on a job site.",
          parts: [
            "Bodily injury",
            "Medical payments"
          ],
          d: "Medical payments can handle smaller bills. If the client sues, bodily injury liability and defense respond."
        },
        {
          t: "Your crew damages a customer's floor during an installation.",
          parts: [
            "Property damage"
          ],
          d: "Damage to the customer's property can be covered. The cost of redoing your own faulty work usually is not."
        }
      ],
      myths: [
        {
          m: "General liability covers my employees if they get hurt.",
          f: "Employee injuries fall under workers' compensation, not general liability."
        },
        {
          m: "It covers mistakes in my professional advice.",
          f: "Errors in professional services need professional liability (E&O)."
        },
        {
          m: "A certificate of insurance is the same as coverage.",
          f: "A certificate only shows the policy that exists. It doesn't add or change coverage."
        }
      ],
      notCovered: [
        "Injuries to your own employees",
        "Your own property and tools",
        "Professional errors",
        "Vehicles used for the business",
        "The cost of redoing faulty work"
      ],
      who: [
        {
          t: "Contractors and trades",
          d: "General contractors usually ask for proof before work starts."
        },
        {
          t: "Shops, restaurants and offices",
          d: "Landlords commonly require it in the lease."
        },
        {
          t: "Service businesses that visit customers",
          d: "Cleaning, landscaping, installation and similar work."
        }
      ],
      factors: [
        "Type of work",
        "Revenue and payroll",
        "Location",
        "Limits and deductibles",
        "Use of subcontractors",
        "Claims history"
      ],
      faq: [
        {
          q: "Is general liability required by law?",
          a: "Usually not by state law, but some licenses require it, and clients, landlords and general contractors commonly do."
        },
        {
          q: "What do the two limits mean?",
          a: "The per-occurrence limit is the most paid for one claim. The aggregate is the most paid for all claims in the policy period."
        },
        {
          q: "What is an additional insured?",
          a: "Another party added to your policy by endorsement, often a client or landlord. It has to be added to the policy; asking for a certificate doesn't do it."
        }
      ]
    },
    pt: {
      seo: {
        title: "Responsabilidade civil geral, explicada | Ativa Insurance",
        description: "O que cobre o general liability: lesão corporal, dano material, dano pessoal e de publicidade e despesas médicas. Uma agência independente compara."
      },
      h1: "Seguro de responsabilidade civil geral",
      sub: "Cobertura de responsabilidade para empreiteiros e pequenas empresas quando um terceiro alega lesão corporal ou dano material causado pelas suas operações.",
      cta: "Conhecer o General Liability",
      alt: "Escudo de vidro com ícone de loja sobre uma mesa, ao lado de capacete, plantas e trena",
      quickQ: "O que é general liability?",
      quick: "O seguro de responsabilidade civil geral (general liability) protege a empresa quando alguém de fora alega que ela causou lesão corporal, dano material ou dano pessoal e de publicidade. Ele paga a defesa jurídica e os acordos ou condenações, até os limites da apólice. Muitos contratos e proprietários de imóveis exigem.",
      explorer: {
        title: "Um dia na empresa",
        lead: "Selecione uma situação para ver qual parte da apólice de general liability responde.",
        legend: "Exigências, formulários e termos mudam de estado para estado. Um agente licenciado confirma o que vale no seu.",
        items: [
          {
            t: "Lesão corporal",
            d: "Lesão a alguém que não é seu funcionário, causada pelo seu estabelecimento ou pelas suas operações.",
            rows: [
              {
                k: "Exemplo",
                v: "Um cliente escorrega no piso molhado da sua loja."
              }
            ],
            term: "bodily injury"
          },
          {
            t: "Dano material",
            d: "Dano que o seu trabalho ou as suas operações causam a bens de terceiros.",
            rows: [
              {
                k: "Exemplo",
                v: "A escada de um pintor quebra a janela do cliente."
              }
            ],
            term: "property damage"
          },
          {
            t: "Dano pessoal e de publicidade",
            d: "Alegações como calúnia, difamação ou uso da imagem ou do slogan de alguém na sua publicidade.",
            rows: [
              {
                k: "Exemplo",
                v: "Um concorrente diz que o seu anúncio copiou o slogan dele."
              }
            ],
            term: "personal and advertising injury"
          },
          {
            t: "Despesas médicas",
            d: "Pequenas despesas médicas de alguém que se machuca no seu estabelecimento, independentemente de culpa.",
            rows: [
              {
                k: "Exemplo",
                v: "Um visitante corta a mão em um expositor e precisa de pontos."
              }
            ],
            term: "medical payments"
          }
        ]
      },
      scenarios: [
        {
          t: "O cliente de um subempreiteiro tropeça na sua extensão elétrica na obra.",
          parts: [
            "Lesão corporal",
            "Despesas médicas"
          ],
          d: "As despesas médicas podem cobrir contas menores. Se o cliente processar, entram a cobertura de lesão corporal e a defesa."
        },
        {
          t: "Sua equipe danifica o piso de um cliente durante uma instalação.",
          parts: [
            "Dano material"
          ],
          d: "O dano ao bem do cliente pode ser coberto. O custo de refazer o seu próprio serviço malfeito, em geral, não."
        }
      ],
      myths: [
        {
          m: "O general liability cobre meus funcionários se eles se machucarem.",
          f: "Lesões de funcionários entram no workers' compensation, não no general liability."
        },
        {
          m: "Cobre erros nas minhas orientações profissionais.",
          f: "Erros em serviços profissionais exigem o seguro de responsabilidade profissional (E&O)."
        },
        {
          m: "Certificado de seguro é a mesma coisa que cobertura.",
          f: "O certificado apenas mostra a apólice que existe. Ele não acrescenta nem altera cobertura."
        }
      ],
      notCovered: [
        "Lesões dos seus próprios funcionários",
        "Seus próprios bens e ferramentas",
        "Erros profissionais",
        "Veículos usados pela empresa",
        "O custo de refazer serviço malfeito"
      ],
      who: [
        {
          t: "Empreiteiros e prestadores de serviço",
          d: "As construtoras costumam pedir comprovante antes de o trabalho começar."
        },
        {
          t: "Lojas, restaurantes e escritórios",
          d: "Os proprietários dos imóveis normalmente exigem no contrato de locação."
        },
        {
          t: "Empresas que atendem na casa do cliente",
          d: "Limpeza, jardinagem, instalação e serviços parecidos."
        }
      ],
      factors: [
        "Tipo de trabalho",
        "Faturamento e folha de pagamento",
        "Localização",
        "Limites e franquias",
        "Uso de subempreiteiros",
        "Histórico de sinistros"
      ],
      faq: [
        {
          q: "O general liability é obrigatório por lei?",
          a: "Normalmente não por lei estadual, mas algumas licenças exigem, e clientes, proprietários de imóveis e construtoras costumam exigir."
        },
        {
          q: "O que significam os dois limites?",
          a: "O limite por ocorrência é o máximo pago por um sinistro. O limite agregado é o máximo pago por todos os sinistros no período da apólice."
        },
        {
          q: "O que é um additional insured?",
          a: "É outra parte incluída na sua apólice por endosso, muitas vezes um cliente ou o dono do imóvel. Precisa ser incluída na apólice; pedir um certificado não faz isso."
        }
      ]
    },
    es: {
      seo: {
        title: "Responsabilidad general, explicada | Ativa Insurance",
        description: "Qué cubre el general liability: lesiones corporales, daños a la propiedad, daños personales y de publicidad y pagos médicos. Agencia independiente."
      },
      h1: "Seguro de responsabilidad general",
      sub: "Cobertura de responsabilidad para contratistas y pequeños negocios cuando un tercero reclama lesiones corporales o daños a la propiedad por sus operaciones.",
      cta: "Conocer General Liability",
      alt: "Escudo de vidrio con ícono de tienda sobre un escritorio, junto a un casco, planos y una cinta métrica",
      quickQ: "¿Qué es el general liability?",
      quick: "El seguro de responsabilidad general (general liability) protege a un negocio cuando alguien ajeno a la empresa reclama que le causó lesiones corporales, daños a la propiedad o daños personales y de publicidad. Paga la defensa legal y los acuerdos o sentencias, hasta los límites de la póliza. Muchos contratos y propietarios de locales lo exigen.",
      explorer: {
        title: "Un día en el negocio",
        lead: "Seleccione una situación para ver qué parte de la póliza de responsabilidad general responde.",
        legend: "Los requisitos, formularios y términos cambian según el estado. Un agente con licencia confirma lo que aplica en el suyo.",
        items: [
          {
            t: "Lesiones corporales",
            d: "Lesión a alguien que no es su empleado, causada por su local o por sus operaciones.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un cliente se resbala en el piso mojado de su tienda."
              }
            ],
            term: "bodily injury"
          },
          {
            t: "Daños a la propiedad",
            d: "Daños que su trabajo o sus operaciones causan a la propiedad de otra persona.",
            rows: [
              {
                k: "Ejemplo",
                v: "La escalera de un pintor rompe la ventana de un cliente."
              }
            ],
            term: "property damage"
          },
          {
            t: "Daños personales y de publicidad",
            d: "Reclamos como calumnia, difamación o uso de la imagen o el eslogan de alguien en su publicidad.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un competidor dice que su anuncio copió su eslogan."
              }
            ],
            term: "personal and advertising injury"
          },
          {
            t: "Pagos médicos",
            d: "Gastos médicos menores de alguien que se lesiona en su local, sin importar quién tuvo la culpa.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un visitante se corta la mano con un exhibidor y necesita puntos."
              }
            ],
            term: "medical payments"
          }
        ]
      },
      scenarios: [
        {
          t: "El cliente de un subcontratista tropieza con su cable de extensión en una obra.",
          parts: [
            "Lesiones corporales",
            "Pagos médicos"
          ],
          d: "Los pagos médicos pueden cubrir cuentas menores. Si el cliente demanda, responden la cobertura de lesiones corporales y la defensa."
        },
        {
          t: "Su cuadrilla daña el piso de un cliente durante una instalación.",
          parts: [
            "Daños a la propiedad"
          ],
          d: "El daño a la propiedad del cliente puede estar cubierto. El costo de rehacer su propio trabajo defectuoso, por lo general, no."
        }
      ],
      myths: [
        {
          m: "La responsabilidad general cubre a mis empleados si se lesionan.",
          f: "Las lesiones de empleados corresponden a la compensación laboral, no a la responsabilidad general."
        },
        {
          m: "Cubre errores en mis consejos profesionales.",
          f: "Los errores en servicios profesionales requieren responsabilidad profesional (E&O)."
        },
        {
          m: "Un certificado de seguro es lo mismo que la cobertura.",
          f: "El certificado solo muestra la póliza que existe. No agrega ni cambia cobertura."
        }
      ],
      notCovered: [
        "Lesiones de sus propios empleados",
        "Su propia propiedad y sus herramientas",
        "Errores profesionales",
        "Vehículos que usa el negocio",
        "El costo de rehacer un trabajo defectuoso"
      ],
      who: [
        {
          t: "Contratistas y oficios",
          d: "Los contratistas generales suelen pedir comprobante antes de que empiece el trabajo."
        },
        {
          t: "Tiendas, restaurantes y oficinas",
          d: "Los propietarios de locales normalmente lo exigen en el contrato de arrendamiento."
        },
        {
          t: "Negocios de servicios que visitan a sus clientes",
          d: "Limpieza, jardinería, instalación y trabajos similares."
        }
      ],
      factors: [
        "Tipo de trabajo",
        "Ingresos y nómina",
        "Ubicación",
        "Límites y deducibles",
        "Uso de subcontratistas",
        "Historial de reclamos"
      ],
      faq: [
        {
          q: "¿La responsabilidad general es obligatoria por ley?",
          a: "Normalmente no por ley estatal, pero algunas licencias la exigen, y los clientes, los propietarios de locales y los contratistas generales suelen exigirla."
        },
        {
          q: "¿Qué significan los dos límites?",
          a: "El límite por ocurrencia es lo máximo que se paga por un reclamo. El límite agregado es lo máximo que se paga por todos los reclamos en el período de la póliza."
        },
        {
          q: "¿Qué es un asegurado adicional?",
          a: "Es otra parte que se agrega a su póliza mediante un endoso, muchas veces un cliente o el dueño del local. Tiene que agregarse a la póliza; pedir un certificado no lo hace."
        }
      ]
    }
  }
};

export default gl;
