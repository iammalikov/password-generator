<template>
  <button
    v-bind:class="['toggle-button', {'toggle-button_active': active}]"
    v-on:click="callback(name)"
  >{{ text }}</button>
</template>

<script>
export default {
  name: "ToggleButton",
  props: {
    text: String,
    name: String,
    active: Boolean,
    callback: Function
  }
};
</script>

<style lang="scss">
.toggle-button {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  padding: 0 10px;
  border: 1px solid $main;
  border-radius: 5px;
  font-size: 16px;
  background-color: transparent;
  color: $main;
  text-align: center;
  white-space: nowrap;
  outline: none;
  transition: all 0.3s ease;
  user-select: none;
  cursor: pointer;

  @media (min-width: 768px) {
    height: 45px;
    padding: 0 15px;
  }

  @media (min-width: 1280px) {
    height: 50px;
    padding: 0 22px;
  }

  &:hover {
    background-color: rgba($main, 0.1);
  }

  &_active {
    color: $white;
    background-color: $main;

    &:hover {
      color: $white;
      background-color: rgba($main, 0.8);
    }
  }
}
</style>
