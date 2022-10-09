import './style.css'

export default function Select({ text, name, option, handleOnChange, value }) {
  return (
    <div className="form_control">
      <label htmlFor={name}>{text}:</label>
      <select id={name} name={name} onChange={handleOnChange} value={value}>
        <option>Selecione uma opção</option>
      </select>
    </div>
  )
}
