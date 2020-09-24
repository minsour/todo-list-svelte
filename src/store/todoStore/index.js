import { get } from 'svelte/store'
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

const toggleCompletion = id =>
  todoList.update(list => {
    const newList = [...list]
    const index = newList.findIndex(todo => todo.id === id)

    newList[index].isCompleted = !newList[index].isCompleted

    return newList
  })

const removeTodo = id =>
  todoList.update(list => {
    const index = list.findIndex(todo => todo.id === id)

    const newList = [...list.slice(0, index), ...list.slice(index + 1)]

    return newList
  })

const selectTodo = id => {
  const list = get(todoList)
  const index = list.findIndex(todo => todo.id === id)

  selectedTodo.set(list[index])

  editInputValue.set({
    title: list[index].title,
    description: list[index].description
  })
}

export {
  todoList,
  selectedTodo,
  filterState,
  filteredTodoList,
  editInputValue,
  addTodo,
  changeFilter,
  toggleCompletion,
  removeTodo,
  selectTodo
}
