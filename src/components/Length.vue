<template>
  <div class="length">
    <input
      class="length__range"
      type="range"
      min="1"
      max="100"
      step="1"
      v-bind:value="value"
      v-on:change="$emit('input', Number($event.target.value))"
    />
    <input class="length__count" type="text" :value="value" readonly />
  </div>
</template>

<script>
export default {
  name: "Length",
  props: {
    value: Number
  }
};
</script>

<style lang="scss">
.length {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &__range {
    /* Normalize style for thumb and track */
    &[type="range"] {
      -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
      width: 100%; /* Specific width is required for Firefox. */
      background: transparent; /* Otherwise white in Chrome */
    }

    &[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
    }

    &[type="range"]:focus {
      outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
    }

    &[type="range"]::-ms-track {
      width: 100%;
      cursor: pointer;

      /* Hides the slider so custom styles can be added */
      background: transparent;
      border-color: transparent;
      color: transparent;
    }

    /* Special styling for WebKit/Blink */
    &[type="range"]::-webkit-slider-thumb {
      height: 22px;
      width: 22px;
      border: 2px solid $border;
      border-radius: 50%;
      background: $white;
      box-sizing: border-box;
      cursor: pointer;
      margin-top: -11px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */

      @media (min-width: 768px) {
        width: 25px;
        height: 25px;
        margin-top: -12.5px;
      }

      @media (min-width: 768px) {
        width: 28px;
        height: 28px;
        margin-top: -14px;
      }
    }

    /* All the same stuff for Firefox */
    &[type="range"]::-moz-range-thumb {
      height: 22px;
      width: 22px;
      border: 2px solid $border;
      border-radius: 50%;
      background: $white;
      box-sizing: border-box;
      cursor: pointer;

      @media (min-width: 768px) {
        width: 25px;
        height: 25px;
      }

      @media (min-width: 768px) {
        width: 28px;
        height: 28px;
      }
    }

    /* All the same stuff for IE */
    &[type="range"]::-ms-thumb {
      height: 22px;
      width: 22px;
      border: 2px solid $border;
      border-radius: 50%;
      background: $white;
      box-sizing: border-box;
      cursor: pointer;

      @media (min-width: 768px) {
        width: 25px;
        height: 25px;
      }

      @media (min-width: 768px) {
        width: 28px;
        height: 28px;
      }
    }

    &[type="range"]::-webkit-slider-runnable-track {
      width: 100%;
      height: 2px;
      border-radius: 5px;
      background-color: $border;
      cursor: pointer;
    }

    &[type="range"]:focus::-webkit-slider-runnable-track {
      background-color: $border;
    }

    &[type="range"]::-moz-range-track {
      width: 100%;
      height: 2px;
      border-radius: 5px;
      background-color: $border;
      cursor: pointer;
    }

    &[type="range"]::-ms-track {
      width: 100%;
      height: 2px;
      border-width: 2px 0;
      background-color: transparent;
      border-color: transparent;
      color: transparent;
      cursor: pointer;
    }

    &[type="range"]::-ms-fill-lower {
      background-color: $border;
      border-radius: 5px;
    }

    &[type="range"]:focus::-ms-fill-lower {
      background-color: $border;
    }

    &[type="range"]::-ms-fill-upper {
      background-color: $border;
      border-radius: 5px;
    }

    &[type="range"]:focus::-ms-fill-upper {
      background-color: $border;
    }
  }

  &__count {
    width: 45px;
    height: 35px;
    border: none;
    // border: 2px solid $border;
    border-radius: 5px;
    margin-left: 20px;
    font-size: 14px;
    background-color: $white;
    box-sizing: border-box;
    outline: none;
    text-align: center;
    cursor: default;

    @media (min-width: 768px) {
      width: 55px;
      height: 45px;
      font-size: 16px;
    }

    @media (min-width: 1028px) {
      width: 60px;
      height: 50px;
      margin-left: 50px;
      font-size: 18px;
    }
  }
}
</style>
