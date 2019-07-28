<template>
  <v-footer height="auto" color="secondary darken-2">
    <v-layout class="footer-links hidden-sm-and-down" justify-start align-center row wrap>
      <v-btn color="white" flat round to="/credits">{{ $t("credits") }}</v-btn>
      <v-btn
        color="white"
        flat
        round
        href="https://spark.adobe.com/page/FFczmvHR6Brpu/"
        target="_blank"
      >{{ $t("press") }}</v-btn>
      <v-btn
        color="white"
        flat
        round
        href="mailto:info@vuevixens.org"
        target="_blank"
      >{{ $t("contact") }}</v-btn>
      <v-btn color="white" flat round to="/about">{{ $t("charity") }}</v-btn>
    </v-layout>
    <v-layout justify-end align-center row wrap>
      <a href="https://tinyletter.com/VueVixens" target="_blank">
        <i class="far fa-newspaper fa-2x"></i>
      </a>
      <a href="https://twitter.com/VueVixens" target="_blank">
        <i class="fab fa-twitter fa-2x"></i>
      </a>
      <a href="https://slackin-fxsumkvfno.now.sh/" target="_blank">
        <i class="fab fa-slack fa-2x"></i>
      </a>
    </v-layout>
  </v-footer>
</template>

<script>
import messages from "../assets/translations/footer";

export default {
  i18n: {
    messages
  }
};
</script>

<style scoped lang="scss">
a {
  display: flex;
  padding: 0 15px;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }
  i {
    font-size: 22px;
    color: white;
  }
}
</style>
