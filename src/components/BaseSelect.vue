<template>
  <div class="base-select">

    <button
    class="base-select-list-trigger"
    @click.stop="openSelect()"
    aria-controls="base-select"
    aria-haspopup="listbox"
    :aria-expanded="[activeList]">
      <span class="list-trigger-text">{{ selected.name }}</span>
      <div class="svg-icon" role="presentation">
        <chevron-down />
      </div>
    </button>

    <ul
    id="base-select"
    class="base-select-list"
    :class="[baseSelectListClass]"
    role="listbox"
    :aria-hidden="[activeList]"
    tabindex="-1"
    :aria-label="`${selected.name} / Use TAB to navigate`">

      <li
      :tabindex="(activeList) ? 0 : -1"
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
        selected: {
          type: Object,
          default(){
            return this.noOptionItem
          }
        },
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
        noOptionItem: {
          type: Object,
          default(){
            return {
              id: null,
              name: 'Choose an option'
            }
          }
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
        activeList: false,
      }
    },

    methods: {
      openSelect(){
        this.activeList = !this.activeList;
      },

      changeChoosedOption(option){
        this.activeList = false;
        this.$emit('change', option);
      },
    },

    computed: {
      selectOptions(){
        return ( this.hasDefaultOption ) ? [
          this.noOptionItem,
          ...this.options
        ] : this.options
      },

      baseSelectListClass(){
        return {
          [this.listClass]: true,
          active: this.activeList
        }
      },
    }
}
</script>