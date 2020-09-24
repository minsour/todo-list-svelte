import { derived, writable } from 'svelte/store'
import { FILTER_STATE } from '../../constants/state'

export const todoList = writable([])
export const selectedTodo = writable(null)
export const filterState = writable(FILTER_STATE.SHOW_ALL)
export const filteredTodoList = derived(
  [todoList, filterState],
  ([$todoList, $filterState]) => {
    if ($filterState === FILTER_STATE.COMPLETED) {
      return $todoList.filter(item => item.isCompleted)
    } else if ($filterState === FILTER_STATE.UNCOMPLETED) {
      return $todoList.filter(item => !item.isCompleted)
    }

    return $todoList
  }
)
export const editInputValue = writable({
  title: '',
  description: ''
})
