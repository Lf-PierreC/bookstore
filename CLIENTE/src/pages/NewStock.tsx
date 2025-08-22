import StockForm from "../Stock/StockForm";
import "./NewStock.css";

function NewStock() {
  return (
    <div className="newstock_container">
      <h1>Entrada em Estoque</h1>
      <StockForm btnText="Salvar Entrada" />
    </div>
  );
}

export default NewStock;
