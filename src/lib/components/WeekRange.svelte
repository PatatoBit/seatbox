<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const dateRange = writable({ start: '', end: '' });

	function getDateRange() {
		const now = new Date();
		const dayOfWeek = now.getDay();
		const hours = now.getHours();

		let monday = new Date(now);
		let friday = new Date(now);

		// Calculate the Monday of the current week
		monday.setDate(now.getDate() - dayOfWeek + 1);
		monday.setHours(0, 0, 0, 0);

		// Calculate the Friday of the current week
		friday.setDate(now.getDate() - dayOfWeek + 5);
		friday.setHours(18, 0, 0, 0);

		// If it's past 18:00 on Friday, set the range to the next week
		if (dayOfWeek > 5 || (dayOfWeek === 5 && hours >= 18)) {
			monday.setDate(monday.getDate() + 7);
			friday.setDate(friday.getDate() + 7);
		}

		// Format the dates as DD/MM/YY
		const formatDate = (date: Date) => {
			const day = String(date.getDate()).padStart(2, '0');
			const month = String(date.getMonth() + 1).padStart(2, '0');
			const year = String(date.getFullYear()).slice(-2);
			return `${day}/${month}/${year}`;
		};

		dateRange.set({ start: formatDate(monday), end: formatDate(friday) });
	}

	onMount(() => {
		getDateRange();
		// Optionally update the range every minute in case the time passes 18:00 on Friday
		const interval = setInterval(getDateRange, 60000);
		return () => clearInterval(interval);
	});
</script>
