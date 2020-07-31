import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/pageDefault';

function CadastroCategoria() {
  
  const [categorias, setCategorias] = useState(['Teste']);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor inicial');

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

      <form onSubmit={function handleSubmit(infoEvento){
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          nomeDaCategoria
        ]);
      }}>

        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={nomeDaCategoria}
              onChange={function funcaoHandleQueOErroPediu(info){
                setNomeDaCategoria(info.target.value)
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <input
              type="text"
              value={nomeDaCategoria}
              onChange={function funcaoHandleQueOErroPediu(info){
                setNomeDaCategoria(info.target.value)
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
              type="color"
              value={nomeDaCategoria}
              onChange={function funcaoHandleQueOErroPediu(info){
                setNomeDaCategoria(info.target.value)
              }}
            />
          </label>
        </div>


        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) =>{
          return(
            <li key={`${categoria}${indice}`} >
              {categoria}
            </li>
          )
          
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;