<script lang="ts">
	export let seats: string[] = [];

	seats = ['A2', 'A3'];
</script>

<div class="container">
	<div class="class-front">
		<hr />

		<h3>หน้าห้อง</h3>

		<div class="seats">
			{#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as col}
				<div class="row">
					{#each ['A', 'B', 'C', 'D', 'E', 'F'] as row}
						<div class="seat">
							{row}{col}
						</div>
					{/each}
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
</style>
