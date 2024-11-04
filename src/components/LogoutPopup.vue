<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="register" :backdrop-filter="sepia">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none text-h4">
          Registro
        </q-card-section>
        <q-card-section class="text-h6">
          Acá se abre un formulario para registrarse.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const sepia = ref('sepia(90%)')
const register = ref(true)

</script>
