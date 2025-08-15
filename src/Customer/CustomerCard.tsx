import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './CustomerCard.css';

function CustomerCard() {
  return (
    <div className="customer_card">
      <h4>Cliente</h4>
      <p><span>Nome:</span></p>
      <p><span>Telefone:</span></p>
      <p><span>Criado em:</span></p>

      <div className="customer_card_actions">
        <Link to={`/editcustomers`}>
          <BsPencil /> Editar
        </Link>
        <button>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default CustomerCard;
