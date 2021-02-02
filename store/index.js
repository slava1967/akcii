export const state = () => ({
  siteName: 'Товары по акции',
  contactData: {
    yourName: null,
    yourEmail: null,
    subject: null,
    message: null
  },
  postData: {
    yourSubject: null,
    menuCategory: null,
    yourMessage: null
  }
})

export const getters = {
  getContactData: state => state.contactData,
  getPostData: state =>state.postData
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('categories/getCategories')
  },
  resetContact(context) {
    const emptyContact = {
      yourName: null,
      yourEmail: null,
      subject: null,
      message: null
    }
    context.commit('setContactData', emptyContact)
  },
  resetCategory(context) {
    const emptyPost = {
      yourSubject: null,
      menuCategory: null,
      yourMessage: null
    }
    context.commit('setPostData', emptyPost)
  }
}

export const mutations = {
  setContactData(state, payload) {
    state.contactData = payload
  },
  setPostData(state, payload) {
    state.postData = payload
  }
}
