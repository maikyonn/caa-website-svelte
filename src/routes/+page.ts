import { supabase } from '$lib/supabaseClient';

export async function load() {
	let { data: club_meetings, error } = await supabase.from('club_meetings').select('*');

	return {
		meetings_info: club_meetings
	};
}
