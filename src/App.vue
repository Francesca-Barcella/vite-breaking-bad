<script>
import axios from 'axios'
/* import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue' */

export default {
    name: 'App',
/*     components: {
        SiteHeader,
        SiteMain,
        SiteFooter
    }, */
    data() {
        return {
            API_URL:'https://www.breakingbadapi.com/api/characters',
            characters: null,
            error: null
        }
    },
    methods:{
        callApi(url){
            axios.get(url)
            .then(response => {
                console.log(response);
                this.characters = response.data

            })
            //questo metodo .catch serve per intercettera eventuali errori
            .catch(err=> {
                console.error(err.message);
                this.error = err.message
            })
        }
    },
    mounted() {
        this.callApi(this.API_URL)
    }
}
</script>

<template>


<div class="container">
    <div class="row">
        <div class="col" v-for="character in characters">
            <div class="character">
                <img :src="character.img" alt="">
            </div>
        </div>
    </div>
</div>

 <!--    <SiteHeader></SiteHeader>

    <SiteMain></SiteMain>

    <SiteFooter></SiteFooter> -->

</template>

<style lang="scss" scoped>

</style>
