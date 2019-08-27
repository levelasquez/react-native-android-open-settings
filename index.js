import { NativeModules } from 'react-native'

const { RNAndroidOpenSettings } = NativeModules

const generalSettings = async () => RNAndroidOpenSettings.generalSettings()

const homeSettings = async () => RNAndroidOpenSettings.homeSettings()

const appDetailsSettings = async () => RNAndroidOpenSettings.appDetailsSettings()

const wifiSettings = async () => RNAndroidOpenSettings.wifiSettings()

const locationSourceSettings = async () => RNAndroidOpenSettings.locationSourceSettings()

const wirelessSettings = async () => RNAndroidOpenSettings.wirelessSettings()

const airplaneModeSettings = async () => RNAndroidOpenSettings.airplaneModeSettings()

const apnSettings = async () => RNAndroidOpenSettings.apnSettings()

const bluetoothSettings = async () => RNAndroidOpenSettings.bluetoothSettings()

const dateSettings = async () => RNAndroidOpenSettings.dateSettings()

const localeSettings = async () => RNAndroidOpenSettings.localeSettings()

const inputMethodSettings = async () => RNAndroidOpenSettings.inputMethodSettings()

const displaySettings = async () => RNAndroidOpenSettings.displaySettings()

const securitySettings = async () => RNAndroidOpenSettings.securitySettings()

const internalStorageSettings = async () => RNAndroidOpenSettings.internalStorageSettings()

const memoryCardSettings = async () => RNAndroidOpenSettings.memoryCardSettings()

const accessibilitySettings = async () => RNAndroidOpenSettings.accessibilitySettings()

const applicationSettings = async () => RNAndroidOpenSettings.applicationSettings()

const deviceInfoSettings = async () => RNAndroidOpenSettings.deviceInfoSettings()

const appNotificationSettings = async () => RNAndroidOpenSettings.appNotificationSettings()

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
}
