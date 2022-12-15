<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

type DefaultModalProps = {
  isOpen: boolean;
  title: string;
  handleClose: (value?: boolean) => void;
};

const props = withDefaults(defineProps<DefaultModalProps>(), {
  isOpen: false,
  title: "Confirmar ação",
});
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog
      as="div"
      @close="handleClose"
      class="relative z-10 rounded-2xl bg-red-500"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
            >
              <div class="p-4">
                <DialogTitle as="h3" class="text-base">
                  {{ props.title }}
                </DialogTitle>
              </div>
              <div class="content">
                <p class="text-sm text-gray-500">
                  <slot name="content"></slot>
                </p>
              </div>

              <div class="p-4 flex items-center justify-end gap-2">
                <slot name="actions"></slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>
.content {
  @apply mt-2 p-4 border-y-2 border-very-light-grey;
  min-height: 6rem;
}
</style>
