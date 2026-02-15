import { jsPDF } from "jspdf"

function GerarPDF(solicitantes, info) {

  const doc = new jsPDF()
  let y = 20

  let pgnN = 0

  // =====================
  // FUNÇÕES AUXILIARES
  // =====================

  function campoMultilinha(label, valor, x = 10, largura = 190) {
  verificarQuebra(10)

  doc.setFont("helvetica", "bold")
  doc.text(label, x, y)

  y += 6

  doc.setFont("helvetica", "normal")

  const texto = valor || "-"
  const linhas = doc.splitTextToSize(texto, largura - 10)

  verificarQuebra(linhas.length * 6)

  doc.text(linhas, x, y)

  y += linhas.length * 6 + 4
}


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
  const texto = valor || "-"

  // garante espaço mínimo antes de desenhar
  verificarQuebra(12)

  // LABEL
  doc.setFont("helvetica", "bold")
  doc.text(label, x, y)

  y += 5

  doc.setFont("helvetica", "normal")

  const linhas = doc.splitTextToSize(texto, largura)

  verificarQuebra(linhas.length * 6)

  doc.text(linhas, x, y)

  const alturaTexto = linhas.length * 6

  y += alturaTexto + 3
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

solicitantes.forEach((dados, solIndex) => {

  verificarQuebra(30)

  doc.setFont("helvetica", "bold")
  doc.setFontSize(14)
  doc.text(`SOLICITANTE ${solIndex + 1}`, 10, y)


  doc.line(10, y, 200, y)
  y += 10

  tituloSecao("DADOS DO SOLICITANTE")

  campo("Nome:", dados.nome, 10)
  campo("CPF:", dados.cpf, 110)


  campo("Email:", dados.email, 10, 190)


  campo("Telefone:", dados.telefone, 10)
  campo("Nacionalidade:", dados.nacionalidade, 110)

  campo("Campi:", dados.campi, 10, 190)
  y += 12

  tituloSecao("LOGRADOURO")

  campo("CEP:", dados.cep, 10)
  campo("Estado:", dados.estado, 110)


  campo("Cidade:", dados.cidade, 10)
  campo("Número:", dados.numero, 110)


  campo("Rua:", dados.rua, 10, 190)
  y += 10

  tituloSecao("Cargo")
  campo("Cargo:", formatarCargo(dados))

  y += 15


  // =====================
  // RESPONSÁVEIS
  // =====================
   dados.responsaveis.forEach((pessoa, index) => {

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
  

    campo("Email:", pessoa.email, 10, 190)
  

    campo("Telefone:", pessoa.telefone, 10)
    campo("Nacionalidade:", pessoa.nacionalidade, 110)
  

    campo("Campi:", pessoa.campi, 10, 190)
    y += 12

    tituloSecao("LOGRADOURO")

    campo("CEP:", pessoa.cep, 10)
    campo("Estado:", pessoa.estado, 110)
  

    campo("Cidade:", pessoa.cidade, 10)
    campo("Número:", pessoa.numero, 110)
  

    campo("Rua:", pessoa.rua, 10, 190)
    y += 10

    tituloSecao("Cargo")
    campo("Cargo:", formatarCargo(pessoa))

    y += 15
  })

  y += 10
})

//Informações

verificarQuebra(40)

doc.setFont("helvetica", "bold")
doc.setFontSize(14)
doc.text("INFORMAÇÕES DO PROJETO", 10, y)

doc.line(10, y, 200, y)
y += 10

// =====================
// PROPRIEDADE INTELECTUAL
// =====================

tituloSecao("INFORMAÇÕES SOBRE A PROPRIEDADE INTELECTUAL")

campo("Título:", info.titulo, 10, 190)

campoMultilinha("Descrição:", info.descricao)

campo("Data da Ideia:", info.data_ideia)
campo("Data de Início:", info.data_inicio, 110)

campo("Data de Conclusão:", info.data_conclu, 10, 190)
y += 12


// =====================
// TRANSFERÊNCIA DE TECNOLOGIA
// =====================

tituloSecao("TRANSFERÊNCIA DE TECNOLOGIA")

campo("Estado do Desenvolvimento:", info.estado_dev, 10, 190)

campoMultilinha("Próximas Etapas:", info.prox_et)

campoMultilinha("Potencial de Comercialização:", info.potenc)

campoMultilinha("Interesse de Mercado:", info.interesse)

campoMultilinha("Já Apresentado:", info.ja_apre)

campo("Linguagens:", info.linguagens || "-", 10, 190)

campo("Campo de Aplicação:", info.campodeaplicacao, 10, 190)

campo("Tipo de Programa:", info.tipopr, 10, 190)

campo("Tipo Algoritmo Hash:", info.tipo_algorash)
campo("Algoritmo Hash:", info.algorash, 110)
y += 12


// =====================
// FINANCIAMENTO
// =====================

tituloSecao("FINANCIAMENTO DA PESQUISA")

campo("Relacionado a Contrato:", (info.est_crf || []).join(" / "), 10, 190)

campo("Agente Financiador:", info.nome_agentef, 10, 190)

campo("Número do Contrato:", info.ncontrato, 10, 190)

campo("Foi Informado:", (info.foi_informado || []).join(" / "), 10, 190)

campo("Via Fundação:", (info.contrrfapu || []).join(" / "), 10, 190)
y += 12


// =====================
// OUTRAS INFORMAÇÕES
// =====================

tituloSecao("OUTRAS INFORMAÇÕES")

campo("Ocorreu Exploração Anterior:", (info.ocrd_ex || []).join(" / "), 10, 190)

campo("Se ocorreu, quando:", info.seocr_quando, 10, 190)

campo("Houve Comunicação Externa:", (info.ouveci_ex || []).join(" / "), 10, 190)

verificarQuebra(30)

campo("Existiu Acordo Formal:", (info.existiu_ajdfex || []).join(" / "), 10, 190)

campo("Esteve Incluído no IFPB:", info.esteve_inclu_in_ifpb, 10, 190)

campo("Foi Publicado em Periódico:", (info.foi_prcr || []).join(" / "), 10, 190)

campo("Foi Submetido a Registro:", (info.foi_str || []).join(" / "), 10, 190)

verificarQuebra(40)

campo("Foi Amostrado/Publicado:", (info.foi_amostra || []).join(" / "), 10, 190)

// =====================
// OBSERVAÇÃO FINAL
// =====================

doc.setFillColor(245, 245, 245)
doc.rect(10, y - 6, 190, 8, "F")

doc.setFont("helvetica", "bold")
doc.setFontSize(11)
doc.text("OBSERVAÇÃO", 12, y)

y += 10

doc.setFont("helvetica", "bold")
doc.setFontSize(10)

const obsTexto = `OBS.: Alertamos que a divulgação de aspectos da invenção, não informados nesse formulário, que possam prejudicar a expedição da carta-patente no Brasil, assim como eventuais solicitações de patenteamento no Exterior são de inteira responsabilidade do requerente.`

const obsLinhas = doc.splitTextToSize(obsTexto, 180)

verificarQuebra(obsLinhas.length * 6)

doc.text(obsLinhas, 10, y)

y += obsLinhas.length * 6 + 10



// =====================
// DECLARAÇÃO FINAL
// =====================

doc.setFillColor(245, 245, 245)
doc.rect(10, y - 6, 190, 8, "F")

doc.setFont("helvetica", "bold")
doc.setFontSize(11)
doc.text("DECLARAÇÃO", 12, y)

y += 10

doc.setFont("helvetica", "normal")
doc.setFontSize(10)

const declaracaoTexto = `Declara-se que todas as informações acima descritas são verdadeiras, bem como se concorda que o resultado da avaliação do potencial de geração de tecnologia, obtido após as atividades realizadas pela Coordenação de Propriedade Intelectual e pela Direção de Inovação Tecnológica do IFPB, não serão divulgadas sem a prévia anuência destes.`

const declLinhas = doc.splitTextToSize(declaracaoTexto, 180)

verificarQuebra(declLinhas.length * 6)

doc.text(declLinhas, 10, y)

y += declLinhas.length * 6 + 15



// =====================
// CAMPO DE ACEITE (CHECKBOX DECLARO)
// =====================

campo("", (info.declaro || []).join(" / "), 10, 190)
y += 10



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
