<script>
	import { onMount } from 'svelte';
	import { sidebar_show, url_path } from '$lib/MenuLoad.js';
	import { page } from '$app/stores';
	import { fly, fade } from 'svelte/transition';
	import { backOut, expoInOut } from 'svelte/easing';
	let onLoad = false;

	onMount(async () => {
		setTimeout(() => (onLoad = true));
		url_path.set($page.url.pathname);
	});
</script>

{#if onLoad}
	<div class="background">
		<div
			class="container"
			in:fly={{ y: 700, duration: 1800, easing: expoInOut }}
			out:fade={{ duration: 500, easing: backOut }}
		>
			<div class="photo">
				<a
					href="
            https://soundcloud.com/itsnk/all-i-wanna-do-itsnk-x-duy-tuan-edit?si=94500f28a87c4b9fbb1110fc0a4d6495&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing
            "
				>
					<img src={'/album/alliwannadoflip.webp'} alt="All I Wanna Do (itsnk x Duy Tuan Edit)" />
					<div class="overlay">
						<div class="title">All I Wanna Do (flip)</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a
					href="https://soundcloud.com/itsnk/4x4-spring-22-edition?si=94500f28a87c4b9fbb1110fc0a4d6495&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
				>
					<img src={'/album/4x4spring2022.webp'} alt="4x4 Spring 2022 mix" />
					<div class="overlay">
						<div class="title">4x4 Spring 2022 mix</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a
					href="https://soundcloud.com/itsnk/4x4-winter-21-edition?si=94500f28a87c4b9fbb1110fc0a4d6495&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
				>
					<img src={'/album/4x4winter2021.webp'} alt="4x4 Winter 2021 mix" />
					<div class="overlay">
						<div class="title">4x4 Winter 2021 mix</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/v%C5%A9thanhv%C3%A2n/after-party">
					<img src={'/album/epcover-05.webp'} alt="After Party EP" />
					<div class="overlay">
						<div class="title">After Party EP</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/itsnk/312">
					<img src={'/album/@312 no text.webp'} alt="312 EP" />
					<div class="overlay">
						<div class="title">312 EP</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a
					href="https://soundcloud.com/itsnk/4x4-in-chicago-summer-20-edition?si=94500f28a87c4b9fbb1110fc0a4d6495&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
				>
					<img src={'/album/4x4summer2020.webp'} alt="4x4 Summer 2020 mix" />
					<div class="overlay">
						<div class="title">4x4 Summer 2020 mix</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/itsnk/dumb-me">
					<img src={'/album/DumbMe.webp'} alt="Dumb Mê - Single" />
					<div class="overlay">
						<div class="title">Dumb Mê</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/itsnk/nothing-left">
					<img src={'/album/IMG_5566.jpg'} alt="Nothing Left - Single" />
					<div class="overlay">
						<div class="title">Nothing Left</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/itsnk/i-fall">
					<img src={'/album/Ifall.webp'} alt="I Fall - Single" />
					<div class="overlay">
						<div class="title">I Fall</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/itsnk/davangjam-canvas">
					<img src={'/album/Davangjam.webp'} alt="Davangjam - Single" />
					<div class="overlay">
						<div class="title">Davangjam</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/itsnk/hello-foolish-extended-mix">
					<img src={'/album/HelloExtended.webp'} alt="Hello (Extended Mix) - Single" />
					<div class="overlay">
						<div class="title">Hello (Extended Mix)</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/itsnk/hello-foolish">
					<img src={'/album/Hello.webp'} alt="Hello - Single" />
					<div class="overlay">
						<div class="title">Hello</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/itsnk/amour">
					<img src={'/album/Amour.webp'} alt="Amour - Single" />
					<div class="overlay">
						<div class="title">Amour</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/itsnk/one-day-stand">
					<img src={'/album/onedaystand.webp'} alt="One Day Stand - Single" />
					<div class="overlay">
						<div class="title">One Day Stand</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/itsnk/thoughts">
					<img src={'/album/Thoughts.webp'} alt="Thoughts - Single" />
					<div class="overlay">
						<div class="title">Thoughts</div>
						<p class="description" />
					</div>
				</a>
			</div>
		</div>
	</div>
{/if}

<style>
	/* .background {
		width: inherit;
	} */
	.container {
		/* margin-top: 8px; */
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 8px;
	}
	img {
		-webkit-user-drag: none;
		margin: 0;
		display: block;
		max-width: 100%;
	}
	.photo {
		position: relative;
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.6);
		opacity: 0;
		transition: opacity 0.3s ease;
	}
	.overlay > * {
		transform: translateY(20px);
		transition: transform 0.3s;
	}
	.overlay:hover {
		opacity: 1;
	}
	.overlay:hover > * {
		transform: translateY(0);
	}

	.title {
		font-size: 3vw;
		font-weight: 800;
		align-self: center;
		justify-content: center;
		color: #f5f5f5;
		font-family: 'Raleway', sans-serif;
	}
</style>
