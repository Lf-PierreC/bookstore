import {Link} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
                <Link to="/">
                    <img src="/images/bookstore logo branca.png" alt='BooksStore' width='100px'/>
                </Link>
                <ul className="list">
                    <li className="item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="item">
                        <Link to="/store">Loja</Link>
                    </li>
                    <li className="item">
                        <Link to="/books">Livros</Link>
                    </li>
                    <li className="item">
                        <Link to="/customers">Cadastros</Link>
                    </li>
                    <li className="item">
                        <Link to="/stocks">Estoque</Link>
                    </li>
                    <li>
                        <Link to="/checkout" className="cart_link">
                            <FaShoppingCart size={20} style={{ marginRight: "6px" }} />
                            Carrinho
                        </Link>
                    </li>

                </ul>
        </nav>
    )
}

export default Navbar