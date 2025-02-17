import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  quote = null

  imageUrl = null

  displayTempFahrenheit = true

  tempCelsius = 0

  tempFahrenheit = 0

  todos = []
}

export const AppState = createObservableProxy(new ObservableAppState())