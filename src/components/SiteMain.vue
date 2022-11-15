<script>
import { state } from '../state.js'
import SingleCard from './SingleCard.vue'

export default {
    name: 'SiteMain',
    components: {
        SingleCard
    },
    data() {
        return {
            state
        }
    }
}

</script>

<template>
    <main>
        <!-- filta per category -->
        <div class="container">
            <div class="select_category">
                <select class="p-2 m-3 rounded-3">
                    <option value="">Select Category</option>
                    <option value="">Alive</option>
                    <option value="">Presumed dead</option>
                    <option value="">PDeceased</option>
                </select>
            </div>
        </div>
        <!--  <characters /> -->
        <section class="characters">
            <div class="container bg-white p-3">
                <!-- numero attori trovati -->
                <div class="alert dark" role="alert">
                    <p><strong>Found Characters</strong> 62</p>
                </div>
                <!-- lista attori -->
                <div class="row row-cols-1 row-cols-md-5 g-4">
                    <SingleCard v-for="character in state.characters" :character="character"/>
                    <!-- <div class="col" v-for="character in state.characters">
                        <div class="card character rounded-0 bg-dark text-white text-center p-3">
                            <img :src="character.img" alt="">
                            <h4 class="actor">{{ character.name }}</h4>
                            <span class="category">{{ character.category }}</span>
                            <span class="status">{{ character.status }}</span>
                        </div> 
                </div>-->
                </div>
            </div>
        </section>
    </main>
</template>


<style lang="scss" scoped>

</style>