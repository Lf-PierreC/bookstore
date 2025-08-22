import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
import "./BookDetails.css";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState<any>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:8080/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data))
      .catch(err => console.error("Erro ao carregar livro:", err));
  }, [id]);

  if (!book) return <p>Carregando...</p>;

  const handleAdd = () => {
    addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      quantity: 1,
      imageUrl: book.imageUrl
    });
    alert("📚 Livro adicionado ao carrinho!");
  };

  return (
    <div className="book_details">
      <img
        src={book.imageUrl ? `/images/${book.imageUrl}` : "/images/default.jpg"}
        alt={book.title}
        className="book_image_large"
      />
      <h1>{book.title}</h1>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Categoria:</strong> {book.category}</p>
      <p><strong>Preço:</strong> R$ {book.price.toFixed(2)}</p>
      <button onClick={handleAdd} className="btn_add_cart">Adicionar ao Carrinho</button>
    </div>
  );
}

export default BookDetails;
