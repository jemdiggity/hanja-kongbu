import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueFire, VueFireAuth, getCurrentUser } from "vuefire";

import App from "./App.vue";
import router from "./router";
// the file we created above with `database`, `firestore` and other exports
import { firebaseApp } from "./firebase";
const app = createApp(App);

// If you are using getCurrentUser() in a navigation guard, make sure to add it before calling app.use(router) as that will trigger the initial navigation.
router.beforeEach(async (to) => {
  // routes with `meta: { requiresAuth: true }` will check for
  // the users, others won't
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser();
    // if the user is not logged in, redirect to the login page
    if (!currentUser) {
      return {
        path: "/login",
        query: {
          // we keep the current path in the query so we can
          // redirect to it after login with
          // `router.push(route.query.redirect || '/')`
          redirect: to.fullPath,
        },
      };
    }
  }
});

app.use(createPinia());
app.use(router);
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
});

app.mount("#app");
