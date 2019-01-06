<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed">
      <v-flex xs12>
        <h1 class="display-2 text-xs-center">Event registration form</h1>
        <v-form
          action="https://vuevixens.us7.list-manage.com/subscribe/post?u=7754f9dbbdff11682c8ff2e73&amp;id=54e8642cad"
          method="post"
          class="submit-form"
          @submit="formSubmit"
          v-model="valid">
          <v-text-field name="EMAIL" label="Email *" required></v-text-field>
          <v-text-field
            name="FNAME"
            label="Full name *"
            required></v-text-field>
          <v-text-field name="AFFIL" label="Affiliation"></v-text-field>
          <v-text-field
            name="FOOD"
            label="Food preferences (if any)"></v-text-field>
          <input type="text" name="CONF" class="hidden-field" />
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div class="hidden-field">
            <input
              type="text"
              name="b_7754f9dbbdff11682c8ff2e73_54e8642cad"
              tabindex="-1"
              value/>
          </div>
          <v-checkbox
            color="secondary"
            label="I agree to receive emails from VueVixens organisation"></v-checkbox>
          <p class="text-xs-left caption">You can unsubscribe at any time by clicking the link in the footer of our emails.</p>
          <p class="text-xs-left caption">We use Mailchimp as our marketing platform. By clicking below to subscribe,
            you acknowledge that your information will be transferred to Mailchimp for processing.
            <a href="https://mailchimp.com/legal/" target="_blank">
              Learn more about Mailchimp's privacy practices here.
            </a>
          </p>
          <v-btn color="card-button secondary darken-2" dark type="submit">Submit</v-btn>
        </v-form>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
    };
  },
};
</script>

<style scoped>
.submit-form {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 40px;
  text-align: center;
}
.hidden-field {
  position: absolute;
  left: -5000px;
}
.card-button {
  margin-top: 20px;
}
</style>
