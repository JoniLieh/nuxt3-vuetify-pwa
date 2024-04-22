<template>
  <v-row align-content="center" justify="center">
    <v-col cols="12">
      <layout-header>Filetaxi</layout-header>
    </v-col>

    <v-col cols="12" lg="4" mg="6" sm="8">
      <v-card>
        <v-card-title>Login</v-card-title>

        <v-form @submit.prevent ref="form">
          <v-card-text>
            <v-text-field
              v-model="user.username"
              :rules="[rules.required]"
              prepend-inner-icon="mdi-account"
              label="Username"
            />
            <v-text-field
              v-model="user.password"
              prepend-inner-icon="mdi-key"
              :rules="[rules.required, rules.length(user.password, 6)]"
              label="Password"
              type="password"
            />

            <v-slide-y-transition>
              <v-col v-if="!!storeError" cols="12">
                <v-alert
                  type="error"
                  variant="text"
                  :text="constants.ParseError(storeError)"
                />
              </v-col>
            </v-slide-y-transition>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              prepend-icon="mdi-arrow-left"
              to="/registration"
              :slim="false"
              nuxt
              >Register</v-btn
            >
            
            <v-btn
              @click="LoginUser"
              :loading="storeIsLoading"
              color="primary"
              prepend-icon="mdi-send"
              type="submit"
              variant="flat"
              text="Login"
              :slim="false"
              ></v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
  path: "/login",
});

const router = useRouter();
const { Login } = useUserStore();
const { storeError, storeIsLoading } = storeToRefs(useUserStore());

const form = ref<HTMLFormElement | null>(null);

const user = ref({
  username: '', password: ''
});


/**
 * Allow LoginUser() when Input is available
 *
 * Track Request State with storeError, storeIsLoading
 */

const LoginUser = async function () {
  const { valid } = await (form.value ?? null)?.validate() ?? { valid: false };
  
  if (!valid) return;

  try {
    await Login(user.value);
  } catch (error) {
    return;
  }

  router.push("/");
};
</script>

<style scoped>
/* Input Text centered */
/* ::v-deep input {
  text-align: center;
} */
</style>
