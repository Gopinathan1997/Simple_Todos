// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, onDelete} = props
  const {id, title} = todoItem

  const deleteitem = () => {
    onDelete(id)
  }
  return (
    <li className="list">
      <p className="title">{title}</p>
      <button className="button" onClick={deleteitem} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
