<template>
	<h1 class="text-4xl font-bold text-gray-800 mb-6">Categories</h1>
	<div class="flex justify-center items-center min-h-screen bg-gray-100">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
			<div v-for="category in categories" :key="category.id" class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
				<router-link :to="{ name: 'Category', params: { id: category.id } }" class="text-lg font-semibold text-gray-800">
					{{ category.name }}
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'Home',
	computed: {
		...mapGetters(['categories'])
	},
	methods: {
		...mapActions(['fetchCategories'])
	},
	created() {
		this.fetchCategories()
	}
}
</script>

