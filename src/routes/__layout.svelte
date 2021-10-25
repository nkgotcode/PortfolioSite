<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<!-- <Header /> -->

<main>
	<!-- <nav>
		<a href=".">HOME</a>
		<a href="/about">ABOUT</a>
	</nav> -->
	<slot />
</main>

<!-- <footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer> -->
<style>
	main {
		position: absolute;
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		/* max-width: 1024px; */
		margin: 0;
		box-sizing: border-box;
		background-color: #0f0f0f;
		background-image: url('/src/assets/@312 no text.png');
		background-size: cover;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
