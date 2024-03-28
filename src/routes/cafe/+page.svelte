<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col w-full lg:flex-row">
	<div class="grid flex-grow card bg-base-300 rounded-box p-8">
		<div class="text-2xl font-extrabold">What is CAA Maid Cafe? ~★</div>
		<div class="font-bold">
			Details: 4/10 ・ 5-9pm ・ <a href="https://maps.app.goo.gl/iyqaErJgwmztXJHL9"
				>Uji Time Dessert (2575 Telegraph Ave, Berkeley, CA 94704)</a
			>
		</div>
		<div>
			Join us at our vibrant Art Mart, where creativity meets community, offering a kaleidoscope of
			handcrafted artworks and unique artistic creations by local talents. This lively gathering is
			a perfect opportunity to support artists, find one-of-a-kind gifts, and immerse yourself in
			the local art scene.
		</div>
	</div>

	<div class="divider lg:divider-horizontal"></div>
	<div class="grid flex-grow place-items-center">
		<img
			src="https://zadogzmdjzggyvvvgank.supabase.co/storage/v1/object/public/images/maid.jpeg"
			alt="artmart"
			class="rounded-box w-10/12"
		/>
	</div>
</div>
<div class="divider"></div>
<div class="grid flex-grow card bg-base-300 rounded-box p-8">
	<div class="text-2xl font-extrabold">Who are the artists?</div>

	<div class="flex flex-row flex-wrap pt-8"></div>
</div>
