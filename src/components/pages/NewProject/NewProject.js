import ProjectForm from '../../project/ProjectForm/ProjectForm'
import './style.css'
import { useNavigate } from 'react-router-dom'

export default function NewProject() {
  const navigate = useNavigate()

  function createPost(project) {
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then(resp => resp.json())
      .then(data => {
        navigate('/projects', { message: 'Projeto criado com sucesso!' })
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="new_container">
      <h1>New Project</h1>
      <p>Crie seu projeto e depois adicione os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  )
}
