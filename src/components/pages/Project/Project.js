import './style.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../../layout/Loading/Loading'
import Container from '../../layout/Container/Container'

export default function Project() {
  const { id } = useParams()
  const [project, setProject] = useState([])
  const [showPForm, setShowPForm] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(resp => resp.json())
        .then(data => {
          setProject(data)
        })
        .catch(err => console.log(err))
    }, 5000)
  }, [id])

  function toggleprojectForm() {
    setShowPForm(!showPForm)
  }

  return (
    <>
      {project.name ? (
        <div>
          <Container customClass="column">
            <div>
              <h1>Projeto: {project.name}</h1>
              <button onClick={toggleprojectForm}>
                {!showPForm ? 'Edit Project' : 'Close'}
              </button>
              {!showPForm ? (
                <div>
                  <p>
                    <span>Category: </span> {project.category.name}
                  </p>
                  <p>
                    <span>Total Orçamento:</span>R${project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado:</span>R${project.cost}
                  </p>
                </div>
              ) : (
                <div>details</div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
