<template>
  <button class="theme-switcher bold-600"
  @click="changeTheme()"
  data-testid="theme-switcher">
      <div class="svg-icon" role="presentation">
          <moon-o v-if="ui.theme.choosed === 'light'" />
          <moon v-if="ui.theme.choosed === 'dark'" />
      </div>
      <span :aria-label="[`${ui.theme.choosed} Mode`]"><span class="theme-switcher-text" aria-hidden="true">Dark Mode</span></span>
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