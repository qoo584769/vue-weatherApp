import { defineStore } from 'pinia'
import axios from 'axios'
import { computed, ref } from 'vue'

export const useHourlyWeatherStore = defineStore('hourlyWeather', () => {
  const API_KEY = import.meta.env.VITE_API_KEY
  const locationName = ref('臺北市')
  const hourlyForecast = ref([])
  const isReady = ref(false)

  const fetchHourlyForecast = async (location = '臺北市') => {
    try {
      isReady.value = false
      const response = await axios.get(
        'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-089',
        {
          params: {
            Authorization: API_KEY,
            LocationName: location
          }
        }
      )

      hourlyForecast.value = response.data.records.Locations[0].Location[0]

      isReady.value = true
    } catch (error) {
      console.error(error)
    }
  }

  const processHourlyForecast = computed(() => {
    if (isReady.value) {
      const findData = hourlyForecast.value.WeatherElement.find(
        (e) => e.ElementName === '天氣現象'
      ).Time.map((timePoint, index) => ({
        wx: timePoint,
        temp: hourlyForecast.value.WeatherElement.find((e) => e.ElementName === '溫度').Time[index]
      }))

      return findData
    }
    return { temp: [], wx: [] }
  })

  return {
    locationName,
    hourlyForecast,
    fetchHourlyForecast,
    processHourlyForecast,
    isReady
  }
})
