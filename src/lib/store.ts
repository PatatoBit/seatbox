import { type User } from 'firebase/auth';
import { writable } from 'svelte/store';
import { persisted } from 'svelte-persisted-store';

interface Booking {
	session_id: string;
	created: number;
	status: string;
	seat: string;
}

export const currentBooking = persisted<Booking | null>('currentBooking', null);
export const currentAuthUser = writable<null | User>(null);
