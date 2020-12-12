<template>
  <div id="backgroundVideos">
    <v-container class="text-white pb-6">
      <h1 class="display-5 text-center my-6">Videos</h1>
      <v-row id="videosDisplay">
        <v-col lg="4" xs="12">
          <iframe
            width="100%"
            height="60%"
            src="https://www.youtube.com/embed/PaErPyEnDvk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <iframe
            width="100%"
            height="60%"
            src="https://www.youtube.com/embed/uD4izuDMUQA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-col>

        <v-col lg="8" xs="12">
          <iframe
            width="100%"
            height="120%"
            src="https://www.youtube.com/embed/ThDYazipjSI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "VideoSection",
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  #backgroundVideos {
    background-color: #161616;
    height: 700px;
  }

  #videosDisplay {
    margin-left: 0px;
    margin-right: 0px;
    min-width: 100%;
  }

  h1 {
    color: $primary;
    font-family: $fontstyle6;
  }
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #backgroundVideos {
    background-color: #161616;
    height: 600px;
  }

  #videosDisplay {
    margin-left: 0px;
    margin-right: 0px;
  }

  h1 {
    color: $primary;
    font-family: $fontstyle6;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #backgroundVideos {
    background-color: #161616;
    height: 600px;
  }

  #videosDisplay {
    margin-left: 0px;
    margin-right: 0px;
  }

  h1 {
    color: $primary;
    font-family: $fontstyle6;
  }
}
</style>
