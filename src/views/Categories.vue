<template>
	<h1 v-if="categories" class="text-4xl font-bold text-gray-800 mb-6">Categories</h1>
	<div class="flex justify-center items-center min-h-screen bg-gray-100">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
			<div v-for="category in categories" :key="category.id" class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
				<router-link :to="{ name: 'Questions', params: { category: category.name }}" class="text-lg font-semibold text-gray-800">
					{{ category.name }}
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import {onMounted, ref} from 'vue';
import { useCategoryStore } from '@/stores/categories';

export default {
	name: 'Categories',
	setup() {
		const categoryStore = useCategoryStore();
		const categories = ref([]);
		
		const getCategories = async () => {
			try {
				await categoryStore.fetchCategories();
				categories.value = categoryStore.categories;
				console.log("categories", categoryStore.categories);
			} catch (error) {
				console.error('Error fetching setup data:', error);
			}
		};
		
		// Fetch data when the component is created
		onMounted(() => {
			getCategories();
		});
		
		return {categories}
		
	},
};
</script>

