import Vue from "vue"

Vue.filter("dateformat", value => {
  return new Date(value).toLocaleDateString("ru-RU", {    
    day: "numeric",
    month: "numeric",
    year: "numeric"
  })
})
