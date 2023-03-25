<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const isPageTransitionDisabled = writable(true);
	setContext('transition-disabled', isPageTransitionDisabled);

	beforeNavigate(({ from, to }) => {
		if (from == null || to == null) return;

		// hero 에니메이션 동작할때는 트랜지션 적용하지 않음
		if (from.url.pathname.includes('heros') && to.url.pathname.includes('heros')) {
			isPageTransitionDisabled.set(true);
		} else {
			isPageTransitionDisabled.set(false);
		}
	});
</script>

<header>
	<a href="/">/</a>
	<a href="/a">a</a>
	<a href="/b">b</a>
	<a href="/heros">heros</a>
</header>
<div>
	current path: {$page.url.pathname}
</div>
<div class="transition-root">
	<slot />
</div>

<style>
	.transition-root {
		position: relative;
		overflow: hidden;
	}

	header {
		display: flex;
		font-size: 24px;
		gap: 8px;
	}
</style>
