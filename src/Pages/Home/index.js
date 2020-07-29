import React from 'react';
import PageDefault from './../PageDefault';
import dadosIniciais from './../../data/dados_iniciais.json';
import BannerMain from './../../Components/BannerMain';
import Carousel from './../../Components/Carousel';

const Home = () => {
    return(
        <React.Fragment>
            <PageDefault>
                <BannerMain 
                    videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                    url={dadosIniciais.categorias[0].videos[0].url}
                    videoDescription={"Bla Bla"}
                />
            
                <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]}/>
                <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]}/>
            </PageDefault>
        </React.Fragment>
    )
}

export default Home;