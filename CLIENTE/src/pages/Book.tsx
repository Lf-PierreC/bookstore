import { useEffect, useState } from 'react';
import BookCard from '../Book/BookCard';
import { Link } from 'react-router-dom';
import './Book.css';
import Container from '../components/Container';
import LinkButton from '../components/LinkButton';

function Books() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error("Erro ao carregar livros:", err));
  }, []);

  const handleDelete = (id: number) => {
    setBooks(books.filter(b => b.id !== id));
  };

  return (
    <div className="books_container">
      <div className="title_container">
        <h1>Livros</h1>
        <LinkButton to="/books/new" text="Cadastrar Livro"/>
      </div>

      <Container customClass='start'>
        {books.map((b) => (
          <BookCard key={b.id} book={b} onDelete={handleDelete} />
        ))}
      </Container>
    </div>
  );
}

export default Books;
