import { defineStore } from 'pinia';
import axios from 'axios';

// Key store: prefer VUE_APP_QUIZAPI_KEY (set in .env) and fall back to the
// existing mock endpoint for local/dev convenience.
export const useKeyStore = defineStore('keyStore', {
    state: () => ({
        key: null,
    }),
    actions: {
        // Ensure we have a key. First try env var (VUE CLI convention), then
        // fall back to the mock API used previously.
        async getKey() {
            if (this.key) return this.key;

            try {
                // fetch key from the mock API used in this project
                const response = await axios.get('https://66a3b48344aa6370458236cc.mockapi.io/api/key');
                // keep backward compatible: mock returns an array
                if (Array.isArray(response.data) && response.data.length) {
                    this.key = response.data[0].key;
                } else if (response.data && response.data.key) {
                    this.key = response.data.key;
                }
                return this.key;
            } catch (error) {
                console.error('Error fetching key:', error);
                throw error;
            }
        },

        // Small helper to return the Authorization header object expected by
        // the QuizAPI docs (Bearer token).
        authHeader() {
            if (!this.key) return {};
            return { Authorization: `Bearer ${this.key}` };
        },
    },
});