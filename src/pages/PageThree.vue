<template>
  <div class="row q-my-lg justify-center">
      <div class="col-md-3 q-pa-md " v-for="title in titleList" :key="title.id">
        <CardMeal :card="title.value" />
      </div>
  </div>
</template>

<script setup>
import CardMeal from 'src/components/CardMeal.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const titleList = [
  { id: 1, value: computed(() => t('plans.plan7')) },
  { id: 2, value: computed(() => t('plans.plan14')) },
  { id: 3, value: computed(() => t('plans.plan21')) },
  { id: 4, value: computed(() => t('plans.plan28')) }
]

</script>

<style scoped>
@media only screen and (max-width: 600px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) and (max-width: 768px) {
  /* For tablets: */
  [class*="col-"] {
    width: 50%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1021px) {
  /* For tablets: */
  [class*="col-"] {
    width: 33%;
  }
}
</style>
