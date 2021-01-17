<template>
  <div class="base-select">

    <button
    class="base-select-list-trigger"
    @click.stop="activeList = !activeList"
    aria-controls="base-select"
    aria-haspopup="listbox"
    :aria-expanded="[activeList]">
      <span class="list-trigger-text">{{ valueText }}</span>
      <div class="svg-icon" role="presentation">
        <chevron-down
        width="1em" />
      </div>
    </button>

    <ul
    id="base-select"
    class="base-select-list"
    :class="baseSelectListClass"
    role="listbox"
    :aria-hidden="[activeList]"
    tabindex="-1"
    :aria-label="valueText">

      <li
      class="base-select-list-item"
      :class="listOptionClass"
      v-for="option in selectOptions"
      :key="option.id"
      role="option">
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
        options: {
          type: Array,
          required: true
        },
        listClass: {
          type: String,
          default: ''
        },
        listOptionClass: {
          type: String,
          default: ''
        },
        triggerButtonText: {
          type: String,
          default: 'Choose an option'
        },
        hasDefaultOption: {
          type: Boolean,
          default: true
        },
    },

    mounted(){
      document.addEventListener('click', () => {
        this.activeList = false;
      });
    },

    data(){
      return {
        value: null,
        activeList: false,
      }
    },

    methods: {
      changeChoosedOption(option){
        this.value = option;
        this.activeList = false;
        this.$emit('change', option);
      },
    },

    computed: {
      selectOptions(){
        const defaultOption = {id: null, name: this.triggerButtonText};

        return ( this.hasDefaultOption ) ? [
          defaultOption,
          ...this.options
        ] : this.options
      },

      valueText(){
        return (this.value) ? this.value.name : null || this.triggerButtonText
      },

      baseSelectListClass(){
        return {
          [this.listClass]: true,
          active: this.activeList
        }
      }
    }
}
</script>