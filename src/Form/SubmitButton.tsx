import { useNavigate } from 'react-router-dom';
import './SubmitButton.css'

interface SubmitButtonProps {
    text: string;
    to: string;
}

function SubmitButton({ text, to }: SubmitButtonProps) {
    const navigate = useNavigate();

    return (
        <div>
            <button className="btn-submit" onClick={() => navigate(to)}>
                {text}
            </button>
        </div>
    )
}

export default SubmitButton;
