<template>
  <div class="strenght">
    <div v-bind:class="['strenght__estimate', `strenght__estimate_${estimate}`]"></div>
    <div class="strenght__label">{{ estimate | capitalize }}</div>
  </div>
</template>

<script>
import { capitalize } from "@/utils/formatting";

export default {
  name: "Strenght",
  props: {
    estimate: String
  },
  filters: {
    capitalize
  }
};
</script>

<style lang="scss">
.strenght {
  display: flex;
  align-items: center;

  &__estimate {
    position: relative;
    width: 100%;
    height: 5px;
    background-color: $border;
    border-radius: 5px;

    @media (min-width: 768px) {
      height: 8px;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 5px;
      background-color: $good;
      border-radius: 5px;
      transition: all 0.3s ease;

      @media (min-width: 768px) {
        height: 8px;
      }
    }

    &_bad {
      &:before {
        width: 30%;
        background-color: $bad;
      }
    }
    &_normal {
      &:before {
        width: 60%;
        background-color: $normal;
      }
    }
    &_good {
      &:before {
        width: 100%;
        background-color: $good;
      }
    }
  }

  &__label {
    font-size: 10px;
    margin-left: 20px;

    @media (min-width: 768px) {
      font-size: 14px;
      margin-left: 40px;
    }

    @media (min-width: 1028px) {
      font-size: 16px;
      margin-left: 40px;
    }
  }
}
</style>
