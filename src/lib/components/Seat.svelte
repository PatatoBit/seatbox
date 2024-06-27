<script lang="ts">
	export let seatPosition: string;
	export let seats: string[];

	function addOrRemove(seat: string) {
		if (seats.includes(seat)) {
			seats = seats.filter((s) => s !== seat);
		} else {
			if (seats.length > 0) return;
			seats.push(seat);
			seats = seats;
		}
	}
</script>

<button class="seat" on:click={() => addOrRemove(seatPosition)}>
	{#if seats.includes(seatPosition)}
		<div id="img">
			<img src="/icons/selectedCheck.svg" alt="Seat {seatPosition} Selected" />
		</div>
	{:else}
		<div id="img">
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

		#img {
			display: flex;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
