<template>
  <div class="glitch-container"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$containerWidth: 208px;
$containerHeight: 129px;
$img: '@/assets/img/logo.png';

@function randomNum($max, $min: 0, $u: 1) {
  @return calc(#{$min + random() * $max} * #{$u});
}

.glitch-container {
  position: relative;
  width: $containerWidth;
  height: $containerHeight;
  margin: auto;
  background: url($img) no-repeat;
  background-size: cover; // 使用 cover 属性来适应容器
  animation: main-img-hide 6s infinite step-end;
}

.glitch-container::before,
.glitch-container::after {
  position: absolute;
  content: '';
  width: $containerWidth;
  height: $containerHeight;
  top: 0;
  left: 0;
  background: inherit;
}

.glitch-container::after {
  animation: glitch-one 6s infinite step-end;
}

.glitch-container::before {
  animation: glitch-two 6s infinite 1s step-end;
}

@keyframes glitch-one {
  @for $i from 20 to 30 {
    #{percentage(calc($i / 2))} {
      left: #{randomNum($containerWidth, calc($containerWidth / 2))}px;
      clip-path: inset(
        #{randomNum($containerHeight, calc($containerHeight / 3))}px
          0
          #{randomNum($containerHeight, calc($containerHeight / 3))}px
      );
    }
  }

  15.5% {
    clip-path: inset(6px 0 26px);
    left: -20px;
  }
  16% {
    clip-path: inset(6px 0 26px);
    left: -10px;
    opacity: 0;
  }
  45% {
    opacity: 0.5;
    left: -20px;
    filter: hue-rotate(90deg) saturate(1.3);
  }
  45.5% {
    left: 0px;
    filter: invert(1);
  }

  46% {
    clip-path: inset(30px 0 45px);
    left: 15%;
  }
  46.5% {
    clip-path: inset(4px 0 70px);
    left: -10%;
    transform: scale(1.1);
  }
  47% {
    clip-path: inset(70px 0 4px);
    left: -11%;
    transform: scale(1.2);
  }
  47.5% {
    clip-path: inset(2 0 2px);
    left: 13%;
    transform: scale(1.3);
    filter: invert(0);
  }
  48% {
    clip-path: inset(30 0 30px);
    left: 15%;
    transform: scale(1.1);
  }
  48.5% {
    clip-path: inset(44px 0 1px);
    left: -11%;
    transform: scale(1.2);
    filter: none;
  }
  49% {
    clip-path: inset(1px 0 129px);
    left: 11%;
    transform: scale(1.3);
  }
  49.5% {
    clip-path: inset(24px 0 70px);
    left: 0%;
    transform: scale(1.1);
  }
  50% {
    clip-path: inset(31px 0 45px);
    left: -11%;
  }
  50.5% {
    clip-path: inset(23px 0 101px);
    left: -14%;
    transform: scale(1.2);
  }
  51% {
    clip-path: inset(46px 0 2px);
    left: -14%;
  }
  51.5% {
    clip-path: inset(28px 0 1px);
    left: -14%;
  }
  52% {
    clip-path: inset(12px 0 4px);
    left: -12%;
    transform: scale(1.1);
  }
  52.5% {
    clip-path: inset(20px 0 38px);
    left: -11%;
    transform: scale(1.3);
    filter: hue-rotate(90deg) saturate(1.3);
  }
  54% {
    clip-path: inset(4px 0 4px);
    left: 12%;
    transform: scale(1.1);
    filter: none;
  }
  54% {
    background-image: none;
  }
}

@keyframes glitch-two {
  @for $i from 40 to 50 {
    #{percentage(calc($i / 2))} {
      left: #{randomNum($containerWidth, calc($containerWidth / 2))}px;
      clip-path: inset(
        #{randomNum($containerHeight, calc($containerHeight / 3))}px
          0
          #{randomNum($containerHeight, calc($containerHeight / 3))}px
      );
    }
  }
  25.5% {
    clip-path: inset(4px 0 34px);
    left: -20px;
  }
  26% {
    clip-path: inset(4px 0 34px);
    left: -10px;
    opacity: 0;
  }
  45% {
    opacity: 0.3;
    left: -20px;
    filter: hue-rotate(45deg) saturate(1.1);
  }
  45.5% {
    left: 0px;
    filter: invert(1.2);
  }

  46% {
    clip-path: inset(20px 0 89px);
    left: -12%;
  }
  46.5% {
    clip-path: inset(31px 0 21px);
    left: 8%;
    transform: scale(1.2);
  }
  47% {
    clip-path: inset(10px 0 111px);
    left: 8%;
    transform: scale(1.3);
  }
  47.5% {
    clip-path: inset(22 0 20px);
    left: -9%;
    transform: scale(1.1);
    filter: invert(1.1);
  }
  48% {
    clip-path: inset(18px 0 34px);
    left: 11%;
    transform: scale(1.2);
  }
  48.5% {
    clip-path: inset(0px 0 105px);
    left: -12%;
    transform: scale(1.2);
    filter: none;
  }
  49% {
    clip-path: inset(18px 0 18px);
    left: 11%;
    transform: scale(1.3);
  }
  49.5% {
    clip-path: inset(1px 0 99px);
    left: 6%;
    transform: scale(1.1);
  }
  50% {
    clip-path: inset(47px 0 32px);
    left: -12%;
  }
  50.5% {
    clip-path: inset(36px 0 12px);
    left: 14%;
    transform: scale(1.4);
  }
  51% {
    clip-path: inset(8px 0 101px);
    left: -14%;
  }
  51.5% {
    clip-path: inset(16px 0 1px);
    left: 14%;
  }
  52% {
    clip-path: inset(2px 0 101px);
    left: -12%;
    transform: scale(1.1);
  }
  52.5% {
    clip-path: inset(27px 0 65px);
    left: -11%;
    transform: scale(1.3);
    filter: hue-rotate(150deg) saturate(1.3);
  }
  54% {
    clip-path: inset(35px 0 38px);
    left: 12%;
    transform: scale(1.1);
    filter: none;
  }
  54% {
    background-image: none;
  }
}

@keyframes main-img-hide {
  5% {
    filter: invert(1);
  }
  5.2% {
    filter: none;
  }
  10% {
    opacity: 0.5;
    filter: grayscale(1);
  }
  11% {
    filter: none;
    opacity: 1;
  }
  45% {
    opacity: 0.5;
    filter: grayscale(1);
  }
  46% {
    filter: none;
    opacity: 1;
  }
  53.5% {
    opacity: 0.5;
    filter: grayscale(1);
  }
  54% {
    filter: none;
    opacity: 1;
  }
  54.5% {
    opacity: 0.5;
    filter: hue-rotate(30deg);
  }
  55% {
    filter: none;
  }
  55.5% {
    background-image: none;
    filter: none;
    opacity: 1;
  }
  56% {
    background-image: url($img);
    opacity: 0.5;
  }
  56.5% {
    background-image: none;
  }
  57% {
    background-image: url($img);
    opacity: 0.8;
  }
  57.5% {
    opacity: 0.3;
  }
  58% {
    background-image: none;
  }
}
</style>
