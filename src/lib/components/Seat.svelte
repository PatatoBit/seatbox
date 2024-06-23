<script lang="ts">
	export let seatPosition: string;
</script>

<td>
	<div class="seat">
		<img src="/icons/seatIcon.png" alt="Seat Icon" />
	</div>
</td>

<style lang="scss">
	.seat {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		border-radius: 0.3rem;

		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
</style>
