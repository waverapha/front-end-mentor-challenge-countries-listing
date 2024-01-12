<template>
  <div class="base-select">

    <button
    type="button"
    class="base-select-list-trigger"
    @click.stop="openSelect()"
    aria-controls="base-select"
    aria-haspopup="listbox"
    :aria-expanded="[activeList]">
      <span class="list-trigger-text">{{ selected.name }}</span>
      <span class="svg-icon" aria-hidden="true">
        <chevron-down />
      </span>
    </button>

    <ul
    id="base-select"
    class="base-select-list"
    :class="[baseSelectListClass]"
    role="listbox"
    :aria-hidden="[activeList]"
    tabindex="-1"
    :aria-label="`${selected.name}`">

      <li
      class="base-select-list-item"
      :class="listOptionClass"
      v-for="option in selectOptions"
      :key="option.id"
      role="option"
      :aria-selected="selected.id === option.id">
        <a
        :tabindex="(activeList) ? 0 : -1"
        class="base-select-list-item-changer"
        @click="changeChoosedOption(option)"
        @keydown.enter="changeChoosedOption(option)">{{ option.name }}</a>
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
      this.list = this.$el.querySelectorAll('#base-select li a');

      document.addEventListener('click', () => {
        this.activeList = false;
      });
    },

    data(){
      return {
        activeList: false,
        allowedKeysToIntercept: {
          ArrowUp: () => {
            const next = this.index - 1;

            return (next < 0) ? 0 : next;
          },
          ArrowDown: () => {
            const next = this.index + 1;
            const listSize = this.list.length - 1;

            return (next > listSize) ? listSize : next;
          },
          Home: () => {
            return 0;
          },
          End: () => {
            return this.list.length - 1;
          },
        },
        list: null,
        index: 0,
      }
    },

    methods: {
      openSelect(){
        this.activeList = !this.activeList;

        this.index = this.getSelectedIndex();

        this.putFocusInOption(this.index);

        this.setArrowKeysEvent();
      },

      setArrowKeysEvent(){
        const keydownHandlerEvent = this.keydownHandler;
        this.$el.addEventListener('keydown', keydownHandlerEvent, false);
      },

      removeArrowKeysEvent(){
        const keydownHandlerEvent = this.keydownHandler;
        this.$el.removeEventListener('keydown', keydownHandlerEvent, false);
      },

      keydownHandler(event){
        if( !this.allowedKeysToIntercept[event.key] ){
          return;
        }
        
        event.preventDefault();
        event.stopPropagation();

        const moveFocus = this.allowedKeysToIntercept[event.key];

        const index = moveFocus();

        this.putFocusInOption(index);
      },

      putFocusInOption(index){
        this.list[index].focus();
        this.index = index;
      },

      getSelectedIndex(){
        const index = this.selectOptions.findIndex((option) => {
          return this.selected.id === option.id;
        });

        return index;
      },

      changeChoosedOption(option){
        this.activeList = false;
        this.removeArrowKeysEvent();
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