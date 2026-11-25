// Commercial auto insurance landing page. DRAFT: needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Source copy: design/claude-design/site-v2/source (lib/ativa-landing.js products, i18n/pages.js
// ATIVA_LANDING, i18n/landing.pt.js / landing.es.js). Explorer footnote = the design's state note.

import type { LandingContent } from "./types";

const commercialAuto: LandingContent = {
  id: "commercial-auto",
  status: "draft",
  updated: "2026-11-25",
  scene: "commercial-auto",
  hero: {
    file: "commercial-auto-full.webp",
    layout: "partial",
    imgW: "76%",
    subW: "36ch",
    side: "left",
    mdH: 330,
    w: 1774,
    h: 887,
    pos: {
      lg: "50% 60%",
      md: "50% 50%",
      sm: "80% 50%"
    }
  },
  related: [
    "trucking",
    "workers-comp",
    "commercial-umbrella",
    "bop"
  ],
  copy: {
    en: {
      seo: {
        title: "Commercial Auto Insurance, Explained | Ativa Insurance",
        description: "How commercial auto covers business vehicles: liability, collision, comprehensive, medical payments and uninsured motorist. An independent agency compares."
      },
      h1: "Commercial auto insurance",
      sub: "Coverage for the vehicles your business owns and operates, from a single work van to pickups and tractor-trailers.",
      cta: "Get My Commercial Auto Quote",
      alt: "White cargo van, work pickup and blue semi-truck on a highway at sunrise",
      quickQ: "What is commercial auto insurance?",
      quick: "Commercial auto insurance covers vehicles a business owns, leases or uses for work. It pays for injuries and damage the business causes to others on the road and, if selected, for damage to its own vehicles. Personal auto policies usually exclude regular business use.",
      explorer: {
        title: "Around the work vehicle",
        lead: "Select a part of the scene to see which coverage responds.",
        legend: "Requirements, policy forms and terms differ by state. A licensed agent confirms what applies in yours.",
        items: [
          {
            t: "Liability",
            d: "Injuries and property damage your driver causes to others, including legal defense, up to your limit.",
            rows: [
              {
                k: "Example",
                v: "Your van rear-ends a car at a light."
              }
            ]
          },
          {
            t: "Collision",
            d: "Damage to your vehicle from hitting another vehicle or an object, minus your deductible.",
            rows: [
              {
                k: "Example",
                v: "A pickup backs into a loading dock."
              }
            ]
          },
          {
            t: "Comprehensive",
            d: "Theft, fire, hail, flood, vandalism and other non-collision damage, minus your deductible.",
            rows: [
              {
                k: "Example",
                v: "Hail dents a parked van."
              }
            ]
          },
          {
            t: "Medical payments or PIP",
            d: "Medical costs for your driver and passengers. Which coverage applies, and whether it's required, depends on the state.",
            rows: [
              {
                k: "Example",
                v: "An employee riding along is injured."
              }
            ]
          },
          {
            t: "Uninsured motorist",
            d: "Injuries to your people when the at-fault driver has no insurance or too little. Availability and rules vary by state.",
            rows: [
              {
                k: "Example",
                v: "An uninsured driver hits your truck."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "An employee causes a crash while driving to a job site.",
          parts: [
            "Liability",
            "Collision"
          ],
          d: "Liability responds to the other party's injuries and damage. Collision repairs your vehicle."
        },
        {
          t: "Tools are stolen from a locked van overnight.",
          parts: [
            "Comprehensive"
          ],
          d: "Comprehensive covers the vehicle. Tools and equipment usually need separate coverage, such as inland marine."
        }
      ],
      myths: [
        {
          m: "My personal auto policy covers my work truck.",
          f: "Personal policies often exclude vehicles used mainly for business or titled to a company."
        },
        {
          m: "Employees driving their own cars are covered by my policy.",
          f: "Only if you add hired and non-owned auto coverage. Without it, the business can still be sued."
        }
      ],
      notCovered: [
        "Tools and equipment carried in the vehicle",
        "Cargo you haul for others",
        "Employee injuries covered by workers' compensation",
        "Wear and mechanical breakdown"
      ],
      who: [
        {
          t: "Businesses with vehicles titled to the company",
          d: "Vans, pickups, box trucks and cars."
        },
        {
          t: "Contractors and trades",
          d: "Vehicles that carry tools, materials or crews."
        },
        {
          t: "Delivery and service businesses",
          d: "Anyone driving for work most of the day."
        }
      ],
      factors: [
        "Vehicle type, weight and value",
        "How and how far the vehicles are driven",
        "Drivers' records",
        "Garaging location",
        "Limits and deductibles",
        "Claims history"
      ],
      faq: [
        {
          q: "When do I need commercial instead of personal auto?",
          a: "Generally when a vehicle is owned by a business, used mainly for work, carries goods or people for a fee, or is driven by employees."
        },
        {
          q: "What is hired and non-owned auto?",
          a: "Coverage for the business's liability when employees drive rented vehicles or their own cars for work."
        },
        {
          q: "Can I put several vehicles on one policy?",
          a: "Yes. Carriers write single vehicles and fleets; how they rate a fleet depends on its size."
        }
      ]
    },
    pt: {
      seo: {
        title: "Seguro de auto comercial, explicado | Ativa Insurance",
        description: "Como o auto comercial protege veículos da empresa: liability, collision, comprehensive, despesas médicas e uninsured motorist. Agência independente."
      },
      h1: "Seguro de auto comercial",
      sub: "Proteção para os veículos que a sua empresa possui e opera, de uma única van de trabalho a picapes e carretas.",
      cta: "Fazer minha cotação de auto comercial",
      alt: "Van branca, picape de trabalho e caminhão azul em uma rodovia ao nascer do sol",
      quickQ: "O que é seguro de auto comercial?",
      quick: "O seguro de auto comercial cobre veículos que a empresa possui, aluga ou usa no trabalho. Ele paga lesões e danos que a empresa causa a terceiros no trânsito e, se contratado, os danos aos próprios veículos. As apólices de auto pessoal normalmente excluem o uso comercial regular.",
      explorer: {
        title: "Em volta do veículo de trabalho",
        lead: "Selecione uma parte da cena para ver qual cobertura responde.",
        legend: "Exigências, formulários e termos mudam de estado para estado. Um agente licenciado confirma o que vale no seu.",
        items: [
          {
            t: "Responsabilidade civil (liability)",
            d: "Lesões e danos materiais que o seu motorista causa a terceiros, incluindo defesa jurídica, até o seu limite.",
            rows: [
              {
                k: "Exemplo",
                v: "Sua van bate na traseira de um carro no semáforo."
              }
            ]
          },
          {
            t: "Collision",
            d: "Danos ao seu veículo ao bater em outro veículo ou em um objeto, descontada a franquia.",
            rows: [
              {
                k: "Exemplo",
                v: "Uma picape dá ré e bate em uma doca."
              }
            ]
          },
          {
            t: "Comprehensive",
            d: "Furto, incêndio, granizo, enchente, vandalismo e outros danos que não são colisão, descontada a franquia.",
            rows: [
              {
                k: "Exemplo",
                v: "Granizo amassa uma van estacionada."
              }
            ]
          },
          {
            t: "Despesas médicas ou PIP",
            d: "Despesas médicas do seu motorista e dos passageiros. Qual cobertura se aplica, e se é obrigatória, depende do estado.",
            rows: [
              {
                k: "Exemplo",
                v: "Um funcionário que estava de carona se machuca."
              }
            ],
            term: "medical payments"
          },
          {
            t: "Motorista sem seguro (uninsured motorist)",
            d: "Lesões da sua equipe quando o motorista culpado não tem seguro ou tem pouco. Disponibilidade e regras variam por estado.",
            rows: [
              {
                k: "Exemplo",
                v: "Um motorista sem seguro bate no seu caminhão."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "Um funcionário causa um acidente a caminho de uma obra.",
          parts: [
            "Responsabilidade civil",
            "Collision"
          ],
          d: "A responsabilidade civil responde pelas lesões e pelos danos da outra parte. A collision conserta o seu veículo."
        },
        {
          t: "Ferramentas são furtadas de uma van trancada durante a noite.",
          parts: [
            "Comprehensive"
          ],
          d: "O comprehensive cobre o veículo. Ferramentas e equipamentos normalmente precisam de cobertura à parte, como inland marine."
        }
      ],
      myths: [
        {
          m: "Meu seguro de auto pessoal cobre a minha caminhonete de trabalho.",
          f: "As apólices pessoais muitas vezes excluem veículos usados principalmente para trabalho ou registrados em nome de uma empresa."
        },
        {
          m: "Funcionários que dirigem o próprio carro estão cobertos pela minha apólice.",
          f: "Somente se você incluir a cobertura hired and non-owned auto. Sem ela, a empresa ainda pode ser processada."
        }
      ],
      notCovered: [
        "Ferramentas e equipamentos levados no veículo",
        "Carga transportada para terceiros",
        "Lesões de funcionários cobertas pelo workers' compensation",
        "Desgaste e defeitos mecânicos"
      ],
      who: [
        {
          t: "Empresas com veículos em nome da empresa",
          d: "Vans, picapes, caminhões-baú e carros."
        },
        {
          t: "Empreiteiros e prestadores de serviço",
          d: "Veículos que levam ferramentas, materiais ou equipes."
        },
        {
          t: "Empresas de entrega e de serviços",
          d: "Quem passa a maior parte do dia dirigindo a trabalho."
        }
      ],
      factors: [
        "Tipo, peso e valor do veículo",
        "Como e quanto os veículos rodam",
        "Histórico dos motoristas",
        "Local onde os veículos ficam guardados",
        "Limites e franquias",
        "Histórico de sinistros"
      ],
      faq: [
        {
          q: "Quando preciso de auto comercial em vez de pessoal?",
          a: "Em geral quando o veículo é da empresa, é usado principalmente para trabalho, transporta mercadorias ou pessoas mediante pagamento, ou é dirigido por funcionários."
        },
        {
          q: "O que é hired and non-owned auto?",
          a: "É a cobertura da responsabilidade da empresa quando funcionários dirigem veículos alugados ou o próprio carro a trabalho."
        },
        {
          q: "Posso colocar vários veículos em uma apólice?",
          a: "Sim. As seguradoras aceitam veículos individuais e frotas; a forma de precificar a frota depende do tamanho dela."
        }
      ]
    },
    es: {
      seo: {
        title: "Seguro de auto comercial, explicado | Ativa Insurance",
        description: "Cómo el auto comercial protege los vehículos del negocio: liability, collision, comprehensive, pagos médicos y uninsured motorist. Agencia independiente."
      },
      h1: "Seguro de auto comercial",
      sub: "Cobertura para los vehículos que su negocio posee y opera, desde una sola van de trabajo hasta pickups y tractocamiones.",
      cta: "Cotizar mi auto comercial",
      alt: "Van blanca, pickup de trabajo y camión azul en una autopista al amanecer",
      quickQ: "¿Qué es el seguro de auto comercial?",
      quick: "El seguro de auto comercial cubre los vehículos que un negocio posee, arrienda o usa para trabajar. Paga las lesiones y los daños que el negocio causa a otras personas en la vía y, si se contrata, los daños a sus propios vehículos. Las pólizas de auto personal normalmente excluyen el uso comercial habitual.",
      explorer: {
        title: "Alrededor del vehículo de trabajo",
        lead: "Seleccione una parte de la escena para ver qué cobertura responde.",
        legend: "Los requisitos, formularios y términos cambian según el estado. Un agente con licencia confirma lo que aplica en el suyo.",
        items: [
          {
            t: "Responsabilidad civil (liability)",
            d: "Lesiones y daños a la propiedad que su conductor causa a otras personas, incluida la defensa legal, hasta su límite.",
            rows: [
              {
                k: "Ejemplo",
                v: "Su van choca por detrás a un auto en un semáforo."
              }
            ]
          },
          {
            t: "Collision",
            d: "Daños a su vehículo al chocar con otro vehículo o con un objeto, menos su deducible.",
            rows: [
              {
                k: "Ejemplo",
                v: "Una pickup retrocede y golpea un muelle de carga."
              }
            ]
          },
          {
            t: "Comprehensive",
            d: "Robo, incendio, granizo, inundación, vandalismo y otros daños que no son choque, menos su deducible.",
            rows: [
              {
                k: "Ejemplo",
                v: "El granizo abolla una van estacionada."
              }
            ]
          },
          {
            t: "Pagos médicos o PIP",
            d: "Gastos médicos de su conductor y de los pasajeros. Qué cobertura se aplica, y si es obligatoria, depende del estado.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un empleado que iba de pasajero resulta lesionado."
              }
            ],
            term: "medical payments"
          },
          {
            t: "Conductor sin seguro (uninsured motorist)",
            d: "Lesiones de su gente cuando el conductor culpable no tiene seguro o tiene muy poco. La disponibilidad y las reglas varían según el estado.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un conductor sin seguro choca su camión."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "Un empleado causa un choque camino a una obra.",
          parts: [
            "Responsabilidad civil",
            "Collision"
          ],
          d: "La responsabilidad civil responde por las lesiones y los daños de la otra parte. Collision repara su vehículo."
        },
        {
          t: "Roban herramientas de una van cerrada con llave durante la noche.",
          parts: [
            "Comprehensive"
          ],
          d: "Comprehensive cubre el vehículo. Las herramientas y los equipos normalmente necesitan una cobertura aparte, como inland marine."
        }
      ],
      myths: [
        {
          m: "Mi póliza de auto personal cubre mi camioneta de trabajo.",
          f: "Las pólizas personales muchas veces excluyen los vehículos que se usan principalmente para trabajar o que están a nombre de una empresa."
        },
        {
          m: "Los empleados que manejan su propio auto están cubiertos por mi póliza.",
          f: "Solo si usted agrega la cobertura hired and non-owned auto. Sin ella, el negocio igual puede ser demandado."
        }
      ],
      notCovered: [
        "Herramientas y equipos que van en el vehículo",
        "Carga que transporta para otros",
        "Lesiones de empleados cubiertas por compensación laboral",
        "Desgaste y fallas mecánicas"
      ],
      who: [
        {
          t: "Negocios con vehículos a nombre de la empresa",
          d: "Vans, pickups, camiones de caja y autos."
        },
        {
          t: "Contratistas y oficios",
          d: "Vehículos que llevan herramientas, materiales o cuadrillas."
        },
        {
          t: "Negocios de entregas y de servicios",
          d: "Quien pasa la mayor parte del día manejando por trabajo."
        }
      ],
      factors: [
        "Tipo, peso y valor del vehículo",
        "Cómo y cuánto se manejan los vehículos",
        "Historial de los conductores",
        "Lugar donde se guardan los vehículos",
        "Límites y deducibles",
        "Historial de reclamos"
      ],
      faq: [
        {
          q: "¿Cuándo necesito auto comercial en lugar de personal?",
          a: "En general cuando el vehículo es de un negocio, se usa principalmente para trabajar, transporta mercancías o personas por un pago, o lo manejan empleados."
        },
        {
          q: "¿Qué es hired and non-owned auto?",
          a: "Es la cobertura de la responsabilidad del negocio cuando los empleados manejan vehículos alquilados o su propio auto por trabajo."
        },
        {
          q: "¿Puedo poner varios vehículos en una póliza?",
          a: "Sí. Las aseguradoras aceptan vehículos individuales y flotas; la forma de calcular la tarifa de una flota depende de su tamaño."
        }
      ]
    }
  }
};

export default commercialAuto;
