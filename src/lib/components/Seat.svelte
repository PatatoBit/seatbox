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

{#if seats.includes(seatPosition)}
	<button class="seat" on:click={() => addOrRemove(seatPosition)}>
		<div id="img">
			<img src="/icons/selectedCheck.png" alt="Seat {seatPosition} Selected" />
		</div>
	</button>
{:else}
	<button class="seat" on:click={() => addOrRemove(seatPosition)}>
		<div id="img">
			<img src="/icons/seatIcon.png" alt="Seat {seatPosition}" />
		</div>
	</button>
{/if}

<style lang="scss">
	.seat {
		all: unset;
		aspect-ratio: 1/1;
		cursor: pointer;
		padding: 0.5rem;

		width: 50px;
		height: 50px;

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
