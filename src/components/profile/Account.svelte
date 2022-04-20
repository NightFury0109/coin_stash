<script>
  import { fly } from "svelte/transition";
</script>

<div transition:fly={{ duration: 500, x: 300 }}>
  <h1>Account</h1>
</div>
