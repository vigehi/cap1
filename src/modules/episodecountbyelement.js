const episodecounts = (el, arr) => {
  if (arr.length === 0) {
    return 0;
  }

  const episodecountbyelement = arr.length;
  el.innerText = "";
  el.innerText = `(${episodecountbyelement})`;
  return episodecountbyelement;
};

export default episodecounts;
