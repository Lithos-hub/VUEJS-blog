<template>
  <div class="container-fluid" id="header">
    <div class="text-center my-5">
      <h1 class="my-5 maxTitle">Blog title</h1>

      <v-spacer></v-spacer>
      <p class="lead my-5" id="subtitle">
        Almost before we knew it, we had left the ground.
      </p>
      <hr class="my-4" />
      <p class="lead" id="welcome">Welcome to my blog! Enjoy it!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  #header {
    margin-top: 180px;
  }

  .maxTitle {
    font-size: 16vmax;
    color: white;
    background: url(../assets/img/background-header.jpg) 50%;
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #backgroundTitle {
    background: transparent;
    background-position: center;
  }

  #subtitle {
    font-size: 4vmax;
    font-family: $fontstyle1;
    color: $primary;
  }

  #welcome {
    font-size: 30px;
    padding-bottom: 150px;
  }
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #header {
    margin-top: 160px;
  }

  .maxTitle {
    font-size: 16vmax;
    color: white;
    background: url(../assets/img/background-header.jpg) 50%;
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #backgroundTitle {
    background: transparent;
    background-position: center;
  }

  #subtitle {
    font-size: 4vmax;
    font-family: $fontstyle1;
    color: $primary;
  }

  #welcome {
    font-size: 30px;
    padding-bottom: 150px;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #header {
    margin-top: 160px;
  }

  .maxTitle {
    font-size: 20vmax;
    color: white;
    background: url(../assets/img/background-header.jpg) 50%;
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #backgroundTitle {
    background: transparent;
    background-position: center;
  }

  #subtitle {
    font-size: 5vmax;
    font-family: $fontstyle1;
    color: $primary;
  }

  #welcome {
    font-size: 30px;
    padding-bottom: 200px;
  }
}
</style>
