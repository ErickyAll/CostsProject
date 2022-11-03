import './style.css'
import loading from '../../../img/loading.svg'

export default function Loading() {
  return (
    <>
      <div className="loader_container">
        <img src={loading} className="loader" />
      </div>
    </>
  )
}
