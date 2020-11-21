import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import './assets/img/user01.png';
// import images from './img';

// 4.	Naprogramujte vaši Reactovou aplikaci tak, aby dělala přesně totéž a vypadala přesně stejně, jako vzorová aplikace. Stačí vytvořit jednu komponentu App. Ze vzorové aplikace můžete vykrást libovolný kód, který se vám bude v Reactu hodit.

// const App = () => {
//   const [active, setActive] = useState(true);

//   return (
//     <button
//       className={active ? 'btn btn--active' : 'btn'}
//       onClick={() => setActive(!active)}
//     >
//       Ok
//     </button>
//   );
// };
let upLikes = 0;
const handleClickUp = () => {
  const likesUpElm = document.querySelector('#likes-up');
  upLikes++;
  likesUpElm.textContent = upLikes;
};

let downLikes = 0;
const handleClickDown = () => {
  const likesDownElm = document.querySelector('#likes-down');
  downLikes++;
  likesDownElm.textContent = downLikes;
};

const App = () => {
  return (
    <>
      <div class="container">
        <div class="joke">
          <div class="joke__body">
            <div class="joke__user">
              <img class="user-avatar" src="assets/img/user01.png" />
              <p class="user-name">Neroxx</p>
            </div>
            <p class="joke__text">
              The secret service isn't allowed to yell "Get down!" anymore when
              the president is about to be attacked. Now they have to yell
              "Donald, duck!"
            </p>
          </div>
          <div class="joke__likes">
            <button
              id="btn-up"
              class="btn-like btn-like--up"
              onClick={handleClickUp}
            ></button>
            <span id="likes-up" class="likes-count likes-count--up">
              0
            </span>
            <button
              id="btn-down"
              class="btn-like btn-like--down"
              onClick={handleClickDown}
            ></button>
            <span id="likes-down" class="likes-count likes-count--down">
              0
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
