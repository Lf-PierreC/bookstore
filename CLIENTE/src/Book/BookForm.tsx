import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Form/Input";
import SubmitButton from "../Form/SubmitButton";
import "./BookForm.css";

interface BookFormProps {
  btnText: string;
  bookData?: any;
}

function BookForm({ btnText, bookData }: BookFormProps) {
  const [book, setBook] = useState({
    id: undefined,
    title: "",
    author: "",
    category: "",
    price: 0,
    profitMargin: 0,
    reason: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (bookData) {
      setBook(bookData);
    }
  }, [bookData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setBook({
      ...book,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const method = book.id ? "PUT" : "POST";
      const url = book.id
        ? `http://localhost:8080/books/${book.id}`
        : "http://localhost:8080/books";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });

      if (response.ok) {
        alert(`📘 Livro ${book.id ? "atualizado" : "cadastrado"} com sucesso!`);
        navigate("/books");
      } else {
        alert("Erro ao salvar livro");
      }
    } catch (err) {
      console.error(err);
      alert("Falha de conexão com servidor");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Dados do Livro</h3>
      <Input type="text" text="Título" name="title" value={book.title} handleOnChange={handleChange} />
      <Input type="text" text="Autor" name="author" value={book.author} handleOnChange={handleChange} />
      <Input type="text" text="Categoria" name="category" value={book.category} handleOnChange={handleChange} />
      <Input type="number" text="Preço" name="price" value={book.price.toString()} handleOnChange={handleChange} />
      <Input type="number" text="Margem de Lucro (%)" name="profitMargin" value={book.profitMargin.toString()} handleOnChange={handleChange} />
      <Input type="text" text="Motivo de Ativação/Inativação" name="reason" placeholder="Opcional" value={book.reason} handleOnChange={handleChange} />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default BookForm;
