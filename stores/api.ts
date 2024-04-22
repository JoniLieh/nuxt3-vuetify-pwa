import { defineStore } from 'pinia'
import { FetchError } from 'ofetch';

export const useApiStore = defineStore('apiStore', () => {
  const storeIsLoading = ref<boolean>(false);
  const storeError = ref<FetchError>();
  
  /**
   * Set store error and stop loading state
   * Needs exclude response key POJO stringify Error
   * @param error FetchError of $fetch Request
   */
  function _SetStoreError(error: FetchError) {
    let {
      message, name, cause, data, options, request, stack, status,statusCode,statusMessage,statusText
    } = error;

    storeError.value = {
      message, name, cause, data, options, request, stack, status,statusCode,statusMessage,statusText
    }
    storeIsLoading.value = false;
  }
  function _SetStartingRequest() {
    storeIsLoading.value = true;
    storeError.value = undefined;
  }

  return {
    storeIsLoading,
    storeError
  }
})