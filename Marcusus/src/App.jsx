import './App.css'
import SolicitanteForm from './componentes/solicitanteform'
import ResposavelForm from './componentes/responsaveisform'
import InfoForm from './componentes/infos'
import { useState } from 'react'
import GerarPDF from './service/gerarpdf'

const modeloPessoa = {
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
}


const modeloSolicitante = {
  ...modeloPessoa,
  responsaveis: []
}

function App() {

  const modelInfo = {
  titulo: "",
  descricao: "",
  data_ideia: "",
  data_inicio: "",
  data_conclu: "",
  estado_dev: "",
  prox_et: "",
  potenc: "",
  ja_apre: "",
  interesse: "",
  linguagens: "",
  campodeaplicacao: "",
  tipopr: "",
  tipo_algorash: "",
  algorash: "",
  est_crf: [],
  nome_agentef: "",
  ncontrato: "",
  foi_informado: [],
  contrrfapu: [],
  ocrd_ex: [],
  seocr_quando: "",
  ouveci_ex: [],
  existiu_ajdfex: [],
  esteve_inclu_in_ifpb: "",
  foi_prcr: [],
  foi_str: [],
  foi_amostra: [],
  declaro: []

}

const [info, setInfo] = useState({...modelInfo})

  const [solicitantes, setSolicitantes] = useState([
    { ...modeloSolicitante }
  ])

  function adicionarSolicitante() {
    setSolicitantes(prev => [
      ...prev,
      { ...modeloSolicitante }
    ])
  }

  function adicionarResponsavel(solicitanteIndex) {
    setSolicitantes(prev =>
      prev.map((sol, i) => {
        if (i !== solicitanteIndex) return sol

        return {
          ...sol,
          responsaveis: [
            ...sol.responsaveis,
            { ...modeloPessoa }
          ]
        }
      })
    )
  }

  function atualizarSolicitante(index, campo, valor) {
    setSolicitantes(prev =>
      prev.map((sol, i) =>
        i === index ? { ...sol, [campo]: valor } : sol
      )
    )
  }

  function atualizarInfo(campo, valor) {
    setInfo(prev => ({
      ...prev,
      [campo]: valor
    }))
  }

  function toggleInfoArray(campo, valor) {
    setInfo(prev => {
      const lista = prev[campo] || []

      const existe = lista.includes(valor)

      return {
        ...prev,
        [campo]: existe
          ? lista.filter(v => v !== valor)
          : [...lista, valor]
      }
    })
  }

  function toggleCargoSolicitante(index, cargo) {
    setSolicitantes(prev =>
      prev.map((sol, i) => {
        if (i !== index) return sol

        const cargos = sol.cargo.includes(cargo)
          ? sol.cargo.filter(c => c !== cargo)
          : [...sol.cargo, cargo]

        return { ...sol, cargo: cargos }
      })
    )
  }

  function atualizarResponsavel(solicitanteIndex, respIndex, campo, valor) {
    setSolicitantes(prev =>
      prev.map((sol, i) => {
        if (i !== solicitanteIndex) return sol

        return {
          ...sol,
          responsaveis: sol.responsaveis.map((resp, rIndex) =>
            rIndex === respIndex
              ? { ...resp, [campo]: valor }
              : resp
          )
        }
      })
    )
  }

  function toggleCargoResponsavel(solicitanteIndex, respIndex, cargo) {
    setSolicitantes(prev =>
      prev.map((sol, i) => {
        if (i !== solicitanteIndex) return sol

        return {
          ...sol,
          responsaveis: sol.responsaveis.map((resp, rIndex) => {
            if (rIndex !== respIndex) return resp

            const cargos = resp.cargo.includes(cargo)
              ? resp.cargo.filter(c => c !== cargo)
              : [...resp.cargo, cargo]

            return { ...resp, cargo: cargos }
          })
        }
      })
    )
  }

  return (
    <>
      {solicitantes.map((sol, solIndex) => (
        <div key={solIndex}>

          <SolicitanteForm
            index={solIndex}
            dados={sol}
            onChange={(campo, valor) =>
              atualizarSolicitante(solIndex, campo, valor)
            }
            onCargoChange={(cargo) =>
              toggleCargoSolicitante(solIndex, cargo)
            }
          />

          {sol.responsaveis.map((resp, respIndex) => (
            <ResposavelForm
              key={respIndex}
              index={respIndex}
              dados={resp}
              onChange={(campo, valor) =>
                atualizarResponsavel(solIndex, respIndex, campo, valor)
              }
              onCargoChange={(cargo) =>
                toggleCargoResponsavel(solIndex, respIndex, cargo)
              }
            />
          ))}

          <button
            type="button"
            className='adres'
            onClick={() => adicionarResponsavel(solIndex)}
          >
            + Adicionar Responsável
          </button>

        </div>
      ))}

      <InfoForm dados={info} onChange={atualizarInfo} toggleInfoArray={toggleInfoArray} />

      <div className="acoes">
        <button type="button" onClick={adicionarSolicitante}>
          + Adicionar Solicitante
        </button>

        <button
          type="button"
          onClick={() => GerarPDF(solicitantes, info)}
        >
          Baixar PDF
        </button>
      </div>
    </>
  )
}

export default App
