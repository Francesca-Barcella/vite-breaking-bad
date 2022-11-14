<script>
import axios from 'axios'
/* import CharactersList from './components/CharactersList.vue' */
import {state} from './state.js'
/* import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue' */

export default {
    name: 'App',
    data() {
        return {
            state
        }
    },
    methods: {
        callApi(url) {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.state.characters = response.data

                })
                //questo metodo .catch serve per intercettera eventuali errori
                .catch(err => {
                    console.error(err.message);
                    this.state.error = err.message
                })
        }
    },
    mounted() {
        this.callApi(this.state.API_URL)

    }
}
</script>

<template>
    <h1>Breaking Bad Api</h1>

    <characters />
 <!--    <section class="characters">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-5">
                <div class="col" v-for="character in characters">
                    <div class="card character">
                        <img :src="character.img" alt="">
                        <h3 class="actor">{{ character.name }}</h3>
                        <span class="category">{{ character.category }}</span>
                        <span class="status">{{ character.status }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section> -->

    <!--    <SiteHeader></SiteHeader>

    <SiteMain></SiteMain>

    <SiteFooter></SiteFooter> -->

</template>

<style lang="scss" scoped>

</style>
