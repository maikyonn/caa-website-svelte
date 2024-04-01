<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="hero min-h-full w-full">
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center py-8 w-full h-full">
		<div class="">
			<div class="flex flex-col items-center justify-center w-full">
				<h1 class="text-8xl font-bold text-secondary py-6">CAA Maid Cafe 2024</h1>
				<div class="card bg-white rounded-box p-8 bg-opacity-80">
					<div class="text-4xl font-extrabold">What is the CAA Maid Cafe? ~★</div>
					<div class="flex flex-col items-center my-8">
						<div class="w-5/6">
							<div class=" carousel w-full">
								<div id="item1" class="carousel-item w-full">
									<img
										src="https://cdn.discordapp.com/attachments/1157046777023844374/1222612058239930481/Menu_1.png?ex=6616d935&is=66046435&hm=331ccfe1c04cc6e673f51bbda25d135bdae57181152cd0b6cdb840463bbb394a&"
										class="w-full"
									/>
								</div>
								<div id="item2" class="carousel-item w-full">
									<img
										src="https://cdn.discordapp.com/attachments/1157046777023844374/1222612058898563185/Menu_2.png?ex=6616d935&is=66046435&hm=f021f84f94385315b84037e1f1996fdd0a75082a6bce182ea02f56c52b813352&"
										class="w-full"
									/>
								</div>
							</div>

							<div class="flex justify-center w-full py-2 gap-2">
								<a href="#item1" class="btn btn-xs">1</a>
								<a href="#item2" class="btn btn-xs">2</a>
							</div>
						</div>
					</div>
					<div class="font-bold">
						Details: 4/10 ・ 5-9pm ・ <a href="https://maps.app.goo.gl/iyqaErJgwmztXJHL9"
							>Uji Time Dessert (2575 Telegraph Ave, Berkeley, CA 94704)</a
						>
					</div>
					<div>
						Cal Animage Alpha’s “Maid Café” collaboration event with Uji Time Dessert, happening at
						2575 Telegraph Ave, will be going from 5pm-9pm on Wednesday, April 10th! Our CAA staff
						will dress up like maids and butlers, and serve you Uji Time's amazing soft serve ice
						cream and drinks! We'll chat, play some games, and have a great time! (By signing up to
						come to the event, you’ll be entered into a raffle with a chance to win a special gift
						card!)
					</div>
					<div class=" gap-4 my-8">
						<a
							class="btn btn-secondary text-3x1 btn-wide
							"
							href="https://docs.google.com/forms/d/e/1FAIpQLSf5UBOkuuQxYxE_-M0IP9SXh1b8GCOHCechI9-9P2Sq6VtIeg/viewform?usp=sf_link"
							>RSVP Here</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="divider"></div>

<!-- <img
	src="https://zadogzmdjzggyvvvgank.supabase.co/storage/v1/object/public/images/maid.jpeg"
	alt="artmart"
	class="rounded-box w-10/12"
/> -->

<!-- <div class="grid flex-grow card bg-base-300 rounded-box p-8">
	<div class="text-2xl font-extrabold">Who are the artists?</div>

	<div class="flex flex-row flex-wrap pt-8"></div>
</div> -->

<style>
	.hero {
		background-image: url(https://zadogzmdjzggyvvvgank.supabase.co/storage/v1/object/public/images/crop2.jpg?t=2024-03-31T23%3A43%3A11.309Z);
	}
</style>
