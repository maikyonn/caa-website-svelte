<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="hero h-full w-full">
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content py-8 w-full">
		<div class="">
			<div class="flex flex-col items-center justify-center w-full">
				<h1 class="text-4xl font-bold py-6">Upcoming Meetings</h1>
				<div class="card bg-base-300 rounded-box p-8">
					<div class="text-2xl font-extrabold">What is CAA Maid Cafe? ~★</div>
					<div class="font-bold">
						Details: 4/10 ・ 5-9pm ・ <a href="https://maps.app.goo.gl/iyqaErJgwmztXJHL9"
							>Uji Time Dessert (2575 Telegraph Ave, Berkeley, CA 94704)</a
						>
					</div>
					<div>
						{`Okaerinasaimase goshujin-sama~~~ ♡＼(￣▽￣)／♡

Welcome to Cal Animage Alpha’s maid café! I’m so happy you’re here (≧▽≦)

It would make me even happier if I got to see you all in-person 👉👈
I'll be waiting for you at Uji Time on Monday April 10 from 5-9pm, just a few blocks down telegraph from UC Berkeley campus - I’m super excited to serve you >////<

If you wanna support me and let me call you master, then purchase your tickets here: https://forms.gle/WvjqKsm1iRfGXkjMA °˖✧◝(⁰▿⁰)◜✧˖°

For only $15, you can come and play fun games with me~ And if you bring 2 more of your friends I'll give you a special deal and let you buy 3 tickets for just $40 (｡•̀ᴗ-)✧

Besides having my full attention for an hour, each ticket comes with $10 worth of really yummy Uji Time food / drinks at a discounted price! Of course, if you want even more of our super delicious desserts, my friends at Uji Time will be happy to let you purchase to your heart's content ♡(◕ᗜ◕✿)
`}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col items-center">
	<div class="w-4/6">
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

<div class="divider"></div>
<img
	src="https://zadogzmdjzggyvvvgank.supabase.co/storage/v1/object/public/images/maid.jpeg"
	alt="artmart"
	class="rounded-box w-10/12"
/>

<!-- <div class="grid flex-grow card bg-base-300 rounded-box p-8">
	<div class="text-2xl font-extrabold">Who are the artists?</div>

	<div class="flex flex-row flex-wrap pt-8"></div>
</div> -->

<style>
	.hero {
		background-image: url(https://zadogzmdjzggyvvvgank.supabase.co/storage/v1/object/public/images/classroom.jpg);
	}
</style>
