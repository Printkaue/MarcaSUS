const pessoasDiv = document.getElementById("pessoas")
let contador = 0

function adicionarPessoa() {
  contador++

  const fieldset = document.createElement("fieldset")
  fieldset.className = "responsavel quebra-pagina"

fieldset.innerHTML = `
  <strong class="titulo-doc">RESPONSÁVEL ${contador}</strong>

  <h2>Dados pessoais</h2>

  <div class="grid">
    <div class="campo">
      <label>Nome completo</label>
      <input name="nome" />
    </div>

    <div class="campo">
      <label>Email institucional</label>
      <input name="email" />
    </div>

    <div class="campo">
      <label>CPF</label>
      <input name="cpf" />
    </div>

    <div class="campo">
      <label>Nacionalidade</label>
      <input name="nacionalidade" />
    </div>

    <div class="campo">
      <label>Campi de atuação</label>
      <input name="campi" />
    </div>

    <div class="campo">
      <label>Telefone</label>
      <input name="telefone" />
    </div>
  </div>

  <h2>Logradouro</h2>

  <div class="grid">
    <div class="campo">
      <label>CEP</label>
      <input name="cep" />
    </div>

    <div class="campo">
      <label>Estado</label>
      <input name="estado" />
    </div>

    <div class="campo">
      <label>Cidade</label>
      <input name="cidade" />
    </div>

    <div class="campo">
      <label>Número</label>
      <input name="numero" />
    </div>

    <div class="campo campo-longo">
      <label>Rua</label>
      <input name="rua" />
    </div>
  </div>
  
`

  pessoasDiv.appendChild(fieldset)
}

function gerarPDF(dados, pessoas = []) {
  const { jsPDF } = window.jspdf
  const doc = new jsPDF()
  let y = 20

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
  // FUNÇÕES AUXILIARES
  // =====================
  function tituloSecao(texto) {
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

  // =====================
  // ENDEREÇO
  // =====================
  tituloSecao("LOGRADOURO")

  campo("CEP:", dados.cep, 10)
  campo("Estado:", dados.estado, 110)
  y += 8

  campo("Cidade:", dados.cidade, 10)
  campo("Número:", dados.numero, 110)
  y += 8

  campo("Rua:", dados.rua, 10, 190)
  y += 10

  // =====================
  // RESPONSÁVEIS
  // =====================
  pessoas.forEach((pessoa, index) => {
    doc.addPage()
    y = 20

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
  })

  doc.save("formulario_propriedade_intelectual.pdf")
}

function coletarDadosSolicitante() {
  const solicitante = document.getElementById("solicitante")
  const dados = {}

  solicitante.querySelectorAll("input").forEach(input => {
    dados[input.name] = input.value
  })

  return dados
}

function coletarDadosResponsaveis() {
  const pessoas = []

  document.querySelectorAll(".responsavel").forEach(bloco => {
    const pessoa = {}

    bloco.querySelectorAll("input").forEach(input => {
      pessoa[input.name] = input.value
    })

    if (pessoa.nome || pessoa.cpf || pessoa.email) {
      pessoas.push(pessoa)
    }
  })

  return pessoas
}

function baixarPDF() {
  const dadosSolicitante = coletarDadosSolicitante()
  const pessoas = coletarDadosResponsaveis()

  console.log("Solicitante:", dadosSolicitante)
  console.log("Responsáveis:", pessoas)

  gerarPDF(dadosSolicitante, pessoas)
}

