<script>
  import { toggleCompletion, removeTodo, selectTodo } from "../store/todoStore";

  export let todo;

  const handleToggleCompletion = () => {
    toggleCompletion(todo.id);
  };
  const handleSelectTodo = () => {
    selectTodo(todo.id);
  };
  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };
</script>

<li class="todo">
  <input
    class="todoCheckBox"
    type="checkbox"
    checked={todo.isCompleted}
    on:change={handleToggleCompletion} />
  <div class="todoTitle" on:click={handleSelectTodo}>{todo.title}</div>
  <button class="todoRemoveButton" on:click={handleRemoveTodo}> X </button>
</li>
