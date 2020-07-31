import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/pageDefault';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState('Valor inicial');


  function setValue(chave,valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(info){
    setValue(
      info.target.getAttribute('name'),
      info.target.value
      );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infoEvento){
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>

        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.nome}
              name="nome"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Descrição:
            <input
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
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
              {categoria.nome}
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