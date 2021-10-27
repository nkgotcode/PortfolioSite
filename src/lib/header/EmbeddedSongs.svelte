<script>
	import { draw, fade, blur, fly } from 'svelte/transition';
	import { expoOut, backInOut, backOut, backIn, quartInOut } from 'svelte/easing';
</script>

<div>
	<iframe
		id="frame1"
		title="songlink"
		width="100%"
		height="300"
		src="https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2Fs%2F6NwFdYltkzDioP3bKa3otB&theme=dark"
		frameborder="0"
		allowfullscreen
		sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
		allow="clipboard-read; clipboard-write"
		in:fly={{ y: 1000, duration: 2000, easing: quartInOut }}
		out:fade={{ duration: 500 }}
	/>
</div>
<div>
	<iframe
		id="frame2"
		title="songlink"
		width="100%"
		height="200"
		src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Fs%2F0TSX3ibES7sa3LvnKGkfn9&theme=dark"
		frameborder="0"
		allowfullscreen
		sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
		allow="clipboard-read; clipboard-write"
		in:fly={{ y: 1000, duration: 2000, easing: quartInOut }}
		out:fade={{ duration: 500 }}
	/>
	<iframe
		id="frame3"
		title="songlink"
		width="100%"
		height="150"
		src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Fs%2F3MnCQIN8wjEkRkXOerOdXb&theme=dark"
		frameborder="0"
		allowfullscreen
		sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
		allow="clipboard-read; clipboard-write"
		in:fly={{ y: 1000, duration: 2000, easing: quartInOut }}
		out:fade={{ duration: 500 }}
	/>
	<iframe
		id="frame4"
		title="soundcloudlink"
		width="100%"
		height="600"
		scrolling="no"
		frameborder="no"
		allow="autoplay"
		in:fly={{ y: 1000, duration: 2000, easing: quartInOut }}
		out:fade={{ duration: 500 }}
		src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/968321977&color=%23080604&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
	/>
	<iframe
		id="frame5"
		title="soundcloudlink"
		width="100%"
		height="450"
		scrolling="no"
		frameborder="no"
		allow="autoplay"
		in:fly={{ y: 1000, duration: 2000, easing: quartInOut }}
		out:fade={{ duration: 500 }}
		src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1144675411&color=%23080604&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
	/>
	<iframe
		id="frame6"
		title="soundcloudlink"
		width="100%"
		height="450"
		scrolling="no"
		frameborder="no"
		allow="autoplay"
		in:fly={{ y: 1000, duration: 2000, easing: quartInOut }}
		out:fade={{ duration: 500 }}
		src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/794843016&color=%23101513&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"
	/>
</div>

<style>
	iframe {
		opacity: 0.92;
	}
</style>
