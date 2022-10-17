import React, { useState,  } from 'react';
import './App.css';

function App() {

  let initialState = [
    {
      id: 1,
      prioridade: "1",
      titulo: "tarefa do dia",
      descricao: "Primeira atividade"
    },
    {
      id: 2,
      prioridade: "1",
      titulo: "tarefa do dia",
      descricao: "Segunda atividade"
    }
  ];

  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e){
    e.preventDefault();

    const atividade = {
      id: gerarId(),
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value
    };

    setAtividades([...atividades,{ ...atividade }]);
  };

  function gerarId(){
    const novoId = atividades.length + 1;
    return novoId;
  }

  function deletarAtividade(id){
    const listaFiltrada = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...listaFiltrada]);
  }

  function prioridadeLabel(param){
    switch(param){
      case'1':
        return 'Baixa'
      case'2':
        return 'Média'
      case'3':
        return 'Alta'
      default:
        return 'not defined';
    }
  }

  function prioridadeFaceStyle(param, icon){
    switch(param){
      case'1':
        return icon ? 'smile' : 'success'
      case'2':
        return icon ? 'meh': 'warning'
      case'3':
        return icon ? 'frown' : 'danger'
      default:
        return 'not defined';
    }
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
            <label className="form-label">
              Id
            </label>
            <input  id="id" type="text" disabled={true} value={gerarId()} className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select id="prioridade" className="form-select">
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Média</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-md-6">
            <label className="form-label">
              Título
            </label>
            <input  id="titulo" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
            <label className="form-label">
              Descrição
            </label>
            <input  id="descricao" type="text" className="form-control" />
        </div>
        <div className="cool-12">
            <button 
              className="btn btn-outline-secondary" 
              onClick={addAtividade} 
              > 
                + atividade 
            </button>
        </div>
      </form>
      <div className="mt-3">         
            {
              atividades.map(ativ => (
                //para cada ativ no array - component card
                <div key={ativ.id} className={"card md-2 mt-2 shadow-sm border-"+ prioridadeFaceStyle(ativ.prioridade)}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">
                        <span className="badge bg-secondary me-1  ">
                          {ativ.id}
                        </span>
                        {ativ.titulo}
                      </h5>
                      <h6>
                        Prioridade: 
                        <span className={"ms-1 text-" + prioridadeFaceStyle(ativ.prioridade)}>
                          <i className={'me-1 fa-regular fa-face-'+ prioridadeFaceStyle(ativ.prioridade, true)}></i>
                          {prioridadeLabel(ativ.prioridade)}
                        </span>                        
                      </h6>
                    </div>
                    <p className="card-text">{ativ.descricao}</p>
                    <div className="d-flex justify-content-end pt-2 border-top m-0">
                      <button className="btn btn-sm btn-outline-primary me-2 ">
                        <i className="fas fa-pen me-2"></i>
                        Editar
                        </button>
                      <button button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deletarAtividade(ativ.id)}>
                      <i className="fas fa-trash me-2"></i>
                        Deletar
                        </button>
                    </div>
                    
                  </div>
                </div>
              ))
            }          
      </div>
    </>
    
  );
}

export default App;
