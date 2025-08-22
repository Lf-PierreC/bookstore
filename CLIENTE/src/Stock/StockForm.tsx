import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Form/Input";
import SubmitButton from "../Form/SubmitButton";
import "./StockForm.css";

interface StockFormProps {
  btnText: string;
}

function StockForm({ btnText }: StockFormProps) {
  const [stock, setStock] = useState({
    bookId: "",
    quantity: 0,
    cost: 0,
    profitMargin: 0,
    entryDate: ""
  });

  const [books, setBooks] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 🔹 carrega todos os livros cadastrados
    fetch("http://localhost:8080/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Erro ao carregar livros:", err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setStock({ ...stock, [name]: type === "number" ? Number(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (stock.quantity <= 0) {
      alert("❌ Quantidade deve ser maior que 0");
      return;
    }

    if (!stock.entryDate) {
      alert("❌ Data de entrada é obrigatória");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/stocks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stock),
      });

      if (response.ok) {
        alert("📦 Estoque atualizado!");
        navigate("/stock");
      } else {
        alert("Erro ao salvar entrada de estoque");
      }
    } catch (err) {
      console.error(err);
      alert("Falha de conexão com servidor");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* 🔹 selecionar livro já existente */}
      <label htmlFor="bookId">Livro</label>
      <select
        name="bookId"
        value={stock.bookId}
        onChange={handleChange}
        required
      >
        <option value="">Selecione um livro</option>
        {books.map((b) => (
          <option key={b.id} value={b.id}>
            {b.title}
          </option>
        ))}
      </select>

      <Input type="number" text="Quantidade" name="quantity" value={stock.quantity.toString()} handleOnChange={handleChange} />
      <Input type="date" text="Data de Entrada" name="entryDate" value={stock.entryDate} handleOnChange={handleChange} />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default StockForm;
