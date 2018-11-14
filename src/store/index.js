import Vue from 'vue'
import Vuex from 'vuex'
import { getCharacters, getComics, getCreators } from '../services/apiService';

Vue.use(Vuex)

const state = {
  dataCharacters: [],
  dataComics: [],
  dataCreators: [], 
  type: 'characters'
}

const mutations = {
  RECEIVE_CHARACTERS (state, { characters }) {
    state.dataCharacters = characters;
  },
  RECEIVE_COMICS (state, { comics }) {
    state.dataComics = comics;
  },
  RECEIVE_CREATORS (state, { creators }) {
    state.dataCreators = creators;
  },
  CHANGE_TYPE(state, type) {
    state.type = type;
  }
}

const actions = {
  FETCH_CHARACTERS ({ commit }) {
    getCharacters()
      .then(({ data }) => commit('RECEIVE_CHARACTERS', { characters: data.data.results }))
  },
  FETCH_COMICS ({ commit }) {
    getComics()
      .then(({ data }) => commit('RECEIVE_COMICS', { comics: data.data.results }))
  },
  FETCH_CREATORS ({ commit }) {
    getCreators()
      .then(({ data }) => commit('RECEIVE_CREATORS', { creators: data.data.results }))
  },
  CHANGE_TYPE({ commit }, type){
    commit('CHANGE_TYPE', type)
  }
}

const getters = {
  marvelData: state => {
    switch(state.type){
      case 'CHARACTERS':
        return state.dataCharacters.map(data => {
          return {
            name: data.name,
            url: data.urls[1] || data.urls[0].url,
            image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
          }
        })
      case 'COMICS':
        return state.dataComics.map(data =>{
          return {
            name: data.title,
            url: data.urls[0].url,
            image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
          }
        })
      case 'CREATORS':
        return state.dataCreators.map(data => {
          return {
            name: data.fullName || 'NO NAME',
            url: data.urls[0].url,
            image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
          }
        })
    } 
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store;