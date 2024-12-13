import { setActivePinia, createPinia } from 'pinia'
import { useCurrentWeatherStore } from '../CurrentWeatherStore'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import axios from 'axios'

vi.mock('axios')

describe('Weather Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('fetches current weather data', async () => {
    const store = useCurrentWeatherStore()
    const mockData = {
      data: {
        records: {
          Station: [
            {
              StationName: '臺北',
              StationId: '466920',
              ObsTime: {
                DateTime: '2024-10-25T21:00:00+08:00'
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
                VisibilityDescription: '>30',
                SunshineDuration: 4.3,
                Now: {
                  Precipitation: 11.5
                },
                WindDirection: 110,
                WindSpeed: 5.6,
                AirTemperature: 30,
                RelativeHumidity: 66,
                AirPressure: 1002.5,
                UVIndex: -99,
                Max10MinAverage: {
                  WindSpeed: 6.7,
                  Occurred_at: {
                    WindDirection: 100,
                    DateTime: '2024-10-25T20:26:00+08:00'
                  }
                },
                GustInfo: {
                  PeakGustSpeed: 15.7,
                  Occurred_at: {
                    WindDirection: 100,
                    DateTime: '2024-10-25T20:20:00+08:00'
                  }
                },
                DailyExtreme: {
                  DailyHigh: {
                    TemperatureInfo: {
                      AirTemperature: 30.4,
                      Occurred_at: {
                        DateTime: '2024-10-25T15:20:00+08:00'
                      }
                    }
                  },
                  DailyLow: {
                    TemperatureInfo: {
                      AirTemperature: 23.3,
                      Occurred_at: {
                        DateTime: '2024-10-25T02:28:00+08:00'
                      }
                    }
                  }
                }
              }
            }
          ]
        }
      }
    }
    axios.get.mockResolvedValue(mockData)

    store.stationId = 466920
    await store.fetchCurrentWeather()

    expect(store.weatherData).toEqual({
      StationName: '臺北',
      StationId: '466920',
      ObsTime: {
        DateTime: '2024-10-25T21:00:00+08:00'
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
        VisibilityDescription: '>30',
        SunshineDuration: 4.3,
        Now: {
          Precipitation: 11.5
        },
        WindDirection: 110,
        WindSpeed: 5.6,
        AirTemperature: 30,
        RelativeHumidity: 66,
        AirPressure: 1002.5,
        UVIndex: -99,
        Max10MinAverage: {
          WindSpeed: 6.7,
          Occurred_at: {
            WindDirection: 100,
            DateTime: '2024-10-25T20:26:00+08:00'
          }
        },
        GustInfo: {
          PeakGustSpeed: 15.7,
          Occurred_at: {
            WindDirection: 100,
            DateTime: '2024-10-25T20:20:00+08:00'
          }
        },
        DailyExtreme: {
          DailyHigh: {
            TemperatureInfo: {
              AirTemperature: 30.4,
              Occurred_at: {
                DateTime: '2024-10-25T15:20:00+08:00'
              }
            }
          },
          DailyLow: {
            TemperatureInfo: {
              AirTemperature: 23.3,
              Occurred_at: {
                DateTime: '2024-10-25T02:28:00+08:00'
              }
            }
          }
        }
      }
    })
  })
})
