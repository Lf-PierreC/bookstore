import { useEffect, useState } from 'react';
import CustomerCard from '../Customer/CustomerCard';
import LinkButton from '../components/LinkButton'; // Importe o LinkButton
import './Customer.css';
import Container from '../components/Container';

function Customers() {
  const [customers, setCustomers] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/clientes")
      .then(res => res.json())
      .then(data => setCustomers(data))
      .catch(err => console.error("Erro ao carregar clientes:", err));
  }, []);

  const handleDelete = (id: number) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  return (
    <div>
      <div className="customer_container">
        <div className="title_container">
          <h1>Clientes</h1>
          <LinkButton to="/customers/new" text="Cadastrar Cliente"/>
        </div>
        <Container customClass='start'>
          {customers.map((c) => (
            <CustomerCard key={c.id} customer={c} onDelete={handleDelete} />
          ))}
        </Container>
      </div>
    </div>
  );
}

export default Customers;