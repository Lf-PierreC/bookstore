import './App.css';
import Navbar from './components/Navbar';
import Customer from './pages/Customer';
import Home from './pages/Home';
import {Routes, Route } from 'react-router-dom';
import NewCustomer from './pages/NewCustomer';
import EditCustomer from './pages/EditCustomer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customer/>} />
        <Route path="/newcustomers" element={<NewCustomer/>} />
        <Route path="/editcustomers" element={<EditCustomer />} />
      </Routes>
    </>
  );
}

export default App;
