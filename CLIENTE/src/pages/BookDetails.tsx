import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data))
      .catch(err => console.error("Erro ao carregar livro:", err));
  }, [id]);

  if (!book) return <p>Carregando...</p>;

  return (
    <div className="book_details">
      <img
        src={book.imageUrl || "/images/default.jpg"}
        alt={book.title}
        className="book_image_large"
      />
      <h1>{book.title}</h1>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Categoria:</strong> {book.category}</p>
      <p><strong>Preço:</strong> R$ {book.price.toFixed(2)}</p>
      <p><strong>Descrição:</strong> {book.description || "Sem descrição."}</p>
    </div>
  );
}

export default BookDetails;
