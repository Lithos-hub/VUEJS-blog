<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container fluid id="main-container">
        <Header />
        <v-row class="mx-5">
          <v-col md="9" xs="12">
            <router-view></router-view>
          </v-col>
          <v-col md="3" xs="12">
            <Sidemenu />
          </v-col>
        </v-row>
      </v-container>

      <VideoSection />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sidemenu from "./components/Sidemenu";
import Footer from "./components/Footer";
import VideoSection from "./components/VideoSection";

export default {
  name: "App",

  components: {
    Navbar,
    Header,
    Sidemenu,
    Footer,
    VideoSection,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "src/scss/variables";

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $primary;
  border-radius: none;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $primary;
}

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
}
</style>
