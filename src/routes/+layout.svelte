<script lang="ts">
	import '../styles/globals.scss';
	import LoginPage from '$lib/components/LoginPage.svelte';
	import { onAuthStateChanged, type User } from 'firebase/auth';

	import { auth } from '$lib/firebase';
	import { currentAuthUser } from '$lib/store';

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
</script>

{#if isSignedIn}
	<!-- content here -->
	<slot />
{:else}
	<LoginPage />
	<!-- else content here -->
{/if}
