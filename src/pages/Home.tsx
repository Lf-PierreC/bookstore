import './Home.css'
import LinkButton from '../components/LinkButton'

function Home(){
    return (
        <section className="home_container">
            <h1>Bem-vindo a <span>Book Store</span></h1>
            <p>Compre seu livro agora mesmo!</p>
            <LinkButton to="/newproject" text="Faça a sua Compra"/>
            <img src="/images/bookstore logo.png" alt='Clinica'/>
        </section>
    )
}

export default Home