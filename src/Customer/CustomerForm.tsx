import Input from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';
import './CustomerForm.css';

interface CustomerFormProps {
  btnText: string;
}

function CustomerForm({ btnText }: CustomerFormProps) {
  return (
    <form className="form">
      <Input
        type="text"
        text="Nome do cliente"
        name="name"
      />
      <Input
        type="text"
        text="Telefone"
        name="phone"
      />
      <SubmitButton text={btnText} to="/customers"/>
    </form>
  );
}

export default CustomerForm;
