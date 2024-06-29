import { type User } from 'firebase/auth';
import { writable } from 'svelte/store';

interface Booking {
	session_id: string;
	created: number;
	status: string;
	seat: string;
	email: string;
}

export const currentBooking = writable<Booking>();
export const currentAuthUser = writable<null | User>(null);
