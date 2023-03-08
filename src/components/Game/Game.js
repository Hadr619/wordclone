import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Form from "../Form";
import Results from "../Results";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [guessCount, setGuessCount] = React.useState(0);
  const [showBanner, setShowBanner] = React.useState(false);



  const handleSubmit = (guess) => {
    setGuesses([
      ...guesses, guess
    ])

    if (guess !== answer) {
      setGuessCount(guessCount => guessCount + 1);
    }
    if (guess === answer) {
      setShowBanner(true);
    }

    if (guessCount === NUM_OF_GUESSES_ALLOWED) {
      setShowBanner(true)
    }
  }

  return (
    <>
      <Results numCols={5} guesses={guesses} answer={answer} />
      <Form handleSubmit={handleSubmit} showBanner={showBanner} />
      {showBanner ? <Banner status={guessCount <= NUM_OF_GUESSES_ALLOWED ? "happy" : 'sad'} guessCount={guessCount} answer={answer} /> : ''}
    </>
  )
}

export default Game;
