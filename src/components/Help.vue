<template>
  <div class="help">
    help: password length can be&nbsp;from 1 to&nbsp;100 characters
  </div>
</template>

<script>
export default {
  name: "Help"
};
</script>

<style lang="scss">
.help {
  color: $border;
  font-size: 14px;
  text-align: right;
  margin: 50px 0 20px;

  @media (min-width: 768px) {
    margin: 60px 0 30px;
    font-size: 16px;
  }
}
</style>
