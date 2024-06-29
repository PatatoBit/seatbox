<script lang="ts">
	import { db } from '$lib/firebase';
	import { currentAuthUser } from '$lib/store';
	import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
	import { get } from 'svelte/store';

	export let seats: string[];

	function uploadBooking() {
		setDoc(doc(collection(db, 'bookings'), get(currentAuthUser)?.uid), {
			seat: seats,
			createdAt: new Date(),
			status: 'pending'
		});
	}
</script>

<div class="card">
	<div class="order-details">
		<div>
			<p>ที่นั่ง</p>
			<h2>{seats.length ? seats.toString() : '-'}</h2>
		</div>

		<div>
			<p>ค่าจองล่วงหน้า</p>
			<h2>฿{seats.length * 10}</h2>
		</div>
	</div>

	<form id="button-container" action="?/checkout" method="post">
		<input type="hidden" name="seatBooking" bind:value={seats} />
		<button class="primary" on:click={uploadBooking}>จอง</button>
	</form>
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
