<template>
  <div class="vue-component" @click="handleClick">
    <h1>{{ msg }} {{ locali18n.t('test.test') }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import i18n from "../lang";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "MyVueComponentAdvanced",
  props: {
    msg: String,
    propi18n: Object,
  },
  data() {
    return {
      locali18n: this.propi18n ? this.propi18n : i18n,
    }
  },
  methods: {
    ...mapActions(["someAction"]),
    handleClick(): void {
      this.someAction()
    }
  }
});
</script>

<style scoped>
.vue-component {
  background: lightblue;
}
</style>
