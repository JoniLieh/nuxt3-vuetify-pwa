<template>
  <div>
    <v-app-bar elevation="1" app>
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click="showSideBar = !showSideBar"
        ></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>MyApp</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn @click="toggleTheme()" icon="mdi-theme-light-dark"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="showSideBar">
      <template v-slot:prepend>
        <v-menu location="right" transition="slide-x-transition">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              lines="two"
              prepend-avatar="https://xsgames.co/randomusers/avatar.php?g=pixel"
              :title="userStore.user?.username"
              subtitle="Logged in"
              append-icon="mdi-chevron-right"
            ></v-list-item>
          </template>

          <v-list>
            <v-list-item @click="userStore.Logout()" prepend-icon="mdi-logout">
              <v-list-item-title>Abmelden</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <client-only>
        <v-tabs v-model="currentLinkIndex" direction="vertical">
          <v-tab
            v-for="{ text, path, icon, color } in links"
            :key="text"
            :to="path"
            :color="color"
            nuxt
          >
            <v-icon start>{{ icon }}</v-icon>
            {{ text }}
          </v-tab>
        </v-tabs>
      </client-only>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
const theme = useTheme();
const route = useRoute();

const showSideBar = ref<boolean | null>(null);

const userStore = useUserStore();

function toggleTheme() {
  // composable?
  theme.global.name.value = !theme.current.value.dark ? "dark" : "light";
}

interface Link {
  text: string;
  path: string;
  icon: string;
  color: string;
}

const links: Link[] = [
  {
    text: "Start",
    path: "/",
    icon: "mdi-home",
    color: "primary",
  }
];



const currentLink = computed(() => links.find((e) => e.path == route.path));

const currentLinkIndex = useState<number>("currentLinkIndex", () => 0);

const color: ComputedRef = computed(() => currentLink.value?.color);
</script>
