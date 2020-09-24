<script>
  import { addTodo } from "../store/todoStore";

  let title = "";
  let description = "";

  const handleAdd = () => {
    addTodo(title, description);
    title = "";
    description = "";
  };
</script>

<div class="inputContainer">
  <p class="inputWrapper">
    <label for="input">Title</label>
    <input
      class="input"
      type="text"
      bind:value={title}
      placeholder="Title..." />
  </p>
  <p class="inputWrapper">
    <label for="input">Description</label>
    <textarea
      class="input"
      type="text"
      bind:value={description}
      placeholder="Description..."
      rows="3" />
  </p>
  <button class="addButton" on:click={handleAdd}> Add </button>
</div>
