import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWeatherIconStore = defineStore('weatherIcon', () => {
  const timeZone = ref({
    day: ['sunny', 'partly_cloudy_day', 'cloud', 'rainy', 'thunderstorm'],
    night: ['bedtime', 'partly_cloudy_night', 'cloud', 'rainy', 'thunderstorm']
  })

  const dayZone = (time) => {
    if (time >= 6 && time < 18) {
      return 'day'
    }
    return 'night'
  }

  const getWeatherIcon = (iconNum = '1', time) => {
    const match = iconNum.match(/雷|多雲|雨|陰|晴/)
    const dayOrNight = dayZone(new Date(time).getHours())

    if (!match) {
      if (parseInt(iconNum) === 1) {
        return timeZone.value[dayOrNight][0]
      }
      if (parseInt(iconNum) <= 4) {
        return timeZone.value[dayOrNight][1]
      }
      if (parseInt(iconNum) <= 7) {
        return timeZone.value[dayOrNight][2]
      }
      if (parseInt(iconNum) <= 14) {
        return timeZone.value[dayOrNight][3]
      }
      return timeZone.value[dayOrNight][4]
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

  return { getWeatherIcon }
})
