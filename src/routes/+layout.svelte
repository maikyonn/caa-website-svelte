<script>
	import '../app.css';
</script>

<div class="global">
	<div class="navbar">
		<div class="flex-1">
			<a class="btn btn-ghost font-bold text-3xl title" href="/"
				>Cal Animage Alpha <img class="logo" src="/bwcallogo.svg" /></a
			>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li class="hidden lg:block"><a href="/cafe">Maid Cafe</a></li>
				<li class="hidden lg:block"><a href="https://issuu.com/konshuu-caa">Konshuu</a></li>

				<li class="hidden lg:block">
					<details>
						<summary>Other Links</summary>
						<ul class="p-2 bg-base-100 rounded-t-none">
							<li><a href="artmart">Art Mart</a></li>
							<li><a href="https://cal.moe/animedestiny">Anime Destiny</a></li>
							<li><a>About</a></li>
						</ul>
					</details>
				</li>
			</ul>
		</div>
	</div>

	<slot />
</div>

<footer class="footer p-10 bg-neutral text-neutral-content">
	<aside>
		<img class="logo-light" src="/bwcallogo.svg" />
		<p>Cal Animage Alpha<br />UC Berkeley's Anime Club since 1992</p>
	</aside>
	<nav>
		<h6 class="footer-title">Social</h6>
		<div class="grid grid-flow-col gap-4">
			<a
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
					></path></svg
				></a
			>
			<a
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
					></path></svg
				></a
			>
			<a
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
					></path></svg
				></a
			>
		</div>
	</nav>

	<iframe
		src="https://discord.com/widget?id=424393596465184768&theme=dark"
		width="auto"
		height="auto"
		allowtransparency="true"
		frameborder="0"
		sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
	></iframe>
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');
	* {
		font-family: 'Figtree', sans-serif;
	}
	.global {
		/* padding-left: 1rem;
		padding-right: 1rem; */
		padding-bottom: 4rem;
	}
	.title {
		font-weight: 900;
	}
	.logo {
		height: 45px;
		width: 45px;
		display: inline-block;
		pointer-events: none;
		user-select: none;
		filter: invert(27%) sepia(35%) saturate(603%) hue-rotate(174deg) brightness(91%) contrast(86%);
	}
	.logo-light {
		height: 100px;
		width: 100px;
		display: inline-block;
		pointer-events: none;
		user-select: none;
		filter: invert(53%) sepia(20%) saturate(798%) hue-rotate(330deg) brightness(93%) contrast(90%);
	}
</style>
