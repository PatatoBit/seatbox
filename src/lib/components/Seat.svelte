<script lang="ts">
	export let seatPosition: string;
</script>

<td>
	<div class="seat">{seatPosition}</div>
</td>

<style lang="scss">
	.seat {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		border: 1px solid #c0c0c0;

		border-radius: 0.3rem;
	}
</style>
