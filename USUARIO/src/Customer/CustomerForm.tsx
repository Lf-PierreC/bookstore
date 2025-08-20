import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';
import './CustomerForm.css';

interface CustomerFormProps {
  btnText: string;
  customerData?: {
    id?: number; // Adicionado para edição
    name: string;
    gender: string;
    birthdate: string;
    cpf: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    residenceType: string;
    streetType: string;
    street: string;
    number: string;
    neighborhood: string;
    cep: string;
    city: string;
    state: string;
    country: string;
    notes: string;
  };
}

function CustomerForm({ btnText, customerData }: CustomerFormProps) {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: customerData?.name || '',
    gender: customerData?.gender || '',
    birthdate: customerData?.birthdate || '',
    cpf: customerData?.cpf || '',
    email: customerData?.email || '',
    phone: customerData?.phone || '',
    password: '',
    confirmPassword: '',
    residenceType: customerData?.residenceType || '',
    streetType: customerData?.streetType || '',
    street: customerData?.street || '',
    number: customerData?.number || '',
    neighborhood: customerData?.neighborhood || '',
    cep: customerData?.cep || '',
    city: customerData?.city || '',
    state: customerData?.state || '',
    country: customerData?.country || '',
    notes: customerData?.notes || '',
  });

  // Atualiza campos dinamicamente
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  // Enviar para API Java (Spring Boot)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isEdit = !!customerData; // Se customerData existe, é edição
    const url = isEdit
      ? `http://localhost:8080/clientes/${(customerData as any).id}`
      : 'http://localhost:8080/clientes';
    const method = isEdit ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer),
      });

      if (response.ok) {
        alert(isEdit ? 'Cliente atualizado com sucesso!' : 'Cliente cadastrado com sucesso!');
        navigate('/customers');
      } else {
        alert(isEdit ? 'Erro ao atualizar cliente' : 'Erro ao cadastrar cliente');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Falha de conexão com o servidor');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Dados Pessoais</h3>
      <Input type="text" text="Nome completo" name="name" value={customer.name} handleOnChange={handleChange} />
      <Input type="text" text="Gênero" name="gender" value={customer.gender} handleOnChange={handleChange} />
      <Input type="date" text="Data de Nascimento" name="birthdate" value={customer.birthdate} handleOnChange={handleChange} />
      <Input type="text" text="CPF" name="cpf" value={customer.cpf} handleOnChange={handleChange} />

      <h3>Contato</h3>
      <Input type="email" text="E-mail" name="email" value={customer.email} handleOnChange={handleChange} />
      <Input type="text" text="Telefone" name="phone" value={customer.phone} handleOnChange={handleChange} />

      <h3>Dados de Acesso</h3>
      <Input type="password" text="Senha" name="password" value={customer.password} handleOnChange={handleChange} />
      <Input type="password" text="Confirmação de Senha" name="confirmPassword" value={customer.confirmPassword} handleOnChange={handleChange} />

      <h3>Endereço Residencial</h3>
      <Input type="text" text="Tipo de residência" name="residenceType" value={customer.residenceType} handleOnChange={handleChange} />
      <Input type="text" text="Tipo de logradouro" name="streetType" value={customer.streetType} handleOnChange={handleChange} />
      <Input type="text" text="Logradouro" name="street" value={customer.street} handleOnChange={handleChange} />
      <Input type="text" text="Número" name="number" value={customer.number} handleOnChange={handleChange} />
      <Input type="text" text="Bairro" name="neighborhood" value={customer.neighborhood} handleOnChange={handleChange} />
      <Input type="text" text="CEP" name="cep" value={customer.cep} handleOnChange={handleChange} />
      <Input type="text" text="Cidade" name="city" value={customer.city} handleOnChange={handleChange} />
      <Input type="text" text="Estado" name="state" value={customer.state} handleOnChange={handleChange} />
      <Input type="text" text="País" name="country" value={customer.country} handleOnChange={handleChange} />
      <Input type="text" text="Observações (opcional)" name="notes" value={customer.notes} handleOnChange={handleChange} />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default CustomerForm;
