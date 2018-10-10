<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed">
      <v-flex xs12 class="text-xs-center">
        <h2 class="vv-subheading font-lato text-xs-center">{{ $t("team") }}</h2>
      </v-flex>
      <v-container grid-list-lg v-if="!!story.content">
        <v-layout wrap justify-center>
          <v-flex xs12 sm6 lg4 v-for="member in story.content.body" :key="member.name" v-if="member.staff">
            <v-card height="100%">
              <v-img height="400px" :src="member.img" class="grey lighten-2">
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                </v-layout>
              </v-img>
              <v-card-title justify-center>
                <h3 class="d-block text-xs-center">{{member.name}}</h3>
                <h4 class="d-block text-xs-center">{{member.title}}</h4>
                <p class="text-xs-center">
                  {{member.bio}}
                </p>
                  <a class="text-xs-center"
                     v-if="member.twitter" :href="'http://www.twitter.com/' + member.twitter">
                    <i class="fab fa-twitter"></i> @{{member.twitter}}
                  </a>
                  <a class="text-xs-center" v-if="member.website.url" :href="member.website.url">
                    <i class="fas fa-link"></i> {{member.website.url}}
                  </a>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-flex xs12 class="text-xs-center">
        <h2 class="vv-subheading font-lato text-xs-center">{{ $t("board") }}</h2>
      </v-flex>
      <v-container grid-list-lg v-if="!!story.content">
        <v-layout wrap justify-center>
          <v-flex xs12 sm6 lg4 v-for="member in story.content.body" :key="member.name"
                  v-if="!member.staff">
            <v-card height="100%">
              <v-img height="400px" :src="member.img" class="grey lighten-2">
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                </v-layout>
              </v-img>
              <v-card-title justify-center>
                <h3 class="d-block text-xs-center">{{member.name}}</h3>
                <h4 class="d-block text-xs-center">{{member.title}}</h4>
                <p class="text-xs-center">
                  {{member.bio}}
                </p>
                <a class="text-xs-center"
                   v-if="member.twitter" :href="'http://www.twitter.com/' + member.twitter">
                  <i class="fab fa-twitter"></i> @{{member.twitter}}
                </a>
                <a class="text-xs-center" v-if="member.website.url" :href="member.website.url">
                  <i class="fas fa-link"></i> {{member.website.url}}
                </a>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </v-layout>
</template>

<script>
import storyblok from '../mixins/storyblok';
import messages from '../assets/translations/team';
export default {
  mixins: [storyblok],
  i18n: {
    messages,
  },
};
</script>

<style scoped>
h3,
h4 {
  width: 100%;
  padding-bottom: 10px;
}
p {
  font-size: 16px;
}
a {
  width: 100%;
  font-size: 16px;
  text-decoration: none;
  padding-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
