import { supabase } from '$lib/supabaseClient';
import moment from 'moment';

export async function load() {
	let { data: club_meetings, error } = await supabase.from('club_meetings').select('*');

	for (const meeting of club_meetings) {
		club_meetings[club_meetings.indexOf(meeting)].timeTillNow = moment(meeting.time).diff(moment());
		club_meetings[club_meetings.indexOf(meeting)].time = moment(meeting.time).format(
			'dddd, MMMM Do, ha'
		);
	}

	club_meetings = club_meetings
		?.sort((a, b) => a.timeTillNow - b.timeTillNow)
		.filter((meeting) => meeting.timeTillNow > -86483193);

	return {
		meetings_info: club_meetings
	};
}
