import'./Select.css'

interface Option {
  id: string | number; 
  name: string;
}

interface SelectProps {
  text: string;
  name: string;
  options: Option[];
}

function Select({ text, name}: SelectProps) {
  return (
    <div className="form_control">
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
      </select>
    </div>
  );
}

export default Select;
