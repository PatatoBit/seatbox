<script lang="ts">
	import Seat from './Seat.svelte';

	export let seats: string[] = [];

	seats = ['A2', 'A3'];
</script>

<div class="container">
	<table class="seats">
		<tbody>
			<tr>
				{#each [1, 2, 3] as rowSeat}
					<!-- content here -->
					<Seat seatPosition={`A${rowSeat}`} />
				{/each}

				<div class="block"></div>

				{#each [4, 5, 6] as rowSeat}
					<!-- content here -->
					<Seat seatPosition={`A${rowSeat}`} />
				{/each}

				<div class="block"></div>

				{#each [7, 8, 9] as rowSeat}
					<!-- content here -->
					<Seat seatPosition={`A${rowSeat}`} />
				{/each}
			</tr>

			<tr>
				{#each [1, 2, 3] as rowSeat}
					<!-- content here -->
					<Seat seatPosition={`B${rowSeat}`} />
				{/each}

				<div class="block"></div>

				{#each [4, 5, 6] as rowSeat}
					<!-- content here -->
					<Seat seatPosition={`B${rowSeat}`} />
				{/each}

				<div class="block"></div>

				{#each [7, 8, 9] as rowSeat}
					<!-- content here -->
					<Seat seatPosition={`B${rowSeat}`} />
				{/each}
			</tr></tbody
		>
	</table>
</div>

<style lang="scss">
	.class-front {
		width: 100%;
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.seat {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		border: 1px solid #000;
	}

	.block {
		width: 50px;
		height: 50px;
	}
</style>
