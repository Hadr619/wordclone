import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import Form from "../Form";
import Results from "../Results";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmit = (answer) => {
    setGuesses([
      ...guesses, answer
    ])
  }
  return (
    <>
      <Results numCols={5} guesses={guesses} />
      <Form handleSubmit={handleSubmit} setGuesses={setGuesses} />
    </>
  )
}

export default Game;
