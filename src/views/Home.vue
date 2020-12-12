<template>
  <div class="home">
    <h1 class="mb-5">Top Stories</h1>

    <v-container fluid>
      <v-row>
        <v-col md="8" sm="12">
          <router-link to="/" class="text-decoration-none">
            <v-sheet color="white" elevation="12" height="100%" class="hoverCard">
              <div class="container pt-5 w-100">
                <v-parallax src="../assets/img/example1.jpg" class="rounded">
                  <v-spacer></v-spacer>

                  <div id="postInfo">
                    <h2 class="white--text display-5">Medium size post #1 title</h2>
                    <p class="white--text">By author · July 17, 2020</p>
                    <span class="mb-1">
                      <v-icon class="white--text">mdi-eye</v-icon> 5k Views

                      <v-icon class="white--text">mdi-share-variant-outline</v-icon>
                      230 shares
                    </span>
                  </div>

                  <p class="bg-primary text-left" id="badge">Technology</p>
                </v-parallax>

                <v-divider></v-divider>

                <div class="strong dark--text text-justify m-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi
                  quas facilis repellendus voluptate corporis, repellat blanditiis sed
                  ipsam atque alias praesentium suscipit. Debitis exercitationem numquam
                  illum animi non temporibus velit, voluptatum eum officia explicabo
                  veniam Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                  voluptatibus cupiditate fugit, esse minus et modi nisi distinctio error
                  quas omnis magnam quis placeat veniam magni aspernatur voluptates
                  assumenda temporibus? <br /><br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error expedita
                  aperiam architecto dignissimos fugit minus nostrum illum, accusantium,
                  quidem, aspernatur quos itaque. Incidunt, impedit eveniet, reiciendis
                  neque laudantium culpa architecto repellendus illo sunt voluptatem ipsum
                  voluptate dolores, dolor doloribus! Voluptatem corrupti ipsum neque
                  deleniti dolorem qui velit perspiciatis minima numquam.
                  <p class="lead dark--text mt-5">Continue reading</p>
                </div>
              </div>
            </v-sheet>
          </router-link>
        </v-col>

        <v-col md="4" sm="12">
          <router-link to="/" class="text-decoration-none">
            <v-sheet color="white" elevation="12" height="490" class="hoverCard">
              <div class="container pt-5">
                <v-parallax height="450" src="../assets/img/example2.jpg" class="rounded">
                  <v-spacer></v-spacer>

                  <div id="postInfoSmall">
                    <h2 class="white--text display-1">Small size post #2 title</h2>
                    <p class="white--text">By author · August 23, 2020</p>
                    <span class="mb-1">
                      <v-icon class="white--text">mdi-eye</v-icon> 2k Views

                      <v-icon class="white--text">mdi-share-variant-outline</v-icon>
                      530 shares
                    </span>
                  </div>

                  <p class="bg-primary text-left" id="badgeSmall">Technology</p>
                </v-parallax>
              </div>
            </v-sheet>
          </router-link>

          <br />

          <router-link to="/" class="text-decoration-none">
            <v-sheet color="white" elevation="12" height="485" class="hoverCard">
              <div class="container pt-5">
                <v-parallax height="450" src="../assets/img/example3.jpg" class="rounded">
                  <v-spacer></v-spacer>

                  <div id="postInfoSmall">
                    <h2 class="white--text display-1">Small size post #3 title</h2>
                    <p class="white--text">By author · September 1, 2020</p>
                    <span class="mb-1">
                      <v-icon class="white--text">mdi-eye</v-icon> 1k Views

                      <v-icon class="white--text">mdi-share-variant-outline</v-icon>
                      130 shares
                    </span>
                  </div>

                  <p class="bg-success text-left" id="badgeSmall">Nature</p>
                </v-parallax>
              </div>
            </v-sheet>
          </router-link>
        </v-col>
      </v-row>
      <br />

      <router-link to="/" class="text-decoration-none">
        <v-sheet color="white" elevation="12" width="100%" class="hoverCard">
          <div class="container pt-5 w-100">
            <v-parallax src="../assets/img/example5.jpg" class="rounded">
              <div id="postInfoBig">
                <h1 class="white--text display-5">Big size post #3 title</h1>
              </div>

              <p class="bg-danger text-left" id="badge">Science</p>
            </v-parallax>

            <p class="display-5 my-5 text-right">By Author - 9 November, 2020</p>
            <div class="mb-1 text-right">
              <v-icon class="black--text">mdi-eye</v-icon> 1k Views

              <v-icon class="black--text">mdi-share-variant-outline</v-icon> 130 shares
            </div>

            <div class="lead black--text text-justify my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi
              quas facilis repellendus voluptate corporis, repellat blanditiis sed ipsam
              atque alias praesentium suscipit. Debitis exercitationem numquam illum animi
              non temporibus velit, voluptatum eum officia explicabo veniam...
              <p class="lead black--text mt-5">Continue reading</p>
            </div>
          </div>
        </v-sheet>
      </router-link>

      <br />

      <router-link to="/" class="text-decoration-none">
        <v-sheet color="white" elevation="12" width="100%" class="hoverCard">
          <div class="container pt-5 w-100">
            <v-parallax src="../assets/img/example6.jpg" class="rounded">
              <div id="postInfoBig">
                <h1 class="white--text display-5">Big size post #4 title</h1>
              </div>

              <p class="bg-danger text-left" id="badge">Science</p>
            </v-parallax>

            <p class="display-5 my-5 text-right">By Author - 9 November, 2020</p>
            <div class="mb-1 text-right">
              <v-icon class="black--text">mdi-eye</v-icon> 5k Views

              <v-icon class="black--text">mdi-share-variant-outline</v-icon> 430 shares
            </div>

            <div class="lead black--text text-justify my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi
              quas facilis repellendus voluptate corporis, repellat blanditiis sed ipsam
              atque alias praesentium suscipit. Debitis exercitationem numquam illum animi
              non temporibus velit, voluptatum eum officia explicabo veniam...
              <p class="lead black--text mt-5">Continue reading</p>
            </div>
          </div>
        </v-sheet>
      </router-link>

      <br />

      <router-link to="/" class="text-decoration-none">
        <v-sheet color="white" elevation="12" width="100%" class="hoverCard">
          <div class="container pt-5 w-100">
            <v-parallax src="../assets/img/example4.jpg" class="rounded">
              <div id="postInfoBig">
                <h1 class="white--text display-5">Big size post #5 title</h1>
              </div>

              <p class="bg-success text-left" id="badge">Nature</p>
            </v-parallax>

            <p class="display-5 my-5 text-right">By Author - 9 December, 2020</p>
            <div class="mb-1 text-right">
              <v-icon class="black--text">mdi-eye</v-icon> 3k Views

              <v-icon class="black--text">mdi-share-variant-outline</v-icon> 830 shares
            </div>

            <div class="lead black--text text-justify my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi
              quas facilis repellendus voluptate corporis, repellat blanditiis sed ipsam
              atque alias praesentium suscipit. Debitis exercitationem numquam illum animi
              non temporibus velit, voluptatum eum officia explicabo veniam...
              <p class="lead black--text mt-5">Continue reading</p>
            </div>
          </div>
        </v-sheet>
      </router-link>

      <v-btn color="error" class="d-block mt-6" elevation="10" height="50" width="100%"
        >Show more</v-btn
      >
    </v-container>

    <br />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  h1 {
    font-family: $fontstyle6;
    font-weight: bold;
  }

  .hoverCard:hover {
    transform: scale(1.02);
    cursor: pointer;
    transition: 0.5s;
  }

  #badge {
    position: absolute;
    left: 0px;
    bottom: 0px;
    padding: 5px;
    font-size: 12px;
    border-radius: 0px 5px 5px 0px;
  }

  #badgeSmall {
    position: absolute;
    left: 0px;
    bottom: 0px;
    padding: 5px;
    font-size: 10px;
    border-radius: 0px 5px 5px 0px;
  }

  #postInfo {
    margin-bottom: 100px;
    margin-left: 0px;
  }

  #postInfoSmall {
    margin-bottom: 50px;
    text-align: end;
    text-shadow: 0px 0px 20px black, 0px 0px 35px black;
  }

  #postInfoBig {
    position: absolute;
    bottom: 55px;
  }

  .text-justify {
    display: none;
  }
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  h1 {
    font-family: $fontstyle6;
    font-weight: bold;
  }

  .hoverCard:hover {
    transform: scale(1.02);
    cursor: pointer;
    transition: 0.5s;
  }

  #badge {
    position: absolute;
    left: 0px;
    bottom: 0px;
    padding: 5px;
    font-size: 12px;
    border-radius: 0px 5px 5px 0px;
  }

  #badgeSmall {
    position: absolute;
    left: 0px;
    bottom: 0px;
    padding: 5px;
    font-size: 10px;
    border-radius: 0px 5px 5px 0px;
  }

  #postInfo {
    margin-bottom: 100px;
    margin-left: 30px;
  }

  #postInfoSmall {
    margin-bottom: 50px;
    text-align: end;
    text-shadow: 0px 0px 20px black, 0px 0px 35px black;
  }

  #postInfoBig {
    position: absolute;
    bottom: 55px;
  }
  .text-justify {
    display: block;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  h1 {
    font-family: $fontstyle6;
    font-weight: bold;
  }

  .hoverCard:hover {
    transform: scale(1.02);
    cursor: pointer;
    transition: 0.5s;
  }

  #badge {
    position: absolute;
    left: 0px;
    bottom: 0px;
    padding: 5px;
    font-size: 16px;
    border-radius: 0px 5px 5px 0px;
  }

  #badgeSmall {
    position: absolute;
    left: 0px;
    bottom: 0px;
    padding: 5px;
    font-size: 12px;
    border-radius: 0px 5px 5px 0px;
  }

  #postInfo {
    margin-bottom: 60px;
    margin-left: 30px;
  }

  #postInfoSmall {
    margin-bottom: 10px;
    text-align: end;
    text-shadow: 0px 0px 20px black, 0px 0px 35px black;
  }

  #postInfoBig {
    position: absolute;
    bottom: 55px;
  }
  .text-justify {
    display: block;
  }
}
</style>
