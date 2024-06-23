<script lang="ts">
	export let seatPosition: string;
	export let seats: string[];

	function addOrRemove(seat: string) {
		if (seats.includes(seat)) {
			seats = seats.filter((s) => s !== seat);

			console.log('Seat already in, removing');
		} else {
			seats.push(seat);
			seats = seats;
		}

		console.log(seats);
	}
</script>

<td>
	<button class="seat" on:click={() => addOrRemove(seatPosition)}>
		{#if seats.includes(seatPosition)}
			<img src="/icons/selectedCheck.svg" alt="Seat {seatPosition} Selected" />
		{:else}
			<img src="/icons/seatIcon.png" alt="Seat {seatPosition}" />
			<!-- else content here -->
		{/if}
	</button>
</td>

<style lang="scss">
	.seat {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		border-radius: 0.3rem;
		cursor: pointer;

		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}

		&:hover {
			transform: scale(1.1);
		}
	}

	button {
		all: unset;
	}
</style>
