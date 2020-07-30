import React from 'react';
import PageDefault from '../../../componentes/pageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return(
        <PageDefault>
            <div className="bug-bottom"></div>
            <h1>Cadastro de Categoria</h1>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;