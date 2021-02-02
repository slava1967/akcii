<template>
  <div class="dobavit-form">
    <div class="form-content">
      <label class="required">Заголовок</label>
      <input class="form-control" v-model="postData.yourSubject" type="text" name="yourSubject" required="required" @blur="touched.yourSubject = true" />
      <div class="input-hint"><span class="error" v-show="touched.yourSubject &amp;&amp; !postData.yourSubject">(Обязательное поле)</span></div>
    </div>
    <div class="form-content">
      <label class="required">Выберите категорию</label>
      <select class="form-control" v-model="postData.menuCategory" name="menuCategory" required="required" @blur="touched.menuCategory = true">
        <option v-for="category in categories" :key="category.id">
            {{ category.name }}
        </option>
      </select>
    </div>
    <div class="form-content">
      <label class="required">Текст</label><textarea class="form-control" v-model="postData.yourMessage" name="yourMessage" required="required" @blur="touched.yourMessage = true" rows="8"></textarea></div>
    <button :disabled="hasError" @click="confirm">Проверить</button>
  </div>
</template>

<script>
import _ from 'lodash'

const initialState = () => {
  return {
    postData: {
      yourSubject: '',
      menuCategory: '',
      yourMessage: ''
    },
    touched: {
    },
    valid: {
      yourSubject: false,
      menuCategory: false,
      yourMessage: false
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
      return !this.validatePost()
    },
    categories() {
      return this.$store.getters['categories/get']
    }
  },
  methods: {
    validatePost() {
      // 入力をトライしたかどうか
      const array = _.map(this.touched, item => {
        return item
      })
      const allTouched = array.every(value => {
        return value === true
      })

      if (this.postData.yourSubject) {
        this.valid.yourSubject = true
      } else {
        this.valid.yourSubject = false
      }
      if (this.postData.menuCategory) {
        this.valid.menuCategory = true
      } else {
        this.valid.menuCategory = false
      }
      if (this.postData.yourMessage) {
        this.valid.yourMessage = true
      } else {
        this.valid.yourMessage = false
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
    storePost() {
      const post = this.postData
      this.$store.commit('setPostData', post)
    },
    // 確認ページ
    confirm() {
      this.storePost()
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
.dobavit-form {
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
textarea,
select {
  width: 100%;
  font-size: 16px;
  padding: 0.5em 0.75em;
  border-radius: 3px;
  border: 1px solid #aaa;
  background-color: white;
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