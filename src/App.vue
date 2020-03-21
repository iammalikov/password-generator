<template>
  <div class="page">
    <Logo />
    <div class="app">
      <div class="app__type">
        <TypeSwitcher v-bind:type="passwordType" v-bind:callback="togglePasswordType" />
      </div>
      <div class="app__password">
        <Password v-bind:text="password" :disabled="disabled" :loading="loading" />
      </div>
      <div class="app__strenght">
        <Strenght v-bind:estimate="strenght" />
      </div>
      <div class="app__length">
        <Label text="Length" />
        <Length v-model="length" arial-label="Length" />
      </div>
      <div class="app__characters">
        <Label text="Character type" />
        <div class="checkbox-group">
          <ToggleButton
            text="A-Z"
            name="uppercaseLetters"
            v-bind:active="uppercaseLetters"
            v-bind:callback="toggleCharacterType"
          />
          <ToggleButton
            text="a-z"
            name="lowercasLetters"
            v-bind:active="lowercasLetters"
            v-bind:callback="toggleCharacterType"
          />
          <ToggleButton
            text="0-9"
            name="digits"
            v-bind:active="digits"
            v-bind:callback="toggleCharacterType"
          />
          <ToggleButton
            text="!”#$"
            name="specialCharacters"
            v-bind:active="specialCharacters"
            v-bind:callback="toggleCharacterType"
          />
        </div>
      </div>
    </div>
    <Help />
  </div>
</template>

<script>
import zxcvbn from "zxcvbn";
import debounce from '@/utils/debounce';
import {
  getNumber,
  getUppercaseLetter,
  getLowercasLetter,
  getDigitCharacter,
  getSpecialCharacter
} from "@/utils/random";

import Logo from "@/components/Logo";
import TypeSwitcher from "@/components/TypeSwitcher";
import Password from "@/components/Password";
import Strenght from "@/components/Strenght";
import Length from "@/components/Length";
import Label from "@/components/Label";
import ToggleButton from "@/components/ToggleButton";
import Help from "@/components/Help";

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
    Help
  },
  data() {
    return {
      loading: false,
      disabled: false,
      password: '',
      passwordType: "characters", // characters | phrase
      length: 10,
      uppercaseLetters: true,
      lowercasLetters: true,
      digits: true,
      specialCharacters: false,
      debounceDelay: 200 // delay between length changes
    };
  },
  created () {
    let timer
    this.updatePassword = debounce(function() {
        this.loading = true
        clearTimeout(timer)
        timer = setTimeout(() => {
          this.password = this.generatePassword(
            this.length,
            this.uppercaseLetters,
            this.lowercasLetters,
            this.digits,
            this.specialCharacters
          );
          this.loading = false
          this.disabled = false
        }, 500)
    }, this.debounceDelay)

    this.updatePassword()
  },
  methods: {
    updatePassword () {
        // see `created` hook:
    },
    togglePasswordType: function(type) {
      this.passwordType = type;
    },
    toggleCharacterType: function(name) {
      this[name] = !this[name];
      this.updatePassword()
    },
    generatePassword: function(
      length,
      uppercaseLetters,
      lowercasLetters,
      digits,
      specialCharacters
    ) {
      let password = "";
      let methods = [];

      if (uppercaseLetters || lowercasLetters || digits || specialCharacters) {
        // Checking the selected character type and selecting the necessary methods for generating random characters
        if (uppercaseLetters) {
          methods.push(getUppercaseLetter);
        }
        if (lowercasLetters) {
          methods.push(getLowercasLetter);
        }
        if (digits) {
          methods.push(getDigitCharacter);
        }
        if (specialCharacters) {
          methods.push(getSpecialCharacter);
        }
      } else {
        // If not one character type is selected – use all methods to generate random characters
        methods = [
          getUppercaseLetter,
          getLowercasLetter,
          getDigitCharacter,
          getSpecialCharacter
        ];
      }

      for (let i = 0; i < length; i++) {
        const randomIndexMethod = getNumber(0, methods.length - 1);

        password += methods[randomIndexMethod]();
      }

      return password;
    },
    calculatePasswordStrength: function(password) {
      const result = zxcvbn(password);
      const estimate = result.score; // 0-4

      switch (estimate) {
        case 0:
          return "deadly";
        case 1:
          return "bad";
        case 2:
          return "normal";
        case 3:
          return "good";
        default:
          return "excellent";
      }
    },
  },
  watch: {
    length() {
      this.disabled = true
      this.updatePassword();
    }
  },
  computed: {
    strenght: function() {
      return this.calculatePasswordStrength(this.password);
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

  .help {
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
