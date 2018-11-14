<template>
    <div v-if='!!marvelData.length' class='character-div'>
        <div v-for='data in marvelData' :key='data.name' class='character-card'>
            <img 
                :src='data.image'
                class='character-img'
            >
            <div>
                <div class='character-name-description'>
                    <h2 class='headline mb-0'>{{data.name}}</h2>
                </div>
            </div>
                <a class='info-button'
                target='_blank'
                :href='data.url'
                >
                    More Info
                </a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'marvelData'
  ]),
}
</script>