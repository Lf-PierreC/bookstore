import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomerForm from '../Customer/CustomerForm';
import './NewCustomer.css';

function EditCustomer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/clientes/${id}`)
      .then(res => res.json())
      .then(data => setCustomer(data))
      .catch(err => console.error('Erro ao carregar cliente:', err));
  }, [id]);

  return (
    <div className="newcustomer_container">
      <h1>Editar Cliente</h1>
      {customer ? (
        <CustomerForm btnText="Atualizar Cliente" customerData={customer} />
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
}

export default EditCustomer;
