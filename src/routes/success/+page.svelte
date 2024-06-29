<script lang="ts">
	import { db } from '$lib/firebase';
	import { currentBooking } from '$lib/store';
	import { redirect } from '@sveltejs/kit';
	import { addDoc, collection } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	onMount(async () => {
		if (get(currentBooking)) {
			await addDoc(collection(db, 'bookings'), get(currentBooking));
			await console.log('Booking uploaded', get(currentBooking));
			await currentBooking.set(null);
			redirect(300, '/');
		} else {
			console.log('No booking data found');
		}
	});
</script>

<h3>Success</h3>
