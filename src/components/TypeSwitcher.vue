<template>
  <div class="type-switcher">
    <button
      v-bind:class="['type-switcher__item', {'type-switcher__item_active': type === 'characters'}]"
      v-on:click="callback('characters')"
    >Characters</button>
    <button
      v-bind:class="['type-switcher__item', {'type-switcher__item_active': type === 'phrase'}]"
      v-on:click="callback('phrase')"
    >Phrase</button>
  </div>
</template>

<script>
export default {
  name: "TypeSwitcher",
  props: {
    type: String,
    callback: Function
  }
};
</script>

<style lang="scss">
.type-switcher {
  display: flex;

  &__item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $main;
    color: $main;
    text-align: center;
    width: 106px;
    height: 35px;
    font-size: 14px;
    transition: all 0.3s ease;
    user-select: none;
    cursor: pointer;

    @media (min-width: 768px) {
      width: 160px;
      height: 45px;
      font-size: 16px;
    }

    @media (min-width: 1280px) {
      height: 50px;
      font-size: 18px;
    }

    &:hover {
      background-color: rgba($main, 0.1);
    }

    &_active {
      color: $white;
      background-color: $main;
      cursor: default;

      &:hover {
        color: $white;
        background-color: $main;
        cursor: default;
      }
    }

    &:first-child {
      border-radius: 5px 0px 0px 5px;
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
}
</style>
