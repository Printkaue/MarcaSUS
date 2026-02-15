function SolicitanteForm({ index, dados, onChange, onCargoChange }) {

  return (
    <form id="formulario">

      <fieldset id="solicitante" className="bloco">

        <strong className="titulo-doc">
          FORMULÁRIO INICIAL PARA PEDIDO DE PROTEÇÃO DE PROPRIEDADE INTELECTUAL
        </strong>

        <p className="descricao">
          Encaminho à Diretoria de Inovação Tecnológica do IFPB as informações e anexos
          abaixo relacionados para dar início ao pedido de proteção e estudo de
          viabilidade tecnológica.
        </p>

        <h2>Solicitante {index + 1}</h2>
        <h2>Dados pessoais</h2>

        <div className="grid">
          <div className="campo">
            <label>Nome completo</label>
            <input
              value={dados.nome}
              onChange={e => onChange("nome", e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Email institucional</label>
            <input
              value={dados.email}
              onChange={e => onChange("email", e.target.value)}
            />
          </div>

          <div className="campo">
            <label>CPF</label>
            <input
              value={dados.cpf}
              onChange={e => onChange("cpf", e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Nacionalidade</label>
            <input
              value={dados.nacionalidade}
              onChange={e => onChange("nacionalidade", e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Campi de atuação</label>
            <input
              value={dados.campi}
              onChange={e => onChange("campi", e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Telefone</label>
            <input
              value={dados.telefone}
              onChange={e => onChange("telefone", e.target.value)}
            />
          </div>
        </div>

        <h2>Logradouro</h2>

        <div className="grid">
          <div className="campo">
            <label>CEP</label>
            <input
              value={dados.cep}
              onChange={e => onChange("cep", e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Estado</label>
            <input
              value={dados.estado}
              onChange={e => onChange("estado", e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Cidade</label>
            <input
              value={dados.cidade}
              onChange={e => onChange("cidade", e.target.value)}
            />
          </div>

          <div className="campo">
            <label>Número</label>
            <input
              value={dados.numero}
              onChange={e => onChange("numero", e.target.value)}
            />
          </div>

          <div className="campo campo-longo">
            <label>Rua</label>
            <input
              value={dados.rua}
              onChange={e => onChange("rua", e.target.value)}
            />
          </div>
        </div>

        <h2>Cargo</h2>

        <div className="cargos">

          <label>
            <input
              type="checkbox"
              checked={dados.cargo.includes("Professor")}
              onChange={() => onCargoChange("Professor")}
            />
            Professor
          </label>

          <label>
            <input
              type="checkbox"
              checked={dados.cargo.includes("Técnico/Administrativo")}
              onChange={() => onCargoChange("Técnico/Administrativo")}
            />
            Técnico/Administrativo
          </label>

          <label>
            <input
              type="checkbox"
              checked={dados.cargo.includes("Outro")}
              onChange={() => onCargoChange("Outro")}
            />
            Outro
          </label>

          {dados.cargo.includes("Outro") && (
            <input
              type="text"
              placeholder="Digite o cargo"
              value={dados.outroCargo}
              onChange={(e) => onChange("outroCargo", e.target.value)}
            />
          )}

        </div>

      </fieldset>

    </form>
  )
}

export default SolicitanteForm
