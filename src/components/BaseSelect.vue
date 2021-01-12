<template>
  <div class="base-select">

    <a class="base-select-list-trigger" @click.stop="activeList = !activeList">
      <span class="list-trigger-text">{{ (value) ? value.name : null || triggerButtonText }}</span>
      <div class="svg-icon">
        <chevron-down width="1em" />
      </div>
    </a>

    <ul class="base-select-list" :class="{[listClass]: true, active: activeList}">

      <li>
        <a @click="changeChoosedOption({id: null, name: triggerButtonText})">{{ triggerButtonText }}</a>
      </li>

      <li class="base-select-list-item" :class="listOptionClass"
      v-for="option in options"
      :key="option.id">
        <a
        class="base-select-list-item-changer"
        @click="changeChoosedOption(option)">{{ option.name }}</a>
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

    mounted(){
      document.addEventListener('click', () => {
        this.activeList = false;
      });
    },

    data(){
      return {
        activeList: false,
      }
    },

    methods: {
      changeChoosedOption(option){
        this.value = option;
        this.$emit('input', option);
        this.activeList = false;
      }
    }
}
</script>