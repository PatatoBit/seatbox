<script lang="ts">
	import { db } from '$lib/firebase';
	import { currentAuthUser } from '$lib/store';
	import { collection, doc, getDoc, query, updateDoc, where } from 'firebase/firestore';
	import { onMount, tick } from 'svelte';
	import { get } from 'svelte/store';

	interface Ticket {
		seat: string[];
		name: string;
		email: string;
	}

	let ticketData: Ticket;

	// Confirming data
	onMount(async () => {
		const userId = get(currentAuthUser)?.uid;
		const docRef = doc(collection(db, 'bookings'), userId);
		await updateDoc(doc(collection(db, 'bookings'), userId), {
			status: 'confirmed',
			createdAt: new Date()
		});

		const docSnap = await getDoc(docRef);

		console.table(docSnap.data());
		ticketData = {
			seat: docSnap.data()?.seat,
			name: docSnap.data()?.name,
			email: docSnap.data()?.email
		};
	});
</script>

<h3>Success</h3>
