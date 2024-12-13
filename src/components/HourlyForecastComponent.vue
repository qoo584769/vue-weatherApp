<template>
  <div class="p-4 bg-black/[.1] backdrop-blur rounded-xl">
    <div class="">
      <p class="text-white hourly-title border-b pb-1">逐三小時天氣預報</p>
    </div>
    <div class="" v-if="hourlyWeatherStore.isReady">
      <div class="overflow-x-auto">
        <ul class="flex gap-4 py-2">
          <li
            class="g-slate-500 text-white flex flex-col items-center p-4 min-w-fit"
            v-for="(item, index) in hourlyWeatherStore.processHourlyForecast"
            :key="index"
          >
            <p class="time">
              {{
                new Intl.DateTimeFormat('zh-TW', {
                  weekday: 'short'
                }).format(new Date(item.wx.StartTime))
              }}
            </p>
            <p class="">
              {{
                new Intl.DateTimeFormat('en-US', {
                  hour: '2-digit',
                  hour12: false
                }).format(new Date(item.wx.StartTime))
              }}
            </p>
            <p class="icon">
              <span class="material-symbols-outlined">
                {{
                  weatherIconStore.getWeatherIcon(
                    item.wx.ElementValue[0].WeatherCode,
                    item.wx.StartTime
                  )
                }}
              </span>
            </p>
            <p class="temprature">{{ item.temp.ElementValue[0].Temperature }}°C</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="text-white" v-else>載入中.......</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useHourlyWeatherStore } from '../stores/HourlyWeatherStore'
import { useWeatherIconStore } from '../stores/WeatherIconStore'

const hourlyWeatherStore = useHourlyWeatherStore()
const weatherIconStore = useWeatherIconStore()

onMounted(() => {
  hourlyWeatherStore.fetchHourlyForecast()
})
</script>

<style lang="scss" scoped></style>
