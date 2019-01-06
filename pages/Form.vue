<template>
  <!-- Begin Mailchimp Signup Form -->
  <div id="mc_embed_signup">
    <form
      action="https://vuevixens.us7.list-manage.com/subscribe/post?u=7754f9dbbdff11682c8ff2e73&amp;id=54e8642cad"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      @submit="formSubmit"
      novalidate>
      <div id="mc_embed_signup_scroll">
        <h2>Subscribe to our mailing list</h2>
        <div class="indicates-required">
          <span class="asterisk">*</span> indicates required
        </div>
        <div class="mc-field-group">
          <label for="mce-EMAIL">
            Email Address
            <span class="asterisk">*</span>
          </label>
          <input type="email" v-model="email" name="EMAIL" class="required email" id="mce-EMAIL">
        </div>
        <div class="mc-field-group">
          <label for="mce-FNAME">
            Full Name
            <span class="asterisk">*</span>
          </label>
          <input type="text" v-model="fName" name="FNAME" class="required" id="mce-FNAME">
        </div>
        <div class="mc-field-group">
          <label for="mce-AFFIL">Affiliation</label>
          <input type="text" v-model="affiliation" name="AFFIL" class id="mce-AFFIL">
        </div>
        <div class="mc-field-group">
          <label for="mce-FOOD">Food Preferences</label>
          <input type="text" v-model="foodPreferences" name="FOOD" class id="mce-FOOD">
        </div>
        <div class="mc-field-group">
          <label for="mce-CONF">Conference</label>
          <input type="text" v-model="conference" name="CONF" class id="mce-CONF">
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_7754f9dbbdff11682c8ff2e73_54e8642cad" tabindex="-1" value>
        </div>
        <div class="clear">
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="button">
        </div>
      </div>
    </form>
  </div>
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
