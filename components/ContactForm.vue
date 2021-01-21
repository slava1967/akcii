<template>
    <div class="contact-form">
        <div class="form-content"> <label class="required">Имя</label><input class="form-control" v-model="formData.yourName" type="text" name="yourName" required="required" autocomplete="name" @blur="touched.yourName = true" />
            <div class="input-hint"> <span class="error" v-show="touched.yourName &amp;&amp; !formData.yourName">Обязательное поле</span></div>
        </div>
        <div class="form-content"> <label class="required">E-mail</label><input class="form-control" v-model="formData.yourEmail" type="text" name="yourEmail" required="required" autocomplete="email" @blur="touched.yourEmail = true" />
            <div class="input-hint"> <span class="error" v-show="touched.yourEmail &amp;&amp; !formData.yourEmail">Обязательное поле</span><span class="error" v-show="touched.yourEmail &amp;&amp; !validEmail(formData.yourEmail)">Проверьте правильность ввода e-mail</span></div>
        </div>
        <div class="form-content"> <label>Тема</label><input class="form-control" v-model="formData.subject" type="text" name="subject" /></div>
        <div class="form-content"> <label>Текст объявления</label><textarea class="form-control" v-model="formData.message" name="message" rows="8"></textarea></div><button :disabled="hasError" @click="confirm">Продолжить</button>
    </div>
</template>

<script>
import _ from 'lodash'

const initialState = () => {
  return {
    formData: {
      yourName: '',
      yourEmail: '',
      subject: '',
      message: ''
  },
    touched: {
      yourName: false,
      yourEmail: false
    },
    valid: {
      yourName: false,
      yourEmail: false
    },
    isModal: false
  }
}

export default {
  data() {
    return initialState()
  },
  computed: {
    hasError() {
      return !this.validateForm()
    }
  },
  methods: {
    // バリデーション
    validEmail(email) {
      const RegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      return RegExp.test(email)
    },
    validateForm() {
      // 入力をトライしたかどうか
      const array = _.map(this.touched, item => {
        return item
      })
      const allTouched = array.every(value => {
        return value === true
      })

      if (this.formData.yourName) {
        this.valid.yourName = true
      } else {
        this.valid.yourName = false
      }
      if (this.formData.yourEmail) {
        this.valid.yourEmail = true
      } else {
        this.valid.yourEmail = false
      }

      // 入力されているかどうか
      const array2 = _.map(this.valid, item => {
        return item
      })
      const allValid = array2.every(value => {
        return value === true
      })

      return allTouched && allValid
    },
    // Vuexに保存
    storeForm() {
      const form = this.formData
      this.$store.commit('setFormData', form)
    },
    // 確認ページ
    confirm() {
      this.storeForm()
      this.open()
    },
    // モーダルを開く
    open() {
      this.$emit('open-modal')
    },
    // モーダルを閉じる
    close() {
      this.$emit('close-modal')
    },

    // dataを初期値に戻す
    reset() {
      Object.assign(this.$data, initialState())
    }
  }
}
</script>