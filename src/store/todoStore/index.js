import {
  todoList,
  selectedTodo,
  filterState,
  filteredTodoList,
  editInputValue
} from './state'

let id = 0

const addTodo = (title, description) =>
  todoList.update(list => {
    const newList = [...list]

    const newTodo = {
      id: ++id,
      title,
      description,
      isCompleted: false
    }

    return [...newList, newTodo]
  })

const changeFilter = value => filterState.set(value)

export {
  todoList,
  selectedTodo,
  filterState,
  filteredTodoList,
  editInputValue,
  addTodo,
  changeFilter
}
