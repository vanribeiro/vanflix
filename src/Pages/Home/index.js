import React, { useEffect, useState } from 'react';
import PageDefault from '../PageDefault';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import categoriesRepository from '../../Repositories/categories';

const Home = () => {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((videosWithCategories) => {
        setInitialData(videosWithCategories);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <PageDefault paddingAll={0}>
        {initialData.length === 0 && (<div>Loading...</div>)}
        {initialData.map((category, key) => {
          if (key === 0) {
            return (
              <div key={category.id}>
                <BannerMain
                  videoTitle={initialData[0].videos[0].title}
                  url={initialData[0].videos[0].url}
                  videoDescription="Técnicas de Aquarela!"
                />

                <Carousel ignoreFirstVideo category={initialData[0]} />

              </div>
            );
          }

          return (
            <Carousel
              key={category.id}
              category={category}
            />
          );
        })}
      </PageDefault>
    </>
  );
};

export default Home;
