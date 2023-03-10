import React from 'react';
import Guess from "../Guess";
import { range, } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";


export default function Results({ guesses, answer }) {
    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
                return (
                    <Guess key={num} value={checkGuess(guesses[num], answer)} />
                )
            })
            }
        </div>
    )
}