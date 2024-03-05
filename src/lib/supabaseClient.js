import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://zadogzmdjzggyvvvgank.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphZG9nem1kanpnZ3l2dnZnYW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2MDQ3MTAsImV4cCI6MjAyNTE4MDcxMH0.820afU_y0Z1C8k5nZdhd9gekxO7ODaapZSXNPGt463k'
);
