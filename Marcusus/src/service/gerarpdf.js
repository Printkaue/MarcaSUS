import { jsPDF } from "jspdf"

function GerarPDF(dados, pessoas = []) {
  const doc = new jsPDF()
  let y = 20

  // =====================
  // FUNÇÕES AUXILIARES
  // =====================
  function verificarQuebra(altura = 20) {
    if (y + altura > 280) {
      doc.addPage()
      y = 20
    }
  }

  function tituloSecao(texto) {
    verificarQuebra(12)

    doc.setFillColor(240, 240, 240)
    doc.rect(10, y - 6, 190, 8, "F")

    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.text(texto, 12, y)

    y += 10
  }

  function campo(label, valor, x = 10, largura = 90) {
    doc.setFont("helvetica", "bold")
    doc.text(label, x, y)

    doc.setFont("helvetica", "normal")
    doc.text(valor || "-", x + 35, y)

    doc.line(x + 35, y + 1, x + largura, y + 1)
  }

  // =====================
  // CABEÇALHO
  // =====================
  doc.setFont("helvetica", "bold")
  doc.setFontSize(14)
  doc.text("FORMULÁRIO DE PROPRIEDADE INTELECTUAL", 105, y, { align: "center" })

  y += 6
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text(
    "Pedido inicial para proteção e estudo de viabilidade tecnológica",
    105,
    y,
    { align: "center" }
  )

  y += 6
  doc.line(10, y, 200, y)
  y += 10

  // =====================
  // SOLICITANTE
  // =====================
  tituloSecao("DADOS DO SOLICITANTE")

  campo("Nome:", dados.nome, 10)
  campo("CPF:", dados.cpf, 110)
  y += 8

  campo("Email:", dados.email, 10, 190)
  y += 8

  campo("Telefone:", dados.telefone, 10)
  campo("Nacionalidade:", dados.nacionalidade, 110)
  y += 8

  campo("Campi:", dados.campi, 10, 190)
  y += 12

  tituloSecao("LOGRADOURO")

  campo("CEP:", dados.cep, 10)
  campo("Estado:", dados.estado, 110)
  y += 8

  campo("Cidade:", dados.cidade, 10)
  campo("Número:", dados.numero, 110)
  y += 8

  campo("Rua:", dados.rua, 10, 190)
  y += 10

  tituloSecao("Cargo")
  campo(
    "Cargo:",
    dados.cargo?.length ? dados.cargo.join(" / ") : "-"
  )
  y += 12

  // =====================
  // RESPONSÁVEIS
  // =====================
  pessoas.forEach((pessoa, index) => {
    verificarQuebra(30)

    doc.setFont("helvetica", "bold")
    doc.setFontSize(13)
    doc.text(`RESPONSÁVEL ${index + 1}`, 10, y)
    y += 6

    doc.line(10, y, 200, y)
    y += 10

    tituloSecao("DADOS PESSOAIS")

    campo("Nome:", pessoa.nome, 10)
    campo("CPF:", pessoa.cpf, 110)
    y += 8

    campo("Email:", pessoa.email, 10, 190)
    y += 8

    campo("Telefone:", pessoa.telefone, 10)
    campo("Nacionalidade:", pessoa.nacionalidade, 110)
    y += 8

    campo("Campi:", pessoa.campi, 10, 190)
    y += 12

    tituloSecao("LOGRADOURO")

    campo("CEP:", pessoa.cep, 10)
    campo("Estado:", pessoa.estado, 110)
    y += 8

    campo("Cidade:", pessoa.cidade, 10)
    campo("Número:", pessoa.numero, 110)
    y += 8

    campo("Rua:", pessoa.rua, 10, 190)
    y += 10

    tituloSecao("Cargo")
    campo(
      "Cargo:",
      pessoa.cargo?.length ? pessoa.cargo.join(" / ") : "-"
    )
    y += 12
  })

  doc.save("formulario_propriedade_intelectual.pdf")
}

export default GerarPDF
