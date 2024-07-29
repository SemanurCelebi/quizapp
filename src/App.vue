<template>
	<div id="app">
		<div v-if="key === null">Loading...</div>
		<div v-else>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useKeyStore } from './stores/key';
export default {
	setup() {
		const keyStore = useKeyStore();
		const key = ref(null);
		
		const fetchKey = async () => {
			try {
				await keyStore.getKey();
				key.value = keyStore.key;
				console.log("getKey", keyStore.key);
			} catch (error) {
				console.error('Error fetching setup data:', error);
			}
		};
		
		// Fetch data when the component is created
		onMounted(() => {
			fetchKey();
		});
		
		return { key };
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