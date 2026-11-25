// Certificate of insurance (COI) service page. DRAFT: needs licensed-agent review (English) and
// Gabriel's native review (Portuguese, Spanish) before the owner approves.
// Source copy: design/claude-design/site-v2/source (lib/ativa-landing.js products.coi, i18n/pages.js
// ATIVA_LANDING.coi, i18n/landing.pt.js / landing.es.js). No quote button: the primary action opens
// WhatsApp with the design's COI message (a27.wa.coi). No form.

import type { LandingContent } from "./types";

const coi: LandingContent = {
  id: "coi",
  status: "draft",
  updated: "2026-11-25",
  scene: "coi",
  hero: {
    file: "coi-full.webp",
    layout: "full",
    fit: "width",
    side: "left",
    mdH: 330,
    w: 2172,
    h: 724,
    pos: {
      lg: "100% 50%",
      md: "50% 50%",
      sm: "100% 50%"
    }
  },
  related: [
    "gl",
    "workers-comp",
    "commercial-auto",
    "bop"
  ],
  waKey: "coi",
  copy: {
    en: {
      seo: {
        title: "Certificate of Insurance (COI) | Ativa Insurance",
        description: "What a certificate of insurance shows, what it doesn't do, and how to request one from Ativa by WhatsApp, phone or e-mail. No form to fill in."
      },
      h1: "Certificate of insurance (COI)",
      sub: "Send the certificate holder's details and your contract requirements, attach any supporting documents, and we reply in the same conversation.",
      cta: "Request a COI",
      alt: "Laptop on a desk showing a certificate of insurance form, with a construction site through the window",
      quickQ: "What is a certificate of insurance?",
      quick: "A certificate of insurance (COI) is a one-page summary showing that a business has insurance: who is insured, which policies, their dates and limits. It is evidence of coverage on the day it's issued. It does not create, extend or change coverage.",
      explorer: {
        title: "Read a certificate",
        lead: "Select a part of the document to see what it shows and where the information comes from.",
        legend: "Requirements, policy forms and terms differ by state. A licensed agent confirms what applies in yours.",
        items: [
          {
            t: "Named insured",
            d: "The business that holds the policies, written exactly as it appears on them.",
            rows: [
              {
                k: "Example",
                v: "Your legal business name and address."
              }
            ]
          },
          {
            t: "Certificate holder",
            d: "The person or company receiving the certificate, usually a client, landlord or general contractor. Being the holder gives no rights under the policy.",
            rows: [
              {
                k: "Example",
                v: "The general contractor who asked for proof before the job starts."
              }
            ]
          },
          {
            t: "Policy information",
            d: "The carrier and policy number for each line of coverage.",
            rows: [
              {
                k: "Example",
                v: "One row for general liability, another for workers' compensation."
              }
            ]
          },
          {
            t: "Effective and expiration dates",
            d: "The period each policy is in force. The certificate isn't updated automatically if a policy later changes or cancels.",
            rows: [
              {
                k: "Example",
                v: "A policy running from January 1 to January 1."
              }
            ]
          },
          {
            t: "Coverage types",
            d: "The lines shown, such as general liability, commercial auto, umbrella and workers' compensation.",
            rows: [
              {
                k: "Example",
                v: "Only the policies you actually carry appear."
              }
            ]
          },
          {
            t: "Limits",
            d: "The limits on each policy as of the issue date.",
            rows: [
              {
                k: "Example",
                v: "Per-occurrence and aggregate limits for general liability."
              }
            ]
          },
          {
            t: "Additional insured",
            d: "The certificate can note additional insured status only if the policy has been endorsed to provide it. The endorsement, not the certificate, gives the coverage.",
            rows: [
              {
                k: "Example",
                v: "A contract requires the client to be added to your general liability policy."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "A general contractor needs proof of insurance before you start Monday.",
          parts: [
            "Certificate holder",
            "Coverage types",
            "Limits"
          ],
          d: "Send the holder's exact name and address and the contract's insurance requirements. We issue the certificate from your active policies."
        },
        {
          t: "The contract asks for additional insured and waiver of subrogation.",
          parts: [
            "Additional insured"
          ],
          d: "Those are changes to the policy. They have to be endorsed by the carrier, which may affect the premium, before the certificate can show them."
        }
      ],
      myths: [
        {
          m: "A certificate gives the holder coverage.",
          f: "A certificate only reports the policies in place. It confers no rights on the holder."
        },
        {
          m: "Asking for a COI adds my client as additional insured.",
          f: "Additional insured status comes from an endorsement to the policy. If the contract requires it, tell us so the policy can be reviewed."
        },
        {
          m: "A certificate can show whatever the contract requires.",
          f: "It can only show what the policy actually provides. If the contract asks for more, the policy has to change first."
        }
      ],
      notCovered: [],
      who: [],
      factors: [],
      faq: [
        {
          q: "Who can request a certificate?",
          a: "The named insured or someone authorized by the business. Certificate holders ask the insured, who then asks us."
        },
        {
          q: "Does a certificate cost anything?",
          a: "Ask us when you request it. Policy changes needed to meet a contract, such as adding an additional insured, can change the premium."
        },
        {
          q: "What if my policy doesn't meet the contract?",
          a: "We tell you what's missing and what it would take to change the policy. The certificate can't show coverage that isn't there."
        }
      ],
      service: {
        note: "Requesting a certificate does not add an additional insured or any other endorsement. Those depend on your policy.",
        howto: [
          {
            t: "Send the request",
            d: "Message us with the certificate holder's exact legal name and address."
          },
          {
            t: "Share the requirements",
            d: "Attach the contract page or the insurance requirements you were given."
          },
          {
            t: "Receive the certificate",
            d: "We prepare it from your active policies and send it back in the same conversation."
          }
        ],
        ready: [
          "Your business name as it appears on the policy",
          "Certificate holder's legal name and address",
          "The contract's insurance requirements",
          "Any wording the holder asked for, such as a project name or job number",
          "Where to send the certificate"
        ],
        turnaround: "Timing depends on the request. Certificates that need a policy change take longer because the carrier has to endorse the policy first."
      }
    },
    pt: {
      seo: {
        title: "Certificado de seguro (COI) | Ativa Insurance",
        description: "O que um certificado de seguro mostra, o que ele não faz e como pedir um à Ativa por WhatsApp, telefone ou e-mail. Sem formulário para preencher."
      },
      h1: "Certificado de seguro (COI)",
      sub: "Envie os dados do titular do certificado e as exigências do contrato, anexe os documentos de apoio, e respondemos na mesma conversa.",
      cta: "Solicitar um COI",
      alt: "Laptop sobre uma mesa mostrando um formulário de certificado de seguro, com uma obra vista pela janela",
      quickQ: "O que é um certificado de seguro?",
      quick: "O certificado de seguro (COI) é um resumo de uma página que mostra que a empresa tem seguro: quem é o segurado, quais são as apólices, as datas e os limites. É uma comprovação da cobertura no dia em que é emitido. Ele não cria, não estende e não altera cobertura.",
      explorer: {
        title: "Como ler um certificado",
        lead: "Selecione uma parte do documento para ver o que ela mostra e de onde vem a informação.",
        legend: "Exigências, formulários e termos mudam de estado para estado. Um agente licenciado confirma o que vale no seu.",
        items: [
          {
            t: "Segurado (named insured)",
            d: "A empresa titular das apólices, escrita exatamente como aparece nelas.",
            rows: [
              {
                k: "Exemplo",
                v: "A razão social e o endereço da sua empresa."
              }
            ]
          },
          {
            t: "Titular do certificado (certificate holder)",
            d: "A pessoa ou empresa que recebe o certificado, normalmente um cliente, o dono do imóvel ou a construtora. Ser o titular não dá nenhum direito sobre a apólice.",
            rows: [
              {
                k: "Exemplo",
                v: "A construtora que pediu o comprovante antes de a obra começar."
              }
            ]
          },
          {
            t: "Dados da apólice",
            d: "A seguradora e o número da apólice de cada linha de cobertura.",
            rows: [
              {
                k: "Exemplo",
                v: "Uma linha para general liability, outra para workers' compensation."
              }
            ]
          },
          {
            t: "Datas de início e de vencimento",
            d: "O período em que cada apólice está em vigor. O certificado não é atualizado automaticamente se a apólice mudar ou for cancelada depois.",
            rows: [
              {
                k: "Exemplo",
                v: "Uma apólice que vai de 1º de janeiro a 1º de janeiro."
              }
            ]
          },
          {
            t: "Tipos de cobertura",
            d: "As linhas mostradas, como general liability, auto comercial, umbrella e workers' compensation.",
            rows: [
              {
                k: "Exemplo",
                v: "Só aparecem as apólices que você realmente tem."
              }
            ]
          },
          {
            t: "Limites",
            d: "Os limites de cada apólice na data de emissão.",
            rows: [
              {
                k: "Exemplo",
                v: "Limites por ocorrência e agregado do general liability."
              }
            ]
          },
          {
            t: "Additional insured",
            d: "O certificado só pode indicar a condição de additional insured se a apólice tiver sido endossada para isso. É o endosso, e não o certificado, que dá a cobertura.",
            rows: [
              {
                k: "Exemplo",
                v: "Um contrato exige que o cliente seja incluído na sua apólice de general liability."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "Uma construtora precisa do comprovante de seguro antes de você começar na segunda-feira.",
          parts: [
            "Titular do certificado",
            "Tipos de cobertura",
            "Limites"
          ],
          d: "Envie o nome e o endereço exatos do titular e as exigências de seguro do contrato. Emitimos o certificado a partir das suas apólices ativas."
        },
        {
          t: "O contrato pede additional insured e waiver of subrogation.",
          parts: [
            "Additional insured"
          ],
          d: "Essas são alterações na apólice. Precisam ser endossadas pela seguradora, o que pode afetar o prêmio, antes de o certificado poder mostrá-las."
        }
      ],
      myths: [
        {
          m: "O certificado dá cobertura ao titular.",
          f: "O certificado apenas informa as apólices existentes. Ele não confere nenhum direito ao titular."
        },
        {
          m: "Pedir um COI inclui o meu cliente como additional insured.",
          f: "A condição de additional insured vem de um endosso na apólice. Se o contrato exigir, avise a gente para que a apólice seja analisada."
        },
        {
          m: "O certificado pode mostrar o que o contrato exigir.",
          f: "Ele só pode mostrar o que a apólice realmente oferece. Se o contrato pede mais, a apólice precisa mudar primeiro."
        }
      ],
      notCovered: [],
      who: [],
      factors: [],
      faq: [
        {
          q: "Quem pode pedir um certificado?",
          a: "O segurado ou alguém autorizado pela empresa. O titular do certificado pede ao segurado, que então pede para nós."
        },
        {
          q: "O certificado tem custo?",
          a: "Pergunte quando fizer o pedido. Alterações na apólice necessárias para atender a um contrato, como incluir um additional insured, podem mudar o prêmio."
        },
        {
          q: "E se a minha apólice não atender ao contrato?",
          a: "Informamos o que está faltando e o que seria necessário para alterar a apólice. O certificado não pode mostrar uma cobertura que não existe."
        }
      ],
      service: {
        note: "Solicitar um certificado não inclui um segurado adicional nem qualquer outro endosso. Isso depende da sua apólice.",
        howto: [
          {
            t: "Envie o pedido",
            d: "Mande uma mensagem com a razão social e o endereço exatos do titular do certificado."
          },
          {
            t: "Compartilhe as exigências",
            d: "Anexe a página do contrato ou as exigências de seguro que você recebeu."
          },
          {
            t: "Receba o certificado",
            d: "Preparamos a partir das suas apólices ativas e devolvemos na mesma conversa."
          }
        ],
        ready: [
          "O nome da sua empresa como consta na apólice",
          "Razão social e endereço do titular do certificado",
          "As exigências de seguro do contrato",
          "Qualquer texto pedido pelo titular, como nome do projeto ou número da obra",
          "Para onde enviar o certificado"
        ],
        turnaround: "O prazo depende do pedido. Certificados que exigem alteração na apólice demoram mais, porque a seguradora precisa endossar a apólice antes."
      }
    },
    es: {
      seo: {
        title: "Certificado de seguro (COI) | Ativa Insurance",
        description: "Qué muestra un certificado de seguro, qué no hace y cómo pedirle uno a Ativa por WhatsApp, teléfono o correo. Sin formulario que llenar."
      },
      h1: "Certificado de seguro (COI)",
      sub: "Envíe los datos del titular del certificado y los requisitos del contrato, adjunte los documentos de respaldo, y respondemos en la misma conversación.",
      cta: "Solicitar un COI",
      alt: "Laptop sobre un escritorio con un formulario de certificado de seguro, con una obra vista por la ventana",
      quickQ: "¿Qué es un certificado de seguro?",
      quick: "Un certificado de seguro (COI) es un resumen de una página que muestra que un negocio tiene seguro: quién es el asegurado, qué pólizas tiene, sus fechas y sus límites. Es una constancia de la cobertura el día en que se emite. No crea, no extiende ni cambia la cobertura.",
      explorer: {
        title: "Cómo leer un certificado",
        lead: "Seleccione una parte del documento para ver qué muestra y de dónde viene la información.",
        legend: "Los requisitos, formularios y términos cambian según el estado. Un agente con licencia confirma lo que aplica en el suyo.",
        items: [
          {
            t: "Asegurado (named insured)",
            d: "El negocio titular de las pólizas, escrito exactamente como aparece en ellas.",
            rows: [
              {
                k: "Ejemplo",
                v: "El nombre legal y la dirección de su negocio."
              }
            ]
          },
          {
            t: "Titular del certificado (certificate holder)",
            d: "La persona o empresa que recibe el certificado, normalmente un cliente, el dueño del local o un contratista general. Ser el titular no da ningún derecho sobre la póliza.",
            rows: [
              {
                k: "Ejemplo",
                v: "El contratista general que pidió el comprobante antes de que empiece la obra."
              }
            ]
          },
          {
            t: "Datos de la póliza",
            d: "La aseguradora y el número de póliza de cada línea de cobertura.",
            rows: [
              {
                k: "Ejemplo",
                v: "Una fila para responsabilidad general, otra para compensación laboral."
              }
            ]
          },
          {
            t: "Fechas de inicio y de vencimiento",
            d: "El período en que cada póliza está vigente. El certificado no se actualiza automáticamente si la póliza cambia o se cancela después.",
            rows: [
              {
                k: "Ejemplo",
                v: "Una póliza que va del 1 de enero al 1 de enero."
              }
            ]
          },
          {
            t: "Tipos de cobertura",
            d: "Las líneas que se muestran, como responsabilidad general, auto comercial, umbrella y compensación laboral.",
            rows: [
              {
                k: "Ejemplo",
                v: "Solo aparecen las pólizas que usted realmente tiene."
              }
            ]
          },
          {
            t: "Límites",
            d: "Los límites de cada póliza en la fecha de emisión.",
            rows: [
              {
                k: "Ejemplo",
                v: "Límites por ocurrencia y agregado de la responsabilidad general."
              }
            ]
          },
          {
            t: "Asegurado adicional",
            d: "El certificado solo puede indicar la condición de asegurado adicional si la póliza fue endosada para otorgarla. Es el endoso, no el certificado, el que da la cobertura.",
            rows: [
              {
                k: "Ejemplo",
                v: "Un contrato exige que el cliente se agregue a su póliza de responsabilidad general."
              }
            ]
          }
        ]
      },
      scenarios: [
        {
          t: "Un contratista general necesita el comprobante de seguro antes de que usted empiece el lunes.",
          parts: [
            "Titular del certificado",
            "Tipos de cobertura",
            "Límites"
          ],
          d: "Envíe el nombre y la dirección exactos del titular y los requisitos de seguro del contrato. Emitimos el certificado a partir de sus pólizas activas."
        },
        {
          t: "El contrato pide asegurado adicional y waiver of subrogation.",
          parts: [
            "Asegurado adicional"
          ],
          d: "Esos son cambios en la póliza. La aseguradora tiene que endosarlos, lo que puede afectar la prima, antes de que el certificado pueda mostrarlos."
        }
      ],
      myths: [
        {
          m: "Un certificado le da cobertura al titular.",
          f: "El certificado solo informa las pólizas que existen. No le otorga ningún derecho al titular."
        },
        {
          m: "Pedir un COI agrega a mi cliente como asegurado adicional.",
          f: "La condición de asegurado adicional viene de un endoso en la póliza. Si el contrato lo exige, avísenos para revisar la póliza."
        },
        {
          m: "Un certificado puede mostrar lo que el contrato exija.",
          f: "Solo puede mostrar lo que la póliza realmente ofrece. Si el contrato pide más, primero tiene que cambiar la póliza."
        }
      ],
      notCovered: [],
      who: [],
      factors: [],
      faq: [
        {
          q: "¿Quién puede solicitar un certificado?",
          a: "El asegurado o alguien autorizado por el negocio. Los titulares del certificado se lo piden al asegurado, quien luego nos lo pide a nosotros."
        },
        {
          q: "¿El certificado tiene costo?",
          a: "Pregúntenos al solicitarlo. Los cambios en la póliza necesarios para cumplir un contrato, como agregar un asegurado adicional, pueden cambiar la prima."
        },
        {
          q: "¿Qué pasa si mi póliza no cumple con el contrato?",
          a: "Le decimos qué falta y qué haría falta para cambiar la póliza. El certificado no puede mostrar una cobertura que no existe."
        }
      ],
      service: {
        note: "Solicitar un certificado no agrega un asegurado adicional ni ningún otro endoso. Eso depende de su póliza.",
        howto: [
          {
            t: "Envíe la solicitud",
            d: "Escríbanos con el nombre legal y la dirección exactos del titular del certificado."
          },
          {
            t: "Comparta los requisitos",
            d: "Adjunte la página del contrato o los requisitos de seguro que le dieron."
          },
          {
            t: "Reciba el certificado",
            d: "Lo preparamos a partir de sus pólizas activas y se lo enviamos en la misma conversación."
          }
        ],
        ready: [
          "El nombre de su negocio como aparece en la póliza",
          "Nombre legal y dirección del titular del certificado",
          "Los requisitos de seguro del contrato",
          "Cualquier texto que haya pedido el titular, como el nombre del proyecto o el número de obra",
          "A dónde enviar el certificado"
        ],
        turnaround: "El tiempo depende de la solicitud. Los certificados que requieren un cambio en la póliza tardan más, porque la aseguradora tiene que endosar la póliza primero."
      }
    }
  }
};

export default coi;
