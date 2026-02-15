function InfoForm({dados, onChange, toggleInfoArray }){
    return(
    <fieldset className="Infos">

    <strong className="titulo-doc">Informações do projeto</strong>
        <h2>INFORMAÇÕES SOBRE A PROPRIEDADE INTELECTUAL</h2>


    <div className="grid">
    <div className="campo">
      <label>Titúlo do Projeto</label>
      <input name="titulo" 
      value={dados.titulo}
      onChange={e => onChange( "titulo", e.target.value)}
      />
    </div>

    <div className="campo">
      <label>Descrição</label>
      <input name="descicao" 
      value={dados.descricao}
      onChange={e => onChange( "descricao", e.target.value)}
      />
    </div>

    <div className="campo">
    <label>Data da Ideia</label>
    <input
        value={dados.data_ideia}
        placeholder="ex: 05/11/2024"
        onChange={e => onChange("data_ideia", e.target.value)}
    />
    </div>

    <div className="campo">
    <label>Data do início</label>
    <input
        value={dados.data_inicio}
        placeholder="ex: 19/03/2024"
        onChange={e => onChange("data_inicio", e.target.value)}
    />
    </div>

    <div className="campo">
    <label>Data de conclusão</label>
    <input
        value={dados.data_conclu}
        placeholder="ex: 19/03/2024"
        onChange={e => onChange("data_conclu", e.target.value)}
    />
    </div>
 </div>

    <h2>TRANSFERÊNCIA DE TECNOLOGIA</h2>

<div className="grid">

    <div className="campo">
    <label>Estado do desenvolvimento</label>
    <input
        value={dados.estado_dev}
        onChange={e => onChange("estado_dev", e.target.value)}
    />
    </div>

    <div className="campo">
    <label>Quais são as próximas etapas?</label>

    <p>É necessário o envolvimento de outra instituição de pesquisa para 
    este desenvolvimento? Estime o alcance desse invento em como 
    um produto no mercado gerado por esta tecnologia, entre outros. </p>

    <textarea
        value={dados.prox_et}
        onChange={e => onChange("prox_et", e.target.value)}
    />
    </div>

    <div className="campo">
    <label>Fale sobre a potencialidade de comercialização da presente invenção, especificando as áreas de aplicação e os 
produtos derivados</label>
    <textarea
        value={dados.potenc}
        onChange={e => onChange("potenc", e.target.value)}
    />
    </div>

    <div className="campo">
    <label>Cite mercados ou empresas que poderiam ter interesse 
em conhecer esta nova tecnologia</label>
    <textarea
        value={dados.interesse}
        onChange={e => onChange("interesse", e.target.value)}
    />
    </div>

    <div className="campo">
    <label>Essa tecnologia já foi apresentada para alguma empresa? Quais? Houve interesse por parte de alguma delas </label>
    <textarea
        value={dados.ja_apre}
        onChange={e => onChange("ja_apre", e.target.value)}
    />
    </div>

    <div className="campo">
    <label>Informe as linguagens de programação usadas</label>
    <input
        value={dados.linguagens}
        onChange={e => onChange("linguagens", e.target.value)}
    />
    </div>

    <div className="campo">
    <label>Campo de aplicação. (Em caso de mais de um, consulte: )</label>
    <input
        value={dados.campodeaplicacao}
        onChange={e => onChange("campodeaplicacao", e.target.value)}
    />
    </div>

    <div className="campo">
    <label>Tipo de programa. (Em caso de mais de um, consulte: )</label>
    <input
        value={dados.tipopr}
        onChange={e => onChange("tipopr", e.target.value)}
    />
    </div>

    <div className="campo">
    <label>Tipo de algoritimo hash</label>
    <input
        value={dados.tipo_algorash}
        onChange={e => onChange("tipo_algorash", e.target.value)}
    />
    </div>

    <div className="campo">
    <label>Algoritimo hash</label>
    <input
        value={dados.algorash}
        onChange={e => onChange("algorash", e.target.value)}
    />
    </div>
    
    </div>

    <h2>FINANCIAMENTO DA PESQUISA</h2>

    <div className="grid">
        <div className="cargos">
        <label>Essa invenção está relacionada a algum contrato?</label>

        <label>
            <input
            type="checkbox"
            checked={dados.est_crf.includes("Sim")}
            onChange={() => toggleInfoArray("est_crf", "Sim")}
            />
            Sim
        </label>

        <label>
            <input
            type="checkbox"
            checked={dados.est_crf.includes("Não")}
            onChange={() => toggleInfoArray("est_crf", "Não")}
            />
            Não
        </label>
        </div>


        <div className="campo">
        <label> Nome do agente financiador (órgão de fomento/empresa/etc.)? </label>
        <input
            value={dados.nome_agentef}
            onChange={e => onChange("nome_agentef", e.target.value)}
        />
        </div>

        <div className="campo">
        <label>Número do contrato ou clausula de confidência? </label>
        <input
            value={dados.ncontrato}
            onChange={e => onChange("ncontrato", e.target.value)}
        />
        </div>

        <div className="cargos">
        <label>O órgão financiador ou parceiro foi informado da criação? </label>
        <label>
            <input
            type="checkbox"
            checked={dados.foi_informado.includes("Sim")}
            onChange={() => toggleInfoArray("foi_informado", "Sim")}
            />
            Sim
        </label>

        <label>
            <input
            type="checkbox"
            checked={dados.foi_informado.includes("Não")}
            onChange={() => toggleInfoArray("foi_informado", "Não")}
            />
            Não
        </label>

        </div>

        <div className="cargos">
        <label>Contrato via Fundação de Apoio?</label>

        <label>
            <input
            type="checkbox"
            checked={dados.contrrfapu.includes("Sim")}
            onChange={() => toggleInfoArray("contrrfapu", "Sim")}
            />
            Sim
        </label>

        <label>
            <input
            type="checkbox"
            checked={dados.contrrfapu.includes("Não")}
            onChange={() => toggleInfoArray("contrrfapu", "Não")}
            />
            Não
        </label>
        </div>
    </div>

    <h2>INSTITUIÇÃO(ÕES) EXTERNA(S) </h2>

    <div className="grid">
        <div className="cargos">
        <label> Ocorreu desenvolvimento de alguma das etapas da invenção em uma 
instituição externa?</label>

        <label>
            <input
            type="checkbox"
            checked={dados.ocrd_ex.includes("Sim")}
            onChange={() => toggleInfoArray("ocrd_ex", "Sim")}
            />
            Sim
        </label>

        <label>
            <input
            type="checkbox"
            checked={dados.ocrd_ex.includes("Não")}
            onChange={() => toggleInfoArray("ocrd_ex", "Não")}
            />
            Não
        </label>
        </div>

        <div className="campo">
        <label>Se ocorreu o desenvolvimento de alguma das etapas da invenção em 
uma instituição externa então quando?</label>
        <input
            value={dados.seocr_quando}
            onChange={e => onChange("seocr_quando", e.target.value)}
        />
        </div>

        <div className="cargos">
        <label>Houve contribuição intelectual de inventores da instituição externa na 
pesquisa e desenvolvimento da tecnologia?</label>

        <label>
            <input
            type="checkbox"
            checked={dados.ouveci_ex.includes("Sim")}
            onChange={() => toggleInfoArray("ouveci_ex", "Sim")}
            />
            Sim
        </label>

        <label>
            <input
            type="checkbox"
            checked={dados.ouveci_ex.includes("Não")}
            onChange={() => toggleInfoArray("ouveci_ex", "Não")}
            />
            Não
        </label>
        </div>

        <div className="cargos">
        <label>Existiu ajuda financeira por parte da instituição externa para o 
desenvolvimento da invenção?</label>

        <label>
            <input
            type="checkbox"
            checked={dados.existiu_ajdfex.includes("Sim")}
            onChange={() => toggleInfoArray("existiu_ajdfex", "Sim")}
            />
            Sim
        </label>

        <label>
            <input
            type="checkbox"
            checked={dados.existiu_ajdfex.includes("Não")}
            onChange={() => toggleInfoArray("existiu_ajdfex", "Não")}
            />
            Não
        </label>
        </div>

        <div className="campo">
        <label>Em algum momento este inventor externo esteve vinculado ao IFPB? 
qual foi o vínculo? A partir de qual data? </label>
        <textarea
            value={dados.esteve_inclu_in_ifpb}
            onChange={e => onChange("esteve_inclu_in_ifpb", e.target.value)}
        />
        </div>
        
        <div className="cargos">
        <label>Foi firmado algum convênio de parceria entre essa instituição e o IFPB?</label>

        <label>
            <input
            type="checkbox"
            checked={dados.foi_prcr.includes("Sim")}
            onChange={() => toggleInfoArray("foi_prcr", "Sim")}
            />
            Sim
        </label>

        <label>
            <input
            type="checkbox"
            checked={dados.foi_prcr.includes("Não")}
            onChange={() => toggleInfoArray("foi_prcr", "Não")}
            />
            Não
        </label>
        </div>

        <div className="cargos">
        <label>Foi produzido algum instrumento jurídico que estabelece a titularidade 
dos direitos da Propriedade Intelectual (PI), qual instituição pode 
licenciar/ceder a PI, bem como supervisionar/conceder a exploração 
comercial? </label>

        <label>
            <input
            type="checkbox"
            checked={dados.foi_str.includes("Sim")}
            onChange={() => toggleInfoArray("foi_str", "Sim")}
            />
            Sim
        </label>

        <label>
            <input
            type="checkbox"
            checked={dados.foi_str.includes("Não")}
            onChange={() => toggleInfoArray("foi_str", "Não")}
            />
            Não
        </label>
        </div>

        <div className="cargos">
        <label>Foi enviada alguma amostra de material referente à pesquisa para a 
instituição externa, ou outra, exceto o IFPB?</label>

        <label>
            <input
            type="checkbox"
            checked={dados.foi_amostra.includes("Sim")}
            onChange={() => toggleInfoArray("foi_amostra", "Sim")}
            />
            Sim
        </label>

        <label>
            <input
            type="checkbox"
            checked={dados.foi_amostra.includes("Não")}
            onChange={() => toggleInfoArray("foi_amostra", "Não")}
            />
            Não
        </label>
        </div>

    </div>

        <h2></h2>
    <div className="grid">

        <strong>OBS.: Alertamos que a divulgação de aspectos da invenção, não informados nesse formulário, que possam prejudicar a expedição da carta-patente no 
Brasil, assim como eventuais solicitações de patenteamento no Exterior são de inteira responsabilidade do requerente.  </strong>

        <div className="cargos">
        <label>Declara-se que todas as informações acima descritas são verdadeiras, bem como se concorda que o resultado da avaliação do potencial de 
geração de tecnologia, obtido após as atividades realizadas pela Coordenação de Propriedade Intelectual e pela Direção de Inovação 
Tecnológica do IFPB, não serão divulgadas sem a prévia anuência destes.  </label>

        <label>
            <input
            type="checkbox"
            checked={dados.declaro.includes("X")}
            onChange={() => toggleInfoArray("declaro", "X")}
            />

        </label>
        </div>

    </div>
        </fieldset>
    )
}

export default InfoForm