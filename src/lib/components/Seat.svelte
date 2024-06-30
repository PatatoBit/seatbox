<script lang="ts">
	import { db } from '$lib/firebase';
	import { collection, getDocs, query, QuerySnapshot, where } from 'firebase/firestore';
	import { onMount } from 'svelte';

	export let seatPosition: string;
	export let seats: string[];

	let isEmpty: boolean = false;

	function addOrRemove(seat: string) {
		if (seats.includes(seat) || !isEmpty) {
			seats = seats.filter((s) => s !== seat);
		} else {
			if (seats.length > 0) return;
			seats.push(seat);
			seats = seats;
		}
	}

	onMount(async () => {
		const bookingsRef = collection(db, 'bookings');
		const seatQuery = query(bookingsRef, where('seat', 'array-contains', seatPosition));

		await getDocs(seatQuery).then((snapshot) => (isEmpty = snapshot.empty));
	});
</script>

<button class="seat" on:click={() => addOrRemove(seatPosition)}>
	{#if seats.includes(seatPosition)}
		<div class="img">
			<img src="/icons/selectedCheck.svg" alt="Seat {seatPosition} selected" />
		</div>
	{:else if !isEmpty}
		<div class="img" id="taken">
			<img src="/icons/seatTaken.svg" alt="Seat taken" />
		</div>
	{:else}
		<div class="img">
			<img src="/icons/chair.svg" alt="Seat {seatPosition}" />
		</div>
	{/if}
</button>

<style lang="scss">
	.seat {
		all: unset;
		aspect-ratio: 1/1;
		cursor: pointer;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1 auto;

		.img {
			object-fit: contain;
			display: flex;
			img {
				width: 100%;
				height: 100%;
			}
		}

		#taken {
			object-fit: contain;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: not-allowed;
			img {
				width: 80%;
				height: 80%;
			}
		}
	}
</style>
