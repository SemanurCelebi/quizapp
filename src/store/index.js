import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        categories: []
    },
    mutations: {
        setCategories(state, categories) {
            state.categories = categories
        }
    },
    actions: {
        async fetchCategories({ commit }) {
            try {
                const response = await axios.get('https://quizapi.io/api/v1/categories', {
                    headers: {
                        'X-Api-Key': 'oGkVkpFobTu3EPaacJWtoxVAI3iDUWQvopa24lS1',
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
