<script>
	import '../app.css';
	import { page } from '$app/stores';
	const navItems = [
		{ label: 'HOME', href: '/' },
		{ label: 'MUSIC', href: '/music' },
		{ label: 'PHOTOGRAPHY', href: '/photography' },
		{ label: 'ABOUT', href: '/about' }
	];
</script>

<nav>
	<ul>
		{#each navItems as item}
			<div>
				<li class:active={$page.url.pathname == item.href}>
					<a class="navOpts" href={item.href}>{item.label}</a>
				</li>
			</div>
		{/each}
	</ul>
</nav>

<main>
	<slot />
</main>

<style>
	@font-face {
		font-family: 'Raleway';
		font-style: normal;
		font-weight: 200;
		font-display: swap;
		src: url('/fonts/Raleway-ExtraLight.ttf') format('truetype'); /* IE9 Compat Modes */
	}
	main {
		position: absolute;
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		margin: 0;
		box-sizing: border-box;
		background-color: #000000;
	}
	ul {
		display: flex;
		list-style: none;
		justify-content: left;
	}
	li {
		margin-right: 2vw;
	}
	.navOpts:hover {
		/* font-size: 3.5vw; */
		color: rgb(179, 221, 242);
		border-top-width: 10px;
		border-top-style: solid;
	}
	.active {
		color: rgb(179, 221, 242);
		text-decoration: underline;
	}
	:global(body) {
		background-color: #000000;
	}
	::-webkit-scrollbar {
		display: none;
	}
	.navOpts {
		text-decoration: none;
		transition-property: font-size, color;
		transition-duration: 0.3s;
		font-size: 4vw;
		font-weight: 800;
		align-self: center;
		color: #f5f5f5;
		font-family: 'Raleway', sans-serif;
	}
</style>
