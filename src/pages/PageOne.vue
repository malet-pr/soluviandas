<template>
  <div class="row justify-center">
    <div class="col-8 q-my-lg">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        ref="carousel"
        infinite
      >
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />

        <template v-slot:control>
          <q-carousel-control
            position="bottom-right"
            :offset="[18, 18]"
            class="q-gutter-xs"
          >
            <q-btn
              push round dense color="orange" text-color="black" icon="arrow_left"
              @click="$refs.carousel.previous()"
            />
            <q-btn
              push round dense color="orange" text-color="black" icon="arrow_right"
              @click="$refs.carousel.next()"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)

</script>
