import {Component} from 'react'
import {v4} from 'uuid'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isEditable: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isEditable: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isEditable: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isEditable: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isEditable: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isEditable: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isEditable: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isEditable: false,
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, inputValue: ''}

  ondelete = id => {
    const {todoList} = this.state
    const UpdatedTodo = todoList.filter(each => each.id !== id)
    this.setState({todoList: UpdatedTodo})
  }

  addItem = () => {
    const {inputValue} = this.state
    const newitem = {
      id: v4(),
      title: inputValue,
      isEditable: false,
    }

    this.setState(prev => ({
      todoList: [...prev.todoList, newitem],
      inputValue: '',
    }))
  }

  onEdit = id => {
    const index = this.state.todoList.findIndex(todo => todo.id === id)
    console.log(id)
    this.setState({inputValue: this.state.todoList[index].title})
    if (index !== -1) {
      const updatedTodosList = [...this.state.todoList]
      updatedTodosList[index] = {
        ...updatedTodosList[index],
        isEditable: !updatedTodosList[index].isEditable,
      }
      this.setState({
        todoList: updatedTodosList,
      })
    }
  }

  onSave = id => {
    const {inputValue} = this.state
    console.log(inputValue)
    const index = this.state.todoList.findIndex(todo => todo.id === id)
    if (index !== -1) {
      const updatedTodosList = [...this.state.todoList]
      updatedTodosList[index] = {
        ...updatedTodosList[index],
        isEditable: !updatedTodosList[index].isEditable,
        title: inputValue,
      }
      this.setState({
        todoList: updatedTodosList,
        inputValue: '',
      })
    }
  }

  updateInput = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {todoList, inputValue} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Simple Todos</h1>
          <div className="input-container">
            <input
              value={inputValue}
              onChange={this.updateInput}
              placeholder="Add Todo Item"
            />
            <button type="button" onClick={this.addItem}>
              Add
            </button>
          </div>

          <ul>
            {todoList.map(eachItem => (
              <TodoItem
                todoItem={eachItem}
                key={eachItem.id}
                onDelete={this.ondelete}
                onSave={this.onSave}
                onEdit={this.onEdit}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
