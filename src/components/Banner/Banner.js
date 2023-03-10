
import React from "react";

export default function Banner({ status, guessCount, answer }) {
    console.log(guessCount)
    return (
        <>
            {status === "happy" ? (
                <div className="happy banner">
                    <p>
                        <strong>Congratulations!</strong> Got it in {' '}
                        <strong>{guessCount} {guessCount > 1 ? 'guesses' : 'guess'}</strong>.
                    </p>
                </div>
            ) : (
                <div className="sad banner">
                    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
                </div>
            )}
        </>
    )
}