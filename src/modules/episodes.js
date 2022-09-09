const fetchAPIdata = async () => {
  let episodes = [];
  await fetch('https://api.tvmaze.com/seasons/1/episodes')
    .then((response) => response.json())
    .then((response) => {
      episodes = response;
    });
  return episodes;
};

export default fetchAPIdata;