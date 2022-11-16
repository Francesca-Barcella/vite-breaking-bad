<script>
import CardsList from './CardsList.vue'
import SelectCategory from './SelectCategory.vue'
import { state } from '../state.js'
import axios from 'axios'

export default {
    name: 'SiteMain',
    components: {
        CardsList,
        SelectCategory
    },

    data() {
        return {
            state
        }
    },

    methods: {
        callApi(url) {
            console.log(this.state.filterCategory + 'prova riga 22');
            if(this.state.filterCategory !== ''){
                url += `?${this.state.categoryParameter}=${this.state.filterCategory}`
            }
            console.log(url);

            axios.get(url)
                .then(response => {
                    //console.log(response.data);
                    this.state.characters = response.data
                    this.state.loading = false

                })
                //questo metodo .catch serve per intercettera eventuali errori
                .catch(err => {
                    console.error(err.message);
                    this.state.error = err.message
                    this.state.loading = false
                })
        }
    },
    mounted() {
        this.callApi(this.state.API_URL)

    }
}

</script>

<template>
    <main>
        <!-- filtra per category -->
        <!-- <div class="container">
            <div class="select_category">
                <select class="p-2 m-3 rounded-3" v-model="filterCategory" @change="metodo">
                    <option value="All Category">All Category</option>
                    <option value="Breaking Bad">Breaking Bad</option>
                    <option value="Better Call Saul">Better Call Saul</option>
                </select>
            </div>
        </div> -->
        <!--  <characters /> -->
        <SelectCategory @filterByCategory="callApi(state.API_URL)"/>
        <CardsList />
    </main>
</template>


<style lang="scss" scoped>

</style>