
import { range } from '../../utils';

export default function Guess({ value }) {

    return (
        <p className="guess">
            {range(5).map((num) => {
                return (
                    <span key={num} className="cell">
                        {value ? value[num] : undefined}
                    </span>
                )
            })}
        </p>

    )
}