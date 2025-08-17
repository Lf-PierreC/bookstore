import CustomerCard from '../Customer/CustomerCard';
import LinkButton from '../components/LinkButton';
import './Customer.css';

function Customer() {

  return (
    <div className="customer_container">
      <div className="title_container">
        <h1>Clientes</h1>
        <LinkButton to="/newcustomers" text="Cadastrar Cliente" />
      </div>
      <div className='list-card'>
        <CustomerCard />
        <CustomerCard />
      </div>
    </div>
  );
}

export default Customer;
