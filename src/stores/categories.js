import { defineStore } from 'pinia';
import axios from 'axios';
import { useKeyStore } from './key'


export const useCategoryStore = defineStore('categoryStore', {
    state: () => ({
        categories: [],
    }),
    actions: {
        async fetchCategories() {
            const keyStore = useKeyStore();
            try {
                const response = await axios.get('https://quizapi.io/api/v1/categories', {
                    headers: {
                        'X-Api-Key': keyStore.key, // Diğer store'dan key alınıyor
                        'Content-Type': 'application/json'
                    }
                });
                console.log("setCategories", response.data);
                this.categories = response.data; // State'i güncelle
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        },
    },
});