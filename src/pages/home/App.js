import React from 'react';
import DadosIniciais from '../../data/dados_iniciais.json';
import Menu from '../../componentes/menu';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import Footer from '../../componentes/Footer';

function Home() {
  return (
    <div style={{background:"#141414"}}>
      <Menu />
      <BannerMain 
        videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
        url={DadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
      />

      <Carousel 
        ignoreFirstVideo
        category={DadosIniciais.categorias[0]}
      />
      <Carousel 
        ignoreFirstVideo
        category={DadosIniciais.categorias[1]}
      />
      <Carousel 
        ignoreFirstVideo
        category={DadosIniciais.categorias[2]}
      />
      <Carousel 
        ignoreFirstVideo
        category={DadosIniciais.categorias[3]}
      />
      <Carousel 
        ignoreFirstVideo
        category={DadosIniciais.categorias[4]}
      />
      <Carousel 
        ignoreFirstVideo
        category={DadosIniciais.categorias[5]}
      />

      <Footer />

    </div>
  );
}

export default Home;
