<template>
  <v-btn @click="NavigateBack()" icon="mdi-arrow-left" v-bind="$attrs"></v-btn>
</template>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter();

/**
 * key: route name
 * value: route name
 */
 const backRoutes: {
  [key: string]: string;
} = {
  'user-registration': 'index'
}

/**
 * Navigate Back
 * overwritten by [backRoutes]
 * default case back in history
 */
const NavigateBack = function() {
  for (const routeName of Object.keys(backRoutes)) {
    if (routeName == route.name?.toString()) {
      return router.push({
        name: backRoutes[routeName]
      })
    }
  }
  
  // Default case
  router.back()
}
</script>

<style>

</style>