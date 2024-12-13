import { mount, flushPromises } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useHourlyWeatherStore } from '../../stores/HourlyWeatherStore'
import HourlyForecastComponent from '../HourlyForecastComponent.vue'
import axios from 'axios'

// Mock axios
vi.mock('axios')

describe('HourlyForecastComponent.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders hourly weather', async () => {
    // Mock the API response
    const mockResponse = {
      data: {
        records: {
          locations: [
            {
              location: [
                {
                  locationName: '臺北市',
                  geocode: '63000000',
                  lat: '25.035095',
                  lon: '121.558742',
                  weatherElement: [
                    {
                      elementName: 'PoP12h',
                      description: '12小時降雨機率',
                      time: [
                        {
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '30',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'Wx',
                      description: '天氣現象',
                      time: [
                        {
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-09 21:00:00',
                          elementValue: [
                            {
                              value: '短暫雨',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '08',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-09 21:00:00',
                          endTime: '2024-10-10 00:00:00',
                          elementValue: [
                            {
                              value: '短暫雨',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '08',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 00:00:00',
                          endTime: '2024-10-10 03:00:00',
                          elementValue: [
                            {
                              value: '短暫雨',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '08',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 03:00:00',
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '陰',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '07',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 09:00:00',
                          elementValue: [
                            {
                              value: '陰',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '07',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 09:00:00',
                          endTime: '2024-10-10 12:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 12:00:00',
                          endTime: '2024-10-10 15:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 15:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-10 21:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 21:00:00',
                          endTime: '2024-10-11 00:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 00:00:00',
                          endTime: '2024-10-11 03:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 03:00:00',
                          endTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 09:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 09:00:00',
                          endTime: '2024-10-11 12:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 12:00:00',
                          endTime: '2024-10-11 15:00:00',
                          elementValue: [
                            {
                              value: '陰',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '07',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 15:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '晴',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '01',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-11 21:00:00',
                          elementValue: [
                            {
                              value: '晴',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '01',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 21:00:00',
                          endTime: '2024-10-12 00:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 00:00:00',
                          endTime: '2024-10-12 03:00:00',
                          elementValue: [
                            {
                              value: '晴',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '01',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 03:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '晴',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '01',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 09:00:00',
                          elementValue: [
                            {
                              value: '晴',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '01',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 09:00:00',
                          endTime: '2024-10-12 12:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 12:00:00',
                          endTime: '2024-10-12 15:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 15:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-12 21:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 21:00:00',
                          endTime: '2024-10-13 00:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 00:00:00',
                          endTime: '2024-10-13 03:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 03:00:00',
                          endTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 09:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 09:00:00',
                          endTime: '2024-10-13 12:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 12:00:00',
                          endTime: '2024-10-13 15:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 15:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value: '多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '04',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'AT',
                      description: '體感溫度',
                      time: [
                        {
                          dataTime: '2024-10-09 18:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-09 21:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 00:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 03:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 09:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 12:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 15:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 21:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 00:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 03:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 09:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 12:00:00',
                          elementValue: [
                            {
                              value: '30',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 15:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 21:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 00:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 03:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 09:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 12:00:00',
                          elementValue: [
                            {
                              value: '33',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 15:00:00',
                          elementValue: [
                            {
                              value: '32',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '30',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 21:00:00',
                          elementValue: [
                            {
                              value: '30',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 00:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 03:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 09:00:00',
                          elementValue: [
                            {
                              value: '31',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 12:00:00',
                          elementValue: [
                            {
                              value: '34',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 15:00:00',
                          elementValue: [
                            {
                              value: '34',
                              measures: '攝氏度'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'T',
                      description: '溫度',
                      time: [
                        {
                          dataTime: '2024-10-09 18:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-09 21:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 00:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 03:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 09:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 12:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 15:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 21:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 00:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 03:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 09:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 12:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 15:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 21:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 00:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 03:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 09:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 12:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 15:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 21:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 00:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 03:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 09:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 12:00:00',
                          elementValue: [
                            {
                              value: '31',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 15:00:00',
                          elementValue: [
                            {
                              value: '30',
                              measures: '攝氏度'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'RH',
                      description: '相對濕度',
                      time: [
                        {
                          dataTime: '2024-10-09 18:00:00',
                          elementValue: [
                            {
                              value: '81',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-09 21:00:00',
                          elementValue: [
                            {
                              value: '87',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 00:00:00',
                          elementValue: [
                            {
                              value: '86',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 03:00:00',
                          elementValue: [
                            {
                              value: '84',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '86',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 09:00:00',
                          elementValue: [
                            {
                              value: '81',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 12:00:00',
                          elementValue: [
                            {
                              value: '72',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 15:00:00',
                          elementValue: [
                            {
                              value: '71',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '77',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 21:00:00',
                          elementValue: [
                            {
                              value: '81',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 00:00:00',
                          elementValue: [
                            {
                              value: '79',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 03:00:00',
                          elementValue: [
                            {
                              value: '69',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '63',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 09:00:00',
                          elementValue: [
                            {
                              value: '62',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 12:00:00',
                          elementValue: [
                            {
                              value: '59',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 15:00:00',
                          elementValue: [
                            {
                              value: '62',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '60',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 21:00:00',
                          elementValue: [
                            {
                              value: '70',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 00:00:00',
                          elementValue: [
                            {
                              value: '72',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 03:00:00',
                          elementValue: [
                            {
                              value: '75',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '75',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 09:00:00',
                          elementValue: [
                            {
                              value: '70',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 12:00:00',
                          elementValue: [
                            {
                              value: '73',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 15:00:00',
                          elementValue: [
                            {
                              value: '74',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '79',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 21:00:00',
                          elementValue: [
                            {
                              value: '85',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 00:00:00',
                          elementValue: [
                            {
                              value: '83',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 03:00:00',
                          elementValue: [
                            {
                              value: '78',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '72',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 09:00:00',
                          elementValue: [
                            {
                              value: '69',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 12:00:00',
                          elementValue: [
                            {
                              value: '71',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 15:00:00',
                          elementValue: [
                            {
                              value: '77',
                              measures: '百分比'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'CI',
                      description: '舒適度指數',
                      time: [
                        {
                          dataTime: '2024-10-09 18:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-09 21:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 00:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 03:00:00',
                          elementValue: [
                            {
                              value: '22',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '22',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 09:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 12:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 15:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 21:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 00:00:00',
                          elementValue: [
                            {
                              value: '22',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 03:00:00',
                          elementValue: [
                            {
                              value: '21',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '21',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 09:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 12:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 15:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 21:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 00:00:00',
                          elementValue: [
                            {
                              value: '22',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 03:00:00',
                          elementValue: [
                            {
                              value: '22',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '22',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 09:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 12:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 15:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 21:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 00:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 03:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 09:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: 'NA'
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 12:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: 'NA'
                            },
                            {
                              value: '悶熱',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 15:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: 'NA'
                            },
                            {
                              value: '悶熱',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'WeatherDescription',
                      description: '天氣預報綜合描述',
                      time: [
                        {
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-09 21:00:00',
                          elementValue: [
                            {
                              value:
                                '短暫雨。降雨機率 30%。溫度攝氏24度。舒適。偏東風 平均風速<= 1級(每秒1公尺)。相對濕度81%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-09 21:00:00',
                          endTime: '2024-10-10 00:00:00',
                          elementValue: [
                            {
                              value:
                                '短暫雨。降雨機率 30%。溫度攝氏24度。舒適。東北風 平均風速<= 1級(每秒1公尺)。相對濕度87%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 00:00:00',
                          endTime: '2024-10-10 03:00:00',
                          elementValue: [
                            {
                              value:
                                '短暫雨。降雨機率 30%。溫度攝氏24度。舒適。偏東風 平均風速<= 1級(每秒1公尺)。相對濕度86%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 03:00:00',
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value:
                                '陰。降雨機率 30%。溫度攝氏23度。舒適。東北風 平均風速<= 1級(每秒1公尺)。相對濕度84%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 09:00:00',
                          elementValue: [
                            {
                              value:
                                '陰。降雨機率 20%。溫度攝氏23度。舒適。東北風 平均風速1-2級(每秒2公尺)。相對濕度86%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 09:00:00',
                          endTime: '2024-10-10 12:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏25度。舒適。東北風 平均風速1-2級(每秒2公尺)。相對濕度81%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 12:00:00',
                          endTime: '2024-10-10 15:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏26度。舒適。東北風 平均風速1-2級(每秒2公尺)。相對濕度72%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 15:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏26度。舒適。東北風 平均風速1-2級(每秒2公尺)。相對濕度71%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-10 21:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏24度。舒適。偏東風 平均風速<= 1級(每秒1公尺)。相對濕度77%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 21:00:00',
                          endTime: '2024-10-11 00:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏24度。舒適。偏東風 平均風速<= 1級(每秒1公尺)。相對濕度81%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 00:00:00',
                          endTime: '2024-10-11 03:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏23度。舒適。偏東風 平均風速<= 1級(每秒1公尺)。相對濕度79%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 03:00:00',
                          endTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏23度。舒適。偏東風 平均風速1-2級(每秒2公尺)。相對濕度69%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 09:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏23度。舒適。偏東風 平均風速1-2級(每秒2公尺)。相對濕度63%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 09:00:00',
                          endTime: '2024-10-11 12:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏25度。舒適。偏東風 平均風速1-2級(每秒2公尺)。相對濕度62%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 12:00:00',
                          endTime: '2024-10-11 15:00:00',
                          elementValue: [
                            {
                              value:
                                '陰。降雨機率 20%。溫度攝氏28度。舒適。東北風 平均風速1-2級(每秒2公尺)。相對濕度59%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 15:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value:
                                '晴。降雨機率 20%。溫度攝氏27度。舒適。偏東風 平均風速1-2級(每秒2公尺)。相對濕度62%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-11 21:00:00',
                          elementValue: [
                            {
                              value:
                                '晴。降雨機率 20%。溫度攝氏25度。舒適。偏東風 平均風速1-2級(每秒2公尺)。相對濕度60%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 21:00:00',
                          endTime: '2024-10-12 00:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏24度。舒適。偏東風 平均風速<= 1級(每秒1公尺)。相對濕度70%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 00:00:00',
                          endTime: '2024-10-12 03:00:00',
                          elementValue: [
                            {
                              value:
                                '晴。降雨機率 20%。溫度攝氏24度。舒適。偏東風 平均風速<= 1級(每秒1公尺)。相對濕度72%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 03:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value:
                                '晴。降雨機率 20%。溫度攝氏23度。舒適。偏東風 平均風速<= 1級(每秒1公尺)。相對濕度75%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 09:00:00',
                          elementValue: [
                            {
                              value:
                                '晴。降雨機率 20%。溫度攝氏23度。舒適。偏東風 平均風速1-2級(每秒2公尺)。相對濕度75%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 09:00:00',
                          endTime: '2024-10-12 12:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏26度。舒適。偏東風 平均風速1-2級(每秒2公尺)。相對濕度70%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 12:00:00',
                          endTime: '2024-10-12 15:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏29度。舒適。偏東風 平均風速1-2級(每秒2公尺)。相對濕度73%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 15:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏29度。舒適。偏東風 平均風速1-2級(每秒2公尺)。相對濕度74%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-12 21:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏27度。舒適。偏東風 平均風速1-2級(每秒2公尺)。相對濕度79%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 21:00:00',
                          endTime: '2024-10-13 00:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏26度。舒適。偏東風 平均風速1-2級(每秒2公尺)。相對濕度85%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 00:00:00',
                          endTime: '2024-10-13 03:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏26度。舒適。偏東風 平均風速1-2級(每秒2公尺)。相對濕度83%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 03:00:00',
                          endTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏25度。舒適。偏東風 平均風速1-2級(每秒2公尺)。相對濕度78%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 09:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏25度。舒適。偏東風 平均風速1-2級(每秒2公尺)。相對濕度72%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 09:00:00',
                          endTime: '2024-10-13 12:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏28度。舒適。偏東風 平均風速1-2級(每秒3公尺)。相對濕度69%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 12:00:00',
                          endTime: '2024-10-13 15:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏31度。悶熱。偏東風 平均風速1-2級(每秒3公尺)。相對濕度71%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 15:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏30度。悶熱。偏東風 平均風速1-2級(每秒2公尺)。相對濕度77%。',
                              measures: 'NA'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'PoP6h',
                      description: '6小時降雨機率',
                      time: [
                        {
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-10 00:00:00',
                          elementValue: [
                            {
                              value: '30',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 00:00:00',
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '30',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 12:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 12:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-11 00:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 00:00:00',
                          endTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 12:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 12:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 00:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 00:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 12:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 12:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-13 00:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 00:00:00',
                          endTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 12:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 12:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '百分比'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'WS',
                      description: '風速',
                      time: [
                        {
                          dataTime: '2024-10-09 18:00:00',
                          elementValue: [
                            {
                              value: '1',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-09 21:00:00',
                          elementValue: [
                            {
                              value: '1',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 00:00:00',
                          elementValue: [
                            {
                              value: '1',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 03:00:00',
                          elementValue: [
                            {
                              value: '1',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 09:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '2',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 12:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '2',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 15:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '1',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 21:00:00',
                          elementValue: [
                            {
                              value: '1',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 00:00:00',
                          elementValue: [
                            {
                              value: '1',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 03:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 09:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '2',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 12:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '2',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 15:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '2',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 21:00:00',
                          elementValue: [
                            {
                              value: '1',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 00:00:00',
                          elementValue: [
                            {
                              value: '1',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 03:00:00',
                          elementValue: [
                            {
                              value: '1',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '2',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 09:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '2',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 12:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '2',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 15:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '2',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 21:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 00:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 03:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '<= 1',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '2',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 09:00:00',
                          elementValue: [
                            {
                              value: '3',
                              measures: '公尺/秒'
                            },
                            {
                              value: '2',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 12:00:00',
                          elementValue: [
                            {
                              value: '3',
                              measures: '公尺/秒'
                            },
                            {
                              value: '2',
                              measures: '蒲福風級'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 15:00:00',
                          elementValue: [
                            {
                              value: '2',
                              measures: '公尺/秒'
                            },
                            {
                              value: '2',
                              measures: '蒲福風級'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'WD',
                      description: '風向',
                      time: [
                        {
                          dataTime: '2024-10-09 18:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-09 21:00:00',
                          elementValue: [
                            {
                              value: '東北風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 00:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 03:00:00',
                          elementValue: [
                            {
                              value: '東北風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '東北風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 09:00:00',
                          elementValue: [
                            {
                              value: '東北風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 12:00:00',
                          elementValue: [
                            {
                              value: '東北風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 15:00:00',
                          elementValue: [
                            {
                              value: '東北風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 21:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 00:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 03:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 09:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 12:00:00',
                          elementValue: [
                            {
                              value: '東北風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 15:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 21:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 00:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 03:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 09:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 12:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 15:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 21:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 00:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 03:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 09:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 12:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 15:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'Td',
                      description: '露點溫度',
                      time: [
                        {
                          dataTime: '2024-10-09 18:00:00',
                          elementValue: [
                            {
                              value: '21',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-09 21:00:00',
                          elementValue: [
                            {
                              value: '22',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 00:00:00',
                          elementValue: [
                            {
                              value: '21',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 03:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '21',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 09:00:00',
                          elementValue: [
                            {
                              value: '21',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 12:00:00',
                          elementValue: [
                            {
                              value: '21',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 15:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-10 21:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 00:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 03:00:00',
                          elementValue: [
                            {
                              value: '17',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '15',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 09:00:00',
                          elementValue: [
                            {
                              value: '17',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 12:00:00',
                          elementValue: [
                            {
                              value: '19',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 15:00:00',
                          elementValue: [
                            {
                              value: '19',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '17',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-11 21:00:00',
                          elementValue: [
                            {
                              value: '19',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 00:00:00',
                          elementValue: [
                            {
                              value: '19',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 03:00:00',
                          elementValue: [
                            {
                              value: '19',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '18',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 09:00:00',
                          elementValue: [
                            {
                              value: '20',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 12:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 15:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-12 21:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 00:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 03:00:00',
                          elementValue: [
                            {
                              value: '21',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '19',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 09:00:00',
                          elementValue: [
                            {
                              value: '21',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 12:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          dataTime: '2024-10-13 15:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    }
    axios.get.mockResolvedValue(mockResponse)

    const wrapper = mount(HourlyForecastComponent)
    const store = useHourlyWeatherStore()
    await store.fetchHourlyForecast()

    // await nextTick()
    await flushPromises()

    const items = wrapper.findAll('li')
    expect(items.length).toBe(32)
    expect(items[0].text()).toContain('週三')
    expect(items[0].text()).toContain(18)
    expect(wrapper.text()).toContain('逐三小時天氣預報')
  })
})
