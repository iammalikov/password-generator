<template>
    <div :class="classList"></div>
</template>

<script>
  export default {
      props: {
          size: { type: String, default: 'md' } // 'sm' | 'md' | 'lg'
      },
      computed: {
          classList () {
              const baseClass = 'spinner'
              const sizeClass = `${baseClass}_${this.size}`
              return {
                  [baseClass]: true,
                  [sizeClass]: true
              }
          }
      }
  }
</script>

<style lang="scss">
    .spinner {
        width: 1em;
        height: 1em;
        position: relative;
        color: $main;

        &_sm {
            font-size: 16px;
            &:before {
              border-width: 2px;
            }
        }

        &_md {
            font-size: 20px;
            &:before {
              border-width: 3px
            }
        }

        &_lg {
            font-size: 28px;
            &:before {
              border-width: 5px
            }
        }

        &:before {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform-origin: 50% 50%;
            width: 1em;
            height: 1em;
            border-style: solid;
            border-radius: 50%;
            border-color: transparent currentColor transparent currentColor;
            animation: spinner-rotation 1s infinite;
        }
    }

    @keyframes spinner-rotation {
        0% {
            transform: translate(-50%, -50%) rotate(0deg)
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg)
        }
    }
</style>