import { type User } from 'firebase/auth';
import { writable } from 'svelte/store';

export const currentAuthUser = writable<null | User>(null);
