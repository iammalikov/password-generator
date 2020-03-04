<template>
  <div class="strenght">
    <div
      v-bind:class="['strenght__estimate', `strenght__estimate_${estimate}`]"
    ></div>
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

    &_deadly,
    &_bad {
      &:before {
        width: 20%;
        background-color: $bad;
        box-shadow: 0 0 5px 0 $bad;
      }
    }

    &_bad {
      &:before {
        width: 40%;
      }
    }

    &_normal {
      &:before {
        width: 60%;
        background-color: $normal;
        box-shadow: 0 0 5px 0 $normal;
      }
    }

    &_good,
    &_excellent {
      &:before {
        width: 80%;
        background-color: $good;
        box-shadow: 0 0 5px 0 $good;
      }
    }

    &_excellent {
      &:before {
        width: 100%;
      }
    }
  }

  &__label {
    min-width: 80px;
    font-size: 10px;
    text-align: right;

    @media (min-width: 768px) {
      min-width: 120px;
      font-size: 14px;
    }

    @media (min-width: 1028px) {
      font-size: 16px;
    }
  }
}
</style>
