<template>
	<h1 class="text-4xl font-bold text-gray-800 m-12">Results</h1>
	<div class="min-h-screen bg-gray-100 p-6">
		<div class="bg-white p-6 rounded-lg shadow-lg">
			<div v-for="(question, index) in questions" :key="index" class="mb-4">
				<p class="font-semibold">{{ question.question }}</p>
				<p :class="{'text-green-500': userAnswers[index] === question.correct_answer, 'text-red-500': userAnswers[index] !== question.correct_answer}">
					Your answer: {{ question.answers[userAnswers[index]] }}
				</p>
				<p class="text-blue-500">
					Correct answer: {{ question.answers[question.correct_answer] }}
				</p>
			</div>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
			<router-link
					:to="{ name: 'categories' }"
					class="text-lg font-semibold text-gray-800 bg-white p-6 rounded-lg shadow hover:bg-gray-200 transition">
				Back to categories
			</router-link>
		</div>
	</div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';

export default {
	name: 'Results',
	setup() {
		const route = useRoute();
		const questions = JSON.parse(route.query.questions || '[]');
		const userAnswers = JSON.parse(route.query.userAnswers || '[]');
		
		return {questions, userAnswers};
	},
};
</script>
