<template>
  <q-page class="flex flex-center">
    <div class="column items-center">
      <div>
        <h3 class="">SALUVIANDAS</h3>
      </div>
      <div class="q-my-lg">
        <q-btn
          color="primary"
          rounded
          size="lg"
          @click="handleLogin"
          label="INGRESAR"
        />
      </div>
      <div class="q-my-lg">
        <q-btn
          color="primary"
          outline
          rounded
          size="lg"
          @click="handleRegister"
          label="REGISTRARSE"
        />
      </div>
    </div>

    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="login" :backdrop-filter="sepia">
        <q-card style="width: 500px; max-width: 50vw;">
          <q-card-section class="row items-center q-pb-none text-h4">
            Log In
          </q-card-section>
          <q-card-section class="text-h6">
            Se permite loguear con usuario y contraseña o ingresar como invitado.
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Close" color="primary" @click="handleClick" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="register" :backdrop-filter="sepia">
        <q-card style="width: 500px; max-width: 50vw;">
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

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const sepia = ref('sepia(90%)')
const login = ref(false)
const register = ref(false)

const handleRegister = () => {
  register.value = true
}

const handleLogin = () => {
  login.value = true
}

const handleClick = () => {
  login.value = false
  router.push('/app')
}

</script>
