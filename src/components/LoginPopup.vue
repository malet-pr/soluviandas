<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog :backdrop-filter="sepia">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none text-h4">
          Ingresar
        </q-card-section>
        <q-card-section class="text-h6">
          Acá se preguntará si quiere loguearse o si quiere ingresar como invitado.
          Si elije entrar solo como invitado se dará acceso inmediato.
          Si elije loguearse se hará visible el formulario y botón de login.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            flat
            label="Close"
            color="primary"
            @click="handleClick"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const sepia = ref('sepia(90%)')
const login = ref(true)

const handleClick = () => {
  login.value = false
  router.push('/app')
}

</script>
