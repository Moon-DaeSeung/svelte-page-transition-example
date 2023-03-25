<script lang="ts">
	import { page } from '$app/stores';
	import { heroIn, heroOut } from '$lib/hero';
	import Transition from '$lib/Transition.svelte';
	const color = $page.params.color;
</script>

<Transition>
	<div class="container">
		<div
			in:heroIn={{ key: color }}
			out:heroOut={{ key: color }}
			class="box"
			style="background-color: {color};"
		>
			<a href="/heros"> Back </a>
		</div>
	</div>
</Transition>

<style>
	.box {
		display: flex;
		font-size: 100px;
		justify-content: center;
		align-items: center;
		width: 400px;
		height: 400px;
	}

	a {
		color: white;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding-top: 100px;
	}
</style>
