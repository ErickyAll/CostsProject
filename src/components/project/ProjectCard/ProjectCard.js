import './style.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function ProjectCard({
  id,
  name,
  budget,
  category,
  handleRemove
}) {
  const remove = e => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className="project_card">
      <h4>{name}</h4>

      <p>
        <span>Budget:</span> R${budget}
      </p>

      <p className="category_text">
        <span className={category.toLowerCase()}></span> {category}
      </p>
      <div className="project_card_actions">
        <Link to={`/project/${id}`}>
          <BsPencil /> Edit
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Remove
        </button>
      </div>
    </div>
  )
}
