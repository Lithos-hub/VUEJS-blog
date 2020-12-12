<template>
  <div>
    <v-card class="rounded-0" id="navbar">
      <v-app-bar
        absolute
        dark
        shrink-on-scroll
        dense
        src="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-btn icon>
          <v-icon id="navbarIcons">mdi-home</v-icon>
        </v-btn>

        <!-- DIALOG ABOUT --------------------------------------------------------------------------- -->
        <v-row class="ml-5">
          <v-dialog v-model="dialog" scrollable max-width="1000px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="error" justify="center" class="mt-1" v-bind="attrs" v-on="on"
                >About this design</v-btn
              >
            </template>

            <v-card>
              <v-card-title class="error white--text">Information</v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 400px" v-model="dialogm1" dark id="dialogText">
                This design was made with Vuetify library and some Bootstrap features
                added.
                <br /><br />
                The intention was to make a modern and elegant blog design, ensuring that
                the information is well distributed on the screen and totally responsive.
                <br /><br />
                This design, unlike others, is not functional, as the intention was not to
                make a web application, but a homepage blog design. Very probably, in the
                future, the design of the rest of the blog pages will be continued in
                order to make it possible to navigate through the top menu.
                <br /><br />
                The main features of this design include:
                <br /><br />
                <ul>
                  <li>Full responsive design.</li>
                  <li>Use of design material.</li>
                  <li>Parallax effect.</li>
                  <li>Custom scroll bar.</li>
                  <li>(This) Dialog.</li>
                  <li>Custom (awesome) fonts.</li>
                  <li>SASS</li>
                  <li>
                    The following components:
                    <ul>
                      <li>Header</li>
                      <li>The sidemenu</li>
                      <li>The video section</li>
                      <li>Footer</li>
                      <li>Navbar</li>
                    </ul>
                  </li>
                </ul>

                <br /><br />
                Note: All images used in the design are free of copyright.

                <br /><br />
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>

        <!-- DIALOG ABOUT END --------------------------------------------------------------------------- -->

        <v-spacer></v-spacer>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon id="navbarIcons">mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon id="navbarIcons">mdi-facebook</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon id="navbarIcons">mdi-twitter</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon id="navbarIcons">mdi-instagram</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs id="tabs" class="m-auto text-center">
            <v-icon id="navIcon" class="m-auto" @click.stop="drawer = !drawer"
              >mdi-menu</v-icon
            >
            <v-tab id="navbarTab" active-class="error rounded">Blog</v-tab>
            <v-tab id="navbarTab" active-class="error rounded">Categories</v-tab>
            <v-tab id="navbarTab" active-class="error rounded">Pages</v-tab>
            <v-tab id="navbarTab" active-class="error rounded">My story</v-tab>
            <v-tab id="navbarTab" active-class="error rounded">Podcast</v-tab>
            <v-tab id="navbarTab" active-class="error rounded">Contact</v-tab>
          </v-tabs>
        </template>

        <v-bottom-sheet v-model="drawer" color="error" class="text-center" width="100%">
          <v-sheet>
            <v-list nav color="error" dark class="text-center">
              <v-list-item-group v-model="group" class="m-auto">
                <v-list-item>
                  <v-list-item-title> Blog </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title> Categories </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title> Pages </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title> My story </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title> Podcast </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title> Contact </v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-sheet>
        </v-bottom-sheet>
      </v-app-bar>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      dialogm1: "",
      dialog: false,
      drawer: false,
      group: null,
      watch: {
        group() {
          this.drawer = false;
        },
      },
      items: [
        {
          title: "Search",
          icon: "mdi-magnify",
        },
        {
          title: "Categories",
          icon: "mdi-table",
        },
        {
          title: "Contact",
          icon: "mdi-at",
        },
        {
          title: "Pages",
          icon: "mdi-book-open-page-variant",
        },
      ],
      socialIcons: [
        {
          socialIcon: "mdi-facebook",
        },
        {
          socialIcon: "mdi-twitter",
        },
        {
          socialIcon: "mdi-instagram",
        },
      ],
      links: ["Home", "Contacts", "Settings"],
      mini: true,
    };
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

#navbarTab {
  font-family: $fontstyle6;
  font-size: 30px;
  text-align: center;
  margin: 0 auto;
}

#navIcon {
  font-size: 35px;
}

#navbarIcons:hover {
  color: $primary;
}

@media only screen and (max-width: 860px) {
  #navbarTab {
    display: none;
  }
}
@media only screen and (min-width: 861px) {
  #navIcon {
    display: none;
  }
}

#dialogText {
  font-size: 20px;
  text-align: justify;
  font-family: $fontstyle7;
  letter-spacing: 3px;
}
</style>
