<template>
	<h1 class="text-4xl font-bold text-gray-800 m-12">Results</h1>
	<div class="min-h-screen bg-gray-100 p-6" v-if="questions.length > 0 && userAnswers.length > 0">
		<div class="bg-white p-6 rounded-lg shadow-lg mb-6">
			<p class="text-lg font-semibold">Your score: {{ correctPercentage }}%</p>
		</div>
		<div class="bg-white p-6 rounded-lg shadow-lg">
			<div v-for="(question, index) in questions" :key="index" class="mb-4">
				<p class="font-semibold">{{ question.question }}</p>
				<p :class="{'text-green-500': isCorrect(index), 'text-red-500': !isCorrect(index)}">
					Your answer: {{ question.answers[userAnswers[index]] || 'No answer' }}
				</p>
				<p v-if="!isCorrect(index)" class="text-blue-500">
					Correct answer: {{ question.answers[question.correct_index] }}</p>
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
	<Loader v-else/>
</template>

<script setup>
import { computed } from "vue";

import { useQuestionsStore } from '@/stores/questions';

const questionStore = useQuestionsStore();

// These are arrays populated by Questions.vue into the store
const questions = questionStore.selectedQuestions;
const userAnswers = questionStore.userAnswers;

const correctCount = computed(() => {
	return questions.filter((question, index) => isCorrect(index)).length;
});

const correctPercentage = computed(() => {
	if (questions.length === 0) return 0;
	return (correctCount.value / questions.length * 100).toFixed(2);
});

function isCorrect(index) {
	const q = questions[index];
	if (!q) return false;
	// prefer normalized correct_index; fall back to old correct_answer shape
	if (q.correct_index !== null && q.correct_index !== undefined) {
		return userAnswers[index] === q.correct_index;
	}
	if (q.correct_answer && Array.isArray(q.correct_answer)) {
		return userAnswers[index] === q.correct_answer[0];
	}
	return false;
}
</script>
