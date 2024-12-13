<template>
  <div
    class="h-full md:h-dvh p-2 md:p-5 z-[-1] bg-cover bg-fixed md:after:h-full after:bg-black/[.5] after:w-full after:absolute after:top-0 after:left-0 after:bg-fixed after:bg-cover after:z-0 after:backdrop-blur"
    :class="currentWeatherStore.currentBackground"
  >
    <div class="container relative mx-auto z-10 rounded-xl h-full bg-all-inherit">
      <div class="grid h-full md:grid-rows-1 auto-rows-auto">
        <div class="grid gap-4 md:gap-0 grid-cols-1 md:grid-cols-[1fr_2fr]">
          <!-- 目前天氣 -->
          <div class="md:overflow-y-auto md:overflow-x-hidden bg-transparent md:m-5 text-white">
            <CitySelectionComponent></CitySelectionComponent>
            <CurrentWeatherComponent></CurrentWeatherComponent>
          </div>
          <!-- 未來天氣 -->
          <div class="g-slate-400 overflow-x-auto space-y-5 md:p-5 md:m-5">
            <!-- 每三小時預報 -->
            <HourlyForecastComponent></HourlyForecastComponent>
            <!-- 未來一周氣象 -->
            <WeeklyForecastComponent></WeeklyForecastComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CurrentWeatherComponent from '../components/CurrentWeatherComponent.vue'
import HourlyForecastComponent from '../components/HourlyForecastComponent.vue'
import WeeklyForecastComponent from '../components/WeeklyForecastComponent.vue'
import CitySelectionComponent from '../components/CitySelectionComponent.vue'

import { useCurrentWeatherStore } from '../stores/CurrentWeatherStore'

const currentWeatherStore = useCurrentWeatherStore()
</script>

<style scoped></style>
