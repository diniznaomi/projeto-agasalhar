import React, { useState,  } from 'react';
import './App.css';

function App() {

  let initialState = [
    {
      id: 1,
      descricao: "Primeira atividade"
    },
    {
      id: 2,
      descricao: "Segunda atividade"
    }
  ];

  const [atividades, setAtividades] = useState(initialState);

  function addAtividade(e){
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value
    };

    setAtividades([...atividades,{ ...atividade }]);
  };

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
            <label for="inputEmail4"  className="form-label">Id</label>
            <input  id="id" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
            <label for="inputEmail"  className="form-label">Descrição</label>
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
                //component card
                <div key={ativ.id} className="card md-2 shadow-sm">
                  <div className="card-body">
                    <p className="card-text">
                      {ativ.id} - {ativ.descricao}
                    </p>
                  </div>
                </div>
              ))
            }          
      </div>
    </>
    
  );
}

export default App;
