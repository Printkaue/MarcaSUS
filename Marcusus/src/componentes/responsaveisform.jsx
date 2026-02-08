function ResposavelForm({index, dados, onChange, onCargoChange }){
    return(
        <fieldset classNameName="responsavel">
    <strong className="titulo-doc">RESPONSÁVEL {index +1}</strong>

  <h2>Dados pessoais</h2>

  <div className="grid">
    <div className="campo">
      <label>Nome completo</label>

      <input name="nome"
      value={dados.nome}
      onChange={e => onChange(index, "nome", e.target.value)}
      />

    </div>

    <div className="campo">
      <label>Email institucional</label>
      <input name="email" 
      value={dados.email}
      onChange={e => onChange(index, "email", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>CPF</label>
      <input name="cpf" 
      value={dados.cpf}
      onChange={e => onChange(index, "cpf", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>Nacionalidade</label>
      <input name="nacionalidade" 
      value={dados.nacionalidade}
      onChange={e => onChange(index, "nacionalidade", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>Campi de atuação</label>
      <input name="campi" 
      value={dados.campi}
      onChange={e => onChange(index, "campi", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>Telefone</label>
      <input name="telefone" 
      value={dados.telefone}
      onChange={e => onChange(index, "telefone", e.target.value)}
      />
    </div>
  </div>

  <h2>Logradouro</h2>

  <div className="grid">
    <div className="campo">
      <label>CEP</label>
      <input name="cep" 
      value={dados.cep}
      onChange={e => onChange(index, "cep", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>Estado</label>
      <input name="estado" 
      value={dados.estado}
      onChange={e => onChange(index, "estado", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>Cidade</label>
      <input name="cidade" 
      value={dados.cidade}
      onChange={e => onChange(index, "cidade", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>Número</label>
      <input name="numero" 
      value={dados.numero}
      onChange={e => onChange(index, "numero", e.target.value)}
      />
    </div>

    <div className="campo campo-longo">
      <label>Rua</label>
      <input name="rua" 
      value={dados.rua}
      onChange={e => onChange(index, "rua", e.target.value)}
      />
    </div>
  </div>

  <h2>Cargo</h2>

      <div className="cargos">
        <label>
            <input
            type="checkbox"
            checked={dados.cargo.includes("Professor")}
            onChange={() => onCargoChange(index, "Professor")}
            />
            Professor
        </label>

        <label>
            <input
            type="checkbox"
            checked={dados.cargo.includes("Aluno")}
            onChange={() => onCargoChange(index, "Aluno")}
            />
            Aluno
        </label>

        <label>
            <input
            type="checkbox"
            checked={dados.cargo.includes("Técnico/Administrativo")}
            onChange={() => onCargoChange(index, "Técnico/Administrativo")}
            />
            Técnico/Administrativo
        </label>
        </div>

        </fieldset>
    )
}

export default ResposavelForm