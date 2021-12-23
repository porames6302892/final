<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
          height="250px"
          src="https://img.wallpapersafari.com/desktop/1024/576/17/13/d35RTr.jpg"
        >
          <v-app-bar flat color="rgba(0, 0, 0, 0)">
            

            
            

            
          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img alt="user" :src="user.photoURL" />
            </v-avatar>
            <p class="ml-3">
              {{ user.displayName }}
            </p>
            <p class="ml-3">
              {{ user.email }}
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">Today</div>

          <v-timeline align-top dense>
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  data: () => ({
    user: {},
    messages: [
      {
        from: "Candle Store",
        message: "Open.",
        time: "9:00am",
        color: "green",
      },
      {
        from: "Candle Store",
        message: "Close.",
        time: "20:00am",
        color: "red accent-4",
      },
      {
        from: "Candle Store",
        message: "Holliday.",
        time: "Monday",
        color: "red accent-4",
      },
    ],
  }),

  methods: {
    authStateChanged() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log(user);
          this.user = user;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    },
  },
  watch: {},
  computed: {},
  mounted() {
    this.authStateChanged();
  },
};
</script>

<style>
</style>