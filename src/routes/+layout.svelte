<script lang="ts">
	import '../styles/globals.scss';
	import LoginPage from '$lib/components/LoginPage.svelte';
	import { onAuthStateChanged } from 'firebase/auth';

	import { auth } from '$lib/firebase';

	let isSignedIn: boolean = false;

	onAuthStateChanged(auth, (user) => {
		if (user) {
			console.log('Logged in');
			isSignedIn = true;
		} else {
			console.log('Logged out');
			isSignedIn = false;
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
