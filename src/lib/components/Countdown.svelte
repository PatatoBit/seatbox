<script lang="ts">
	import { onMount } from 'svelte';

	export let isBookingTime: boolean;

	let timeLeft = { hour: 0, minute: 0, second: 0 };

	function getNextSundayAtNine() {
		const now = new Date();
		const nextSunday = new Date();
		nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7)); // set to next Sunday
		nextSunday.setHours(6, 0, 0, 0); // set to 6:00 AM

		// If today is Sunday and it's past 9:00 AM, set to the next Sunday
		if (nextSunday <= now) {
			nextSunday.setDate(nextSunday.getDate() + 7);
		}

		// If today is sunday and is past 9:00 AM and before 6:00 PM, set to this Sunday at 6:00 PM
		if (isBookingTime) {
			now.setHours(18, 0, 0, 0);
			return now;
		}

		return nextSunday;
	}

	function updateTimeLeft() {
		const now = new Date();
		const nextSunday = getNextSundayAtNine();
		const timeDiff = nextSunday.getTime() - now.getTime();

		const hours = Math.floor(timeDiff / (1000 * 60 * 60));
		const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

		timeLeft = { hour: hours, minute: minutes, second: seconds };
	}

	onMount(() => {
		updateTimeLeft();
		const interval = setInterval(updateTimeLeft, 1000);
		return () => clearInterval(interval);
	});
</script>

<h1>{timeLeft.hour} ชั่วโมง</h1>
<h1>{timeLeft.minute} นาที</h1>
<h1>{timeLeft.second} วินาที</h1>
