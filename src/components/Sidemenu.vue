<template>
  <div>
    <v-sheet
      class="sidemenu"
      color="white"
      elevation="19"
      height="100%"
      width="100%"
      absolute
    >
      <div class="text-center">
        <h3 class="mb-5">About me</h3>

        <v-img
          src="../assets/img/authorPicture.jpg"
          width="150px"
          class="rounded-circle m-auto"
        ></v-img>

        <v-divider></v-divider>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga omnis,
          beatae rerum quis est quisquam reiciendis alias animi necessitatibus!
        </p>

        <v-card class="my-5">
          <v-row elevation="120">
            <v-col>
              <v-btn elevation="5">
                <v-icon color="error"> mdi-facebook </v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn elevation="5">
                <v-icon color="error"> mdi-instagram </v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn elevation="5">
                <v-icon color="error"> mdi-twitter </v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn elevation="5">
                <v-icon color="error"> mdi-github </v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn elevation="5">
                <v-icon color="error"> mdi-youtube </v-icon>
              </v-btn>
            </v-col>

            <v-col>
              <v-btn elevation="5">
                <v-icon color="error"> mdi-linkedin </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-sheet>

    <!-- SPACER --------------------------------------------------------------------- -->
    <br />
    <!-- SPACER --------------------------------------------------------------------- -->

    <v-sheet
      class="sidemenu"
      color="white"
      elevation="19"
      height="500"
      width="100%"
      absolute
    >
      <h3 class="text-center mb-5">Categories</h3>

      <template>
        <v-list prominent class="text-center">
          <v-list-item-group>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title> Technology </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title> Nature </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title> Art </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title> Science </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title> Trends </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title> Design </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title> Food </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </template>
    </v-sheet>

    <!-- SPACER --------------------------------------------------------------------- -->
    <br />
    <!-- SPACER --------------------------------------------------------------------- -->

    <v-sheet
      class="sidemenu"
      color="white"
      elevation="19"
      height="100%"
      width="100%"
      absolute
    >
      <h3 class="text-center mb-5">Recent posts</h3>

      <div class="text-center">
        <v-sheet elevation="10" class="p-2" id="recentPost">
          <v-img
            src="../assets/img/example1.jpg"
            max-width="300"
            max-height="120"
            class="m-auto my-5"
          ></v-img>

          <h5 class="black--text">Post title</h5>
          <v-card-subtitle>2 hours ago</v-card-subtitle>
        </v-sheet>

        <br />

        <v-sheet elevation="10" class="p-2" id="recentPost">
          <v-img
            src="../assets/img/example2.jpg"
            max-width="300"
            max-height="120"
            class="m-auto my-5"
          ></v-img>

          <h5 class="black--text">Post title</h5>
          <v-card-subtitle>1 day ago</v-card-subtitle>
        </v-sheet>

        <br />

        <v-sheet elevation="10" class="p-2" id="recentPost">
          <v-img
            src="../assets/img/example3.jpg"
            max-width="300"
            max-height="120"
            class="m-auto my-5"
          ></v-img>

          <h5 class="black--text">Post title</h5>
          <v-card-subtitle>3 days ago</v-card-subtitle>
        </v-sheet>

        <br />

        <v-sheet elevation="10" class="p-2" id="recentPost">
          <v-img
            src="../assets/img/example4.jpg"
            max-width="300"
            max-height="120"
            class="m-auto my-5"
          ></v-img>

          <h5 class="black--text">Post title</h5>
          <v-card-subtitle>6 days ago</v-card-subtitle>
        </v-sheet>

        <br />

        <v-sheet elevation="10" class="p-2" id="recentPost">
          <v-img
            src="../assets/img/example5.jpg"
            max-width="300"
            max-height="120"
            class="m-auto my-5"
          ></v-img>

          <h5 class="black--text">Post title</h5>
          <v-card-subtitle>9 days ago</v-card-subtitle>
        </v-sheet>

        <br />
      </div>
    </v-sheet>

    <!-- SPACER --------------------------------------------------------------------- -->
    <br />
    <!-- SPACER --------------------------------------------------------------------- -->

    <v-sheet
      class="sidemenu"
      color="white"
      elevation="19"
      height="100%"
      width="100%"
      absolute
    >
      <h3 class="text-center mb-5">Newsletter</h3>

      <p class="muted text-center">
        Subscribe to our newsletter and get our newest updates right on your inbox.
      </p>

      <div class="form-group text-center">
        <input
          type="email"
          class="form-control mb-3"
          placeholder="Your email address"
          to="/"
        />

        <v-container class="px-0" fluid>
          <v-checkbox label="I agree to the terms & conditions"></v-checkbox>
        </v-container>

        <v-btn color="error" class="mt-5">Subscribe</v-btn>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Sidemenu",
};
</script>

<style lang="scss">
@import "src/scss/variables.scss";

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  .sidemenu {
    padding: 20px;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  .sidemenu {
    padding: 50px;
  }

  h3 {
    font-family: $fontstyle5;
    letter-spacing: 10px;
  }

  #recentPost:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
}
</style>
