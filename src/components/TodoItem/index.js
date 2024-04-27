// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, onDelete, onEdit, onSave} = props
  const {id, title, isEditable} = todoItem

  const deleteitem = () => {
    onDelete(id)
  }

  const edititem = () => {
    onEdit(id)
  }

  const saveItem = () => {
    onSave(id)
  }

  return (
    <li className="list">
      <p className="title">{title}</p>
      {isEditable ? (
        <button className="button save" onClick={saveItem} type="button">
          Save
        </button>
      ) : (
        <button className="button edit" onClick={edititem} type="button">
          Edit
        </button>
      )}
      <button className="button delete" onClick={deleteitem} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
