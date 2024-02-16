<script lang="ts">
  import { onMount } from 'svelte';
  import '../app.pcss';
  // TODO: perf - перенести в "core"
  import initWorker from '$packages/sqlite-wasm/loadWorker';

  onMount(() => {
    initWorker();
  });
</script>

<slot />
