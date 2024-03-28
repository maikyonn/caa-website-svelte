<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Icon from '@iconify/svelte';

	export let data;
	console.log(data.meetings_info[0]);
</script>

<div class="flex justify-center my-8">
	<div class="flex flex-col items-center text-center gap-6 max-w-6xl mx-8">
		<!-- Card -->
		<img
			class=" rounded-box h-96 w-7xl"
			src="https://zadogzmdjzggyvvvgank.supabase.co/storage/v1/object/public/images/artmart_pic.jpg?t=2024-03-27T23%3A37%3A37.695Z"
			alt="artmart"
		/>

		<h1 class="font-bold text-5xl">
			Introducing UC Berkeley's
			<span class="text-accent">Anime Club</span>
		</h1>

		<span class="w-3xl">
			Established in 1992, Cal Animage (Anime, Manga, Games), is UC Berkeley's hub for anime and
			manga fans! We host weekly anime showings, game nights, and other socials to bring together
			the diverse anime community of UC Berkeley.
		</span>

		<div class="flex gap-4 mb-8">
			<a class="btn btn-secondary" href="https://discord.gg/89m6XgqcDu">Join our Discord </a>
		</div>
		<div class="divider"></div>
	</div>
</div>

<div class="hero h-full w-full">
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content py-8 w-full">
		<div class="">
			<div class="flex flex-col items-center justify-center w-full">
				<h1 class="text-4xl font-bold py-6">Upcoming Meetings</h1>
				<Splide
					aria-label="My Favorite Images"
					options={{
						type: 'slide',
						padding: '5%',
						heightRatio: 0.4,
						perPage: 3,
						width: '90vw',
						gap: '2rem',

						breakpoints: {
							640: {
								perPage: 1,
								padding: 0,
								heightRatio: 0.9,
								width: '90vw'
							},
							1024: {
								perPage: 2,
								padding: 0,
								heightRatio: 0.4,
								width: '90vw'
							}
						}
					}}
				>
					{#each data.meetings_info as meeting}
						<SplideSlide>
							<div class="flex flex-col h-full">
								<!-- Image -->
								<img class="rounded-t-box h-36 grow-0" src={meeting.image} alt="artmart" />

								<!-- Status -->
								<div class="grow">
									<div
										class="flex items-center gap-2 bg-neutral text-neutral-content py-4 px-4 font-bold text-lg"
									>
										<Icon icon="subway:location" />
										{meeting.location}
										<Icon icon="eva:clock-outline" />
										{new Date(meeting.time).getMonth() + 1}/{new Date(meeting.time).getDate()}
										{new Date(meeting.time).getHours() % 12}PM
									</div>

									<!-- Content -->
									<div class="flex flex-col gap-1 bg-base-200 p-4 h-4/6 rounded-b-box">
										<h1 class="font-bold text-xl text-neutral">{meeting.title}</h1>

										<span class="text-neutral-400">
											{meeting.description}
										</span>
									</div>
								</div>
							</div>
						</SplideSlide>
					{/each}
				</Splide>
			</div>
		</div>
	</div>
</div>

<div class="divider"></div>
<div class="flex flex-col items-center gap-10 p-6">
	<h1 class="text-3xl font-bold">
		<i class="fa-solid fa-circle-question text-primary"></i>
		Frequently Asked Questions
	</h1>

	<!-- Questions -->
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
		<!-- Question -->
		<div class="flex flex-col gap-2">
			<h2 class="font-medium text-lg italic text-secondary">When are the meetings?</h2>

			<span>
				Typically there are showings on Tuesdays and activities/games on Thursdays! For more
				information, please check out our Discord server.
			</span>
		</div>

		<!-- Question -->
		<div class="flex flex-col gap-2">
			<h2 class="font-medium text-lg italic text-secondary">
				How do I join the club? How do I become an officer?
			</h2>

			<span>
				Anyone can participate in club activities and all announced events will be open to the
				public! If you're interested in becoming an officer, involving yourself with the
				behind-the-scenes work, applications open at the beginning of every semester! For more
				information, join our discord!
			</span>
		</div>

		<!-- Question -->
		<div class="flex flex-col">
			<h2 class="font-medium text-lg italic text-secondary">
				Is this the club for me if I don't watch anime, and instead read manga (and manhwa, manhua,
				etc),
			</h2>

			<span>
				Yes! There are certainly a few members in our club who primarily consume non-anime, but
				related content, such as visual novels, gacha games, webtoons, etc!
			</span>
		</div>
	</div>
</div>

<style>
	card-img {
		max-height: 200px;
		width: 100%;
	}
	.hero {
		background-image: url(https://zadogzmdjzggyvvvgank.supabase.co/storage/v1/object/public/images/classroom.jpg);
	}
</style>
