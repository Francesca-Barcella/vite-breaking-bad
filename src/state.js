import { reactive } from 'vue'

export const state = reactive({
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    characters: null,
    loading: true,
    error: null
})