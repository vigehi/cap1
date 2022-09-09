import fetchAPIdata from './episodes.js';
import episodelikes from './episodelikes.js';

const commpopup = document.getElementById('popup');
let count = 0;
const counter = document.getElementById('count');
const episodecards = document.getElementById('container');
let currentValue = 0;
const appId = 'KM960h36MEAZF5DO9Wvb';
const url1 = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

const getcomm = async (itemId) => {
  try {
    const comments = await fetch(`${url1}?item_id=${itemId}`);
    const data = await comments.json();
    const startcomment = document.querySelector('.comm1');
    const listAllComments = document.querySelector('.comment-list');
    if (data.length > 0) {
      startcomment.innerHTML = `Comments(${data.length})`;
      listAllComments.innerHTML = '';
      data.forEach((comm) => {
        const itemtocomment = `        
        <p>${comm.creation_date} ${comm.username}: ${comm.comment}</p>
      `;
        listAllComments.innerHTML += itemtocomment;
      });
    } else {
      startcomment.innerHTML = 'Comments(0)';
      const noComment = `
      <p>No comment on this post</p>
      `;
      listAllComments.innerHTML = noComment;
    }
  } catch (err) {
    throw new Error('Request error: ', err);
  }
};

const postComment = async (itemId) => {
  const username = document.querySelector('.username');
  const comment = document.querySelector('.usermassage');

  if (username.value !== '' || comment.value !== '') {
    try {
      const response = await fetch(url1, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          item_id: itemId,
          username: username.value,
          comment: comment.value,
        }),
      });
      const data = response.text();
      if (response.ok) {
        username.value = '';
        comment.value = '';
        getcomm(itemId);
        return data;
      }
    } catch (err) {
      throw new Error('Request error: ', err);
    }
    return true;
  }
  return false;
};

const closepopupModal = () => {
  const closebtn = document.querySelector('#close');
  closebtn.addEventListener('click', (e) => {
    e.preventDefault();
    commpopup.style.display = 'none';
  });
};

const showcommpopup = async () => {
  const episodeArray = await fetchAPIdata();
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((commentBtn) => {
    const btnId = commentBtn.getAttribute('id');
    const episodedet = episodeArray[btnId];
    commentBtn.addEventListener('click', () => {
      getcomm(btnId);
      const modal = `          
      <div class="comment-modal">
      <button type="button" id="close" class="close-comment-bn">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="card-details">
        <img src="${episodedet.image.original}" alt="Card original image" />
        <h3>${episodedet.name}</h3>
        <ul class="more-info">
          <li>
            <span><strong> Runtime </strong>: ${episodedet.runtime} minutes</span>
          </li>
        </ul>
        <p class="summary">${episodedet.summary}</p>
        <div class="card-comment">
          <h3 class="comm1"></h3>
          <div class="comment-area">
            <div class="comment-list">
            </div>
            <form autocomplete="off" id="comment-form">
              <input type="text" class="username" name="name" id="name" placeholder="Your name"/>
              <textarea name="message" class="usermassage" id="" cols="30" rows="5" placeholder="Your Insight" ></textarea>
              <button class="new-comment" id="${btnId}" type="button">Comment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
      `;

      commpopup.innerHTML = modal;
      commpopup.style.display = 'block';
      closepopupModal();

      const cmntBtn = document.querySelector('.new-comment');
      cmntBtn.addEventListener('click', () => {
        postComment(btnId);
      });
    });
  });
};

// Render all episodes card
const episodestats = async () => {
  const episodeArray = await fetchAPIdata();
  episodeArray.slice(0, 10).forEach((episode) => {
    episodelikes().then((res) => {
      currentValue = res;
      let assignLike = 0;

      const like = currentValue.filter(
        (element) => element.item_id === episode.name,
      );
      if (like.length === 0) {
        assignLike = 0;
      } else {
        assignLike = like[0].likes;
      }
      episodecards.innerHTML += `
        <div class="card1" id="${episodeArray.indexOf(episode)}">
          <img src="${episode.image.medium}" alt="${episode.name}" />
          <div class="listepisods">
            <h2 class="title">${`${episode.name.substring(0, 15)}`}</h2>
            <div>
              <button type="button" class="like"><i class="fa-solid fa-thumbs-up"></i><span id="count-like">${assignLike}</span></button>
            </div>
          </div>
          <div class="card1-summ">        
            <p>${`${episode.summary.substring(0, 80)} ...`}</p>
          </div>
            <button type="button" class="comment-btn" id="${episodeArray.indexOf(
    episode,
  )}">Read more & comments</button>
        </div>`;
      showcommpopup();
    });

    count += 1;
  });

  counter.innerText = `(${count * 2})`;
  counter.style.color = 'red';
};

export default episodestats;
