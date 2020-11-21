import React from 'react';
import './style.css';

let upLikes = 0;
let downLikes = 0;

//  const change = () => {
//    if (like === true) {
//      props.likes++
//    } els
//  }

// const [click, setclick] = useState({props.likes});
// const handleClick = () => setclick(e.target.valu
// }

const handleClickUp = () => {
  const likesUpElm = document.querySelector('#likes-up');
  upLikes++;
  likesUpElm.textContent = upLikes;
};

const handleClickDown = () => {
  const likesDownElm = document.querySelector('#likes-down');
  downLikes++;
  likesDownElm.textContent = downLikes;
};

export const Joke = (props) => {
  return (
    <>
      <div class="container">
        <div class="joke">
          <div class="joke__body">
            <div class="joke__user">
              <img class="user-avatar" src={`assets/img/${props.id}.png`} />
              <p class="user-name">{props.name}</p>
            </div>

            <p class="joke__text">{props.text}</p>
          </div>
        </div>
        <div class="joke__likes">
          <button
            id="btn-up"
            class="btn-like btn-like--up"
            onClick={handleClickUp}
          ></button>
          <span id="likes-up" class="likes-count likes-count--up">
            {props.likes}
          </span>
          <button
            id="btn-down"
            class="btn-like btn-like--down"
            onClick={handleClickDown}
          ></button>
          <span id="likes-down" class="likes-count likes-count--down">
            {props.dislikes}
          </span>
        </div>
      </div>
    </>
  );
};
