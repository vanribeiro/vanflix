import React, { useEffect } from 'react';
import PageDefault from '../PageDefault';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import categoriesRepository from '../../Repositories/categories';

const Home = () => {
  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((videosWithCategories) => {
        console.log(videosWithCategories);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return (
    <>
      <PageDefault>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription="Técnicas de Aquarela!"
        />

        <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
        <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
      </PageDefault>
    </>
  );
};

export default Home;
