<script>
import { state } from '../state.js'
import SingleCard from './SingleCard.vue'
export default {
    name: 'CardsList',
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

    <section class="characters">
        <div class="container bg-white p-3">
            <!-- numero attori trovati -->
            <div class="alert dark" role="alert">
                <p><strong>Found Characters</strong> 62</p>
            </div>
            <!-- lista attori -->
            <div class="row row-cols-1 row-cols-md-5 g-4">

                <SingleCard v-for="character in state.characters" :character="character" />
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>

</style>