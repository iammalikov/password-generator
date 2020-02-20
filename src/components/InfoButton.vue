<template>
  <img class="info-button" src="@/assets/info-button.svg" alt="information about this app" />
</template>

<script>
export default {
  name: "InfoButton"
};
</script>

<style lang="scss">
.info-button {
  height: 30px;
  margin: 50px 0 20px;
  transition: all 0.3s ease;
  // cursor: pointer;

  opacity: 0;
  user-select: none;

  // &:hover {
  //   opacity: 0.5;
  // }

  @media (min-width: 768px) {
    height: 40px;
    margin: 60px 0 30px;
  }
}
</style>
