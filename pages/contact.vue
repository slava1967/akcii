<template>
    <section class="l-section">
        <div class="l-container">
            <contact-form ref="form" @open-modal="openModal()"></contact-form>
            <transition name="modal" v-cloak>
                <form-modal v-if="isModal" @close-modal="closeModal()" @clear-data="clear()" @submit="submit()" :data-response="responseData"></form-modal>
            </transition>
        </div>
    </section>
</template>

<script>
import ContactForm from '@/components/ContactForm'
import FormModal from '@/components/FormModal'

export default {
  components: {
    ContactForm,
    FormModal
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
      const formData = this.convertJsontoUrlencoded(this.$store.state.formData)
      const USER = process.env.USER
      const PASSWORD = process.env.APPLICATION_PASSWORD
      
      // Base64に変換
      const TOKEN = window.btoa(`${USER}:${PASSWORD}`)
      const axiosConfig = {
        headers: {
          'Authorization': `Basic ${TOKEN}`,
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
      }

      this.$axios
        .post('/wp/v2/wpcf7/159/', formData)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    // Conver to JSON Object to application/x-www-form-urlencoded
    convertJsontoUrlencoded(obj) {
      let str = [];
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
        }
      }
      return str.join("&");
    }
  }
}
</script>