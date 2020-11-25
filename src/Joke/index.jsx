import React, { useState } from 'react';
import './style.css';

export const Joke = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

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
            onClick={() => setLikes(likes + 1)}
          ></button>
          <span id="likes-up" class="likes-count likes-count--up">
            {likes}
          </span>
          <button
            id="btn-down"
            class="btn-like btn-like--down"
            onClick={() => setDislikes(dislikes + 1)}
          ></button>
          <span id="likes-down" class="likes-count likes-count--down">
            {dislikes}
          </span>
        </div>
      </div>
    </>
  );
};
