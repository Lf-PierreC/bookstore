import BookForm from '../Book/BookForm';
import './EditBook.css';

function EditBook() {
  return (
    <div className="editbook_container">
      <h1>Editar Livro</h1>
      <BookForm btnText="Atualizar Livro" />
    </div>
  );
}

export default EditBook;
