
import { range } from '../../utils';

export default function Guess({ value }) {
    return (
        <p className="guess">
            {range(5).map((num) => {
                return (
                    <span key={num} className={value ? `cell ${value[num].status}` : 'cell'}>
                        {value ? value[num].letter : undefined}
                    </span>
                )
            })}
        </p>

    )
}