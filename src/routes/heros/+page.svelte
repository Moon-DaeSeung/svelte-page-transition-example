<script lang="ts">
	import { heroIn, heroOut } from '$lib/hero';
	import Transition from '$lib/Transition.svelte';

	const colors = ['red', 'green', 'blue', 'coral', 'orange', 'black'];
</script>

<Transition >
	<div class="container">
		{#each colors as color}
			<a
				href="/heros/{color}"
				style="background-color: {color};"
				class="box"
				in:heroIn={{ key: color }}
				out:heroOut={{ key: color }}
			>
				{color}
			</a>
		{/each}
	</div>
</Transition>

<style>
	.box {
		width: 150px;
		height: 150px;
	}

	.container {
		padding: 100px;
		height: 600px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		justify-items: center;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		color: white;
	}
</style>
