import { FetchError } from "ofetch";
import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", () => {
  const router = useRouter();
  const storeIsLoading = ref<boolean>(false);
  const storeError = ref<FetchError>();

  /**
   * uses Cookie "user" to track login state of current user
   * it needs to be a cookie for SSR compatibility
   */
  const user = computed<User | null>(() => userState.value)
  // https://nuxt.com/docs/api/composables/use-cookie
  const userState = useCookie<User | null>("user", {
    default: () => (null)
  })


  /**
  *
  * @param name username
  * @returns The created user object
  */
  async function Login(user: {
    username: string;
    password: string;
  }) {
    _SetStartingRequest();

    let req;

    try {
      // req = await $fetch<User>(`/api/user/login`, {
      //   method: "POST",
      //   body: user,
      // });
      req = {
        username: user.username,
        password: user.password,
      }
    } catch (error) {
      _SetStoreError(error);

      throw error; // pass onto calling useAsyncData function
    }
    userState.value = req;

    storeIsLoading.value = false;
    return req;
  }


  /**
   * Clears the User Session
   * To make registration available again
   * Navigates user to Registration
   */
  function Logout() {
    userState.value = null;
    router.push({ name: 'user-login' })
  }

  /**
   * Set store error and stop loading state
   * Needs exclude response key POJO stringify Error
   * @param error FetchError of $fetch Request
   */
  function _SetStoreError(error: FetchError) {
    let {
      message,
      name,
      data,
      options,
      request,
      stack,
      status,
      statusCode,
      statusMessage,
      statusText,
    } = error;

    storeError.value = {
      message,
      name,
      data,
      options,
      request,
      stack,
      status,
      statusCode,
      statusMessage,
      statusText,
    };

    storeIsLoading.value = false;
  }
  function _SetStartingRequest() {
    storeIsLoading.value = true;
    storeError.value = undefined;
  }

  const userIsRegistered = computed(() => !!userState.value);

  return {
    Login,
    Logout,

    user,
    userIsRegistered,

    storeError,
    storeIsLoading,
  };
});
