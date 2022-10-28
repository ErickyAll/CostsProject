import { useState, useEffect } from 'react'

import Input from '../../form/Input/Input'
import Select from '../../form/select/Select'
import Submit from '../../form/submit/Submit'
import './style.css'

export default function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setCategories(data)
      })
      .catch(err => console.log(err))
  }, [])

  const submit = e => {
    e.preventDefault()

    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
      }
    })
  }

  return (
    <form onSubmit={submit} className="form">
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name}
      />
      <Input
        type="number"
        text="Orçamento Total"
        name="budget"
        placeholder="Insira o orçamento do projeto"
        handleOnChange={handleChange}
        value={project.budget}
      />

      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />

      <Submit text={btnText} />
    </form>
  )
}
