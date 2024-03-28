<script>
	export let data;
	console.log(data.artists[0]);
</script>

<div class="flex flex-col w-full lg:flex-row">
	<div class="grid flex-grow card bg-base-300 rounded-box p-8">
		<div class="text-2xl font-extrabold">What is CAA Art Mart? ~★</div>
		<div class="font-bold">Details: 3/9 ・ 9am-4pm ・ UC Berkeley Upper Sproul</div>
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
			src="https://zadogzmdjzggyvvvgank.supabase.co/storage/v1/object/public/images/artmart_front.jpg?t=2024-03-05T03%3A07%3A19.700Z"
			alt="artmart"
			class="rounded-box w-10/12"
		/>
	</div>
</div>
<div class="divider"></div>
<div class="grid flex-grow card bg-base-300 rounded-box p-8">
	<div class="text-2xl font-extrabold">Who are the artists?</div>

	<div class="flex flex-row flex-wrap pt-8">
		{#each data.artists as artist}
			<div class="card w-64 bg-base-100 shadow-xl m-4">
				<figure>
					<img src={artist.image_link} alt="Shoes" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">
						{artist.artist_name}
						<div class="badge badge-secondary">NEW</div>
					</h2>
					<p>No Description</p>
					<div class="card-actions justify-end"></div>
				</div>
			</div>
		{/each}
	</div>
</div>
