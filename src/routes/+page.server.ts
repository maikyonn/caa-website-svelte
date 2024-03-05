import { supabase } from '$lib/supabaseClient';

export async function load() {
	let { data: ArtMartArtists, error } = await supabase.from('ArtMartArtists').select('*');

	return {
		artists: ArtMartArtists
	};
}
