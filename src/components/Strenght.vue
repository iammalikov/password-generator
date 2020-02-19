<template>
  <div class="strenght">
    <div class="strenght__estimate"></div>
    <div class="strenght__label">Excellent</div>
  </div>
</template>

<script>
export default {};
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
      background-color: $excellent;
      border-radius: 5px;

      @media (min-width: 768px) {
        height: 8px;
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
