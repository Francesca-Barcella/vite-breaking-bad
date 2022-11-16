<script>
import { state } from '../state.js'
export default {
    name: 'Selectcategory',

    data() {
        return {
            state
        }
    },
}

</script>

<template>

    <!-- filtra per category -->
    <div class="container">
        <div class="select_category" >
            <select class="p-2 m-3 rounded-3"  v-model="state.filterCategory" @change="$emit('filterByCategory')">
                <option value="All Category">All Category</option>
                <option value="Breaking Bad">Breaking Bad</option>
                <option value="Better Call Saul">Better Call Saul</option>
            </select>
        </div>
    </div>

</template>


<style lang="scss" scoped>

</style>