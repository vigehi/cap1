/* eslint-disable linebreak-style */
const episodelikes = async () => {
  let items = [];
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3JCbf01gnYHumdJ2UWFM/likes',
  )
    .then((response) => response.json())
    .then((res) => {
      items = res;
      return items;
    });
  return items;
};

export default episodelikes;
