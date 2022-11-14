<script>
export default {
    name: 'CharactersList'
}
</script>

<template>
    <section class="characters">
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
    </section>
</template>


<style lang="scss" scoped>

</style>