// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// 数据
let state = {
  lists: [], // 列表
  detail: {} // 详情
}

// 事件
let actions = {
  // 获取列表
  fetchLists ({ commit }, data) {
    return axios.get('https://cnodejs.org/api/v1/topics?page=' + data.page)
    .then((res) => {
      if (res.data.success) {
        commit('setLists', res.data.data)
      }
    })
  },
  // 获取详情
  fetchDetail ({ commit }, data) {
    return axios.get('https://cnodejs.org/api/v1/topic/' + data.id)
    .then((res) => {
      if (res.data.success) {
        commit('setDetail', res.data.data)
      }
    })
  }
}

// 改变
let mutations = {
  setLists (state, data) {
    state.lists = data
  },
  setDetail (state, data) {
    state.detail = data
  }
}

// 获取
let getters = {
  getLists: state => {
    return state.lists
  },
  getDetail: state => {
    return state.detail
  }
}

export function createStore () {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  })
}