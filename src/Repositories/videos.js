import configs from '../Config';

const URL_VIDEOS = `${configs.URL_BACKEND}/videos`;

const createVideo = (videoObject) => fetch(`${URL_VIDEOS}?_embed=videos`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(videoObject),
})
  .then(async (serverAnswer) => {
    const awswer = await serverAnswer.json();
    if (serverAnswer.ok) {
      return awswer;
    }

    throw new Error('Não foi possível cadastrar os dados... 😰');
  });

export default {
  createVideo,
};
