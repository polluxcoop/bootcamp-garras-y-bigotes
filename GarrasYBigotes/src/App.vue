<template>
  <div id="app">
    <main-banner />

    <photos-kittens />

    <registration-form />

    <footer-icons />
  </div>
</template>


<script>
import FooterIcons from "./components/FooterIcons.vue";
import MainBanner from "./components/MainBanner";
import PhotosKittens from "./components/PhotosKittens";
import RegistrationForm from "./components/RegistrationForm";

export default {
  name: "App-component",

  components: {
    MainBanner,
    PhotosKittens,
    RegistrationForm,
    FooterIcons,
  },
};
</script>

<style >
* {
  padding: 0;
  margin: 0;
}
</style>