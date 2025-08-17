import styles from './Input.css'

interface InputProps {
    type: string;
    text: string;
    name: string;
    placeholder?: string;
}

function Input({type, text, name, placeholder}: InputProps) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder}></input>
        </div>
    )
}

export default Input