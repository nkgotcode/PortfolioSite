<!-- <script context="module">
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script> -->

<script>
	import { onMount } from 'svelte';
	import { url_path } from '$lib/MenuLoad.js';
	import { page } from '$app/stores';
	import { fly, fade } from 'svelte/transition';
	import { backOut, expoInOut } from 'svelte/easing';
	let onLoad = false;

	onMount(async () => {
		setTimeout(() => (onLoad = true));
		url_path.set($page.url.pathname);
	});
</script>

<svelte:head>
	<title>itsnk's music</title>
	<!-- <link rel="icon" href="/favicon.png" /> -->
	<meta charset="UTF-8" />
	<meta name="description" content="itsnk's music" />
</svelte:head>

{#if onLoad}
	<div class="background">
		<div
			class="container"
			in:fly={{ y: 700, duration: 1800, easing: expoInOut }}
			out:fade={{ duration: 500, easing: backOut }}
		>
		<div class="photo">
			<a
				href="https://umvn.lnk.to/vietkieu"
			>
				<img src={'/album/VK.webp'} alt="Việt Kiều - Single" />
				<div class="overlay">
					<div class="title">Việt Kiều</div>
					<p class="description" />
				</div>
			</a>
		</div>
			<div class="photo">
				<a
					href="https://songwhip.com/wrenevans/chi%E1%BB%81u-h%C3%B4m-%E1%BA%A5y-anh-th%E1%BA%A5y-m%C3%A0u-%C4%91%E1%BB%8F"
				>
					<img src={'/album/CHAATMD.webp'} alt="Chiều Hôm Ấy Anh Thấy Màu Đỏ EP" />
					<div class="overlay">
						<div class="title">Chiều Hôm Ấy Anh Thấy Màu Đỏ EP</div>
						<p class="description" />
					</div>
				</a>
			</div>
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
				<a href="https://songwhip.com/itsnk/ahh2021">
					<img src={'/album/IMG_9037-Exposure 2 2048x2048.jpg'} alt="Ahh - Single" />
					<div class="overlay">
						<div class="title">Ahh</div>
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
				<a href="https://songwhip.com/hairan/control2020">
					<img src={'/album/Control (feat. Lu & itsnk) - Single.webp'} alt="Control - Single" />
					<div class="overlay">
						<div class="title">Control</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/tsl2/l%C3%A0m-vi%E1%BB%87c">
					<img src={'/album/lamviec.webp'} alt="Làm Việc - Single" />
					<div class="overlay">
						<div class="title">Làm Việc</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/16typh/self-love">
					<img src={'/album/self love.webp'} alt="Self Love - Single" />
					<div class="overlay">
						<div class="title">Self Love</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/khoawzzzy/chuckies-cypher">
					<img src={'/album/chuckiescypher.webp'} alt="Chuckies Cypher - Single" />
					<div class="overlay">
						<div class="title">Chuckies Cypher</div>
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
				<a href="https://on.soundcloud.com/xs8g7">
					<img src={'/album/chientinhflip.webp'} alt="Chiện Tình (itsnk flip)" />
					<div class="overlay">
						<div class="title">Chiện Tình (itsnk flip)</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a
					href="https://songwhip.com/haisam/th%C3%B4i-ra-v%C6%B0%E1%BB%9Dn-n%E1%BA%B1m-cho-quen-v%E1%BB%9Bi-m%C3%B9i-%C4%91%E1%BA%A5t"
				>
					<img
						src={'/album/trvncqvmd.webp'}
						alt="Thôi ra vườn nằm cho quen với mùi đất. - Single"
					/>
					<div class="overlay">
						<div class="title">Thôi ra vườn nằm cho quen với mùi đất.</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/prettyxix2/go-home">
					<img src={'/album/gohome.webp'} alt="Go Home - Single" />
					<div class="overlay">
						<div class="title">Go Home</div>
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
				<a href="https://songwhip.com/lilwuyn/freedom-writers">
					<img src={'/album/timeline.webp'} alt="Freedom Writers - Single" />
					<div class="overlay">
						<div class="title">Freedom Writers</div>
						<p class="description" />
					</div>
				</a>
			</div>
			<div class="photo">
				<a href="https://songwhip.com/itsnk/m%E1%BB%99tfile%C3%A2mthanhnh%E1%BB%8Fmp3">
					<img src={'/album/1fileamthanhnho.webp'} alt="Một File Âm Thanh Nhỏ.mp3 - Single" />
					<div class="overlay">
						<div class="title">một file âm thanh nhỏ.mp3</div>
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
			<div class="photo">
				<a href="https://songwhip.com/itsnk/furnish2017">
					<img src={'/album/Furnish.webp'} alt="Furnish - Single" />
					<div class="overlay">
						<div class="title">Furnish</div>
						<p class="description" />
					</div>
				</a>
			</div>
		</div>
	</div>
{/if}

<style>
	.container {
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
		font-size: 20px;
		font-weight: 800;
		align-self: center;
		justify-content: center;
		font-display: swap;
		color: #f5f5f5;
		font-family: 'Raleway', sans-serif;
	}
</style>
