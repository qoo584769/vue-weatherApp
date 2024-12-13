import { defineStore } from 'pinia'
import axios from 'axios'
import { computed, ref } from 'vue'

export const useCurrentWeatherStore = defineStore('currentWeather', () => {
  const API_KEY = import.meta.env.VITE_API_KEY
  const stationId = ref(466920)
  const weatherData = ref(null)

  const timeZone = ref({
    day: [
      "bg-[url('@/assets/image/bg-sunny.jpg')]",
      "bg-[url('@/assets/image/bg-cloudy-day.jpg')]",
      "bg-[url('@/assets/image/bg-overcast.jpg')]",
      "bg-[url('@/assets/image/bg-rain.jpg')]",
      "bg-[url('@/assets/image/bg-foggy.jpg')]"
    ],
    night: [
      "bg-[url('@/assets/image/bg-clear-night.jpg')]",
      "bg-[url('@/assets/image/bg-moon.jpg')]",
      "bg-[url('@/assets/image/bg-overcast.jpg')]",
      "bg-[url('@/assets/image/bg-rain.jpg')]",
      "bg-[url('@/assets/image/bg-foggy.jpg')]"
    ]
  })

  const dayZone = (time) => {
    if (time >= 6 && time < 18) {
      return 'day'
    }
    return 'night'
  }

  const getCurrentBg = (weather = '晴', time) => {
    const match = weather.match(/雷|多雲|雨|陰|晴/)
    const dayOrNight = dayZone(new Date(time).getHours())

    if (!match) {
      return timeZone.value[dayOrNight][0]
    }

    if (match[0] === '晴') {
      return timeZone.value[dayOrNight][0]
    }
    if (match[0] === '多雲') {
      return timeZone.value[dayOrNight][1]
    }
    if (match[0] === '陰') {
      return timeZone.value[dayOrNight][2]
    }
    if (match[0] === '雨') {
      return timeZone.value[dayOrNight][3]
    }

    return timeZone.value[dayOrNight][4]
  }

  const fetchCurrentWeather = async (cityId = 466920) => {
    try {
      let url = ''
      const autoStationId = ['C0D660', 'C0K330', 'C0M790']
      if (autoStationId.includes(cityId)) {
        url = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=${
          API_KEY
        }&StationId=${cityId}`
      } else {
        url = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${
          API_KEY
        }&StationId=${cityId}`
      }
      const response = await axios.get(url)

      weatherData.value = response.data.records.Station[0]
    } catch (error) {
      console.error(error)
    }
  }

  const currentDetail = computed(() => {
    return [
      {
        icon: 'water_drop',
        text: '降雨機率',
        value: weatherData.value?.WeatherElement?.Now.Precipitation,
        unit: '%'
      },
      {
        icon: 'humidity_percentage',
        text: '濕度',
        value: weatherData.value?.WeatherElement?.RelativeHumidity,
        unit: '%'
      },
      {
        icon: 'air',
        text: '風速',
        value: weatherData.value?.WeatherElement?.WindSpeed,
        unit: 'm/s'
      },
      {
        icon: 'explore',
        text: '氣壓',
        value: weatherData.value?.WeatherElement?.AirPressure,
        unit: 'hPa'
      }
    ]
  })

  const currentBackground = computed(() => {
    const weather = weatherData.value?.WeatherElement?.Weather
    const time = weatherData.value?.ObsTime?.DateTime
    return getCurrentBg(weather, time)
  })

  return {
    stationId,
    weatherData,
    currentDetail,
    currentBackground,
    fetchCurrentWeather
  }
})
