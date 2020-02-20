<template>
  <div class="label">{{ text }}</div>
</template>

<script>
export default {
  name: "Label",
  props: {
    text: String
  }
};
</script>

<style lang="scss">
.label {
  font-weight: 300;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1280px) {
    font-size: 22px;
  }
}
</style>
