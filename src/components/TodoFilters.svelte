<script>
  import { filterState, changeFilter } from "../store/todoStore";
  import { FILTER_STATE } from "../constants/state";

  const filterStateList = Object.keys(FILTER_STATE);

  const handleFilterChange = ({ target: { value } }) => changeFilter(value);
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select value={filterState} on:change={handleFilterChange}>
  {#each filterStateList as state}
    <option key={state} value={FILTER_STATE[state]}>
      {FILTER_STATE[state]}
    </option>
  {/each}
</select>
