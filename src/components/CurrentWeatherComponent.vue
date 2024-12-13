<template>
  <div class="text-center space-y-4 pt-5 pb-5">
    <!-- 縣市名稱 -->
    <h2 class="font-bold text-3xl">{{ currentWeatherStore.weatherData?.GeoInfo.CountyName }}</h2>
    <!-- 溫度與ICON -->
    <div class="text-6xl flex justify-center items-end">
      <span class="">{{ currentWeatherStore.weatherData?.WeatherElement.AirTemperature }}°</span>
      <span class="material-symbols-outlined text-[40px]">
        {{
          weatherIconStore.getWeatherIcon(
            currentWeatherStore.weatherData?.WeatherElement.Weather,
            currentWeatherStore.weatherData?.ObsTime.DateTime
          )
        }}
      </span>
    </div>
    <!-- 最高最低溫度 -->
    <div class="flex justify-center gap-4">
      <div class="flex gap-1">
        <span class="vertical-text text-sm font-medium">最高</span>
        <h3 class="text-3xl">
          {{
            currentWeatherStore.weatherData?.WeatherElement.DailyExtreme.DailyHigh.TemperatureInfo
              .AirTemperature
          }}°
        </h3>
      </div>
      <div class="flex gap-1">
        <span class="vertical-text text-sm font-medium">最低</span>
        <h3 class="text-3xl">
          {{
            currentWeatherStore.weatherData?.WeatherElement.DailyExtreme.DailyLow.TemperatureInfo
              .AirTemperature
          }}°
        </h3>
      </div>
    </div>
    <!-- 現在天氣 -->
    <div class="text-2xl">{{ currentWeatherStore.weatherData?.WeatherElement.Weather }}</div>
  </div>
  <!-- 及時氣象細項 -->
  <ul class="flex flex-wrap md:rounded-xl md:m-5 overflow-hidden g-slate-400 justify-betwen">
    <li
      class="flex flex-col justify-center items-center text-white p-4 bg-black/[.05] backdrop-blur w-1/2 border-r border-b even:border-r-0 [&:nth-last-child(2)]:border-b-0 last:border-b-0"
      v-for="(item, index) in currentWeatherStore.currentDetail"
      :key="index"
    >
      <p class="flex gap-1 mb-2">
        <span class="material-symbols-outlined"> {{ item.icon }} </span>
        <span class="">{{ item.text }}</span>
      </p>
      <span class="text-2xl"
        >{{ item.value }} <small class="text-xs">{{ item.unit }}</small></span
      >
    </li>
  </ul>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCurrentWeatherStore } from '../stores/CurrentWeatherStore'
import { useWeatherIconStore } from '../stores/WeatherIconStore'

const currentWeatherStore = useCurrentWeatherStore()
const weatherIconStore = useWeatherIconStore()

onMounted(() => {
  currentWeatherStore.fetchCurrentWeather()
})
</script>

<style lang="scss" scoped></style>
