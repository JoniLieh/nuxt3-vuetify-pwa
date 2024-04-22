<template>
  <h2 class="text-h3 mt-6 text-center relative">
    <template v-if="title">
      {{ title }}
    </template>
    <slot v-else></slot>
  </h2>
  <br />
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>
