<script lang="ts">
	export let seats: string[] = [];

	seats = ['A2', 'A3'];
</script>

<div class="container">
	<div class="class-front">
		<h3>หน้าห้อง</h3>

		<div class="seats">
			{#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as col}
				<div class="row">
					{#each ['A', 'B', 'C', 'D'] as row}
						<div class="seat">
							{row}{col}
						</div>
					{/each}
				</div>
			{/each}

			{#each [1, 2, 3, 4] as col}
				<div class="row">
					{#each ['E'] as row}
						<div class="seat">
							{row}{col}
						</div>
					{/each}
					<!-- content here -->
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.class-front {
		width: 100%;
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.seats {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		align-items: center;
	}

	.seat {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		border: 1px solid #000;
	}
</style>
