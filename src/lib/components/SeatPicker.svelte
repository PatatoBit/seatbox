<script lang="ts">
	import Seat from './Seat.svelte';
	export let seats: string[];
</script>

<div class="class">
	<h3 style="color: #71aaff; margin-top: 0.5rem; text-align: center">หน้าห้อง</h3>
	<hr id="class-screen" />
	<div class="seats">
		<br />
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

		<div class="seat-row">
			<div class="seat-pack">
				{#each [1, 2, 3, 4] as rowSeat}
					<Seat bind:seats seatPosition={`E${rowSeat}`} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.class {
		flex: 4 auto;
		object-fit: scale;
		overflow: auto;
	}

	#class-screen {
		min-width: 100%;
		height: 0;
		border: 1px solid #71aaff;
	}
	.seats {
		display: flex;
		flex-direction: column;
		justify-content: center;

		width: 100%;
	}

	.seat-row {
		display: flex;
		width: 100%;
		gap: 2rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.seat-pack {
		flex: 1 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		height: auto;
	}
</style>
