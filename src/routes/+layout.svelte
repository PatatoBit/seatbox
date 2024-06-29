<script lang="ts">
	import '../styles/globals.scss';
	import LoginPage from '$lib/components/LoginPage.svelte';
	import { onAuthStateChanged, type User } from 'firebase/auth';

	import { auth } from '$lib/firebase';
	import { currentAuthUser, currentBooking } from '$lib/store';

	let isSignedIn: boolean = false;

	onAuthStateChanged(auth, (user) => {
		if (user) {
			currentAuthUser.set(user);
			isSignedIn = true;
			console.log('User detected:', user);
		} else {
			currentAuthUser.set(null);
			isSignedIn = false;
			console.log('No user detected');
		}
	});

	currentBooking.subscribe((booking) => {
		if (booking) {
			console.log('Booking detected:', booking);
		} else {
			console.log('No booking detected');
		}
	});
</script>

{#if isSignedIn}
	<slot />
{:else}
	<LoginPage />
{/if}
