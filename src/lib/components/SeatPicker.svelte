<script lang="ts">
	import Seat from './Seat.svelte';

	export let seats: string[] = [];

	seats = ['A2', 'A3'];
</script>

<div class="container">
	<table class="seats">
		<tbody>
			{#each ['A', 'B', 'C', 'D'] as rowLetter}
				<tr>
					{#each [1, 2, 3] as rowSeat}
						<!-- content here -->
						<Seat seatPosition={`${rowLetter}${rowSeat}`} />
					{/each}

					<div class="block"></div>

					{#each [4, 5, 6] as rowSeat}
						<!-- content here -->
						<Seat seatPosition={`${rowLetter}${rowSeat}`} />
					{/each}

					<div class="block"></div>

					{#each [7, 8, 9] as rowSeat}
						<!-- content here -->
						<Seat seatPosition={`${rowLetter}${rowSeat}`} />
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	.seat {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		border: 1px solid #919191;
	}

	.block {
		width: 50px;
		height: 50px;
	}
</style>
