import { WeatherResponseApi } from 'src/app/core/models/weather.model'

export const expectedData: WeatherResponseApi = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1700373600,
      main: {
        temp: 4.25,
        feels_like: 2.46,
        temp_min: 4.13,
        temp_max: 4.25,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 932,
        humidity: 73,
        temp_kf: 0.12
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.03,
        deg: 207,
        gust: 2.64
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-19 06:00:00')
    },
    {
      dt: 1700384400,
      main: {
        temp: 5.61,
        feels_like: 5.61,
        temp_min: 5.61,
        temp_max: 8.34,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 933,
        humidity: 69,
        temp_kf: -2.73
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.13,
        deg: 190,
        gust: 2.19
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-19 09:00:00')
    },
    {
      dt: 1700395200,
      main: {
        temp: 8.78,
        feels_like: 8.78,
        temp_min: 8.78,
        temp_max: 11.05,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 932,
        humidity: 65,
        temp_kf: -2.27
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04d'
        }
      ],
      clouds: {
        all: 91
      },
      wind: {
        speed: 0.63,
        deg: 114,
        gust: 1.99
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-19 12:00:00')
    },
    {
      dt: 1700406000,
      main: {
        temp: 8.54,
        feels_like: 8.54,
        temp_min: 8.54,
        temp_max: 8.54,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 931,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'muy nuboso',
          icon: '04d'
        }
      ],
      clouds: {
        all: 59
      },
      wind: {
        speed: 1.07,
        deg: 158,
        gust: 2.53
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-19 15:00:00')
    },
    {
      dt: 1700416800,
      main: {
        temp: 6.19,
        feels_like: 4.77,
        temp_min: 6.19,
        temp_max: 6.19,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 931,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'nubes dispersas',
          icon: '03n'
        }
      ],
      clouds: {
        all: 43
      },
      wind: {
        speed: 1.98,
        deg: 195,
        gust: 3.35
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-19 18:00:00')
    },
    {
      dt: 1700427600,
      main: {
        temp: 6.5,
        feels_like: 5.12,
        temp_min: 6.5,
        temp_max: 6.5,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 931,
        humidity: 91,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04n'
        }
      ],
      clouds: {
        all: 98
      },
      wind: {
        speed: 2,
        deg: 192,
        gust: 3
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-19 21:00:00')
    },
    {
      dt: 1700438400,
      main: {
        temp: 6.73,
        feels_like: 6.73,
        temp_min: 6.73,
        temp_max: 6.73,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 930,
        humidity: 92,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04n'
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 1.19,
        deg: 198,
        gust: 1.83
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-20 00:00:00')
    },
    {
      dt: 1700449200,
      main: {
        temp: 6.46,
        feels_like: 6.46,
        temp_min: 6.46,
        temp_max: 6.46,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 929,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.01,
        deg: 182,
        gust: 1.61
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-20 03:00:00')
    },
    {
      dt: 1700460000,
      main: {
        temp: 6.85,
        feels_like: 6.85,
        temp_min: 6.85,
        temp_max: 6.85,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 929,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 0.71,
        deg: 132,
        gust: 1.54
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-20 06:00:00')
    },
    {
      dt: 1700470800,
      main: {
        temp: 8.68,
        feels_like: 8.68,
        temp_min: 8.68,
        temp_max: 8.68,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 929,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 0.79,
        deg: 96,
        gust: 2.08
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-20 09:00:00')
    },
    {
      dt: 1700481600,
      main: {
        temp: 9.15,
        feels_like: 9.15,
        temp_min: 9.15,
        temp_max: 9.15,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 927,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04d'
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 1.23,
        deg: 78,
        gust: 2
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-20 12:00:00')
    },
    {
      dt: 1700492400,
      main: {
        temp: 7.96,
        feels_like: 7.96,
        temp_min: 7.96,
        temp_max: 7.96,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 926,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1,
        deg: 76,
        gust: 1.63
      },
      visibility: 10000,
      pop: 0.13,
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-20 15:00:00')
    },
    {
      dt: 1700503200,
      main: {
        temp: 6.73,
        feels_like: 6.73,
        temp_min: 6.73,
        temp_max: 6.73,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 925,
        humidity: 91,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04n'
        }
      ],
      clouds: {
        all: 98
      },
      wind: {
        speed: 0.43,
        deg: 89,
        gust: 1.35
      },
      visibility: 10000,
      pop: 0.12,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-20 18:00:00')
    },
    {
      dt: 1700514000,
      main: {
        temp: 5.46,
        feels_like: 5.46,
        temp_min: 5.46,
        temp_max: 5.46,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 924,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04n'
        }
      ],
      clouds: {
        all: 93
      },
      wind: {
        speed: 0.74,
        deg: 20,
        gust: 0.91
      },
      visibility: 10000,
      pop: 0.1,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-20 21:00:00')
    },
    {
      dt: 1700524800,
      main: {
        temp: 5.9,
        feels_like: 5.9,
        temp_min: 5.9,
        temp_max: 5.9,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 923,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04n'
        }
      ],
      clouds: {
        all: 95
      },
      wind: {
        speed: 0.09,
        deg: 323,
        gust: 0.33
      },
      visibility: 10000,
      pop: 0.14,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-21 00:00:00')
    },
    {
      dt: 1700535600,
      main: {
        temp: 5.77,
        feels_like: 5.77,
        temp_min: 5.77,
        temp_max: 5.77,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 922,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.02,
        deg: 346,
        gust: 1.27
      },
      visibility: 10000,
      pop: 0.16,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-21 03:00:00')
    },
    {
      dt: 1700546400,
      main: {
        temp: 5.48,
        feels_like: 5.48,
        temp_min: 5.48,
        temp_max: 5.48,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 921,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.25,
        deg: 338,
        gust: 1.9
      },
      visibility: 7976,
      pop: 0.22,
      rain: {
        '3h': 0.37
      },
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-21 06:00:00')
    },
    {
      dt: 1700557200,
      main: {
        temp: 5.4,
        feels_like: 3.89,
        temp_min: 5.4,
        temp_max: 5.4,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 922,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.95,
        deg: 354,
        gust: 2.95
      },
      visibility: 7933,
      pop: 0.58,
      rain: {
        '3h': 0.56
      },
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-21 09:00:00')
    },
    {
      dt: 1700568000,
      main: {
        temp: 4.66,
        feels_like: 2.99,
        temp_min: 4.66,
        temp_max: 4.66,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 922,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'lluvia moderada',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.98,
        deg: 334,
        gust: 3.53
      },
      visibility: 3387,
      pop: 1,
      rain: {
        '3h': 3.74
      },
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-21 12:00:00')
    },
    {
      dt: 1700578800,
      main: {
        temp: 4.57,
        feels_like: 3.13,
        temp_min: 4.57,
        temp_max: 4.57,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 922,
        humidity: 97,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'lluvia moderada',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.76,
        deg: 329,
        gust: 5.77
      },
      visibility: 3408,
      pop: 0.83,
      rain: {
        '3h': 3.67
      },
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-21 15:00:00')
    },
    {
      dt: 1700589600,
      main: {
        temp: 4.93,
        feels_like: 2.68,
        temp_min: 4.93,
        temp_max: 4.93,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 922,
        humidity: 91,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.67,
        deg: 359,
        gust: 8.28
      },
      visibility: 10000,
      pop: 0.88,
      rain: {
        '3h': 0.57
      },
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-21 18:00:00')
    },
    {
      dt: 1700600400,
      main: {
        temp: 4.63,
        feels_like: 2.21,
        temp_min: 4.63,
        temp_max: 4.63,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 923,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.8,
        deg: 355,
        gust: 8.27
      },
      visibility: 8196,
      pop: 0.34,
      rain: {
        '3h': 0.1
      },
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-21 21:00:00')
    },
    {
      dt: 1700611200,
      main: {
        temp: 4.43,
        feels_like: 1.53,
        temp_min: 4.43,
        temp_max: 4.43,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 924,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.41,
        deg: 20,
        gust: 10.23
      },
      visibility: 10000,
      pop: 0.24,
      rain: {
        '3h': 0.15
      },
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-22 00:00:00')
    },
    {
      dt: 1700622000,
      main: {
        temp: 4.23,
        feels_like: 1.44,
        temp_min: 4.23,
        temp_max: 4.23,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 924,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.19,
        deg: 13,
        gust: 7.83
      },
      visibility: 10000,
      pop: 0.22,
      rain: {
        '3h': 0.2
      },
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-22 03:00:00')
    },
    {
      dt: 1700632800,
      main: {
        temp: 4,
        feels_like: 1.49,
        temp_min: 4,
        temp_max: 4,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 925,
        humidity: 96,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.76,
        deg: 357,
        gust: 8.56
      },
      visibility: 10000,
      pop: 0.3,
      rain: {
        '3h': 0.16
      },
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-22 06:00:00')
    },
    {
      dt: 1700643600,
      main: {
        temp: 4.52,
        feels_like: 1.88,
        temp_min: 4.52,
        temp_max: 4.52,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 927,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.07,
        deg: 1,
        gust: 7.91
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        '3h': 0.13
      },
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-22 09:00:00')
    },
    {
      dt: 1700654400,
      main: {
        temp: 5.09,
        feels_like: 2.53,
        temp_min: 5.09,
        temp_max: 5.09,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 928,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.11,
        deg: 360,
        gust: 7.35
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        '3h': 0.26
      },
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-22 12:00:00')
    },
    {
      dt: 1700665200,
      main: {
        temp: 5.58,
        feels_like: 2.45,
        temp_min: 5.58,
        temp_max: 5.58,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 928,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10d'
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 4.22,
        deg: 52,
        gust: 8.8
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        '3h': 0.18
      },
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-22 15:00:00')
    },
    {
      dt: 1700676000,
      main: {
        temp: 3.01,
        feels_like: 0.82,
        temp_min: 3.01,
        temp_max: 3.01,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 930,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'muy nuboso',
          icon: '04n'
        }
      ],
      clouds: {
        all: 78
      },
      wind: {
        speed: 2.22,
        deg: 20,
        gust: 6.99
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-22 18:00:00')
    },
    {
      dt: 1700686800,
      main: {
        temp: 1.77,
        feels_like: -0.41,
        temp_min: 1.77,
        temp_max: 1.77,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 931,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 2.01,
        deg: 323,
        gust: 4.68
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-22 21:00:00')
    },
    {
      dt: 1700697600,
      main: {
        temp: 1.23,
        feels_like: -1.21,
        temp_min: 1.23,
        temp_max: 1.23,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 931,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n'
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 2.16,
        deg: 319,
        gust: 4.54
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-23 00:00:00')
    },
    {
      dt: 1700708400,
      main: {
        temp: 0.43,
        feels_like: 0.43,
        temp_min: 0.43,
        temp_max: 0.43,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 930,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'nubes dispersas',
          icon: '03n'
        }
      ],
      clouds: {
        all: 29
      },
      wind: {
        speed: 0.96,
        deg: 283,
        gust: 2.41
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-23 03:00:00')
    },
    {
      dt: 1700719200,
      main: {
        temp: 1.17,
        feels_like: 1.17,
        temp_min: 1.17,
        temp_max: 1.17,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 930,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'muy nuboso',
          icon: '04n'
        }
      ],
      clouds: {
        all: 53
      },
      wind: {
        speed: 0.94,
        deg: 322,
        gust: 2.59
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-23 06:00:00')
    },
    {
      dt: 1700730000,
      main: {
        temp: 3.56,
        feels_like: 1.7,
        temp_min: 3.56,
        temp_max: 3.56,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 931,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'muy nuboso',
          icon: '04d'
        }
      ],
      clouds: {
        all: 83
      },
      wind: {
        speed: 1.99,
        deg: 11,
        gust: 3.28
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-23 09:00:00')
    },
    {
      dt: 1700740800,
      main: {
        temp: 5.29,
        feels_like: 3.35,
        temp_min: 5.29,
        temp_max: 5.29,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 930,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04d'
        }
      ],
      clouds: {
        all: 88
      },
      wind: {
        speed: 2.38,
        deg: 4,
        gust: 3.86
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-23 12:00:00')
    },
    {
      dt: 1700751600,
      main: {
        temp: 3.83,
        feels_like: 3.83,
        temp_min: 3.83,
        temp_max: 3.83,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 928,
        humidity: 80,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'nubes dispersas',
          icon: '03d'
        }
      ],
      clouds: {
        all: 30
      },
      wind: {
        speed: 1,
        deg: 1,
        gust: 1.73
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: new Date('2023-11-23 15:00:00')
    },
    {
      dt: 1700762400,
      main: {
        temp: 1.13,
        feels_like: 1.13,
        temp_min: 1.13,
        temp_max: 1.13,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 927,
        humidity: 79,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'algo de nubes',
          icon: '02n'
        }
      ],
      clouds: {
        all: 16
      },
      wind: {
        speed: 1.19,
        deg: 254,
        gust: 1.41
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-23 18:00:00')
    },
    {
      dt: 1700773200,
      main: {
        temp: 0.78,
        feels_like: -0.82,
        temp_min: 0.78,
        temp_max: 0.78,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 925,
        humidity: 56,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'cielo claro',
          icon: '01n'
        }
      ],
      clouds: {
        all: 3
      },
      wind: {
        speed: 1.47,
        deg: 234,
        gust: 1.48
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-23 21:00:00')
    },
    {
      dt: 1700784000,
      main: {
        temp: 0.4,
        feels_like: -1.04,
        temp_min: 0.4,
        temp_max: 0.4,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 922,
        humidity: 43,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'algo de nubes',
          icon: '02n'
        }
      ],
      clouds: {
        all: 18
      },
      wind: {
        speed: 1.34,
        deg: 236,
        gust: 1.22
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-24 00:00:00')
    },
    {
      dt: 1700794800,
      main: {
        temp: 0.53,
        feels_like: -1.57,
        temp_min: 0.53,
        temp_max: 0.53,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 919,
        humidity: 37,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'muy nuboso',
          icon: '04n'
        }
      ],
      clouds: {
        all: 67
      },
      wind: {
        speed: 1.79,
        deg: 219,
        gust: 1.64
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: new Date('2023-11-24 03:00:00')
    }
  ],
  city: {
    id: 3163858,
    name: 'Zocca',
    coord: {
      lat: 44.34,
      lon: 10.99
    },
    country: 'IT',
    population: 4593,
    timezone: 3600,
    sunrise: 1700374600,
    sunset: 1700408778
  }
}
