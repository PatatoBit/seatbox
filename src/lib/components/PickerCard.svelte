<script lang="ts">
	export let selectedSeats: string[];
</script>

<div class="card">
	<div class="order-details">
		<h3>ที่นั่ง</h3>
		<h2>{selectedSeats.length ? selectedSeats.toString() : '-'}</h2>

		<h3>ค่าจองล่วงหน้า</h3>
		<h2>฿{selectedSeats.length * 5}</h2>
	</div>

	<button class="primary">จอง</button>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex: 1 1 auto;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		padding: 1.5rem;

		background-color: #f5f5f5;

		.order-details {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			h3 {
				font-size: 1.5rem;
			}

			h2 {
				font-size: 2rem;
			}
		}
	}

	button {
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
</style>
