<template>
    <div class="dobavit-confirm">
    <div class="overlay"></div>
    <slot>
        <div class="modal">
            <h2 :class="myStatus">{{ dataResponse ? dataResponse.message : 'Пожалуйста, проверьте содержание:' }}</h2>
            <div class="confirm" v-if="!dataResponse">
                <dl>
                    <dt>Заголовок</dt>
                    <dd>{{ getPostData.yourSubject }}</dd>
                </dl>
                <dl>
                    <dt>Категория</dt>
                    <dd>{{ getPostData.menuCategory }}</dd>
                </dl>
                <dl>
                    <dt>Текст</dt>
                    <dd v-html="getPostData.yourMessage"></dd>
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
    ...mapGetters(['getPostData'])
  },
  methods: {
    close() {
      this.$store.dispatch('resetPost')
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

<style lang="scss" scoped>
.dobavit-confirm {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10010;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    background: rgba(255, 255, 255, 0.95);
  }
  .modal {
    position: relative;
    display: block;
    width: 85%;
    padding: 20px 5vw;
    border: 1vw solid #c7c7c7;
    height: 80vh;
    overflow-y: scroll;
    background: #f2f2f2;
    max-width: 650px;
    @media (min-width: 768px) {
      padding: 20px 30px;
      border: 10px solid #c7c7c7;
    }
  }
  h2 {
    font-size: 4vw;
    color: #fff;
    background: #363636;
    text-align: center;
    line-height: 2.5;
    &.mail_sent {
      background: #379e40;
    }
    &.error {
      background: #ff9e9e;
    }
    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
  dl {
    margin-bottom: 20px;
    font-size: 3.4vw;
    @media (min-width: 768px) {
      font-size: 16px;
    }
    dt {
      font-size: 3.8vw;
      font-weight: bold;
      @media (min-width: 768px) {
        font-size: 16px;
      }
    }
  }
}

.btn-submit {
  display: block;
  position: relative;
  color: #fff;
  text-align: center;
  font-weight: bold;
  background: #43c801;
  box-shadow: 0 28px 38px 0 rgba(0,0,0,.06),0 30px 80px 0 rgba(0,0,0,.12);
  border: 0;
  padding: 1em;
  border-radius: 0.75em;
  font-size: 3.6vw;
  margin: 1em auto;
  width: 90%;
  max-width: 400px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  &:hover {
    cursor: pointer;
  }
}

.response-body {
  margin-bottom: 1.5em;
}

.btn-return {
  text-align: center;
  font-weight: bold;
  font-size: 3.2vw;
  &::before {
    content: '＞';
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
