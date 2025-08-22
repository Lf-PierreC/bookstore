import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Stock.css";

function Stock() {
  const [stocks, setStocks] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data))
      .catch((err) => console.error("Erro ao carregar estoque:", err));
  }, []);

  return (
    <div className="stock_container">
      <h1>Controle de Estoque</h1>
      <Link to="/stocks/new" className="btn">
        Nova entrada
      </Link>


      <table className="stock_table">
        <thead>
          <tr>
            <th>Livro</th>
            <th>Quantidade</th>
            <th>Custo Unitário</th>
            <th>Valor de Venda</th>
            <th>Data Entrada</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((s) => (
            <tr key={s.id}>
              <td>{s.bookTitle}</td>
              <td>{s.quantity}</td>
              <td>R$ {s.cost.toFixed(2)}</td>
              <td>R$ {(s.cost + (s.cost * s.profitMargin) / 100).toFixed(2)}</td>
              <td>{new Date(s.entryDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Stock;
