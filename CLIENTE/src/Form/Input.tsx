import './Input.css'

interface InputProps {
  type: string;
  text: string;
  name: string;
  placeholder?: string;
  value?: string;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, text, name, placeholder, value, handleOnChange }: InputProps) {
  return (
    <div className="form_control">
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  )
}

export default Input
