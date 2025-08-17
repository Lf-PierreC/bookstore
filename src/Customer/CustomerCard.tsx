import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ConfirmModal from '../components/ConfirmModal';
import './CustomerCard.css';

function CustomerCard() {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => setShowModal(true);

  const confirmDelete = () => {
    setShowModal(false);
    console.log("Cliente excluído!"); // aqui vai a lógica real
  };

  const cancelDelete = () => setShowModal(false);

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
        <button onClick={handleDelete}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>

      {showModal && (
        <ConfirmModal
          message="Tem certeza que deseja excluir este cliente?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}

export default CustomerCard;
