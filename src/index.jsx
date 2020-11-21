import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import { Joke } from './Joke/index.jsx';
import { jokes } from './jokes.js';
// import images from './img';

const App = () => {
  return (
    <>
      {jokes.map((joke) => (
        <Joke
          id={joke.id}
          name={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </>
  );
};

render(<App />, document.querySelector('#app'));
