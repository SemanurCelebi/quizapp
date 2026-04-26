import { defineStore } from 'pinia';
import axios from 'axios';
import { useKeyStore } from './authentication'


export const useQuestionsStore = defineStore('questionsStore', {
    state: () => ({
        questions: [],
        selectedQuestions: [],
        userAnswers: []
    }),
    actions: {
        setSelectedQuestions(questions) {
            this.selectedQuestions = questions;
        },
        setUserAnswers(answer) {
            this.userAnswers = answer;
        },

        // Fetch questions. Accepts an options object so callers can request a
        // quiz by id, include answers, pagination, filters etc. Defaults to
        // browsing mode (no quiz_id) with 10 items.
        async getQuestions(options = {}) {
            const keyStore = useKeyStore();
            try {
                // Ensure we have a key loaded (from env or mock). Some tests
                // stub useKeyStore with a simple object that doesn't include
                // helper functions; only call getKey() when it's present.
                if (typeof keyStore.getKey === 'function') {
                    await keyStore.getKey();
                }

                const params = {};
                if (options.quiz_id) params.quiz_id = options.quiz_id;
                if (options.include_answers !== undefined) params.include_answers = options.include_answers;
                if (options.category) params.category = options.category;
                if (options.difficulty) params.difficulty = options.difficulty;
                if (options.type) params.type = options.type;
                if (options.tags) params.tags = options.tags;
                if (options.limit) params.limit = options.limit;
                if (options.offset) params.offset = options.offset;

                const response = await axios.get('https://quizapi.io/api/v1/questions', {
                    headers: {
                        // Prefer authHeader() helper when available, otherwise
                        // fall back to Authorization: Bearer <key> if key exists
                        ...(typeof keyStore.authHeader === 'function' ? keyStore.authHeader() : {}),
                        ...(keyStore.key && !keyStore.authHeader ? { Authorization: `Bearer ${keyStore.key}` } : {}),
                        'Content-Type': 'application/json'
                    },
                    params,
                });

                // API wraps results in a `data` key per the docs. If the response
                // is the raw data array, fall back gracefully.
                this.questions = response.data && response.data.data ? response.data.data : response.data;
                return this.questions;
            } catch (error) {
                console.error('Error fetching questions:', error.response ? error.response.data : error.message);
                throw error;
            }
        },
    },
});