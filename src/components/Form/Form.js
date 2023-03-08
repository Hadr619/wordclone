import React from 'react';

export default function Form({ handleSubmit, showBanner }) {
    const [guess, setGuess] = React.useState('');


    return (
        <form
            className="guess-input-wrapper"
            onSubmit={(event) => {
                event.preventDefault();
                handleSubmit(guess)
                setGuess('');

            }}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text"
                value={guess}
                required
                pattern="[a-zA-Z]{5}"
                title="5 letter word"
                disabled={showBanner}
                onChange={(event) => {
                    setGuess(event.target.value.toUpperCase())
                }} />
        </form>
    )
}