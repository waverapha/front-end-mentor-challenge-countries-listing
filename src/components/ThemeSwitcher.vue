<template>
  <button
    type="button"
    class="theme-switcher bold-600"
    data-testid="theme-switcher"
    @click="changeTheme()"
  >
      <span class="svg-icon">
          <moon-o v-if="ui.theme.choosed === 'light'" />
          <moon v-if="ui.theme.choosed === 'dark'" />
      </span>
      <span class="theme-switcher-text">{{ ui.theme.choosed }} Mode</span>
  </button>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  methods: {
    ...mapActions('preferences', [
      'changeTheme'
    ]),
  },

  computed: {
    ...mapState('preferences', [
      'ui'
    ])
  }

}
</script>