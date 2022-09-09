import './style.css';
import episodestats from "./modules/content.js";
import likepisode from "./modules/likes.js";
episodestats();
const body = document.querySelector("body");
body.addEventListener("click", () => {
    likepisode();
});
