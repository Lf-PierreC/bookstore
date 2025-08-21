import { useEffect, useState } from "react";
import StoreCard from "../Store/StoreCard";
import "./Store.css";

function Store() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error("Erro ao carregar livros:", err));
  }, []);

  return (
    <div className="store_container">
      <h1>Loja</h1>
      <div className="store_list">
        {books.map((b) => (
          <StoreCard key={b.id} book={b} />
        ))}
      </div>
    </div>
  );
}

export default Store;
