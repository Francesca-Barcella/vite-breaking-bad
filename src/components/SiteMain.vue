<script>
import CardsList from './CardsList.vue'
import {state} from '../state'
export default {
    name: 'SiteMain',
    components: {
        CardsList
    },
    data(){
        return{
            state
        }
    }
}

</script>

<template>
    <main>
        <!-- filtra per category -->
        <div class="container">
            <div class="select_category">
                <select class="p-2 m-3 rounded-3" v-model="filterCategory" @change="">
                    <option value="">Select Category</option>
                    <option value="">Breaking Bad</option>
                    <option value="">Better Call Saul</option>
                </select>
            </div>
        </div>
        <!--  <characters /> -->
        <CardsList />
    </main>
</template>


<style lang="scss" scoped>

</style>