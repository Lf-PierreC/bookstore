import { Link } from "react-router-dom";
import "./StoreCard.css";

interface StoreCardProps {
  book: {
    id: number;
    title: string;
    price: number;
    imageUrl?: string;
  };
}

function StoreCard({ book }: StoreCardProps) {
  return (
    <Link to={`/books/${book.id}`} className="store_card">
      <img
        src={book.imageUrl ? `/images/${book.imageUrl}` : "/images/default.jpg"}
        alt={book.title}
        className="store_image"
        />
      <h4>{book.title}</h4>
      <p className="price">R$ {book.price.toFixed(2)}</p>
    </Link>
  );
}

export default StoreCard;
