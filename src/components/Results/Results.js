import React from 'react';
import Guess from "../Guess";
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";


export default function Results({ guesses }) {

    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
                return (
                    <Guess key={num} value={guesses[num]} />
                )
            })
            }
        </div>
    )
}