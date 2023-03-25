import { crossfade } from 'svelte/transition';

export const [heroIn, heroOut] = crossfade({
	duration: 600,
	fallback() {
		return {
			duration: 0,
			css: () => ``
		};
	}
});
