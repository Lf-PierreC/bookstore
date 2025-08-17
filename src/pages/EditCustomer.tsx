import CustomerForm from '../Customer/CustomerForm';
import './NewCustomer.css';

function EditCustomer() {

  return (
    <div className="newcustomer_container">
      <h1>Editar Cliente</h1>
        <CustomerForm
          btnText="Atualizar Cliente"
        />
    </div>
  );
}

export default EditCustomer;
