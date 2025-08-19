import Input from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';
import './CustomerForm.css';

interface CustomerFormProps {
  btnText: string;
}

function CustomerForm({ btnText }: CustomerFormProps) {
  return (
    <form className="form">
      {/* Dados Pessoais */}
      <h3>Dados Pessoais</h3>
      <Input type="text" text="Nome completo" name="name" />
      <Input type="text" text="Gênero" name="gender" />
      <Input type="date" text="Data de Nascimento" name="birthdate" />
      <Input type="text" text="CPF" name="cpf" />

      {/* Contato */}
      <h3>Contato</h3>
      <Input type="email" text="E-mail" name="email" />
      <Input type="text" text="Telefone (DDD + número)" name="phone" />

      {/* Acesso */}
      <h3>Dados de Acesso</h3>
      <Input type="password" text="Senha" name="password" />
      <Input type="password" text="Confirmação de Senha" name="confirmPassword" />

      {/* Endereço Residencial */}
      <h3>Endereço Residencial</h3>
      <Input type="text" text="Tipo de residência (Casa, Apartamento...)" name="residenceType" />
      <Input type="text" text="Tipo de logradouro (Rua, Av...)" name="streetType" />
      <Input type="text" text="Logradouro" name="street" />
      <Input type="text" text="Número" name="number" />
      <Input type="text" text="Bairro" name="neighborhood" />
      <Input type="text" text="CEP" name="cep" />
      <Input type="text" text="Cidade" name="city" />
      <Input type="text" text="Estado" name="state" />
      <Input type="text" text="País" name="country" />
      <Input type="text" text="Observações (opcional)" name="notes" />

      <SubmitButton text={btnText} to="/customers"/>
    </form>
  );
}

export default CustomerForm;
