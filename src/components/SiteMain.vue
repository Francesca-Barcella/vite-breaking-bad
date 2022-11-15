<script>
import { state } from '../state.js'

export default {
    name: 'SiteMain',
    data() {
        return {
            state
        }
    }
}

</script>

<template>
    <main>
        <!--  <characters /> -->
        <section class="characters">
            <div class="container p-5 bg-white">

                div.<div class="alert dark" role="alert">
                    <h4 class="alert-heading"></h4>
                    <p>Found Characters 62</p>
                </div>
                <div class="row row-cols-1 row-cols-sm-5">
                    <div class="col" v-for="character in state.characters">
                        <div class="card character rounded-0 bg-dark text-white text-center p-2">
                            <img :src="character.img" alt="">
                            <h3 class="actor">{{ character.name }}</h3>
                            <span class="category">{{ character.category }}</span>
                            <span class="status">{{ character.status }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>


<style lang="scss" scoped>

</style>