<template>
  <component
    :is="tag || 'h1'"
    class="text-lg-h1 text-md-h2 text-h3 mt-6 text-center cursor-default noselect relative"
    v-bind="$attrs"
  >
    <template v-if="title">
      {{ title }}
    </template>
    <slot v-else />
  </component>
  <br />
</template>

<script lang="ts" setup>
defineProps<{
  title?: string,
  tag?: string
}>()
</script>
