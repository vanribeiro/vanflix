import React from 'react';
import Menu from './Components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './Components/BannerMain';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Menu />
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Bla Bla"}
      />
      
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]}/>
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]}/>
      <Footer />
    </div>
  );
}

export default App;
