<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("store", ["handleAuthStateChanged"])
  },
  mounted() {
    this.handleAuthStateChanged();
  }
};
</script>

<style>
.darkmode-layer,
.darkmode-toggle {
  z-index: 500;
}
</style>
