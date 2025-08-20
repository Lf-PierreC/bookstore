import BookForm from '../Book/BookForm';
import './NewBook.css';

function NewBook() {
  return (
    <div className="newbook_container">
      <h1>Cadastrar Livro</h1>
      <BookForm btnText="Cadastrar Livro" />
    </div>
  );
}

export default NewBook;
