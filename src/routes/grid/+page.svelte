<div class="container">
	<div class="seats">
		{#each ['A', 'B', 'C', 'D'] as row}
			<div class="seat-row">
				<div class="seat-pack">
					{#each [1, 2, 3] as seat}
						<div>
							{row}{seat}
						</div>
					{/each}
				</div>

				<div class="seat-pack">
					{#each [4, 5, 6] as seat}
						<div>
							{row}{seat}
						</div>
					{/each}
				</div>

				<div class="seat-pack">
					{#each [7, 8, 9] as seat}
						<div>
							{row}{seat}
						</div>
					{/each}
				</div>
			</div>
		{/each}

		{#each ['E'] as row}
			<div class="seat-pack extra">
				{#each [1, 2, 3, 4] as seat}
					<div>
						{row}{seat}
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		min-height: 100vh;

		padding-top: 5rem;
		padding: 1.5rem;
	}

	.seats {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.seat-row {
		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: space-between;

		gap: 50rem;
		flex-shrink: 1;
	}

	.seat-pack {
		display: flex;
		justify-content: space-between;
		flex: 1 1 0px;
	}

	.extra {
		gap: 1rem;
	}
</style>
