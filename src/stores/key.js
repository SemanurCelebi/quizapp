import { defineStore } from 'pinia';
import axios from 'axios';

export const useKeyStore = defineStore('keyStore', {
    state: () => ({
        key: null,
    }),
    actions: {
        async getKey() {
            try {
                const response = await axios.get('https://66a3b48344aa6370458236cc.mockapi.io/api/key');
                this.key = response.data[0].key;
            } catch (error) {
                console.error('Error fetching key:', error);
                throw error;
            }
        },
    },
});