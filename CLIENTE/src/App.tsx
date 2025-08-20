import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Customer from './pages/Customer';
import Home from './pages/Home';
import NewCustomer from './pages/NewCustomer';
import EditCustomer from './pages/EditCustomer';
import Books from './pages/Book';
import NewBook from './pages/NewBook';
import EditBook from './pages/EditBook';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/customers/new" element={<NewCustomer />} />
        <Route path="/customers/:id/edit" element={<EditCustomer />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/new" element={<NewBook />} />
        <Route path="/books/:id/edit" element={<EditBook />} />
      </Routes>
    </>
  );
}

export default App;
