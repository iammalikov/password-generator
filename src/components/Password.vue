<template>
  <div class="password" :class="classList">
    <div class="password__field">
      <span v-html="text" v-if="!loading"></span>

      <div class="password__loading" v-else>
        <Spinner class="password__loading-spinner"></Spinner>
        <div class="password__loading-text">Loading...</div>
      </div>

    </div>
    <button class="password__button"
            :disabled="disabled || loading"
            aria-label="Copy password"
            @click="copy">
      <img src="@/assets/copy.svg" alt="copy"/>
    </button>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner';

export default {
  name: "Password",
  components: { Spinner },
  props: {
    text: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false }
  },
  data () {
    return {
        blinked: false
    }
  },
  computed: {
    classList() {
      return {
        'password_disabled': this.disabled,
        'password_blinked': this.blinked
      }
    }
  },
  methods: {
    copy() {
      this.$clipboard(this.text)
      this.blink()
    },
    blink() {
      this.blinked = true
      setTimeout(() => (this.blinked = false), 0)
    }
  }
};
</script>

<style lang="scss">
.password {
  display: flex;
  box-shadow: none;
  transition: 2s box-shadow;

  &_disabled {
   pointer-events: none;
  }

  &_blinked {
    box-shadow: 0 0 20px rgba($main, 0.3);
    transition: 0s box-shadow;
  }

  &__field {
    position: relative;
    height: 50px;
    max-width: 100%;
    background-color: $white;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    border-radius: 5px 0 0 5px;
    overflow: hidden;
    white-space: nowrap;
    flex-grow: 1;
    flex-basis: auto;

    @media (min-width: 768px) {
      height: 60px;
      font-size: 26px;
    }

    @media (min-width: 1280px) {
      height: 65px;
      font-size: 30px;
    }

    &:before {
      content: "";
      position: absolute;
      height: 100%;
      left: 0;
      box-shadow: 0 0 15px 25px $white;
    }

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      right: 0;
      box-shadow: 0 0 15px 25px $white;
    }
  }

  &__loading {
    display: inline-flex;

    &-text {
      margin-left: 20px;
      font-size: 18px;
      opacity: 0.7;
    }
  }

  &__button {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 55px;
    height: 50px;
    background-color: $main;
    outline: none;
    user-select: none;
    border: none;
    border-radius: 0 5px 5px 0;
    transition: all 0.3s ease;
    cursor: pointer;

    &[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }

    @media (min-width: 768px) {
      min-width: 65px;
      height: 60px;
    }

    @media (min-width: 1280px) {
      min-width: 70px;
      height: 65px;
    }

    &:hover {
      background-color: rgba($main, 0.8);
    }

    & img {
      width: 16px;

      @media (min-width: 768px) {
        width: 18px;
      }

      @media (min-width: 1280px) {
        width: 20px;
      }
    }
  }
}
</style>
