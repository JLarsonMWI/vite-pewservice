<template>
  <Popover class="relative bg-white">
    <div
      class="pointer-events-none absolute inset-0 z-30 shadow"
      aria-hidden="true" />
    <div class="relative z-20">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
        <div>
          <RouterLink
            to="/"
            class="flex flex-row items-end justify-center md:flex-col md:items-center">
            <Logo class="h-12 w-auto text-rose-500 sm:h-12" alt="" />
            <span
              class="font-pacifico pl-8 text-2xl font-bold text-rose-500 md:pt-2 md:pl-0"
              >Pew Service</span
            >
          </RouterLink>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div
          class="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <PopoverGroup as="nav" class="flex space-x-10">
            <Popover v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2',
                ]">
                <span>Solutions</span>
                <ChevronDownIcon
                  :class="[
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500',
                  ]"
                  aria-hidden="true" />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1">
                <PopoverPanel
                  class="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block">
                  <div
                    class="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                    <a
                      v-for="item in solutions"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50">
                      <div class="flex md:h-full lg:flex-col">
                        <div class="flex-shrink-0">
                          <span
                            class="inline-flex h-10 w-10 items-center justify-center rounded-md bg-rose-500 text-white sm:h-12 sm:w-12">
                            <component
                              :is="item.icon"
                              class="h-6 w-6"
                              aria-hidden="true" />
                          </span>
                        </div>
                        <div
                          class="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                          <div>
                            <p class="text-base font-medium text-gray-900">
                              {{ item.name }}
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              {{ item.description }}
                            </p>
                          </div>
                          <p
                            class="mt-2 text-sm font-medium text-rose-600 lg:mt-4">
                            Learn more
                            <span aria-hidden="true"> &rarr;</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="bg-gray-50">
                    <div
                      class="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                      <div
                        v-for="item in callsToAction"
                        :key="item.name"
                        class="flow-root">
                        <a
                          :href="item.href"
                          class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100">
                          <component
                            :is="item.icon"
                            class="h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true" />
                          <span class="ml-3">{{ item.name }}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <RouterLink
              to="pricing"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              >Pricing</RouterLink
            >
            <RouterLink
              to="documentation"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              >Docs</RouterLink
            >
            <RouterLink
              to="documentation"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              >Mission</RouterLink
            >
          </PopoverGroup>
          <div class="flex items-center md:ml-12">
            <a
              href="#"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
              >Sign in</a
            >
            <a
              href="#"
              class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700"
              >Sign up</a
            >
          </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95">
      <PopoverPanel
        focus
        class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden">
        <div
          class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6 sm:pb-8">
            <div class="flex items-center justify-between">
              <div>
                <RouterLink
                  to="/"
                  class="flex flex-row items-end justify-center md:flex-col md:items-center">
                  <Logo class="h-12 w-auto text-rose-500 sm:h-12" alt="" />
                  <span
                    class="font-pacifico pl-8 text-2xl font-bold text-rose-500 md:pt-2 md:pl-0"
                    >Pew Service</span
                  >
                </RouterLink>
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6 sm:mt-8">
              <nav>
                <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                  <a
                    v-for="item in solutions"
                    :key="item.name"
                    :href="item.href"
                    class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                    <div
                      class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-rose-500 text-white sm:h-12 sm:w-12">
                      <component
                        :is="item.icon"
                        class="h-6 w-6"
                        aria-hidden="true" />
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">
                      {{ item.name }}
                    </div>
                  </a>
                </div>
                <div class="mt-8 text-base">
                  <a
                    href="#"
                    class="font-medium text-rose-600 hover:text-rose-500">
                    View all products
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <RouterLink
                to="pricing"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >Pricing</RouterLink
              >
              <RouterLink
                to="documentation"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >Docs</RouterLink
              >
              <RouterLink
                to="documentation"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >Mission</RouterLink
              >
              <a
                href="#"
                class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >Blog</a
              >
            </div>
            <div class="mt-6">
              <a
                href="#"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700"
                >Sign up</a
              >
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ ' ' }}
                <a href="#" class="text-rose-600 hover:text-rose-500"
                  >Sign in</a
                >
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue';
import {
  Bars3Icon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorArrowRaysIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import Logo from '../assets/church.svg?component';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
];
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
</script>
