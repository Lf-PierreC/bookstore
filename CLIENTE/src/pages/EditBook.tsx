import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookForm from "../Book/BookForm";
import "./NewCustomer.css";

function EditBook() {
  const { id } = useParams();
  const [bookData, setBookData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBookData(data))
      .catch((err) => console.error("Erro ao carregar livro:", err));
  }, [id]);

  if (!bookData) return <p>Carregando...</p>;

  return (
    <div className="newcustomer_container">
      <h1>Editar Livro</h1>
      <BookForm btnText="Atualizar Livro" bookData={bookData} />
    </div>
  );
}

export default EditBook;
