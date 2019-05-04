<template>
  <v-layout v-if="!!currentEvent" fill-height column>
    <v-parallax class="vv-day-hero" :src="currentEvent.image">
      <v-layout align-center justify-end column wrap>
        <h1 class="primary--text font-lato">{{currentEvent.city}}</h1>
        <h2 class="primary--text font-lato">{{currentEvent.date | moment('MMM Do')}}</h2>
        <p class="mb-0 font-weight-medium">
          <i class="fas fa-map-marker-alt mr-2"></i>{{currentEvent.location}}
        </p>
        <div class="mt-3 mb-5">
          <v-btn
            v-if="currentEvent.registration"
            color="primary darken-1"
            :to="`/form/${$route.params.event}`"
          >
            Registration
          </v-btn>
          <v-btn
            v-if="currentEvent.callForSpeakersUrl"
            :href="currentEvent.callForSpeakersUrl"
            color="primary darken-1"
          >
            Call for speakers
          </v-btn>
        </div>
      </v-layout>
    </v-parallax>
    <!-- end hero -->
    <!-- info section -->
    <v-container pa-5>
      <h1 class="text-xs-center ma-3 primary--text font-lato">
        {{currentEvent.title}}
      </h1>
      <v-layout row justify-center>
        <v-flex xs12 sm12 px-5 d-flex align-center v-html="toHtml(currentEvent.description)">
        </v-flex>
        <v-flex xs12 sm12 px-5 v-if="currentEvent.schedule">
          <h3 class="headline-1 mb-2">Schedule</h3>
          <div v-html="toHtml(currentEvent.schedule)"></div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>
    <!-- end info section -->
    <!-- speakers section -->
    <div v-if="currentEvent.speakers && currentEvent.speakers.length" class="secondary darken-2">
      <v-container pa-5>
        <h1 class="text-xs-center ma-3 white--text font-lato">Speakers</h1>
        <v-layout wrap justify-space-around>
          <v-flex xs12 sm3 md2 pa-2
            v-for="speaker in currentEvent.speakers"
            :key="speaker.name">
            <v-card>
              <v-img height="150px"
                :alt="`${speaker.name} picture`"
                :src="speaker.picture"
                class="grey lighten-2">
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                </v-layout>
              </v-img>
              <v-card-title justify-center>
                <p class="heading text-xs-center mb-1">{{speaker.name}}</p>
                <a class="subheading text-xs-center"
                    v-if="speaker.twitter" :href="`http://www.twitter.com/${speaker.twitter}`">
                  <i class="fab fa-twitter"></i> @{{speaker.twitter}}
                </a>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <!-- end speakers section -->
    <!-- mentors section -->
    <v-container v-if="currentEvent.mentors && currentEvent.mentors.length" pa-5>
      <h1 class="text-xs-center ma-3 primary--text font-lato">Mentors</h1>
      <v-layout wrap justify-space-around>
        <v-flex xs12 sm3 md2 pa-2
          v-for="mentor in currentEvent.mentors"
          :key="mentor.name">
          <v-card>
            <v-img height="150px"
              :alt="`${mentor.name} picture`"
              :src="mentor.picture"
              class="grey lighten-2">
              <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
              </v-layout>
            </v-img>
            <v-card-title justify-center>
              <p class="heading mb-1 text-xs-center">{{mentor.name}}</p>
              <a class="subheading text-xs-center"
                  v-if="mentor.twitter" :href="`http://www.twitter.com/${mentor.twitter}`">
                <i class="fab fa-twitter"></i> @{{mentor.twitter}}
              </a>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>
    <!-- end mentors section -->
    <!-- sponsors section -->
    <v-container v-if="currentEvent.sponsors && currentEvent.sponsors.length" pa-5>
      <h1 class="text-xs-center primary--text font-lato ma-3">
        Sponsors
      </h1>
      <v-layout row wrap justify-space-around>
        <v-flex xs12 sm3
          v-for="sponsor in currentEvent.sponsors"
          :key="sponsor.name">
          <v-card class="vv-day-sponsor px-4 mb-3">
            <a :href="sponsor.link" target="_blank">
              <img :src="sponsor.logo" class="vv-day-sponsor-logo">
            </a>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- end sponsors section -->
  </v-layout>
</template>

<script>
import storyblok from '../../mixins/storyblok';
import { markdown } from 'markdown';

export default {
  mixins: [storyblok],
  computed: {
    currentEvent() {
      return this.story.content;
    },
  },
  methods: {
    toHtml(text) {
      return markdown.toHTML(text);
    },
    resize(image, option) {
      const imageService = '//img2.storyblok.com/';
      const path = image.replace('//a.storyblok.com', '');
      return imageService + option + path;
    },
  },
};
</script>

<style lang="scss">
.vv-day-hero img {
  filter: brightness(50%);
}
</style>

<style lang="scss">
.vv-day {
  &-hero {
    text-align: center;
  }

  &-sponsor {
    display: flex;
    justify-content: center;

    &-logo {
      max-width: 100%;
    }
  }
}
</style>
