<script lang="ts">
	export let seatPosition: string;
	export let onClick: () => void;
</script>

<td>
	<div class="seat" on:click={onClick}>
		<img src="/icons/seatIcon.png" alt="Seat {seatPosition}" />
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
		cursor: pointer;

		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}

		&:hover {
			transform: scale(1.1);
		}
	}
</style>
