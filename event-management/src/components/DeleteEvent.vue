<script setup>
import { useShowStore } from '@/stores/show';
const showStore = useShowStore()
import { useRoute } from 'vue-router';

const route = useRoute()
const id = route.params.id


</script>



<template>
  <div v-if="showStore.showDeleteModal == true">
    <div class="relative z-10 border-2 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div
        class="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10"
                >
                  <svg
                    class="h-8 w-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left ">
                  <h3 class="text-base font-semibold leading-6 text-blue-600" id="modal-title">
                    DELETE TASK
                  </h3>
                  <div class="mt-2">
                    <p class="text-lg text-gray-600">
                      Are you sure you want to delete this task? This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <a :href="`/events/${id}`">
                <button
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                @click="$emit('confirm')"
              >
                DELETE
              </button>
              </a>
              <button
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-2 ring-inset ring-blue-600 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                @click="$emit('close')"
              >CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>