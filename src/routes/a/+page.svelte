<script lang="ts">
	import Transition from '$lib/Transition.svelte';
</script>

<Transition>
	<div class="font container">A</div>
</Transition>

<style>
	.font {
		font-size: 200px;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: green;
		height: 100vh;
	}
</style>
