<template>
  <div class="col">
    <div class="row q-pt-lg justify-center">
      <CardMeal />
    </div>
    <div class="row q-py-lg justify-center">
      <CardMeal />
    </div>
    <div class="row q-pt-lg justify-center">
      <CardMeal />
    </div>
    <div class="row q-py-lg justify-center">
      <CardMeal />
    </div>
  </div>
</template>

<script setup>
import CardMeal from 'src/components/CardMeal.vue'

</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
