<template>
	<h1 class="text-4xl font-bold text-gray-800 m-12">Questions</h1>
	<div v-if="questions.length" class="min-h-screen bg-gray-100 p-6">
		<div class="bg-white p-8 py-14 rounded-lg shadow-lg">
			<div class="flex justify-between">
				<p class="mb-4 font-semibold">{{ questions[currentIndex].question }}</p>
			</div>
			<div class="space-y-4">
				<label
						v-for="([key, answer], index) in Object.entries(questions[currentIndex].answers).filter(([key, answer]) => answer)"
						:key="index"
						class="flex items-center space-x-2"
				>
					<input type="radio" v-model="userAnswers[currentIndex]" :value="key" class="form-radio" />
					<span>{{ answer }}</span>
				</label>
			</div>
			<div class="mt-4 flex justify-center">
				<button
						@click="prevQuestion"
						class="w-32 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
						v-if="currentIndex > 0">
					Previous
				</button>
				<h1 class="flex items-center font-semibold px-2.5">{{currentIndex + 1}}/{{questions.length}}</h1>
				<button
						@click="nextQuestion"
						:disabled="!userAnswers[currentIndex]"
						class="w-32 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed"
						v-if="currentIndex < questions.length - 1">
					Next
				</button>
				<button
						:disabled="!userAnswers[currentIndex]"
						@click="showResults"
						class="w-32 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed"
						v-else>
					Show Results
				</button>
			</div>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
			<router-link
					:to="{ name: 'categories' }"
					class="text-lg font-semibold text-gray-800 bg-white p-6 rounded-lg shadow hover:bg-gray-200 transition">
					{{ questions.length ? 'Exit Quiz' : 'No questions please go back to categories' }}
			</router-link>
		</div>
	</div>
	<Loader v-else/>
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
		questions.value = questionStore.questions
				.filter(question => question.category === category &&
						Object.values(question.correct_answers).includes("true")
				)
				.map(question => ({
					question: question.question,
					answers: question.answers,
					correct_answer: Object.entries(question.correct_answers)
							.filter(([_, value]) => value === "true")
							.map(([key, _]) => key.replace("_correct", ""))
				}));
		questionStore.setSelectedQuestions(questions.value)
	} catch (error) {
		console.error('Error fetching setup data:', error);
	}
};
const prevQuestion = () => {
	if (currentIndex.value > 0) {
		currentIndex.value--;
	}
};
		
const nextQuestion = () => {
	if (currentIndex.value < questions.value.length - 1) {
		currentIndex.value++;
	}
};
		
const showResults = () => {
	router.push({name: 'Results'});
	questionStore.setUserAnswers(userAnswers.value);
	
};
		
onMounted(() => {
	getQuestions(props.category);
});
		

</script>
