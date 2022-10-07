import './style.css'
import savings from '../../../img/savings.svg'
import LinkButton from '../../layout/LinkButton/LinkButton'

export default function Home() {
  return (
    <section className="home_container">
      <h1>
        Bem-vindo ao <span>Costs</span>
      </h1>
      <p>Comce a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt="Costs" />
    </section>
  )
}
