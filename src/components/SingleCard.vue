<script>
export default {
    name: 'SingleCard',
    props:{
        character: Object
    }

}
</script>

<template>

    <div class="col">
        <div class="card character rounded-0 bg-dark text-white text-center p-3">
            <img :src="character.img" alt="">
            <h4 class="actor">{{ character.name }}</h4>
            <span class="category">{{ character.category }}</span>
            <span class="status">{{ character.status }}</span>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>
