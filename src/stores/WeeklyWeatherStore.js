import { defineStore } from 'pinia'
import axios from 'axios'
import { computed, ref } from 'vue'

export const useWeeklyWeatherStore = defineStore('weeklyWeather', () => {
  const API_KEY = import.meta.env.VITE_API_KEY
  const locationName = ref('臺北市')
  const weeklyForecast = ref([])
  const isReady = ref(false)

  const fetchWeeklyForecast = async (location = '臺北市') => {
    try {
      isReady.value = false
      const response = await axios.get(
        'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091',
        {
          params: {
            Authorization: API_KEY,
            LocationName: location
          }
        }
      )

      weeklyForecast.value = response.data.records.Locations[0].Location[0]

      isReady.value = true
    } catch (error) {
      console.error(error)
    }
  }

  const processWeeklyForecast = computed(() => {
    if (isReady.value) {
      const findData = weeklyForecast.value.WeatherElement.find(
        (item) => item.ElementName === '天氣現象'
      ).Time.map((time, index) => ({
        wx: time,
        minTemp: weeklyForecast.value.WeatherElement.find((item) => item.ElementName === '最低溫度')
          .Time[index],
        maxTemp: weeklyForecast.value.WeatherElement.find((item) => item.ElementName === '最高溫度')
          .Time[index]
      }))
      return findData
    }
    return { wx: [], minTemp: [], maxTemp: [] }
  })

  return {
    locationName,
    weeklyForecast,
    fetchWeeklyForecast,
    processWeeklyForecast
  }
})
