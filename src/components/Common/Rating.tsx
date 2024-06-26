import { FaStar } from 'react-icons/fa';
const Rating: React.FC<{ value: number, text?: string }> = ({ value, text }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < value) {
            stars.push(<FaStar key={i} color="#FF9966" />);
        } else {
            stars.push(<FaStar key={i} color="lightgray" />);
        }
    }
    return (
        <div className="rating">
            {stars} (22)&nbsp;&nbsp;{text}
        </div>
    );
}
export default Rating