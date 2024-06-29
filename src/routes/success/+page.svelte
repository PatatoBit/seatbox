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
		createdAt: Date;
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

		ticketData = {
			seat: docSnap.data()?.seat,
			name: docSnap.data()?.name,
			email: docSnap.data()?.email,
			createdAt: docSnap.data()?.createdAt
		};

		console.table(ticketData);
	});
</script>

<h3>Success</h3>

{#if ticketData}
	<!-- content here -->
	<p>Thank you for booking your ticket. Your ticket details are as follows:</p>
	<ul>
		<li>Name: {ticketData.name}</li>
		<li>Email: {ticketData.email}</li>
		<li>Seat: {ticketData.seat}</li>
		<li>Booking Date: {ticketData.createdAt.toLocaleDateString}</li>
	</ul>
{/if}
