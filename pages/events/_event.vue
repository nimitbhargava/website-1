<template>
  <v-layout class="vv-container" fill-height column>
    <no-ssr>
      <v-img height="350px" :src="currentEvent.image" class="grey lighten-2">
        <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
          <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
        </v-layout>
      </v-img>
    </no-ssr>
    <v-container class="indexed" fill-height>
      <v-flex xs12>
        <div class="event-wrapper">
          <h3 class="vv-subheading font-lato text-xs-center">{{currentEvent.title}}</h3>
          <div class="card-meta">
            <p v-if="currentEvent.conference.url">
              <a :href="currentEvent.conference.url" target="_blank">
                <i class="fas fa-link secondary--text text--lighten-2"></i>
                {{currentEvent.conference.url}}
              </a>
            </p>
            <p v-if="currentEvent.date" class="secondary--text text--lighten-2">
              <i class="far fa-calendar-alt"></i>
              {{currentEvent.date| moment('MMM Do, YYYY')}}
            </p>
            <p v-if="currentEvent.location" class="secondary--text text--lighten-2">
              <i class="fas fa-map-marker-alt"></i>
              {{currentEvent.location}}
            </p>
          </div>
          <div class="text-xs-left" v-html="toHtml(currentEvent.description)"></div>
          <div class="card-buttons">
            <v-btn color="card-button secondary darken-2" dark v-for="action in currentEvent.actions"
                   :key="action.text"
                   :href="action.url.url" target="_blank">
              {{action.text}}
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-container>
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
  },
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

.vv-container {
  padding-bottom: 0;
}

.container.indexed {
  padding-top: 0;
  padding-bottom: 0;
}

.event-wrapper {
  padding: 0 15px;
}

h3 {
  width: 100%;
  padding-top: 20px;
}

.card-meta {
  padding: 20px 0;
  text-align: left;
  width: 100%;
  a {
    width: 100%;
    display: block;
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  i {
    padding-right: 5px;
  }
  p {
    margin: 0;
  }
}

.card-buttons {
  width: 100%;
  text-align: center;
  padding-bottom: 50px;
  padding-top: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 400px) {
  .card-button {
    display: block;
    width: 100%;
    margin-left: 0;
    margin-bottom: 5px;
  }

  .v-card__actions .v-btn + .v-btn.card-button {
    margin-left: 0;
  }
}
</style>
