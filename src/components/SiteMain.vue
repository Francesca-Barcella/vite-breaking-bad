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
    </main>
</template>


<style lang="scss" scoped>

</style>