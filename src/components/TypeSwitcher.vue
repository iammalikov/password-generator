<template>
  <div class="type-switcher">
    <div class="type-switcher__button">
      <input type="radio" name="password-type" id="scharacters" checked="true" />
      <label for="scharacters">Characters</label>
    </div>
    <div class="type-switcher__button">
      <input type="radio" name="password-type" id="phrase" />
      <label for="phrase">Phrase</label>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.type-switcher {
  display: flex;

  &__button {
    input {
      display: none;
    }

    label {
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
        border-color: rgba($main, 0.6);
        color: rgba($main, 0.6);
      }
    }

    input:checked + label {
      color: $white;
      background-color: $main;
      cursor: default;
    }

    &:first-child label {
      border-radius: 5px 0px 0px 5px;
    }

    &:last-child label {
      border-radius: 0 5px 5px 0;
    }
  }
}
</style>
