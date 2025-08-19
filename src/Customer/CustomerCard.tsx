import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ConfirmModal from '../components/ConfirmModal';
import './CustomerCard.css';

interface CustomerCardProps {
  customer: {
    id: number;
    name: string;
    phone: string;
    createdAt: string;
  };
  onDelete: (id: number) => void; // callback para atualizar a lista após exclusão
}

function CustomerCard({ customer, onDelete }: CustomerCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => setShowModal(true);

  const confirmDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/clientes/${customer.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onDelete(customer.id); 
      } else {
        alert("Erro ao excluir cliente");
      }
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
      alert("Falha de conexão com servidor");
    } finally {
      setShowModal(false);
    }
  };

  const cancelDelete = () => setShowModal(false);

  return (
    <div className="customer_card">
      <h4>Cliente</h4>
      <p><span>Nome:</span> {customer.name}</p>
      <p><span>Telefone:</span> {customer.phone}</p>
      <p><span>Criado em:</span> {new Date(customer.createdAt).toLocaleDateString()}</p>

      <div className="customer_card_actions">
        <Link to={`/customers/${customer.id}/edit`}>
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
