<template>
  <div>
    <!-- Floating Action Button -->
    <q-page-sticky position="bottom-right" :offset="[20, 20]">
      <q-btn
        fab
        icon="question_answer"
        color="primary"
        @click="toggleBot"
      >
      </q-btn>
    </q-page-sticky>

    <!-- Chatbot Dialog -->
    <q-dialog
      v-model="showChatbot"
      :backdrop-filter="sepia"
      persistent
      :maximized="false"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card style="width: 90%; max-height: 80vh;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h10">{{ $t('chatbotTitle') }}</div>
          <q-space />
          <q-btn
            icon="close"
            flat
            round
            dense
            v-close-popup
          />
        </q-card-section>
        <q-card-section class="col q-pa-none">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/sUn50EtsARonl4ZzRGIdv"
            width="100%"
            height="100%"
            frameborder="0"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const $q = useQuasar()
const sepia = ref('sepia(90%)')
const showChatbot = ref(false)

const toggleBot = () => {
  showChatbot.value = !showChatbot.value
}

</script>

<style scoped>
.q-card {
  max-width: 90%;
  max-height: 80vh;
  margin: auto;
}
iframe {
  height: calc(80vh - 50px);
}
</style>
