<template>
  <div class="base-select">

    <a class="base-select-list-trigger" @click="activeList = !activeList">
      <span class="list-trigger-text">{{ (value) ? value.name : null || triggerButtonText }}</span>
      <div class="svg-icon">
        <chevron-down width="1em" />
      </div>
    </a>

    <ul class="base-select-list" :class="{[listClass]: true, active: activeList}">

      <li><a @click="$emit('input', null)">{{ triggerButtonText }}</a></li>

      <li class="base-select-list-item" :class="listOptionClass"
      v-for="option in options"
      :key="option.id">
        <a @click="$emit('input', option)">{{ option.name }}</a>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
    props: {
        value: Object,
        options: {
          type: Array,
          required: true
        },
        listClass: String,
        listOptionClass: String,
        triggerButtonText: String,
    },

    data(){
      return {
        activeList: false,
      }
    }
}
</script>