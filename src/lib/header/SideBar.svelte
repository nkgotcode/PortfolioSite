<script>
	import { slide, fly, fade } from 'svelte/transition';
	import Modal from './Modal.svelte';
	import { expoOut } from 'svelte/easing';
	import { menu, sidebar_show } from '$lib/header/MenuLoad.js';

	export let show = false;
	export let chosen;
	let modal_show = false;

	function hideMenu() {
		menu.set(false);
		sidebar_show.set(false);
	}
	function hideSideBar() {
		sidebar_show.set(false);
	}
</script>

{#if $sidebar_show}
	<!-- slide={{ delay: 100, duration: 450, easing: expoOut }} -->
	<nav transition:fade={{ delay: 50, duration: 300, easing: expoOut }}>
		<div>
			<svg
				class="closeBtn"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="50"
				height="50"
				viewBox="0 0 50 50"
				style=" fill:#f5f5f5;"
				on:click={hideSideBar}
				in:fly={{ x: 500, duration: 300, easing: expoOut }}
				out:fly={{ x: -500, duration: 250, easing: expoOut }}
			>
				<g>
					<path
						d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
					/>
				</g>
			</svg>
			<!-- <button
				on:click={() => {
					modal_show = true;
					show = false;
				}}>About</button
			> -->
		</div>
		<div>
			<a class="navOpts" href="./" on:click={hideMenu}>HOME</a>
		</div>
		<div>
			<a class="navOpts" href="/Music" on:click={hideMenu}>MUSIC</a>
		</div>
		<div>
			<a class="navOpts" href="/Photography" on:click={hideMenu}>PHOTOGRAPHY</a>
		</div>
		<div>
			<a class="navOpts" href="/about" on:click={hideMenu}>ABOUT</a>
		</div>
	</nav>
{/if}

<Modal bind:show={modal_show} />

<style>
	nav {
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		padding: 2rem 1rem 0.6rem;
		border-left: 1px solid #aaa;
		background: #fff;
		overflow-y: auto;
		width: 15rem;
		background: #181818;
		opacity: 0.8;
	}
	div {
		align-self: center;
		padding-bottom: 4em;
	}
	.closeBtn {
		position: absolute;
		top: 0;
		right: 0;
	}
	.navOpts {
		font-size: 1.5rem;
		padding-top: 1em;
		padding-bottom: 1rem;
		align-self: center;
		color: #f5f5f5;
	}
</style>
