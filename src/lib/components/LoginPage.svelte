<script>
	import { signInWithGoogle } from '$lib/auth';
</script>

<main class="landing-container">
	<h1>SeatBox</h1>
	<p>จองโต๊ะเรียนออนไลน์</p>

	<br />

	<button on:click={signInWithGoogle}>ล็อกอิน</button>
</main>

<style lang="scss">
	.landing-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
