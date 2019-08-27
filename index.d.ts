declare module "react-native-android-open-settings-async" {
  const generalSettings: () => Promise<void>;
  const homeSettings: () => Promise<void>;
  const appDetailsSettings: () => Promise<void>;
  const wifiSettings: () => Promise<void>;
  const locationSourceSettings: () => Promise<void>;
  const wirelessSettings: () => Promise<void>;
  const airplaneModeSettings: () => Promise<void>;
  const apnSettings: () => Promise<void>;
  const bluetoothSettings: () => Promise<void>;
  const dateSettings: () => Promise<void>;
  const localeSettings: () => Promise<void>;
  const inputMethodSettings: () => Promise<void>;
  const displaySettings: () => Promise<void>;
  const securitySettings: () => Promise<void>;
  const internalStorageSettings: () => Promise<void>;
  const memoryCardSettings: () => Promise<void>;
  const accessibilitySettings: () => Promise<void>;
  const applicationSettings: () => Promise<void>;
  const deviceInfoSettings: () => Promise<void>;
  const appNotificationSettings: () => Promise<void>;
}
