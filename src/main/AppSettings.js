'use strict'

const DB_KEY = 'Settings_Shadow'

class AppSettings {

  /* ****************************************************************************/
  // Lifecycle
  /* ****************************************************************************/

  /**
  * @param localStorage: the localStorage instance
  */
  constructor (localStorage) {
    this.localStorage = localStorage
  }

  /* ****************************************************************************/
  // Updates
  /* ****************************************************************************/

  /**
  * @param settings: the settings to persist
  */
  update (settings) {
    this.localStorage.setItem(DB_KEY, JSON.stringify(settings))
  }

  /**
  * @return the data from localstorage or an empty object
  */
  load () {
    const data = this.localStorage.getItem(DB_KEY)
    return data ? JSON.parse(data) : {}
  }

  /**
  * Loads a single value
  * @param key: the key to load
  * @param def: the default value
  * @return the value or default value
  */
  loadValue (key, def) {
    const data = this.load()
    return data[key] === undefined ? def : data[key]
  }

  /* ****************************************************************************/
  // Getters
  /* ****************************************************************************/

  get hasTitlebar () { return this.loadValue('showTitlebar', false) }
  get proxyEnabled () { return this.loadValue('proxyServer', { enabled: false }).enabled }
  get proxyHost () { return this.loadValue('proxyServer', { enabled: false }).host }
  get proxyPort () { return this.loadValue('proxyServer', { enabled: false }).port }
  get proxyUrl () { return this.proxyHost + ':' + this.proxyPort }
  get alwaysAskDownloadLocation () { return this.loadValue('alwaysAskDownloadLocation', true) }
  get defaultDownloadLocation () { return this.loadValue('defaultDownloadLocation') }
}

module.exports = AppSettings
