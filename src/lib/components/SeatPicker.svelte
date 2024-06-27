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
						<div>
							<Seat bind:seats seatPosition={`${rowLetter}${rowSeat}`} />
							<!-- content here -->
						</div>
					{/each}
				</div>

				<div class="seat-pack">
					{#each [4, 5, 6] as rowSeat}
						<div>
							<Seat bind:seats seatPosition={`${rowLetter}${rowSeat}`} />
						</div>
					{/each}
				</div>

				<div class="seat-pack">
					{#each [7, 8, 9] as rowSeat}
						<div>
							<Seat bind:seats seatPosition={`${rowLetter}${rowSeat}`} />
						</div>
					{/each}
				</div>
			</div>
		{/each}

		<div class="seat-row">
			<div class="seat-pack extra">
				{#each [1, 2, 3, 4] as rowSeat}
					<div>
						<Seat bind:seats seatPosition={`E${rowSeat}`} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#class-screen {
		width: 100%;
		border: 1px solid #71aaff;
	}

	.class {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		min-height: 100vh;
	}

	.seats {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.seat-row {
		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-shrink: 1;
	}

	.seat-pack {
		display: flex;
		justify-content: center;
		flex: 1 1 auto;
		flex-shrink: 1;
		gap: 0.5rem;

		div {
			width: 5rem;
			height: 5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 0.5rem;
			cursor: pointer;
		}
	}

	@media only screen and (max-width: 960px) {
		.seat-pack {
			div {
				width: 3rem;
				height: 3rem;
			}
		}
	}

	@media only screen and (max-width: 600px) {
		.seat-pack {
			gap: 0.05rem;
			div {
				width: 2rem;
				height: 2rem;
			}
		}
	}

	.extra {
		gap: 0.5rem;
	}
</style>
