<script>
	import { signInWithGoogle } from '$lib/auth';
</script>

<main class="landing-container">
	<h1>SeatBox</h1>
	<p>จองโต๊ะเรียนออนไลน์</p>

	<img src="/icons/landingSeat.gif" alt="Spin" />

	<br />

	<button class="primary" on:click={signInWithGoogle}>ล็อกอิน</button>
</main>

<style lang="scss">
	.landing-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	img {
		height: 200px;
		width: 200px;
		object-fit: cover;
	}
</style>
