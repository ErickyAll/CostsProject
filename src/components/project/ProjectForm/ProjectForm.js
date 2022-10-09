import Input from '../../form/Input/Input'
import Select from '../../form/select/Select'
import Submit from '../../form/submit/Submit'
import './style.css'

export default function ProjectForm({ btnText }) {
  return (
    <form className="form">
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento Total"
        name="budget"
        placeholder="Insira o orçamento do projeto"
      />

      <Select name="category_id" text="Selecione a categoria" />

      <Submit text={btnText} />
    </form>
  )
}
