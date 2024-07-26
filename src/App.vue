<template>
	<div id="app">
		<div >Loading...</div>
		<div >
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue';
export default {
	setup() {
		const store = useStore();
		const data = ref(null);
		
		const fetchKey = async () => {
			try {
				await store.dispatch('getKey');
				data.value = store.state.key;
				console.log("getKey" , store.state.key);
			} catch (error) {
				console.error('Error fetching setup data:', error);
			}
		};
		
		// Fetch data when the component is created
		 onMounted( () => {
			 fetchKey();
		});
		return { data};
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