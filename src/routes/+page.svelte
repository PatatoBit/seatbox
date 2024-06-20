<script lang="ts">
	import { signOut } from '$lib/auth';
	import SeatPicker from '$lib/components/SeatPicker.svelte';
	import { auth } from '$lib/firebase';

	const userData = {
		name: auth.currentUser?.displayName,
		email: auth.currentUser?.email
	};

	let selectedSeats: string[];
</script>

<div class="container">
	<div class="main-view">
		<h2>เริ่มเปิดจองโต๊ะใน</h2>
		<h1>31 ชั่มโมง 17 นาที 20 วินาที</h1>

		<div class="details">
			<div>12/6/24 - 17/6/24</div>

			<div id="user-details">
				{#if userData}
					<h3>{userData.name}</h3>
					<p>{userData.email}</p>
				{:else}
					<p>กรุณาเข้าสู่ระบบ</p>
				{/if}
			</div>
		</div>

		<hr id="class-screen" />

		<h3 style="color: #71aaff; margin-top: 0.5rem">หน้าห้อง</h3>

		<div class="main-picker">
			<div class="seats">
				<SeatPicker bind:seats={selectedSeats} />
			</div>

			<!-- <div class="order-card">
				<div class="order-row">
					<div id="order-seat">
						<h3>จองล่วงหน้า</h3>
						<h2 class="order-text">{selectedSeats}</h2>
					</div>

					<div id="order-cost">
						<h3>ค่าจองล่วงหน้า</h3>
						<h2 class="order-text">฿{selectedSeats?.length * 5}</h2>
					</div>

					<button>จองที่</button>
				</div>
			</div> -->
		</div>
	</div>

	<br />

	<button on:click={signOut}>ลงชื่อออก</button>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 100%;
		min-height: 100vh;

		padding-top: 5rem;
	}

	#class-screen {
		width: 100%;
		height: 0;
		border: 1px solid #71aaff;
	}

	.main-view {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-wrap: wrap;
		max-width: 70rem;
	}

	.main-picker {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}

	.details {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		width: 100%;

		margin-top: 3rem;
		margin-bottom: 1rem;

		#user-details {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}
	}

	.seats {
		flex: 2;
		min-width: 25rem;
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
