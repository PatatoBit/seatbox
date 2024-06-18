<div class="container">
	<h1>จองโต๊ะเรียนออนไลน์</h1>

	<div class="main-view">
		<div class="seats">
			<h1>Hello world</h1>
		</div>

		<div class="details">
			<div>
				<h2>Chayapat Pakham</h2>
				<p>pathonscript@gmail.com</p>
				<hr />
			</div>

			<div>
				<h3>จองที่นั่งสัปดาห์ที่</h3>
				<p>2/6/24 - 7/6/24</p>
			</div>

			<div>
				<h3>เปิดจองในอีก</h3>
				<p>1 วัน 2 ชั่วโมง 34 นาที</p>
				<p>(1/6/24, 18:00)</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}

	.main-view {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		.details {
			display: flex;
			flex-direction: column;
			padding: 1em;

			gap: 2em;
		}
	}
</style>
