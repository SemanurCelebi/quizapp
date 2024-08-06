import { defineStore } from 'pinia';
import axios from 'axios';
import { useKeyStore } from './key'


export const useQuestionsStore = defineStore('questionsStore', {
    state: () => ({
        questions: [],
    }),
    actions: {
        async fetchQuestions(category) {
            const keyStore = useKeyStore();
            try {
                const response = await axios.get('https://quizapi.io/api/v1/questions', {
                    headers: {
                        'X-Api-Key': keyStore.key, // Diğer store'dan key alınıyor
                        'Content-Type': 'application/json'
                    }
                });
                this.questions = response.data.filter(question => question.category === category);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        },
    },
});