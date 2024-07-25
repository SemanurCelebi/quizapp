import { createStore } from 'vuex'
import axios from 'axios'
import config from '../config'

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
                        'X-Api-Key': config.getApiToken(),
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
