<template>
  <v-footer
    height="auto" color="secondary darken-2">
    <v-layout class="footer-links hidden-sm-and-down" justify-start align-center row wrap>
      <v-btn
        color="white" flat round
        href="https://www.progress.com/" target="_blank">
        {{ $t("progress") }}
      </v-btn>
      <v-btn
        color="white" flat round to="/request">
        {{ $t("request") }}
      </v-btn>
      <v-btn
        color="white" flat round to="/credits">
        {{ $t("credits") }}
      </v-btn>
      <v-btn
        color="white" flat round
        href="https://spark.adobe.com/page/FFczmvHR6Brpu/" target="_blank">
        {{ $t("Press Kit") }}
      </v-btn>
      <v-btn
        color="white" flat round
        href="mailto:info@vuevixens.org" target="_blank">
        {{ $t("Contact Us") }}
      </v-btn>
    </v-layout>
  </v-footer>
</template>

<script>
  import messages from '../assets/translations/footer'

  export default {
    i18n: {
      messages
    }
  }
</script>

<style scoped lang="scss">
  a {
    display: flex;
    padding: 0 15px;
    text-decoration: none;
    &:hover, &:active, &:focus {
      text-decoration: none;
    }
    i {
      font-size: 22px;
      color: white
    }
  }
</style>
