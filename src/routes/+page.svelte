<script>
	import { signOut } from '$lib/auth';
	import { auth } from '$lib/firebase';

	const userData = {
		name: auth.currentUser?.displayName,
		email: auth.currentUser?.email
	};
</script>

<div class="container">
	<h1>จองโต๊ะเรียนออนไลน์</h1>

	<div class="main-view">
		<div class="seats">
			<img src="https://placehold.co/600x400" alt="Placeholder" />
		</div>

		<div class="details">
			<div>
				<h2>{userData.name}</h2>
				<p>{userData.email}</p>
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

			<div class="order-card">
				<div class="order-row">
					<div id="order-seat">
						<h3>จองล่วงหน้า</h3>
						<h2 class="order-text">A2</h2>
					</div>

					<div id="order-cost">
						<h3>ค่าจองล่วงหน้า</h3>
						<h2 class="order-text">฿5</h2>
					</div>
				</div>

				<br />

				<button>จองที่นั่ง</button>
			</div>
		</div>
	</div>

	<button on:click={signOut}>ลงชื่อออก</button>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
	}

	.main-view {
		display: flex;
		flex-direction: row;
		gap: 2em;
		flex-wrap: wrap;
		max-width: 60rem;

		.details {
			display: flex;
			flex-direction: column;
			padding: 1em;

			gap: 2em;
		}
	}

	.seats {
		flex: 2;
		min-width: 25rem;

		img {
			object-fit: cover;
			width: 100%;
		}
	}

	.details {
		display: flex;
		flex-direction: column;
		padding: 3em;
		flex: 1;
		width: 100%;

		gap: 2em;
		background-image: linear-gradient(#fefefe, #c8d9f2);
	}

	.order-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		padding: 1.5em;
		background-color: #f0f0f0;

		.order-row {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			width: 100%;

			text-align: center;
		}

		@media screen and (max-width: 600px) {
			.order-row {
				flex-direction: row;
			}

			#order-seat {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
			}

			#order-cost {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
			}
		}
	}

	.order-text {
		font-size: 2em;
	}
</style>
