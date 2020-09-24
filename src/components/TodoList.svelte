<script>
  import Todo from "./Todo.svelte";
  import { todoList, filteredTodoList } from "../store/todoStore";
  import TodoFilters from "./TodoFilters.svelte";
</script>

<div class="todoList">
  {#if $todoList.length}
    <TodoFilters />
  {/if}
  <ul class="listContainer">
    {#each $filteredTodoList as todo (todo.id)}
      <Todo {todo} />
    {/each}
  </ul>
</div>
