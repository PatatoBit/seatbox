<script lang="ts">
	import Seat from './Seat.svelte';

	export let seats: string[];
</script>

<table class="seats">
	<tbody>
		{#each ['A', 'B', 'C', 'D'] as rowLetter}
			<tr>
				{#each [1, 2, 3] as rowSeat}
					<!-- content here -->
					<Seat bind:seats seatPosition={`${rowLetter}${rowSeat}`} />
				{/each}

				<div class="block"></div>

				{#each [4, 5, 6] as rowSeat}
					<!-- content here -->

					<Seat bind:seats seatPosition={`${rowLetter}${rowSeat}`} />
				{/each}

				<div class="block"></div>

				{#each [7, 8, 9] as rowSeat}
					<!-- content here -->

					<Seat bind:seats seatPosition={`${rowLetter}${rowSeat}`} />
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style lang="scss">
	.seats {
		overflow: scroll;
	}

	.block {
		width: 50px;
		height: 50px;
	}
</style>
