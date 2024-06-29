<script lang="ts">
	import { db } from '$lib/firebase';
	import { currentAuthUser } from '$lib/store';
	import { collection, doc, query, updateDoc, where } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	// Confirming data
	onMount(async () => {
		const user = get(currentAuthUser)?.uid;
		await updateDoc(doc(collection(db, 'bookings'), user), {
			status: 'confirmed'
		});
	});
</script>

<h3>Success</h3>
