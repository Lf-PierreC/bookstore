import Input from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';
import './BookForm.css';

interface BookFormProps {
  btnText: string;
}

function BookForm({ btnText }: BookFormProps) {
  return (
    <form className="form">
      <h3>Dados do Livro</h3>
      <Input type="text" text="Título" name="title" />
      <Input type="text" text="Autor" name="author" />
      <Input type="text" text="Categoria" name="category" />
      <Input type="number" text="Preço" name="price" />
      <Input type="number" text="Margem de Lucro (%)" name="profitMargin" />
      <Input type="text" text="Motivo de Ativação/Inativação" name="reason" placeholder="Opcional" />

      <SubmitButton text={btnText} to="/books" />
    </form>
  );
}

export default BookForm;
