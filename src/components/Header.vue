<template>
    <header>
        <h1 id='logo'>Marvel</h1>
          <div >
            <button
            class='info-button'
            @click='getComics'
            >
              COMICS
            </button>
            <button
            class='info-button'
            @click='getCharacters'
            >
              CHARACTERS
            </button>
            <button
            class='info-button'
            @click='getCreators'
            >
              CREATORS
            </button>
          </div>
    </header>
</template>

<script>
export default {
  methods: {
    getCharacters() {
      this.$store.dispatch('FETCH_CHARACTERS');
      this.$store.dispatch('CHANGE_TYPE', 'CHARACTERS');
    },
    getComics() {
      this.$store.dispatch('FETCH_COMICS');
      this.$store.dispatch('CHANGE_TYPE', 'COMICS');
    },
    getCreators() {
      this.$store.dispatch('FETCH_CREATORS');
      this.$store.dispatch('CHANGE_TYPE', 'CREATORS');

    }
  }
}
</script>