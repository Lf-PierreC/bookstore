import { Link } from 'react-router-dom';
import './LinkButton.css';

interface LinkButtonProps {
    to: string;
    text: string;
}

function LinkButton({ to, text }: LinkButtonProps) {
    return (
        <Link className="btn" to={to}>
            {text}
        </Link>
    );
}

export default LinkButton;