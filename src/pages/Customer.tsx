import { useEffect, useState } from 'react';
import CustomerCard from '../Customer/CustomerCard';

function Customers() {
  const [customers, setCustomers] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/clientes")
      .then(res => res.json())
      .then(data => setCustomers(data))
      .catch(err => console.error("Erro ao carregar clientes:", err));
  }, []);

  const handleDelete = (id: number) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  return (
    <div>
      <h1>Clientes</h1>
      <div className="customers_container">
        {customers.map((c) => (
          <CustomerCard key={c.id} customer={c} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default Customers;
