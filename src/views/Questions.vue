<template>
	<h1 class="text-4xl font-bold text-gray-800 m-12">Questions</h1>
	<div v-if="questions.length" class="min-h-screen bg-gray-100 p-6">
		<div class="bg-white p-8 py-14 rounded-lg shadow-lg">
			<div class="flex justify-between">
				<p class="mb-4 font-semibold">{{ questions[currentIndex].question }}</p>
			</div>
			<div class="space-y-4">
				<label
					v-for="(answer, index) in questions[currentIndex].answers"
					:key="index"
					class="flex items-center space-x-2"
				>
					<input type="radio" v-model="userAnswers[currentIndex]" :value="index" class="form-radio" />
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
					:disabled="userAnswers[currentIndex] === null || userAnswers[currentIndex] === undefined"
					class="w-32 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed"
					v-if="currentIndex < questions.length - 1">
					Next
				</button>
				<button
					:disabled="userAnswers[currentIndex] === null || userAnswers[currentIndex] === undefined"
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

// Normalize a QuizAPI question into our UI shape:
// - question: text
// - answers: array of strings
// - correct_index: index of correct answer in answers array (or null)
function normalizeQuestion(q) {
	// QuizAPI may return answers as an array (docs) or an object (older shape)
	let answersArr = [];
	let correctIndex = null;

	if (Array.isArray(q.answers)) {
		answersArr = q.answers.map(a => a.text);
		const correct = q.answers.findIndex(a => a.isCorrect === true || a.isCorrect === 'true');
		correctIndex = correct >= 0 ? correct : null;
	} else if (q.answers && typeof q.answers === 'object') {
		// legacy: answers as object { answer_a: 'text', answer_b: 'text' }
		const entries = Object.entries(q.answers).filter(([k, v]) => v != null && v !== '');
		answersArr = entries.map(([k, v]) => v);
		// try to read correct_answers map if exists
		if (q.correct_answers && typeof q.correct_answers === 'object') {
			const correctKey = Object.keys(q.correct_answers).find(k => q.correct_answers[k] === 'true' || q.correct_answers[k] === true);
			if (correctKey) {
				// correctKey format: 'answer_a_correct'
				const normalized = correctKey.replace(/_correct$/, '');
				const idx = entries.findIndex(([k]) => k === normalized);
				if (idx >= 0) correctIndex = idx;
			}
		}
	}

	return {
		question: q.text || q.question || q.title || '',
		answers: answersArr,
		correct_index: correctIndex,
	};
}

const getQuestions = async (category) => {
	try {
		// Request include_answers to ensure answers are returned (per docs)
		const remote = await questionStore.getQuestions({ category, include_answers: true, limit: 10 });

		// questionStore.getQuestions returns an array. Normalize and filter by category
		const normalized = (remote || [])
			.filter(q => !category || (q.category && q.category.toLowerCase() === category.toLowerCase()))
			.map(normalizeQuestion);

		questions.value = normalized;

		// initialize userAnswers with nulls
		userAnswers.value = Array(questions.value.length).fill(null);

		// persist selected set for Results view
		questionStore.setSelectedQuestions(questions.value);
		questionStore.setUserAnswers([]);
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
	// save answers and navigate
	questionStore.setUserAnswers(userAnswers.value);
	router.push({ name: 'Results' });
};

onMounted(() => {
	getQuestions(props.category);
});

</script>
