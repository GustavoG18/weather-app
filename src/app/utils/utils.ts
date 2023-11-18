import { WeatherModel, WeatherResponseApi, List } from '../core/models/weather.model'

export const normalizeData = ({ city, list }: WeatherResponseApi): WeatherModel => {
  const weatherByDays = [[list[0]]]
  let indexWeatherByDays = 0
  for (let index = 0; index < list.length; index = index + 1) {
    const element = list[index].dt_txt.toString().split(' ')
    const elementToCompare = weatherByDays[indexWeatherByDays][0].dt_txt.toString().split(' ')
    if (element[0] === elementToCompare[0] && element[1] !== elementToCompare[1]) {
      weatherByDays[indexWeatherByDays].push(list[index])
    } else if (element[0] !== elementToCompare[0]) {
      indexWeatherByDays += 1
      weatherByDays.push([list[index]])
    }
  }
  return {
    city,
    weatherByDays
  }
}

export const reverseData = (data: List[][]): List[][] => {
  const newData = []
  for (let index = data.length - 1; index >= 0; index--) {
    const element = data[index]
    newData.push(element)
  }
  return newData
}
