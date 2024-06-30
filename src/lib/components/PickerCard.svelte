<script lang="ts">
	import { db } from '$lib/firebase';
	import { currentAuthUser } from '$lib/store';
	import { collection, doc, setDoc } from 'firebase/firestore';
	import { get } from 'svelte/store';
	import { goto } from '$app/navigation';

	export let seats: string[];
	export let isBookingTime: boolean;

	async function uploadBooking(e: Event) {
		if (isBookingTime) {
			e.preventDefault();
			await setDoc(doc(collection(db, 'bookings'), get(currentAuthUser)?.uid), {
				createdAt: new Date(),
				email: get(currentAuthUser)?.email,
				name: get(currentAuthUser)?.displayName,
				seat: seats,
				status: 'confirmed'
			});
			await goto('/success');
		} else {
			await setDoc(doc(collection(db, 'bookings'), get(currentAuthUser)?.uid), {
				createdAt: new Date(),
				email: get(currentAuthUser)?.email,
				name: get(currentAuthUser)?.displayName,
				seat: seats,
				status: 'pending'
			});
		}
	}
</script>

<div class="card">
	<div class="order-details">
		<div>
			<p>ที่นั่ง</p>
			<h2>{seats.length ? seats.toString() : '-'}</h2>
		</div>

		<div>
			<p>{isBookingTime ? 'ไม่มีค่าจอง' : 'ค่าจองล่วงหน้า'}</p>
			<h2>{isBookingTime ? '฿0' : `฿${seats.length * 10}`}</h2>
		</div>
	</div>

	<form id="button-container" action="?/checkout" method="post" on:submit={uploadBooking}>
		<input type="hidden" name="seatBooking" bind:value={seats} />
		<button class={seats.length < 1 ? 'disabled' : 'primary'} disabled={seats.length < 1}
			>จอง</button
		>
	</form>

	<!-- else content here -->
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		flex: 1 1 auto;
		position: absolute;
		right: -14rem;
		padding: 1rem;
		width: 12rem;

		background-color: #f5f5f5;

		.order-details {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 1rem;

			div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: 1rem;
			}

			h2 {
				font-size: 2rem;
			}
		}
	}

	button {
		margin-top: 2rem;
		margin-bottom: 0.5rem;
		width: 100%;
	}

	@media only screen and (max-width: 1100px) {
		.card {
			flex-direction: row;
			position: inherit;
			right: 0;

			.order-details {
				margin: 0;
				flex: 6 1 auto;
				flex-direction: row;
				justify-content: space-around;

				div {
					margin: 0;
				}
			}

			button {
				flex: 1 1 auto;
				width: min-content;
			}

			#button-container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100%;
			}
		}
	}
</style>
