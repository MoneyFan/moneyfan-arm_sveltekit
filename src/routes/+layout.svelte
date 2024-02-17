<script lang="ts">
  import { onMount } from 'svelte';
  import '../app.pcss';
  // TODO: perf - перенести в "core"
  import initWorker from '$packages/sqlite-wasm/loadWorker';

  onMount(() => {
    initWorker();
  });
</script>

<svelte:head>
  <!-- NOTE: @see https://github.com/gzuidhof/coi-serviceworker -->
  <script src="coi-serviceworker.js"></script>
</svelte:head>

<slot />
