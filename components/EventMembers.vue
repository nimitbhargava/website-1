<template>
  <v-container pa-5>
    <h1 class="text-xs-center ma-3 white--text font-lato">Speakers</h1>
    <v-layout wrap justify-space-around>
      <v-flex xs12 sm3 md2 pa-2 v-for="member in members" :key="member.name">
        <v-card>
          <v-img
            height="150px"
            :alt="`${member.name} picture`"
            :src="member.picture"
            class="grey lighten-2"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
            </v-layout>
          </v-img>
          <v-card-title justify-center>
            <p class="heading text-xs-center mb-1">{{member.name}}</p>
            <a
              class="subheading text-xs-center"
              v-if="member.twitter"
              :href="`http://www.twitter.com/${member.twitter}`"
            >
              <i class="fab fa-twitter"></i>
              @{{member.twitter}}
            </a>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    members: {
      type: Array,
      required: true
    }
  }
};
</script>