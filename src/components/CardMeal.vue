<template>
  <q-card class="my-card bg-secondary text-white">
    <q-card-section>
      <div class="text-h6">Plan de 7 comidas</div>
    </q-card-section>

    <q-card-section>
      {{ lorem }}
    </q-card-section>

    <q-separator dark />

    <q-card-actions align="between">
      <q-btn flat @click="personalizar" icon="checklist_rtl" />
      <q-btn flat @click="seleccionar" icon="add_shopping_cart" />
    </q-card-actions>
  </q-card>
</template>

<script setup>

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const personalizar = () => alert('desplegable personalizar')
const seleccionar = () => alert('desplegable agregar al carrito')

</script>
