<template>
	<div id="app">
		<h1>{{ message }}</h1>
		<div>
			<h2 class="text-xl font-medium text-black">Vue 3 ile Tailwind CSS</h2>
			<p class="text-gray-500">Bu, Vue 3 ve Tailwind CSS kullanılarak oluşturulmuş bir örnek projedir.</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: 'Hello Vue 3!'
		}
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>