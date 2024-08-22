<template>
	<div v-if="categories.length">
		<h1  class="text-4xl font-bold text-gray-800 m-12">Categories</h1>
		<div class="flex justify-center items-center bg-gray-100 p-14">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
				<router-link v-for="category in categories" :key="category.id" :to="{ name: 'Questions', params: { category: category }}" class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
					<p class="text-lg font-semibold text-gray-800"> {{ category }}</p>
				</router-link>
			</div>
		</div>
	</div>
	<Loader v-else/>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import { useQuestionsStore } from '@/stores/questions'


const questionsStore = useQuestionsStore();
const categories = ref([]);
		
const getQuestionsCategory = async () => {
	try {
		categories.value = [...new Set(questionsStore.questions.map(item => item.category).filter(category => category))];
	} catch (error) {
		console.error('Error fetching setup data:', error);
	}
};
		
onMounted(async() => {
	await questionsStore.getQuestions();
	await getQuestionsCategory();
});

</script>

