import CustomerForm from '../Customer/CustomerForm';
import './NewCustomer.css';

function NewCustomer() {
  return (
    <div className="newcustomer_container">
      <h1>Cadastrar Cliente</h1>
      <CustomerForm btnText="Cadastrar Cliente" />
    </div>
  );
}

export default NewCustomer;
