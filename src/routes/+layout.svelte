<script>
	import '../app.css';
	import {onMount} from 'svelte'
	import { page } from '$app/stores';
	const navItems = [
		{ label: 'HOME', href: '/' },
		{ label: 'MUSIC', href: '/music' },
		{ label: 'PHOTOGRAPHY', href: '/photography' },
		{ label: 'ABOUT', href: '/about' }
	];
    let hideNav = false
	let prevScrollPos
    onMount(() => {
		prevScrollPos = window.scrollY
        window.onscroll = () => {
            if (prevScrollPos > window.scrollY ) {
			// 	if (window.innerHeight + window.scrollY - document.body.clientHeight >= 0){			
			// 		hideNav = true
			// } else {
                	hideNav = false
				// }
            }
			else if (window.scrollY <= 0 && hideNav == false) {
				hideNav = false
			}
			else {
                hideNav = true
            }
			prevScrollPos = window.scrollY
        }
    })
</script>

<nav class:scrolled={hideNav}>
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
	nav {
		overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
  margin: 0;
  background-color: #000000;
  transition: 0.17s ease;
	}
	.scrolled {
        transform: translate(0,calc(800%))
    }
	ul {
		display: flex;
		list-style: none;
		justify-content: center;
	}
	li {
		margin-right: 2vw;
	}
	.navOpts:hover {
		/* font-size: 3.5vw; */
		color: rgb(179, 221, 242);
		/* border-top-width: 10px;
		border-top-style: solid; */
	}
	.active {
		color: rgb(113, 193, 233);
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
		font-size: 3vw;
		font-weight: 800;
		align-self: center;
		color: #f5f5f5;
		font-family: 'Raleway', sans-serif;
		padding-inline: 2vw;
	}
</style>
