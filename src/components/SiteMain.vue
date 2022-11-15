<script>
import CardsList from './CardsList.vue'
export default {
    name: 'SiteMain',
    components: {
        CardsList
    }
}

</script>

<template>
    <main>
        <!-- filtra per category -->
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
        <CardsList />
  <!--       <section class="characters">
            <div class="container bg-white p-3">

                <div class="alert dark" role="alert">
                    <p><strong>Found Characters</strong> 62</p>
                </div>

                <div class="row row-cols-1 row-cols-md-5 g-4">

                    <SingleCard v-for="character in state.characters" :character="character"/>
                </div>
            </div>
        </section> -->
    </main>
</template>


<style lang="scss" scoped>

</style>