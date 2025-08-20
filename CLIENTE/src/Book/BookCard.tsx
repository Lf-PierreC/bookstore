import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ConfirmModal from '../components/ConfirmModal';
import './BookCard.css';

interface BookCardProps {
  book: {
    id: number;
    title: string;
    author: string;
    price: number;
    createdAt: string;
  };
  onDelete: (id: number) => void;
}

function BookCard({ book, onDelete }: BookCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => setShowModal(true);

  const confirmDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/books/${book.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onDelete(book.id);
      } else {
        alert("Erro ao excluir livro");
      }
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
      alert("Falha de conexão com servidor");
    } finally {
      setShowModal(false);
    }
  };

  return (
    <div className="book_card">
      <h4>Livro</h4>
      <p><span>Título:</span> {book.title}</p>
      <p><span>Autor:</span> {book.author}</p>
      <p><span>Preço:</span> R$ {book.price.toFixed(2)}</p>
      <p><span>Criado em:</span> {new Date(book.createdAt).toLocaleDateString()}</p>

      <div className="book_card_actions">
        <Link to={`/books/${book.id}/edit`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={handleDelete}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>

      {showModal && (
        <ConfirmModal
          message="Tem certeza que deseja excluir este livro?"
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default BookCard;
