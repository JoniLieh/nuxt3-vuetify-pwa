<template>
	<NuxtPwaManifest />

	<NuxtLoadingIndicator />

	<NuxtLayout>
		<v-sheet class="pa-4 rounded h-100 no-select">
			<NuxtPage />
		</v-sheet>
	</NuxtLayout>
</template>

<script lang="ts" setup>
import { usePreferredDark } from '@vueuse/core'
import { useTheme } from 'vuetify'
const theme = useTheme()

onMounted(() => {
	// TODO uncomment on prod
	// theme.global.name.value = usePreferredDark() ? 'dark' : 'light'
});
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
	transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}

/** 
* global page fade transition (needed?)

definePageMeta ({
  pageTransition: {
    name: 'fade'
  }
})
*/
.fade-enter-active,
.fade-leave-active {
	transition: all 0.7s;
}

.fade-enter-from,
.fade-leave-to {
	animation: fadeIn 5s;
}
</style>
