/* eslint-disable linebreak-style */
const postLike = (episode) => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3JCbf01gnYHumdJ2UWFM/likes',
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        item_id: episode,
      }),
    },
  );
};

export default postLike;
