import { NativeModules, AppState } from 'react-native'

const { RNAndroidOpenSettings } = NativeModules

const generalSettings = () => RNAndroidOpenSettings.generalSettings()

const homeSettings = () => RNAndroidOpenSettings.homeSettings()

const appDetailsSettings = () => RNAndroidOpenSettings.appDetailsSettings()

const wifiSettings = () => RNAndroidOpenSettings.wifiSettings()

const locationSourceSettings = () => RNAndroidOpenSettings.locationSourceSettings()

const wirelessSettings = () => RNAndroidOpenSettings.wirelessSettings()

const airplaneModeSettings = () => RNAndroidOpenSettings.airplaneModeSettings()

const apnSettings = () => RNAndroidOpenSettings.apnSettings()

const bluetoothSettings = () => RNAndroidOpenSettings.bluetoothSettings()

const dateSettings = () => RNAndroidOpenSettings.dateSettings()

const localeSettings = () => RNAndroidOpenSettings.localeSettings()

const inputMethodSettings = () => RNAndroidOpenSettings.inputMethodSettings()

const displaySettings = () => RNAndroidOpenSettings.displaySettings()

const securitySettings = () => RNAndroidOpenSettings.securitySettings()

const internalStorageSettings = () => RNAndroidOpenSettings.internalStorageSettings()

const memoryCardSettings = () => RNAndroidOpenSettings.memoryCardSettings()

const accessibilitySettings = () => RNAndroidOpenSettings.accessibilitySettings()

const applicationSettings = () => RNAndroidOpenSettings.applicationSettings()

const deviceInfoSettings = () => RNAndroidOpenSettings.deviceInfoSettings()

const appNotificationSettings = () => RNAndroidOpenSettings.appNotificationSettings()

const openAsPromised = (settingFunc)  => {
  return new Promise((resolve, reject) => {
    const listener = (state) => {
      if (state === 'active') {
        AppState.removeEventListener('change', listener)
        resolve()
      }
    };
    AppState.addEventListener('change', listener)
    try {
      settingFunc()
    }
    catch (e) {
      AppState.removeEventListener('change', listener)
      reject(e)
    }
  });
}

module.exports = {
  generalSettings,
  homeSettings,
  appDetailsSettings,
  wifiSettings,
  locationSourceSettings,
  wirelessSettings,
  airplaneModeSettings,
  apnSettings,
  bluetoothSettings,
  dateSettings,
  localeSettings,
  inputMethodSettings,
  displaySettings,
  securitySettings,
  internalStorageSettings,
  memoryCardSettings,
  accessibilitySettings,
  applicationSettings,
  deviceInfoSettings,
  appNotificationSettings,
  openAsPromised
}
