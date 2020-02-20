<template>
  <div class="page">
    <Logo />
    <div class="app">
      <div class="app__type">
        <TypeSwitcher v-bind:type="passwordType" v-bind:callback="togglePasswordType" />
      </div>
      <div class="app__password">
        <Password v-bind:text="password" />
      </div>
      <div class="app__strenght">
        <Strenght v-bind:estimate="strenght" />
      </div>
      <div class="app__length">
        <Label text="Length" />
        <Length v-bind:value="length" />
      </div>
      <div class="app__characters">
        <Label text="Character type" />
        <div class="checkbox-group">
          <ToggleButton
            text="A-Z"
            name="uppercaseLetters"
            v-bind:active="characterType.uppercaseLetters"
            v-bind:callback="toggleCharacterType"
          />
          <ToggleButton
            text="a-z"
            name="lowercasLetters"
            v-bind:active="characterType.lowercasLetters"
            v-bind:callback="toggleCharacterType"
          />
          <ToggleButton
            text="0-9"
            name="numbers"
            v-bind:active="characterType.numbers"
            v-bind:callback="toggleCharacterType"
          />
          <ToggleButton
            text="!”#$"
            name="specialCharacters"
            v-bind:active="characterType.specialCharacters"
            v-bind:callback="toggleCharacterType"
          />
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
  },
  data() {
    return {
      passwordType: "characters", // characters | phrase
      password: "PnfYucRbss5oNJzg2VJn5BQCm",
      strenght: "normal", // bad | normal | good
      length: 15,
      characterType: {
        uppercaseLetters: true,
        lowercasLetters: true,
        numbers: true,
        specialCharacters: false
      }
    };
  },
  methods: {
    togglePasswordType: function(type) {
      this.passwordType = type;
    },
    toggleCharacterType: function(name) {
      this.characterType[name] = !this.characterType[name];
    }
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
