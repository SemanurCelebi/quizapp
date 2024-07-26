import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        categories: [],
        key: ''
    },
    mutations: {
        setCategories(state, categories) {
            state.categories = categories
        },
        setKey(state, key) {
            state.key = key
        }
    },
    actions: {
        async getKey({ commit }) {
            try {
                const response = await axios.get('https://66a3b48344aa6370458236cc.mockapi.io/api/key')
                        .then(response => response.data[0].key)
                commit('setKey', response);
            } catch (error) {
                console.error('Error fetching key:', error);
                throw error; // Re-throw the error if you want to handle it elsewhere
            }
        },
        async fetchCategories({ commit }) {
            try {
                const response = await axios.get('https://quizapi.io/api/v1/categories', {
                    headers: {
                        'X-Api-Key': this.state.key,
                        'Content-Type': 'application/json'
                    }
                })
                commit('setCategories', response.data)
            } catch (error) {
                console.error('Error fetching categories:', error)
            }
        }
    },
    getters: {
        categories: state => state.categories
    }
})
