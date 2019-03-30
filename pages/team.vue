<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed">
      <v-flex xs12 class="text-xs-center">
        <h2 class="vv-subheading font-lato text-xs-center">{{ $t("team") }}</h2>
      </v-flex>
      <v-container grid-list-lg v-if="!!story.content">
        <v-layout wrap justify-center>
          <v-flex xs12 sm6 lg4 v-for="member in staffMembers" :key="member.name">
            <v-card height="100%">
              <no-ssr>
                <v-img height="400px" :src="member.img" class="grey lighten-2">
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </no-ssr>
              <v-card-title justify-center>
                <h3 class="d-block text-xs-center">{{member.name}}</h3>
                <h4 class="d-block text-xs-center">{{member.title}}</h4>
                <a class="text-xs-center"
                    v-if="member.twitter" :href="'http://www.twitter.com/' + member.twitter">
                  <i class="fab fa-twitter"></i> @{{member.twitter}}
                </a>
                <a class="text-xs-center" v-if="member.website.url" :href="member.website.url">
                  <i class="fas fa-link"></i> {{member.website.url}}
                </a>
                <p class="text-xs-center">
                  {{member.bio}}
                </p>
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
          <v-flex xs12 sm6 lg4 v-for="member in boardMembers" :key="member.name">
            <v-card height="100%">
              <no-ssr>
                <v-img height="400px" :src="member.img" class="grey lighten-2">
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </no-ssr>
              <v-card-title justify-center>
                <h3 class="d-block text-xs-center">{{member.name}}</h3>
                <h4 class="d-block text-xs-center">{{member.title}}</h4>
                <a class="text-xs-center"
                   v-if="member.twitter" :href="'http://www.twitter.com/' + member.twitter">
                  <i class="fab fa-twitter"></i> @{{member.twitter}}
                </a>
                <a class="text-xs-center" v-if="member.website.url" :href="member.website.url">
                  <i class="fas fa-link"></i> {{member.website.url}}
                </a>
                <p class="text-xs-center">
                  {{member.bio}}
                </p>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-flex xs12 class="text-xs-center">
        <h2 class="vv-subheading font-lato text-xs-center">{{ $t("chapter") }}</h2>
      </v-flex>
      <v-container grid-list-lg v-if="!!story.content">
        <v-layout wrap justify-center>
          <v-flex xs12 sm4 lg3 v-for="member in chapterLeaders" :key="member.name">
            <v-card height="100%">
              <no-ssr>
                <v-img height="200px" :src="member.img || '/images/fox-placeholder.jpg'" class="grey lighten-2">
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </no-ssr>
              <v-card-title justify-center>
                <h3 class="d-block text-xs-center">{{member.name}}</h3>
                <h4 class="d-block text-xs-center primary--text text--darken-2">{{member.title}} Chapter Leader</h4>
                <a class="text-xs-center"
                   v-if="member.twitter" :href="'http://www.twitter.com/' + member.twitter">
                  <i class="fab fa-twitter"></i> @{{member.twitter}}
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
  computed: {
    staffMembers() {
      return this.story.content.body.filter(member => member.staff)
    },
    boardMembers() {
      return this.story.content.body.filter(member => !member.staff && !member.chapter && !member.regional)
    },
    chapterLeaders() {
      return this.story.content.body.filter(member => member.chapter)
    }
  }
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
