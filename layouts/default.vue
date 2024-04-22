<template>
  <v-app>
    <layout-navigation-App-Navigation></layout-navigation-App-Navigation>

    <v-main>
      <v-container :class="{ 'main-container': true, 'pa-6': !mobile, 'h-100': true }" dark>
        <slot />
      </v-container>

    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useDisplay, useGoTo } from 'vuetify'

const { mobile } = useDisplay()
const goTo = useGoTo();

onMounted(async () => {
  await nextTick();
  if (useRoute().hash)
    goTo(useRoute().hash)
});
</script>