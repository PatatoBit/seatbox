<script lang="ts">
	import { signOut } from '$lib/auth';
	import PickerCard from '$lib/components/PickerCard.svelte';
	import SeatPicker from '$lib/components/SeatPicker.svelte';
	import { auth } from '$lib/firebase';

	const userData = {
		name: auth.currentUser?.displayName,
		email: auth.currentUser?.email
	};

	let selectedSeats: string[] = [];
</script>

<main class="container">
	<div class="main-view">
		<h2>เริ่มเปิดจองโต๊ะใน</h2>

		<div class="countdown">
			<h1>31 ชั่วโมง</h1>
			<h1>17 นาที</h1>
			<h1>20 วินาที</h1>
		</div>

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

		<div class="main-picker">
			<SeatPicker bind:seats={selectedSeats} />

			<PickerCard bind:selectedSeats />
		</div>
	</div>

	<br />

	<button class="secondary" on:click={signOut}>ลงชื่อออก</button>
</main>

<style lang="scss">
	.countdown {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		flex-wrap: wrap;
		justify-content: center;

		text-align: center;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		min-height: 100vh;

		padding-top: 5rem;
		padding: 1.5rem;
	}

	.main-view {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-wrap: wrap;

		width: 100%;
		max-width: 1000px;
	}

	.details {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		flex-wrap: wrap;
		gap: 1rem;
		width: 100%;

		margin-top: 3rem;
		margin-bottom: 1rem;

		#user-details {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}
	}
	.main-picker {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;

		gap: 2rem;
	}
</style>
