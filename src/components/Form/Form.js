import React from 'react';

export default function Form({ handleSubmit }) {
    const [guess, setGuess] = React.useState('');
    const [error, setError] = React.useState(false);
    console.log(error);
    return (
        <form
            className="guess-input-wrapper"
            onSubmit={(event) => {
                event.preventDefault();
                if (guess.length < 5) {
                    setError(true);
                }
                else {
                    setError(false)
                    handleSubmit(guess)
                    setGuess('');
                }

            }}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text"
                value={guess}
                required
                pattern="[a-zA-Z]{5}"
                title="5 letter word"
                onChange={(event) => {
                    setGuess(event.target.value.toUpperCase())
                }} />
            {error ? <p className='error'>Needs to be 5 letters</p> : ''}
        </form>
    )
}