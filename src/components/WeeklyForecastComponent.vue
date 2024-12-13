<template>
  <div class="bg-black/[.05] g-emerald-500 backdrop-blur p-5 rounded-xl">
    <div class="text-white">
      <h2 class="border-b pb-1">未來一周天氣</h2>
      <ul class="mt-2 p-4">
        <li class="" v-for="(item, index) in weeklyWeatherStore.processWeeklyForecast" :key="index">
          <div class="flex items-center justify-between gap-4" v-if="index % 2 === 1">
            <div class="">
              {{
                new Intl.DateTimeFormat('zh-TW', {
                  weekday: 'narrow'
                }).format(new Date(item.wx.StartTime))
              }}
            </div>
            <div class="">
              <span class="material-symbols-outlined">
                {{
                  weatherIconStore.getWeatherIcon(
                    item.wx.ElementValue[0].WeatherCode,
                    item.wx.StartTime
                  )
                }}
              </span>
            </div>
            <div class="flex items-center flex-grow gap-3">
              <span class="">{{ item.minTemp.ElementValue[0].MinTemperature }}°C</span>
              <div
                class="bg-black w-full h-1"
                :style="{
                  background: `linear-gradient(to right, #fff ${item.minTemp.ElementValue[0].MinTemperature / 3}%, #2e3192 ${item.minTemp.ElementValue[0].MinTemperature / 3}%, #0090fb ${item.maxTemp.ElementValue[0].MaxTemperature * 3}%, #fff ${item.maxTemp.ElementValue[0].MaxTemperature * 3}%, #fff) 100%`
                }"
              ></div>
              <span class="">{{ item.maxTemp.ElementValue[0].MaxTemperature }}°C</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useWeeklyWeatherStore } from '../stores/WeeklyWeatherStore'
import { useWeatherIconStore } from '../stores/WeatherIconStore'

const weeklyWeatherStore = useWeeklyWeatherStore()
const weatherIconStore = useWeatherIconStore()

onMounted(() => {
  weeklyWeatherStore.fetchWeeklyForecast()
})
</script>

<style lang="scss" scoped></style>
