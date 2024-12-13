<template>
  <div class="relative mb-10 md:mr-4">
    <input type="checkbox" name="" id="menu_control" :checked="radioCheck" class="hidden" />
    <label
      class="md:hidde w-10 h-10 overflow-hidden rounded-[10px] backdrop-blur bg-white/[.02] absolute z-10 ight-8 op-8 md:ight-4 md:op-4 after:content-[''] after:w-8 after:h-[2px] after:px-2 after:overflow-hidden after:bg-white/[.7] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:m-auto after:shadow-[0px_-8px_0_rgba(255,255,255,0.7)] before:content-[''] before:w-5 before:h-[2px] before:absolute before:top-0 before:bottom-0 before:left-1 before:m-auto before:bg-white/[.01] before:shadow-[0px_8px_0_rgba(255,255,255,0.7)]"
      :class="[radioCheck ? ' opacity-0' : ' opacity-100']"
      for="menu_control"
      @click="toggle"
    ></label>
    <div
      class="order rounded-xl h-12 md:h-10 absolute w-full ight-0 z-10 overflow-hidden flex transition-transform ease-in-out duration-300"
      :class="[radioCheck ? 'translate-y-0' : '-translate-y-full']"
    >
      <select
        name=""
        id=""
        v-model="cityActive"
        class="appearance-none outline-none px-10 md:px-4 bg-black/[.05] backdrop-blur flex-1 text-sm rounded-lg block w-full p-2.5"
        @change="onChangeFn()"
      >
        <option disabled value="" class="bg-gray-700 border-gray-600 text-white">請選擇縣市</option>
        <option
          v-for="city in citys"
          :key="city.name"
          :value="city.name"
          class="appearance-none bg-gray-700 border-gray-600 placeholder-gray-900 text-white"
        >
          {{ city.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCurrentWeatherStore } from '../stores/CurrentWeatherStore'
import { useHourlyWeatherStore } from '../stores/HourlyWeatherStore'
import { useWeeklyWeatherStore } from '../stores/WeeklyWeatherStore'

const currentWeatherStore = useCurrentWeatherStore()
const hourlyWeatherStore = useHourlyWeatherStore()
const weeklyWeatherStore = useWeeklyWeatherStore()

defineProps({})
const radioCheck = ref(false)
const citys = ref([
  {
    name: '基隆市',
    stationId: 466940,
    cityId: 312605
  },
  {
    name: '臺北市',
    stationId: 466920,
    cityId: 315078
  },
  {
    name: '新北市',
    stationId: 466881,
    cityId: 2515397
  },
  {
    name: '桃園縣',
    stationId: 467050,
    cityId: 3369297
  },
  {
    name: '新竹市',
    stationId: 'C0D660',
    cityId: 313567
  },
  {
    name: '新竹縣',
    stationId: 467571,
    cityId: 3369298
  },
  {
    name: '苗栗縣',
    stationId: 467280,
    cityId: 3369299
  },
  {
    name: '臺中市',
    stationId: 467490,
    cityId: 315040
  },
  {
    name: '彰化縣',
    stationId: 467270,
    cityId: 3369300
  },
  {
    name: '南投縣',
    stationId: 467650,
    cityId: 3369301
  },
  {
    name: '雲林縣',
    stationId: 'C0K330',
    cityId: 3369302
  },
  {
    name: '嘉義市',
    stationId: 467480,
    cityId: 312591
  },
  {
    name: '嘉義縣',
    stationId: 'C0M790',
    cityId: 3369303
  },
  {
    name: '臺南市',
    stationId: 467410,
    cityId: 314999
  },
  {
    name: '高雄市',
    stationId: 467441,
    cityId: 313812
  },
  {
    name: '屏東縣',
    stationId: 467590,
    cityId: 3369304
  },
  {
    name: '臺東縣',
    stationId: 467660,
    cityId: 3369305
  },
  {
    name: '花蓮縣',
    stationId: 466990,
    cityId: 3369306
  },
  {
    name: '宜蘭縣',
    stationId: 467080,
    cityId: 3369296
  },
  {
    name: '澎湖縣',
    stationId: 467350,
    cityId: 3369307
  },
  {
    name: '金門縣',
    stationId: 467110,
    cityId: 2332525
  },
  {
    name: '連江縣',
    stationId: 467990,
    cityId: 2332501
  }
])
// 選擇的地點
const cityActive = ref('')
// 氣象局的站點ID
const cityStationId = ref('')

const onChangeFn = () => {
  const newArr = citys.value.filter((item) => item.name === cityActive.value)
  cityStationId.value = newArr[0].stationId
  currentWeatherStore.fetchCurrentWeather(cityStationId.value)
  hourlyWeatherStore.fetchHourlyForecast(cityActive.value)
  weeklyWeatherStore.fetchWeeklyForecast(cityActive.value)
  toggle()
}

const toggle = () => {
  radioCheck.value = !radioCheck.value
}
</script>

<style scoped></style>
>
