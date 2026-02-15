function ResposavelForm({dados, onChange, onCargoChange }){
    return(
    <fieldset className="responsavel">
    <strong className="titulo-doc">RESPONSÁVEL { +1}</strong>

  <h2>Dados pessoais</h2>

  <div className="grid">
    <div className="campo">
      <label>Nome completo</label>

      <input name="nome"
      value={dados.nome}
      onChange={e => onChange( "nome", e.target.value)}
      />

    </div>

    <div className="campo">
      <label>Email institucional</label>
      <input name="email" 
      value={dados.email}
      onChange={e => onChange( "email", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>CPF</label>
      <input name="cpf" 
      value={dados.cpf}
      onChange={e => onChange( "cpf", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>Nacionalidade</label>
      <input name="nacionalidade" 
      value={dados.nacionalidade}
      onChange={e => onChange( "nacionalidade", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>Campi de atuação</label>
      <input name="campi" 
      value={dados.campi}
      onChange={e => onChange( "campi", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>Telefone</label>
      <input name="telefone" 
      value={dados.telefone}
      onChange={e => onChange("telefone", e.target.value)}
      />
    </div>
  </div>

  <h2>Logradouro</h2>

  <div className="grid">
    <div className="campo">
      <label>CEP</label>
      <input name="cep" 
      value={dados.cep}
      onChange={e => onChange("cep", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>Estado</label>
      <input name="estado" 
      value={dados.estado}
      onChange={e => onChange("estado", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>Cidade</label>
      <input name="cidade" 
      value={dados.cidade}
      onChange={e => onChange("cidade", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>Número</label>
      <input name="numero" 
      value={dados.numero}
      onChange={e => onChange("numero", e.target.value)}
      />
    </div>

    <div className="campo campo-longo">
      <label>Rua</label>
      <input name="rua" 
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
            checked={dados.cargo.includes("Aluno")}
            onChange={() => onCargoChange( "Aluno")}
            />
            Aluno
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
          <div style={{ marginTop: "8px" }}>
            <input
              type="text"
              placeholder="Digite o cargo"
              value={dados.outroCargo}
              onChange={(e) =>
                onChange("outroCargo", e.target.value)
              }
            />
          </div>
        )}

        </div>

        </fieldset>
    )
}

export default ResposavelForm