<script>
  import { editTodo, selectedTodo, editInputValue } from "../store/todoStore";

  const handleEdit = () => {
    editTodo(
      $selectedTodo.id,
      $editInputValue.title,
      $editInputValue.description
    );
  };
</script>

{#if $selectedTodo}
  <div class="editContainer">
    <p class="inputWrapper">
      <label for="input">Title</label>
      <input
        class="input"
        type="text"
        bind:value={$editInputValue.title}
        placeholder="Title..." />
    </p>
    <p class="inputWrapper">
      <label for="input">Description</label>
      <textarea
        class="input"
        type="text"
        bind:value={$editInputValue.description}
        placeholder="Description..."
        rows="3" />
    </p>
    <button class="editButton" on:click={handleEdit}> Edit </button>
  </div>
{/if}
