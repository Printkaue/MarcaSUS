import { jsPDF } from "jspdf"

function GerarPDF(dados, pessoas = []) {
  const doc = new jsPDF()
  let y = 20

  let pgnN = 0

  // =====================
  // FUNÇÕES AUXILIARES
  // =====================
  function verificarQuebra(altura = 20) {
    if (y + altura > 280) {
      
      doc.addPage()
      y = 20
    }
  }

  function formatarCargo(obj) {
    if (!obj.cargo?.length) return "-"

    return obj.cargo
      .map(c => c === "Outro" ? obj.outroCargo || "Outro" : c)
      .join(" / ")
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
  doc.setFontSize(8)

  const imgWidth = 60
  const imgHeight = 20 

  const xCentro = 105 - imgWidth / 2

  doc.addImage("/logo.png", "PNG", xCentro, y, imgWidth, imgHeight)

  y += imgHeight + 5


  const texto = `INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DA PARAÍBA
  PRÓ-REITORIA DE PESQUISA, INOVAÇÃO E PÓS-GRADUAÇÃO
  DIRETORIA DE INOVAÇÃO TECNOLÓGICA
  PROGRAMA INSTITUCIONAL DE APOIO À GESTÃO DA INOVAÇÃO
  PIAGI/DIT/PRPRIPG/IFPB`

  const linhas = doc.splitTextToSize(texto, 180)

  doc.text(linhas, 105, y, { align: "center" })

  y += linhas.length * 4

  y += 6
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text(
    "FORMULÁRIO INICIAL PARA PEDIDO DE PROTEÇÃO DE PROPRIEDADE INTELECTUAL",
    105,
    y,
    { align: "center" }
  )

  y += 6
  doc.line(10, y, 200, y)
  y += 10

  const legenda = `Encaminho à Diretoria de Inovação Tecnológica do IFPB, as informações e anexos, abaixo relacionados, a fim de dar início ao pedido 
de proteção e estudo de viabilidade tecnológica, para futuro registro de Propriedade Intelectual. `

  const linhasl = doc.splitTextToSize(legenda, 180)

  doc.text(linhasl, 105, y, { align: "center" })

  y += linhasl.length * 4

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
  campo("Cargo:", formatarCargo(dados))

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

    campo("Cargo", formatarCargo(pessoa))

    y += 12
  })

  // =====================
  // NUMERAÇÃO DE PÁGINAS
  // =====================

const totalPages = doc.getNumberOfPages()

for (let i = 1; i <= totalPages; i++) {
  doc.setPage(i)

  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")

  doc.text(
    `Página ${i} de ${totalPages}`,
    105,
    290,
    { align: "center" }
  )
}


  doc.save("formulario_propriedade_intelectual.pdf")
}

export default GerarPDF
