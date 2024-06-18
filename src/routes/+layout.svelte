<script lang="ts">
	import { onAuthStateChanged } from 'firebase/auth';
	import LoginPage from '$lib/components/loginPage.svelte';

	import { auth } from '$lib/firebase';
	import '../styles/globals.scss';

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
