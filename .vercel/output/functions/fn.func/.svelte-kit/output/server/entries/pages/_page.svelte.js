import { B as create_anchor, L as ensure_array_like, N as attr, I as escape, E as bind_props, F as pop, z as push } from "../../chunks/index.js";
function _page($$payload, $$props) {
  push(false);
  let data = $$props["data"];
  console.log(data.artists[0]);
  const anchor = create_anchor($$payload);
  const each_array = ensure_array_like(data.artists);
  $$payload.out += `<div class="flex flex-col w-full lg:flex-row"><div class="grid flex-grow h-64 card bg-base-300 rounded-box p-8"><div class="text-2xl font-extrabold">What is CAA Art Mart? ~:star:</div> <div class="font-bold">Time: 9am-4pm Location: Upper Sproul</div> <div>Join us at our vibrant Art Mart, where creativity meets community, offering a kaleidoscope of
			handcrafted artworks and unique artistic creations by local talents. This lively gathering is
			a perfect opportunity to support artists, find one-of-a-kind gifts, and immerse yourself in
			the local art scene.</div></div> <div class="divider lg:divider-horizontal"></div> <div class="grid flex-grow place-items-center"><img src="https://zadogzmdjzggyvvvgank.supabase.co/storage/v1/object/public/images/artmart_front.jpg?t=2024-03-05T03%3A07%3A19.700Z" alt="artmart" class="rounded-box w-10/12"></div></div> <div class="divider"></div> <div class="grid flex-grow card bg-base-300 rounded-box p-8"><div class="text-2xl font-extrabold">Who are the artists?</div> <div class="font-bold">Time: 9am-4pm Location: Upper Sproul</div> <div>Join us at our vibrant Art Mart, where creativity meets community, offering a kaleidoscope of
		handcrafted artworks and unique artistic creations by local talents. This lively gathering is a
		perfect opportunity to support artists, find one-of-a-kind gifts, and immerse yourself in the
		local art scene.</div> <div class="flex flex-row">${anchor}`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const artist = each_array[$$index];
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}<div class="card w-64 bg-base-100 shadow-xl"><figure><img${attr("src", artist.image_link, false)} alt="Shoes"></figure> <div class="card-body"><h2 class="card-title">${escape(artist.artist_name)} <div class="badge badge-secondary">NEW</div></h2> <p>No Description</p> <div class="card-actions justify-end"></div></div></div>${anchor_1}`;
  }
  $$payload.out += `${anchor}</div></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
