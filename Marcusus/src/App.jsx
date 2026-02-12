import './App.css'
import SolicitanteForm from './componentes/solicitanteform'
import ResposavelForm from './componentes/responsaveisform'
import { useState } from 'react'
import GerarPDF from './service/gerarpdf'

function App() {

  const [solicitante, setSolicitante] = useState({
  nome: "",
  email: "",
  cpf: "",
  cep: "",
  cidade: "",
  rua: "",
  numero: "",
  campi: "",
  telefone: "",
  cargo: [],
  outroCargo: ""

})

  const [responsaveis, setResponsaveis] = useState([])

  function adicionarResponsavel() {
    setResponsaveis(prev => [
      ...prev,
      { nome: "", email: "", cpf: "", cep: "", cidade: "", rua: "", numero: "", campi: "", telefone: "", cargo: [], outroCargo: "" }
    ])
  }

  function toggleCargoResponsavel(index, cargo) {
    setResponsaveis(prev =>
      prev.map((resp, i) => {
        if (i !== index) return resp

        const cargos = resp.cargo.includes(cargo)
          ? resp.cargo.filter(c => c !== cargo)
          : [...resp.cargo, cargo]

        return { ...resp, cargo: cargos }
      })
    )
  }


  function atualizarResponsavel(index, campo, valor) {
    setResponsaveis(prev =>
      prev.map((resp, i) =>
        i === index ? { ...resp, [campo]: valor } : resp
      )
    )
  }

  function atualizarSolicitante(campo, valor) {
    setSolicitante(prev => ({
      ...prev,
      [campo]: valor
    }))
  }

  function toggleCargoSolicitante(cargo) {
    setSolicitante(prev => {
      const cargos = prev.cargo.includes(cargo)
        ? prev.cargo.filter(c => c !== cargo)
        : [...prev.cargo, cargo]

      return { ...prev, cargo: cargos }
    })
  }


  return (
    <>
      <SolicitanteForm dados={solicitante} onChange={atualizarSolicitante} onCargoChange={toggleCargoSolicitante}/>
      
      {responsaveis.map((resp, index)=> 
      (<ResposavelForm key={index} index={index} dados={resp} onChange={atualizarResponsavel} onCargoChange={toggleCargoResponsavel}/>))}

      {/*Botoes de acçoes*/}
      <div className="acoes">
        <button type="button" onClick={adicionarResponsavel}>+ Adicionar Responsável</button>
        <button type="button" onClick={() => GerarPDF(solicitante, responsaveis)}>Baixar PDF</button>
      </div>
    </>
  )
}

export default App
