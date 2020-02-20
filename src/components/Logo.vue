<template>
  <img src="@/assets/logo.svg" alt="logo" class="logo" />
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style lang="scss">
.logo {
  height: 21px;
  margin: 20px 0 50px;

  @media (min-width: 768px) {
    height: 23px;
    margin: 30px 0 60px;
  }

  @media (min-width: 1280px) {
    height: 31px;
  }
}
</style>
