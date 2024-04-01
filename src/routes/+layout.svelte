<script>
	import '../app.css';
	import Icon from '@iconify/svelte';
</script>

<div class="global">
	<!-- Navbar -->
	<nav class="navbar justify-between">
		<!-- Logo -->
		<a class=" btn btn-ghost font-bold text-3xl title" href="/"
			><div class="hidden lg:block">Cal Animage Alpha</div>
			<div class="sm:block md:block lg:hidden">CAA</div>
			<img class="logo" src="/bwcallogo.svg" alt="logo" /></a
		>

		<!-- Menu for mobile -->
		<div class="dropdown dropdown-end sm:hidden">
			<button class="btn btn-ghost">
				<i class="fa-solid fa-bars text-lg"><Icon icon="humbleicons:bars" /></i>
			</button>

			<ul class="dropdown-content menu z-[1] bg-base-200 p-4 rounded-box shadow w-64 gap-2">
				<li><a href="/cafe">Maid Cafe</a></li>
				<li><a href="https://issuu.com/konshuu-caa">Konshuu</a></li>
				<li><a href="artmart">Art Mart</a></li>
				<li><a href="https://cal.moe/animedestiny">Anime Destiny</a></li>
			</ul>
		</div>

		<!-- Menu for desktop -->
		<div class="hidden sm:flex gap-2">
			<a class="btn btn-ghost btn-sm" href="/cafe">
				<i class="fa-solid fa-circle-info text-secondary"></i>
				Maid Cafe
			</a>

			<a class="btn btn-ghost btn-sm" href="https://issuu.com/konshuu-caa">
				<i class="fa-solid fa-users text-secondary"></i>
				Konshuu
			</a>

			<!-- Dropdown menu -->
			<div class="dropdown dropdown-end">
				<button class="btn btn-ghost btn-sm">
					<i class="fa-solid fa-fire text-secondary"></i>
					<Icon icon="humbleicons:bars" />
					<i class="fa-solid fa-chevron-down"></i>
				</button>

				<ul class="dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2">
					<li><a href="artmart">Art Mart</a></li>
					<li><a href="https://cal.moe/animedestiny">Anime Destiny</a></li>
				</ul>
			</div>
		</div>
	</nav>

	<slot />
</div>

<footer class="footer p-10 bg-neutral text-neutral-content">
	<aside>
		<img class="logo-light" src="/bwcallogo.svg" alt="logo" />
		<p>Cal Animage Alpha<br />UC Berkeley's Anime Club since 1992</p>
	</aside>
	<nav>
		<h6 class="footer-title">Social</h6>
		<div class="grid grid-flow-col gap-4">
			<a href="/"
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
			<a href="/"
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
			<a href="/"
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
