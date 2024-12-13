import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCurrentWeatherStore } from '../../stores/CurrentWeatherStore'
import CurrentWeatherComponent from '../CurrentWeatherComponent.vue'
import axios from 'axios'

// Mock axios
vi.mock('axios')

describe('CurrentWeatherComponent.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders current weather', async () => {
    // Mock the API response
    const mockResponse = {
      data: {
        records: {
          Station: [
            {
              StationName: '臺北',
              StationId: '466920',
              ObsTime: {
                DateTime: '2024-10-03T21:10:00+08:00'
              },
              GeoInfo: {
                Coordinates: [
                  {
                    CoordinateName: 'TWD67',
                    CoordinateFormat: 'decimal degrees',
                    StationLatitude: 25.03941,
                    StationLongitude: 121.506676
                  },
                  {
                    CoordinateName: 'WGS84',
                    CoordinateFormat: 'decimal degrees',
                    StationLatitude: 25.037659,
                    StationLongitude: 121.514854
                  }
                ],
                StationAltitude: '6.3',
                CountyName: '臺北市',
                TownName: '中正區',
                CountyCode: '63000',
                TownCode: '63000050'
              },
              WeatherElement: {
                Weather: '陰',
                VisibilityDescription: '11-15',
                SunshineDuration: 0,
                Now: {
                  Precipitation: 20
                },
                WindDirection: 90,
                WindSpeed: 3.7,
                AirTemperature: 23,
                RelativeHumidity: 90,
                AirPressure: 1009.6,
                UVIndex: 0,
                Max10MinAverage: {
                  WindSpeed: 5.5,
                  Occurred_at: {
                    WindDirection: 100,
                    DateTime: '2024-10-03T20:35:00+08:00'
                  }
                },
                GustInfo: {
                  PeakGustSpeed: 16.1,
                  Occurred_at: {
                    WindDirection: 90,
                    DateTime: '2024-10-03T20:27:00+08:00'
                  }
                },
                DailyExtreme: {
                  DailyHigh: {
                    TemperatureInfo: {
                      AirTemperature: 25.6,
                      Occurred_at: {
                        DateTime: '2024-10-03T11:03:00+08:00'
                      }
                    }
                  },
                  DailyLow: {
                    TemperatureInfo: {
                      AirTemperature: 22.9,
                      Occurred_at: {
                        DateTime: '2024-10-03T20:15:00+08:00'
                      }
                    }
                  }
                }
              }
            }
            // {
            //   locationName: '臺北市',
            //   weatherElement: [
            //     { elementName: 'TEMP', elementValue: '25' },
            //     { elementName: 'Weather', elementValue: 'Sunny' }
            //   ]
            // }
          ]
        }
      }
    }
    axios.get.mockResolvedValue(mockResponse)

    const wrapper = mount(CurrentWeatherComponent)
    const store = useCurrentWeatherStore()
    await store.fetchCurrentWeather()

    await nextTick()
    // await flushPromises()

    expect(wrapper.text()).toContain('臺北市')
    expect(wrapper.text()).toContain('25.6°')
    // expect(wrapper.text()).toContain('即時狀況: Sunny')
  })
})
