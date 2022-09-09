/* eslint-disable linebreak-style */
import fetchAPIdata from './episodes.js';
import postLike from './postlikes.js';

const likepisode = async () => {
  const allepisodes = await fetchAPIdata();

  const btnadd = document.querySelectorAll('.like');
  const spans = document.querySelectorAll('#count-like');
  btnadd.forEach((a, i) => {
    let new111 = JSON.parse(spans[i].innerHTML);

    a.addEventListener('click', () => {
      postLike(allepisodes[i].name);
      new111 += 1;
      spans[i].innerHTML = new111;
    });
  });
};

export default likepisode;
