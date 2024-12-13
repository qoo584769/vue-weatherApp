<template>
  <div id="app">
    <div class="flex items-center">
      <div class="">1231</div>

      <div class="slider-container flex items-center h-10 relative w-full">
        <div class="slider-bg absolute w-full h-1 bg-black g-gray-400 op-1/2 ranslate-y-1/2"></div>
        <input
          type="range"
          v-model="range[0]"
          :max="initRange[1]"
          class="slider absolute w-full appearance-none bg-transparent"
          @input="inputValueChanged('left')"
        />
        <input
          type="range"
          v-model="range[1]"
          :max="initRange[1]"
          class="slider absolute w-full appearance-none bg-transparent"
          @input="inputValueChanged('right')"
        />
      </div>

      <div class="">456</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const initRange = ref([0, 256])
const range = ref([0, 256])

const inputValueChanged = (drive) => {
  let min = Math.min(range.value[0], range.value[1])
  let max = Math.max(range.value[0], range.value[1])
  let from = Math.ceil((min / initRange.value[1]) * 100)
  let to = Math.ceil((max / initRange.value[1]) * 100)
  document.getElementsByClassName('slider-bg')[0].style.background =
    `linear-gradient(to right, #898dad ${from}%, #5f0085 ${from}%, #5f0085 ${to}%, #898dad ${to}%, #898dad) 100%`
}

const initRangeFun = (el, drive) => {
  el.setAttribute('max', initRange.value[1])
  drive === 'left' ? el.setAttribute('value', 0) : el.setAttribute('value', 256)
  el.addEventListener('input', () => inputValueChanged(drive))
}

onMounted(() => {
  var range1 = document.getElementsByTagName('input')[0]
  var range2 = document.getElementsByTagName('input')[1]
  initRangeFun(range1, 'left')
  initRangeFun(range2, 'right')
})
</script>

<style lang="scss" scoped>
[type='range'] {
  pointer-events: none;
}

[type='range']::-webkit-slider-thumb {
  pointer-events: auto;
}

[type='range']::-moz-range-thumb {
  pointer-events: auto;
}
.slider-container {
  @apply relative w-full;
}

.slider-bg {
  @apply absolute w-full h-1 bg-gray-400 top-1/2 transform -translate-y-1/2;
}
.slider {
  @apply absolute w-full appearance-none bg-transparent;
}

.slider::-webkit-slider-thumb {
  @apply appearance-none h-8 w-8 bg-green-500 cursor-pointer rounded-full;
  pointer-events: auto;
}

.slider-container input[type='range']::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #5f0085;
}
</style>
