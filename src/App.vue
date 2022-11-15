<script>
import axios from 'axios'
import { state } from './state.js'
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'


export default {
    name: 'App',
    components: {
        SiteHeader,
        SiteMain,
        SiteFooter,
    },

    data() {
        return {
            state //versione abbreviata di state:state
        }
    },
    methods: {
        callApi(url) {
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
                })
        }
    },
    mounted() {
        this.callApi(this.state.API_URL)

    }
}
</script>

<template>

    <SiteHeader />
    <SiteMain />
    <SiteFooter />

</template>

<style lang="scss" scoped>

</style>
