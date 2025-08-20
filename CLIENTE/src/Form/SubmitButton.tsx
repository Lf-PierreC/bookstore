import './SubmitButton.css'

interface SubmitButtonProps {
  text: string;
}

function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <div>
      <button className="btn-submit" type="submit">
        {text}
      </button>
    </div>
  )
}

export default SubmitButton;
