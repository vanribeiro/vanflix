import configs from '../Config';

const URL_CATEGORIES = `${configs.URL_BACKEND}/categories`;

const getAll = () => fetch(`${URL_CATEGORIES}`)
  .then(async (serverAnswer) => {
    const awswer = await serverAnswer.json();
    if (serverAnswer.ok) {
      return awswer;
    }

    throw new Error('Não foi possível obter os dados... 😰');
  });

const getAllWithVideos = () => fetch(`${URL_CATEGORIES}?_embed=videos`)
  .then(async (serverAnswer) => {
    const awswer = await serverAnswer.json();
    if (serverAnswer.ok) {
      return awswer;
    }

    throw new Error('Não foi possível obter os dados... 😰');
  });

export default {
  getAllWithVideos,
  getAll,
};
