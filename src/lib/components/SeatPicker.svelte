<script lang="ts">
	export let seats: string[] = [];

	seats = ['A2', 'A3'];
</script>

<div class="container">
	<div class="class-front">
		<hr />

		<h3>หน้าห้อง</h3>
	</div>
</div>

<style lang="scss">
	.class-front {
		width: 100%;
		display: flex;
		flex-direction: column;
		text-align: center;
	}
</style>
