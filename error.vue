<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
         <v-row justify="center" align="center">
           <v-col cols="auto" class="text-center">
             <v-alert type="error" :title="error?.statusCode.toString()" :text="error?.message" variant="tonal" class="elevation-1"></v-alert>
             <br>
             <code v-html="error?.stack">
             </code>
             <br>
             <v-btn @click="handleError" color="primary" variant="tonal" size="large"><v-icon start>mdi-home</v-icon>Startseite</v-btn>
           </v-col>
         </v-row>
          
      </v-container>
    </v-main>
  </v-app>
</template>



<script lang="ts" setup>
const props = defineProps({
  error: Object
})

console.log("An error just happend, showing error.vue");

const handleError = () => clearError({ redirect: '/' })

/**
 * redirect 404 errors to / for unwanted behavior
 */
if (process.env.NODE_ENV != 'development' && props.error?.statusCode == 404)
  navigateTo('/');
</script>