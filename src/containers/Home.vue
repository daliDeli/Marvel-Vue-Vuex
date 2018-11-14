<template>
  <div id='root'>
    <Header />
    <AllCharacters />
  </div>
</template>

<script>
import Header from '../components/Header'
import AllCharacters from '../components/AllCharacters'
import store from '../store';
export default {
  components: {
    Header,
    AllCharacters
  },
  beforeRouteEnter(){
      store.dispatch('FETCH_CHARACTERS');
      store.dispatch('CHANGE_TYPE', 'CHARACTERS');
  }
}
</script>