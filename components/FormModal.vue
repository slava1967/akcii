<template>
    <div class="contact-confirm">
        <div class="overlay"></div>
        <slot>
            <div class="modal">
                <h2 :class="myStatus">{{ dataResponse ? dataResponse.message : 'Пожалуйста, проверьте содержание' }}</h2>
                <div class="confirm" v-if="!dataResponse">
                    <dl>
                        <dt>Имя</dt>
                        <dd>{{ getFormData.yourName }}</dd>
                    </dl>
                    <dl>
                        <dt>E-mail</dt>
                        <dd>{{ getFormData.yourEmail }}</dd>
                    </dl>
                    <dl>
                        <dt>Тема</dt>
                        <dd>{{ getFormData.subject }}</dd>
                    </dl>
                    <dl>
                        <dt>Сообщение</dt>
                        <dd v-html="getFormData.message"></dd>
                    </dl>
                    <div class="btn-submit" @click="send">Отправить</div>
                    <div class="btn-return" @click="close">Изменить</div>
                </div>
                <div class="response" v-if="dataResponse">
                    <div class="response-body" v-html="dataResponse.body"></div>
                    <div class="btn-return" @click="close">Закрыть</div>
                </div>
            </div>
        </slot>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    dataResponse: {
      type: Object,
      required: false,
      default: null
    }
  },
  computed: {
    myStatus() {
      if (this.dataResponse !== null) {
        return this.dataResponse.status
      } else {
        return ''
      }
    },
    ...mapGetters(['getFormData'])
  },
  methods: {
    close() {
      this.$store.dispatch('resetForm')
      this.$emit('close-modal')
    },
    clear() {
      this.$emit('clear-data')
    },
    send() {
      this.clear()
      this.$emit('submit')
    }
  }
}
</script>