<template>
  <div class="contact-form">
    <div class="form-content">
      <label class="required">Имя</label>
      <input class="form-control" v-model="contactData.yourName" type="text" name="yourName" required="required" autocomplete="name" @blur="touched.yourName = true" />
      <div class="input-hint"><span class="error" v-show="touched.yourName &amp;&amp; !contactData.yourName">(Обязательное поле)</span></div>
    </div>
    <div class="form-content">
      <label class="required">E-mail</label>
      <input class="form-control" v-model="contactData.yourEmail" type="text" name="yourEmail" required="required" autocomplete="email" @blur="touched.yourEmail = true" />
      <div class="input-hint"> <span class="error" v-show="touched.yourEmail &amp;&amp; !contactData.yourEmail">(Обязательное поле)</span><span class="error" v-show="touched.yourEmail &amp;&amp; !validEmail(contactData.yourEmail)">Пожалуйста, укажите правильно Ваш E-mail</span></div>
    </div>
    <div class="form-content">
      <label class="required">Тема</label>
      <input class="form-control" v-model="contactData.subject" type="text" name="subject" /></div>
    <div class="form-content">
      <label class="required">Сообщение</label><textarea class="form-control" v-model="contactData.message" name="message" rows="8"></textarea></div>
    <button :disabled="hasError" @click="confirm">Проверить</button>
  </div>
</template>

<script>
import _ from 'lodash'

const initialState = () => {
  return {
    contactData: {
      yourName: '',
      yourEmail: '',
      subject: '',
      message: ''
    },
    touched: {
      yourName: false,
      yourEmail: false,
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
      return !this.validateContact()
    }
  },
  methods: {
    // バリデーション
    validEmail(email) {
      const RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      return RegExp.test(email)
    },
    validateContact() {
      // 入力をトライしたかどうか
      const array = _.map(this.touched, item => {
        return item
      })
      const allTouched = array.every(value => {
        return value === true
      })

      if (this.contactData.yourName) {
        this.valid.yourName = true
      } else {
        this.valid.yourName = false
      }
      if (this.contactData.yourEmail) {
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
    storeContact() {
      const contact = this.contactData
      this.$store.commit('setContactData', contact)
    },
    // 確認ページ
    confirm() {
      this.storeContact()
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

<style lang="scss" scoped>
.contact-form {
  max-width: 620px;
  margin: 3.5rem;
}
.form-content {
  margin-bottom: 1.6rem;
}
label {
  display: block;
  font-weight: bold;
  &.required {
    &::after {
      content: '*';
      color: #f57567;
      display: inline-block;
      padding: 0 0.5rem;
    }
  }
}

input,
textarea {
  width: 100%;
  font-size: 16px;
  padding: 0.5em 0.75em;
  border-radius: 3px;
  border: 1px solid #aaa;
}

.input-hint {
  font-size: 75%;
  color: #999;
  span {
    display: block;
    &.error {
      color: #f57567;
    }
  }
}

button {
  display: block;
  outline:none;
  position: relative;
  color: #fff;
  background: #43c801;
  box-shadow: 0 28px 38px 0 rgba(0,0,0,.06),0 30px 80px 0 rgba(0,0,0,.12);
  border: 0;
  padding: 1em;
  border-radius: 0.75em;
  font-size: 3.6vw;
  margin: 1em auto;
  width: 90%;
  max-width: 400px;
  border: 0;
  &[disabled] {
    background: #cccccc;
  }
  @media (min-width: 768px) {
    font-size: 22px;
    padding: 0.5em;
  }
}

.scroll-inline {
  position: relative;
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  border: 1px solid #cdcdcd;
  margin: 1rem 0;
  padding: 0 0.75em 3em;
}

.checkbox {
  display: inline-block;
  margin-right: 0.5rem;
}
</style>