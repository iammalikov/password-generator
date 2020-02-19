<template>
  <div class="page">
    <Logo />
    <div class="app">
      <div class="app__type">
        <TypeSwitcher />
      </div>
      <div class="app__password">
        <Password />
      </div>
      <div class="app__strenght">
        <Strenght />
      </div>
      <div class="app__length">
        <Label text="Length" />
        <Length />
      </div>
      <div class="app__characters">
        <Label text="Character type" />
        <div class="checkbox-group">
          <ToggleButton labelText="A-Z" />
          <ToggleButton labelText="a-z" />
          <ToggleButton labelText="0-9" />
          <ToggleButton labelText="!”#$" />
        </div>
      </div>
    </div>
    <InfoButton />
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import TypeSwitcher from "@/components/TypeSwitcher";
import Password from "@/components/Password";
import Strenght from "@/components/Strenght";
import Length from "@/components/Length";
import Label from "@/components/Label";
import ToggleButton from "@/components/ToggleButton";
import InfoButton from "@/components/InfoButton";

export default {
  name: "App",
  components: {
    Logo,
    TypeSwitcher,
    Password,
    Strenght,
    Length,
    Label,
    ToggleButton,
    InfoButton
  }
};
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  padding: 0 13px;

  @media (min-width: 768px) {
    margin: auto;
    max-width: 635px;
  }

  @media (min-width: 1280px) {
    max-width: 845px;
  }

  @media (min-width: 1440px) {
    max-width: 955px;
  }

  .logo {
    align-self: start;
  }

  .info-button {
    align-self: end;
  }
}

.app {
  &__type {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    @media (min-width: 768px) {
      margin-bottom: 60px;
    }
  }

  &__password {
    margin-bottom: 10px;

    @media (min-width: 768px) {
      margin-bottom: 20px;
    }

    @media (min-width: 1280px) {
      margin-bottom: 30px;
    }
  }

  &__strenght {
    margin-bottom: 35px;

    @media (min-width: 768px) {
      margin-bottom: 60px;
    }
  }

  &__length {
    margin-bottom: 30px;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
    }

    .label {
      margin-bottom: 15px;

      @media (min-width: 768px) {
        min-width: 175px;
        margin-bottom: 0;
      }

      @media (min-width: 1280px) {
        min-width: 215px;
      }
    }

    .length {
      width: 100%;
    }
  }

  &__characters {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
    }

    .label {
      margin-bottom: 15px;

      @media (min-width: 768px) {
        min-width: 175px;
        margin-bottom: 0;
      }

      @media (min-width: 1280px) {
        min-width: 215px;
      }
    }
  }

  .checkbox-group {
    display: flex;
    flex-direction: row;

    & :nth-child(n) {
      margin-right: 10px;
      width: 100%;

      @media (min-width: 768px) {
        margin-right: 15px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
