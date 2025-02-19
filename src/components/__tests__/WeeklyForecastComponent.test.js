import { mount, flushPromises } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useWeeklyWeatherStore } from '../../stores/WeeklyWeatherStore'
import WeeklyForecastComponent from '../WeeklyForecastComponent.vue'
import axios from 'axios'

// Mock axios
vi.mock('axios')

describe('WeeklyForecastComponent.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders weekly weather', async () => {
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
                              value: ' ',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 18:00:00',
                          endTime: '2024-10-14 06:00:00',
                          elementValue: [
                            {
                              value: ' ',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
                          elementValue: [
                            {
                              value: ' ',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 18:00:00',
                          endTime: '2024-10-15 06:00:00',
                          elementValue: [
                            {
                              value: ' ',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
                          elementValue: [
                            {
                              value: ' ',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 18:00:00',
                          endTime: '2024-10-16 06:00:00',
                          elementValue: [
                            {
                              value: ' ',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
                          elementValue: [
                            {
                              value: ' ',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 18:00:00',
                          endTime: '2024-10-17 06:00:00',
                          elementValue: [
                            {
                              value: ' ',
                              measures: '百分比'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'T',
                      description: '平均溫度',
                      time: [
                        {
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 18:00:00',
                          endTime: '2024-10-14 06:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 18:00:00',
                          endTime: '2024-10-15 06:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 18:00:00',
                          endTime: '2024-10-16 06:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 18:00:00',
                          endTime: '2024-10-17 06:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'RH',
                      description: '平均相對濕度',
                      time: [
                        {
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '85',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '77',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '75',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '61',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '71',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '73',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '80',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value: '74',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 18:00:00',
                          endTime: '2024-10-14 06:00:00',
                          elementValue: [
                            {
                              value: '90',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
                          elementValue: [
                            {
                              value: '84',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 18:00:00',
                          endTime: '2024-10-15 06:00:00',
                          elementValue: [
                            {
                              value: '88',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
                          elementValue: [
                            {
                              value: '84',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 18:00:00',
                          endTime: '2024-10-16 06:00:00',
                          elementValue: [
                            {
                              value: '89',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
                          elementValue: [
                            {
                              value: '82',
                              measures: '百分比'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 18:00:00',
                          endTime: '2024-10-17 06:00:00',
                          elementValue: [
                            {
                              value: '88',
                              measures: '百分比'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'MinCI',
                      description: '最小舒適度指數',
                      time: [
                        {
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-10 06:00:00',
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
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 18:00:00',
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
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-11 06:00:00',
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
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 18:00:00',
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
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 06:00:00',
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
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 18:00:00',
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
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-13 06:00:00',
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
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 18:00:00',
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
                          startTime: '2024-10-13 18:00:00',
                          endTime: '2024-10-14 06:00:00',
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
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
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
                          startTime: '2024-10-14 18:00:00',
                          endTime: '2024-10-15 06:00:00',
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
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
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
                          startTime: '2024-10-15 18:00:00',
                          endTime: '2024-10-16 06:00:00',
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
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
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
                          startTime: '2024-10-16 18:00:00',
                          endTime: '2024-10-17 06:00:00',
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
                        }
                      ]
                    },
                    {
                      elementName: 'WS',
                      description: '最大風速',
                      time: [
                        {
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-10 06:00:00',
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
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 18:00:00',
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
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-11 06:00:00',
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
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 18:00:00',
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
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 06:00:00',
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
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 18:00:00',
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
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-13 06:00:00',
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
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 18:00:00',
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
                          startTime: '2024-10-13 18:00:00',
                          endTime: '2024-10-14 06:00:00',
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
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
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
                          startTime: '2024-10-14 18:00:00',
                          endTime: '2024-10-15 06:00:00',
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
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
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
                          startTime: '2024-10-15 18:00:00',
                          endTime: '2024-10-16 06:00:00',
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
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
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
                          startTime: '2024-10-16 18:00:00',
                          endTime: '2024-10-17 06:00:00',
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
                        }
                      ]
                    },
                    {
                      elementName: 'MaxAT',
                      description: '最高體感溫度',
                      time: [
                        {
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '30',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '33',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '30',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value: '35',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 18:00:00',
                          endTime: '2024-10-14 06:00:00',
                          elementValue: [
                            {
                              value: '32',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
                          elementValue: [
                            {
                              value: '36',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 18:00:00',
                          endTime: '2024-10-15 06:00:00',
                          elementValue: [
                            {
                              value: '32',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
                          elementValue: [
                            {
                              value: '37',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 18:00:00',
                          endTime: '2024-10-16 06:00:00',
                          elementValue: [
                            {
                              value: '33',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
                          elementValue: [
                            {
                              value: '37',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 18:00:00',
                          endTime: '2024-10-17 06:00:00',
                          elementValue: [
                            {
                              value: '32',
                              measures: '攝氏度'
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
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '陰短暫雨',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '11',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
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
                          endTime: '2024-10-11 18:00:00',
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
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '晴時多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '02',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
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
                        },
                        {
                          startTime: '2024-10-13 18:00:00',
                          endTime: '2024-10-14 06:00:00',
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
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
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
                          startTime: '2024-10-14 18:00:00',
                          endTime: '2024-10-15 06:00:00',
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
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
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
                          startTime: '2024-10-15 18:00:00',
                          endTime: '2024-10-16 06:00:00',
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
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
                          elementValue: [
                            {
                              value: '晴時多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '02',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 18:00:00',
                          endTime: '2024-10-17 06:00:00',
                          elementValue: [
                            {
                              value: '晴時多雲',
                              measures: '自定義 Wx 文字'
                            },
                            {
                              value: '02',
                              measures: '自定義 Wx 單位'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'MaxCI',
                      description: '最大舒適度指數',
                      time: [
                        {
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: 'NA '
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: 'NA '
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: 'NA '
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: 'NA '
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: 'NA '
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: 'NA '
                            },
                            {
                              value: '悶熱',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: 'NA '
                            },
                            {
                              value: '舒適',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: 'NA '
                            },
                            {
                              value: '悶熱',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 18:00:00',
                          endTime: '2024-10-14 06:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: 'NA '
                            },
                            {
                              value: '悶熱',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: 'NA '
                            },
                            {
                              value: '悶熱',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 18:00:00',
                          endTime: '2024-10-15 06:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: 'NA '
                            },
                            {
                              value: '悶熱',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: 'NA '
                            },
                            {
                              value: '悶熱',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 18:00:00',
                          endTime: '2024-10-16 06:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: 'NA '
                            },
                            {
                              value: '悶熱',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: 'NA '
                            },
                            {
                              value: '悶熱',
                              measures: '自定義 CI 文字'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 18:00:00',
                          endTime: '2024-10-17 06:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: 'NA '
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
                      elementName: 'MinT',
                      description: '最低溫度',
                      time: [
                        {
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 18:00:00',
                          endTime: '2024-10-14 06:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 18:00:00',
                          endTime: '2024-10-15 06:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 18:00:00',
                          endTime: '2024-10-16 06:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 18:00:00',
                          endTime: '2024-10-17 06:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'UVI',
                      description: '紫外線指數',
                      time: [
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '5',
                              measures: '紫外線指數'
                            },
                            {
                              value: '中量級',
                              measures: '曝曬級數'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '5',
                              measures: '紫外線指數'
                            },
                            {
                              value: '中量級',
                              measures: '曝曬級數'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '6',
                              measures: '紫外線指數'
                            },
                            {
                              value: '高量級',
                              measures: '曝曬級數'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value: '7',
                              measures: '紫外線指數'
                            },
                            {
                              value: '高量級',
                              measures: '曝曬級數'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
                          elementValue: [
                            {
                              value: '7',
                              measures: '紫外線指數'
                            },
                            {
                              value: '高量級',
                              measures: '曝曬級數'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
                          elementValue: [
                            {
                              value: '6',
                              measures: '紫外線指數'
                            },
                            {
                              value: '高量級',
                              measures: '曝曬級數'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
                          elementValue: [
                            {
                              value: '7',
                              measures: '紫外線指數'
                            },
                            {
                              value: '高量級',
                              measures: '曝曬級數'
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
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value:
                                '陰短暫雨。降雨機率 30%。溫度攝氏23至24度。舒適。偏東風 風速<= 1級(每秒1公尺)。相對濕度85%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏23至27度。舒適。東北風 風速2級(每秒2公尺)。相對濕度77%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏23至24度。舒適。偏東風 風速<= 1級(每秒2公尺)。相對濕度75%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏23至28度。舒適。偏東風 風速2級(每秒2公尺)。相對濕度61%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value:
                                '晴時多雲。降雨機率 20%。溫度攝氏23至25度。舒適。偏東風 風速<= 1級(每秒2公尺)。相對濕度71%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏23至29度。舒適至悶熱。偏東風 風速2級(每秒2公尺)。相對濕度73%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。降雨機率 20%。溫度攝氏25至27度。舒適。偏東風 風速<= 1級(每秒2公尺)。相對濕度80%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。溫度攝氏25至31度。舒適至悶熱。偏東風 風速2級(每秒3公尺)。相對濕度74%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 18:00:00',
                          endTime: '2024-10-14 06:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。溫度攝氏25至28度。舒適至悶熱。偏東風 風速2級(每秒2公尺)。相對濕度90%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。溫度攝氏25至31度。舒適至悶熱。偏東風 風速2級(每秒2公尺)。相對濕度84%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 18:00:00',
                          endTime: '2024-10-15 06:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。溫度攝氏25至28度。舒適至悶熱。偏東風 風速<= 1級(每秒2公尺)。相對濕度88%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。溫度攝氏25至31度。舒適至悶熱。偏東風 風速<= 1級(每秒2公尺)。相對濕度84%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 18:00:00',
                          endTime: '2024-10-16 06:00:00',
                          elementValue: [
                            {
                              value:
                                '多雲。溫度攝氏25至28度。舒適至悶熱。偏東風 風速<= 1級(每秒2公尺)。相對濕度89%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
                          elementValue: [
                            {
                              value:
                                '晴時多雲。溫度攝氏25至31度。舒適至悶熱。偏南風 風速<= 1級(每秒2公尺)。相對濕度82%。',
                              measures: 'NA'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 18:00:00',
                          endTime: '2024-10-17 06:00:00',
                          elementValue: [
                            {
                              value:
                                '晴時多雲。溫度攝氏25至28度。舒適至悶熱。偏東風 風速<= 1級(每秒2公尺)。相對濕度88%。',
                              measures: 'NA'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'MinAT',
                      description: '最低體感溫度',
                      time: [
                        {
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 18:00:00',
                          endTime: '2024-10-14 06:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 18:00:00',
                          endTime: '2024-10-15 06:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 18:00:00',
                          endTime: '2024-10-16 06:00:00',
                          elementValue: [
                            {
                              value: '30',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
                          elementValue: [
                            {
                              value: '30',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 18:00:00',
                          endTime: '2024-10-17 06:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: '攝氏度'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elementName: 'MaxT',
                      description: '最高溫度',
                      time: [
                        {
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '29',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '27',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value: '31',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 18:00:00',
                          endTime: '2024-10-14 06:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
                          elementValue: [
                            {
                              value: '31',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 18:00:00',
                          endTime: '2024-10-15 06:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
                          elementValue: [
                            {
                              value: '31',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 18:00:00',
                          endTime: '2024-10-16 06:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
                          elementValue: [
                            {
                              value: '31',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 18:00:00',
                          endTime: '2024-10-17 06:00:00',
                          elementValue: [
                            {
                              value: '28',
                              measures: '攝氏度'
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
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '東北風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 18:00:00',
                          endTime: '2024-10-14 06:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 18:00:00',
                          endTime: '2024-10-15 06:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 18:00:00',
                          endTime: '2024-10-16 06:00:00',
                          elementValue: [
                            {
                              value: '偏東風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
                          elementValue: [
                            {
                              value: '偏南風',
                              measures: '8方位'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 18:00:00',
                          endTime: '2024-10-17 06:00:00',
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
                      description: '平均露點溫度',
                      time: [
                        {
                          startTime: '2024-10-09 18:00:00',
                          endTime: '2024-10-10 06:00:00',
                          elementValue: [
                            {
                              value: '21',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 06:00:00',
                          endTime: '2024-10-10 18:00:00',
                          elementValue: [
                            {
                              value: '21',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-10 18:00:00',
                          endTime: '2024-10-11 06:00:00',
                          elementValue: [
                            {
                              value: '19',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 06:00:00',
                          endTime: '2024-10-11 18:00:00',
                          elementValue: [
                            {
                              value: '18',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-11 18:00:00',
                          endTime: '2024-10-12 06:00:00',
                          elementValue: [
                            {
                              value: '18',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 06:00:00',
                          endTime: '2024-10-12 18:00:00',
                          elementValue: [
                            {
                              value: '22',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-12 18:00:00',
                          endTime: '2024-10-13 06:00:00',
                          elementValue: [
                            {
                              value: '22',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 06:00:00',
                          endTime: '2024-10-13 18:00:00',
                          elementValue: [
                            {
                              value: '23',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-13 18:00:00',
                          endTime: '2024-10-14 06:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 06:00:00',
                          endTime: '2024-10-14 18:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-14 18:00:00',
                          endTime: '2024-10-15 06:00:00',
                          elementValue: [
                            {
                              value: '24',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 06:00:00',
                          endTime: '2024-10-15 18:00:00',
                          elementValue: [
                            {
                              value: '26',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-15 18:00:00',
                          endTime: '2024-10-16 06:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 06:00:00',
                          endTime: '2024-10-16 18:00:00',
                          elementValue: [
                            {
                              value: '25',
                              measures: '攝氏度'
                            }
                          ]
                        },
                        {
                          startTime: '2024-10-16 18:00:00',
                          endTime: '2024-10-17 06:00:00',
                          elementValue: [
                            {
                              value: '24',
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

    const wrapper = mount(WeeklyForecastComponent)
    const store = useWeeklyWeatherStore()
    await store.fetchWeeklyForecast()

    // await nextTick()
    await flushPromises()

    expect(wrapper.text()).toContain('未來一周天氣')

    const items = wrapper.findAll('li')
    expect(items.length).toBe(15)
    expect(items[1].text()).toContain('四')
    expect(items[1].text()).toContain('23°C')
  })
})
