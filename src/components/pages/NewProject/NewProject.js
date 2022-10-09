import ProjectForm from '../../project/ProjectForm/ProjectForm'
import './style.css'

export default function NewProject() {
  return (
    <div className="new_container">
      <h1>New Project</h1>
      <p>Crie seu projeto e depois adicione os serviços</p>
      <ProjectForm btnText="Criar Projeto" />
    </div>
  )
}
