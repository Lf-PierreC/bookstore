import "./StockCard.css";

interface StockCardProps {
  stock: {
    id: number;
    bookTitle: string;
    quantity: number;
    cost: number;
    profitMargin: number;
    entryDate: string;
  };
}

function StockCard({ stock }: StockCardProps) {
  const sellingPrice = stock.cost + (stock.cost * stock.profitMargin) / 100;

  return (
    <div className="stock_card">
      <h4>{stock.bookTitle}</h4>
      <p><strong>Quantidade:</strong> {stock.quantity}</p>
      <p><strong>Custo Unitário:</strong> R$ {stock.cost.toFixed(2)}</p>
      <p><strong>Preço de Venda:</strong> R$ {sellingPrice.toFixed(2)}</p>
      <p><strong>Data de Entrada:</strong> {new Date(stock.entryDate).toLocaleDateString()}</p>
    </div>
  );
}

export default StockCard;
