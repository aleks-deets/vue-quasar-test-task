<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div class="absolute-center">
            <!-- <q-icon name="accessibility_new" /> -->
            <!-- <q-icon name="sailing" /> -->
            <q-icon name="hail" />
            Test task
          </div>
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="bg-primary"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
          class="text-white"
        >
          Navigation
        </q-item-label>

        <NavLink
          v-for="link in navLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import NavLink from 'src/components/Nav/NavLink.vue';

defineOptions({
  name: 'MainLayout'
})

const navLinks = [
  {
    title: 'Task',
    caption: 'Vue 3 + Quasar + Axios + Docker',
    icon: 'school',
    link: '/'
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
