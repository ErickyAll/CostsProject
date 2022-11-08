import './style.css'
import Message from '../../layout/Message/Message'
import { useLocation } from 'react-router-dom'
import Container from '../../layout/Container/Container'
import LinkButton from '../../layout/LinkButton/LinkButton'
import { useState, useEffect } from 'react'
import ProjectCard from '../../project/ProjectCard/ProjectCard'
import Loading from '../../layout/Loading/Loading'

export default function Projects() {
  const [remLoad, setRemLoad] = useState(false)
  const [projects, setProjects] = useState([])

  const [pMessage, setPMessage] = useState('')

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
          setProjects(data)
          setRemLoad(true)
        })
        .catch(err => console.log(err))
    }, 300)
  }, [])

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    })
      .then(resp => resp.json())
      .then(data => {
        setProjects(projects.filter(project => project.id !== id))
        setPMessage('Remove project: Sucess!')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="project_container">
      <div className="title_container">
        <h1>Meus Projetos</h1>
        <LinkButton to="/newprojects" text="Criar Projetos" />
      </div>
      {message && <Message msg={message} type="success" />}
      {pMessage && <Message msg={pMessage} type="success" />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map(project => (
            <ProjectCard
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!remLoad && <Loading />}
        {remLoad && projects.length === 0 && <p>Não há projetos cadastrados</p>}
      </Container>
    </div>
  )
}
