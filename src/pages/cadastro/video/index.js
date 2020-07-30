import React from 'react';
import PageDefault from '../../../componentes/pageDefault';
import './video.css';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return(
        <PageDefault>
            <div className="bug-bottom"></div>
            <h1>Cadastro de Vídeo</h1>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;