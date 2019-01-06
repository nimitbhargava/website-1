<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed">
      <v-flex xs12 >
        <h1 class="display-2 text-xs-center">Event registration form</h1>
        <v-form
          action="https://vuevixens.us7.list-manage.com/subscribe/post?u=7754f9dbbdff11682c8ff2e73&amp;id=54e8642cad"
          method="post"
          @submit="formSubmit">
            <v-text-field name="EMAIL" label='Email' required></v-text-field>
            <v-text-field name="FNAME" label='Full name' required></v-text-field>
            <v-text-field name="AFFIL" label='Affiliation'></v-text-field>
            <v-text-field name="FOOD" label='Food preferences (if any)'></v-text-field>
            <input type="text" name="CONF" class="hidden">
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_7754f9dbbdff11682c8ff2e73_54e8642cad" tabindex="-1" value>
            </div>
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
      email: '',
      fName: '',
      affiliation: '',
      foodPreferences: '',
      conference: '',
      gdpr: false,
    };
  },
  methods: {
    formSubmit() {
      this.email = '';
      this.fName = '';
      this.affiliation = '';
      this.foodPreferences = '';
      this.conference = '';
      this.gdpr = false;
    }
  }
};
</script>
