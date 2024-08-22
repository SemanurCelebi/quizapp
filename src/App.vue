<template>
	<div id="app" class="text-center">
		<div v-if="key">
			<router-view></router-view>
		</div>
		<Loader v-else/>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useKeyStore } from './stores/authentication';
const keyStore = useKeyStore();
const key = ref(null);
		
const fetchKey = async () => {
	try {
		await keyStore.getKey();
		key.value = keyStore.key;
	} catch (error) {
		console.error('Error fetching setup data:', error);
	}
};
		

onMounted(() => {
	fetchKey();
});

</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>