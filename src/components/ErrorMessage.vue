<template>

  <div class="error-card">
    <div class="error-panel nowrap error-color">
      <div class="icon svg-icon">
        <notification />
      </div>
      <div class="code bold-600">{{ errorCode }}</div>
    </div>

    <div class="error-panel error-text">
      <span class="title">{{ errorTitle }}</span>
      <small class="message" v-if="errorMessage">{{ errorMessage }}</small>
    </div>

  </div>
  
</template>

<script>
export default {
  props: {
    errorTitle: {
      type: String,
      required: true
    },
    errorMessage: {
      type: String
    },
    errorCode: {
      type: Number,
      required: true
    }
  }
}
</script>