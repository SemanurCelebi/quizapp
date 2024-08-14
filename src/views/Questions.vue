<template>
	<h1 class="text-4xl font-bold text-gray-800 m-12">Questions</h1>
	<div class="min-h-screen bg-gray-100 p-6">
		<div v-if="questions.length" class="bg-white p-8 py-14 rounded-lg shadow-lg">
			<div>
				<p class="mb-4 font-semibold">{{ questions[currentIndex].question }}</p>
			</div>
			<div class="space-y-4">
				<label v-if="questions[currentIndex].answers.answer_a" class="flex items-center space-x-2">
					<input type="radio" v-model="userAnswers[currentIndex]" value="answer_a" class="form-radio" />
					<span>{{ questions[currentIndex].answers.answer_a }}</span>
				</label>
				<label v-if="questions[currentIndex].answers.answer_b" class="flex items-center space-x-2">
					<input type="radio" v-model="userAnswers[currentIndex]" value="answer_b" class="form-radio" />
					<span>{{ questions[currentIndex].answers.answer_b }}</span>
				</label>
				<label v-if="questions[currentIndex].answers.answer_c" class="flex items-center space-x-2">
					<input type="radio" v-model="userAnswers[currentIndex]" value="answer_c" class="form-radio" />
					<span>{{ questions[currentIndex].answers.answer_c }}</span>
				</label>
				<label v-if="questions[currentIndex].answers.answer_d" class="flex items-center space-x-2">
					<input type="radio" v-model="userAnswers[currentIndex]" value="answer_d" class="form-radio" />
					<span>{{ questions[currentIndex].answers.answer_d }}</span>
				</label>
			</div>
			<div class="mt-4">
				<button
						@click="nextQuestion"
						class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
						v-if="currentIndex < questions.length - 1">
					Next
				</button>
				<button
						@click="showResults"
						class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
						v-else>
					Show Results
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useQuestionsStore } from '@/stores/questions';
import { useRouter } from 'vue-router';
const props = defineProps({
	category: {
		type: String,
		required: true
	}
})
const questionStore = useQuestionsStore();
const questions = ref([]);
const currentIndex = ref(0);
const userAnswers = ref([]);
const router = useRouter();
		
		
const getQuestions = async (category) => {
	try {
		questions.value = questionStore.questions.filter(question => question.category === category);
		console.log(questions.value);
	} catch (error) {
		console.error('Error fetching setup data:', error);
	}
};
		
const nextQuestion = () => {
	if (currentIndex.value < questions.value.length - 1) {
		currentIndex.value++;
	}
};
		
const showResults = () => {
	router.push({
		name: 'Results',
		query: {
			questions: JSON.stringify(questions.value),
			userAnswers: JSON.stringify(userAnswers.value)
		}
	});
};
		
onMounted(() => {
	getQuestions(props.category);
});
		

</script>
