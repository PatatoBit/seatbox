<script lang="ts">
	import Seat from './Seat.svelte';

	export let seats: string[];
</script>

{#each ['A', 'B', 'C', 'D'] as rowLetter}
	<div class="seat-row">
		<div class="seat-pack">
			{#each [1, 2, 3] as rowSeat}
				<!-- content here -->
				<Seat bind:seats seatPosition={`${rowLetter}${rowSeat}`} />
			{/each}
		</div>

		<div class="seat-pack">
			{#each [4, 5, 6] as rowSeat}
				<Seat bind:seats seatPosition={`${rowLetter}${rowSeat}`} />
			{/each}
		</div>

		<div class="seat-pack">
			{#each [7, 8, 9] as rowSeat}
				<Seat bind:seats seatPosition={`${rowLetter}${rowSeat}`} />
			{/each}
		</div>
	</div>
{/each}

<style lang="scss">
	.seat-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 5rem;
	}

	.seat-pack {
		flex: 1 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;

		justify-content: center;
	}
</style>
