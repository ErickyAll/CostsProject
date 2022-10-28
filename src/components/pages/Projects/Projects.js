import './style.css'
import Message from '../../layout/Message/Message'
import { useLocation } from 'react-router-dom'
import Container from '../../layout/Container/Container'
import LinkButton from '../../layout/LinkButton/LinkButton'
import { useState, useEffect } from 'react'
import ProjectCard from '../../project/ProjectCard/ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState([])

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
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
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="project_container">
      <div className="title_container">
        <h1>Meus Projetos</h1>
        <LinkButton to="/newprojects" text="Criar Projetos" />
      </div>
      {message && <Message msg={message} type="success" />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map(project => (
            <ProjectCard
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
            />
          ))}
      </Container>
    </div>
  )
}
