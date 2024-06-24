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

<button class="seat" on:click={() => addOrRemove(seatPosition)}>
	{#if seats.includes(seatPosition)}
		<img src="/icons/selectedCheck.svg" alt="Seat {seatPosition} Selected" />
	{:else}
		<img src="/icons/seatIcon.png" alt="Seat {seatPosition}" />
	{/if}
</button>

<style lang="scss">
	.seat {
		all: unset;
		aspect-ratio: 1/1;
		padding: 0.5rem;
		cursor: pointer;

		img {
			width: 100%;
			height: 100%;
		}
	}
</style>
