<template>
  <div class="row q-pa-lg justify-center">
    <div class="q-my-xl column items-center justify-center">
      <div class="col-10">
      <q-carousel
          v-model="title"
          swipeable
          animated
          infinite
          vertical
          transition-prev="slide-down"
          transition-next="slide-up"
          control-color="white"
          padding
          arrows
          height="22rem"
          class="bg-primary text-black shadow-3 rounded-borders"
        >
            <q-carousel-slide
              v-for="card in cardList"
              :key="card.id"
              :name="card.id"
              class="column no-wrap flex-center"
            >
              <q-card class="bg-white text-black">
                <q-card-section>
                  <div class="text-h6">
                    {{ card.title }}
                  </div>
                </q-card-section>
                <q-card-section> {{ card.desc }} </q-card-section>
                <q-separator color="primary" inset />
                <q-card-actions align="between">
                  <q-btn
                    flat
                    icon="checklist_rtl"
                    color="primary"
                    @click="adjust"
                  />
                  <q-btn
                    flat
                    icon="add_shopping_cart"
                    color="primary"
                    @click="select"
                  />
                </q-card-actions>
              </q-card>
            </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
    <q-dialog v-model="showAddProduct" :backdrop-filter="sepia">
      <AddMeals />
    </q-dialog>
    <q-dialog v-model="showSelectProducts" :backdrop-filter="sepia">
      <SelectMeals />
    </q-dialog>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import AddMeals from 'src/components/AddMeals.vue';
import SelectMeals from 'src/components/SelectMeals.vue';

const { t } = useI18n()
const sepia = ref('sepia(90%)')
const showAddProduct = ref(false)
const showSelectProducts = ref(false)
const title = ref(1)

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const adjust = () => {
  showSelectProducts.value = true
}
const select = () => {
  showAddProduct.value = true
}


const cardList = [
  { id: 1, title: computed(() => t('plans.plan7')), desc: lorem },
  { id: 2, title: computed(() => t('plans.plan14')), desc: lorem },
  { id: 3, title: computed(() => t('plans.plan21')), desc: lorem },
  { id: 4, title: computed(() => t('plans.plan28')), desc: lorem }
]

</script>
