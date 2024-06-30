<script lang="ts">
	import { onMount } from 'svelte';
	import { auth } from '$lib/firebase';
	import Countdown from '$lib/components/Countdown.svelte';
	import PickerCard from '$lib/components/PickerCard.svelte';
	import SeatPicker from '$lib/components/SeatPicker.svelte';
	import { dateRange, getDateRange, isWeekday } from '$lib/time';
	import { signOut } from '$lib/auth';

	import { page } from '$app/stores';
	let cancelled = $page.url.searchParams.has('cancelled');

	const userData = {
		name: auth.currentUser?.displayName,
		email: auth.currentUser?.email
	};

	let selectedSeats: string[] = [];

	onMount(() => {
		getDateRange();
		// Optionally update the range every minute in case the time passes 18:00 on Friday
		const interval = setInterval(getDateRange, 60000);
		return () => clearInterval(interval);
	});

	// Check if the current time is within 9am sunday until 6pm sunday
	let isBookingTime: boolean;
	$: {
		const now = new Date();
		const start = new Date(now);
		start.setHours(9, 0, 0, 0);

		const end = new Date(now);
		end.setHours(18, 0, 0, 0);

		isBookingTime = now >= start && now <= end;
	}

	$: start = $dateRange.start;
	$: end = $dateRange.end;
</script>

<main class="container">
	<div class="main-view">
		<div class="chip" class:active={isBookingTime}>
			<h3 class="fancy">{isBookingTime ? 'เปิดจองโต๊ะได้อีก' : 'เริ่มเปิดจองโต๊ะใน'}</h3>
		</div>

		<div class="countdown">
			<Countdown bind:isBookingTime />
		</div>

		<div class="details">
			<div>{start} - {end}</div>

			<div id="user-details">
				{#if userData}
					<h3>{userData.name}</h3>
					<p>{userData.email}</p>
				{:else}
					<p>กรุณาเข้าสู่ระบบ</p>
				{/if}
			</div>
		</div>

		{#if isWeekday()}
			<div class="main-picker">
				<SeatPicker bind:seats={selectedSeats} />
				<PickerCard bind:seats={selectedSeats} bind:isBookingTime />
			</div>
		{:else}
			<div class="main-picker">
				<SeatPicker bind:seats={selectedSeats} />
				<PickerCard bind:seats={selectedSeats} bind:isBookingTime />
			</div>
		{/if}
	</div>

	<br />

	{#if cancelled}
		<h3>Cancelled</h3>
	{:else}
		<h3>Other</h3>
	{/if}

	<button class="secondary" on:click={signOut}>ลงชื่อออก</button>
</main>

<style lang="scss">
	.chip {
		background-color: #da5353;
		color: white;
		padding: 0.5rem 2rem;
		margin: 1rem 0;
		border-radius: 10rem;
	}
	.active {
		background-color: #4caf50;
	}

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
		max-width: 40rem;
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
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;

		gap: 2rem;
	}
</style>
