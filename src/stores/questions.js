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
        async getQuestions() {
            const keyStore = useKeyStore();
            try {
                const response = await axios.get('https://quizapi.io/api/v1/questions', {
                    headers: {
                        'X-Api-Key': keyStore.key,
                        'Content-Type': 'application/json'
                    }
                });
                this.questions = response.data;
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        },
    },
});