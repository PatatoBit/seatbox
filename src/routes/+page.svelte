<script lang="ts">
	import { signOut } from '$lib/auth';
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
		</div>
	</div>

	<br />

	<button class="primary" on:click={signOut}>ลงชื่อออก</button>
</main>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		min-height: 100vh;

		padding-top: 5rem;
		padding: 2rem;
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

		width: 100%;
		max-width: 800px;
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
	.main-picker {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		overflow: scroll;
	}

	.seats {
		width: 100%;
		object-fit: scale;
	}
</style>
