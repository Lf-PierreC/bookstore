import {Link} from 'react-router-dom'
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
                        <Link to="/appointment">Consultas</Link>
                    </li>
                    <li className="item">
                        <Link to="/contact">Contato</Link>
                    </li>
                    <li className="item">
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className="item">
                        <Link to="/newappointment">Nova Consulta</Link>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar