<template>
  <section class="l-section">
    <div class="l-container">
        <h1>Добавить информацию о распродаже товаров по акции</h1>
        <dobavit-form ref="form" @open-modal="openModal()"></dobavit-form>
        <transition name="modal" v-cloak>
            <form-modalcat v-if="isModal" @close-modal="closeModal()" @clear-data="clear()" @submit="submit()" :data-response="responseData"></form-modalcat>
        </transition>
    </div>
  </section>
</template>

<script>
import DobavitForm from "~/components/DobavitForm"
import FormModalcat from "~/components/FormModalcat"

export default {
  components: {
    DobavitForm,
    FormModalcat
  },
  data() {
    return {
      isModal: false,
      responseData: null
    }
  },
  methods: {
    openModal() {
      this.isModal = true
    },
    closeModal() {
      this.isModal = false
    },
    clear() {
      this.$refs.form.reset()
    },
    submit() {
      const postData = this.convertJsontoUrlencoded(this.$store.state.postData)
      const USER = process.env.WPUSER
      const PASSWORD = process.env.PASSWORD
      // Base64に変換
      const TOKEN = window.btoa(`${USER}:${PASSWORD}`)
      const axiosConfig = {
        headers: {
          'Authorization': `Basic ${TOKEN}`,
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
      }
      this.$axios
        .post(
          `${process.env.WP_REST_API_BASE_URL}/contact-form-7/v1/contact-forms/253/feedback/`,
          postData,
          axiosConfig
        )
        .then(response => {
          console.log(response)
          this.responseData = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    // Conver to JSON Object to application/x-www-form-urlencoded
    convertJsontoUrlencoded(obj) {
      const str = []
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          str.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
        }
      }
      return str.join('&')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scale(1);
    transition-duration: 0.3s;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-name: anime__opend;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
    transform: scale(0.8);
    transition-duration: 0.3s;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-name: anime__closed;
  }
}
@keyframes anime__opend {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes anime__closed {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
}
</style>