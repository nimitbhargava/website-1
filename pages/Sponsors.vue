<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed">
      <v-flex xs12 class="text-xs-center">
        <h2 class="vv-subheading font-lato text-xs-center">
          {{ $t('title') }}
        </h2>
        <i18n path="subtitle" class="vv-content title" tag="p">
          <a href="mailto:info@vuevixens.org" place="mail">{{
            $t('mailLink')
          }}</a>
          <a
            href="https://spark.adobe.com/page/FFczmvHR6Brpu/"
            place="presskit"
            target="blank"
          >
            {{ $t('presskitLink') }}
          </a>
        </i18n>
      </v-flex>
      <v-container grid-list-lg v-if="!!story.content">
        <v-layout wrap>
          <v-flex
            xs12
            sm6
            lg4
            v-for="sponsor in story.content.body"
            :key="sponsor.name"
          >
            <v-card height="100%">
              <img :src="sponsor.img" :alt="`${sponsor.name} Logo`" />
              <v-card-title justify-center>
                <h3 class="d-block text-xs-center">{{ sponsor.name }}</h3>
                <p class="text-xs-center">{{ sponsor.tagline }}</p>
                <p class="text-xs-center">{{ sponsor.description }}</p>
              </v-card-title>
              <a :href="sponsor.website.url" class="d-block text-xs-center">
                <i class="fa fa-link" aria-hidden="true"></i>
                {{ sponsor.website.url }}
              </a>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </v-layout>
</template>

<script>
import storyblok from '../mixins/storyblok';
import messages from '../assets/translations/sponsors';
export default {
  mixins: [storyblok],
  i18n: {
    messages,
  },
};
</script>

<style scoped>
h3 {
  width: 100%;
  padding-bottom: 10px;
}

a {
  padding-bottom: 30px;
  text-decoration: none;
}

img {
  width: 100%;
  max-width: 100%;
}
</style>
