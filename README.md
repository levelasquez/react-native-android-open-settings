# react-native-android-open-settings

Open android settings from your react native app

## Install
Using npm

```
npm install react-native-android-open-settings --save
```

Using yarn
```
yarn add react-native-android-open-settings
```

### Automatic Install
```
react-native link react-native-android-open-settings
```
### Manual Install

1. In `settings.gradle`, insert the following code:
    ```gradle
    include ':react-native-android-open-settings'
    project(':react-native-android-open-settings').projectDir = new File(settingsDir, '../node_modules/react-native-android-open-settings/android')
    ```

2. In `build.gradle`, insert the following code:
    ```gradle
    dependencies {
      ...
      implementation project(':react-native-android-open-settings')
    }
    ...
    ```
3. Edit `MainApplication.java` to look like this

    ```java
    ...

    import com.levelasquez.androidopensettings.AndroidOpenSettingsPackage; // <-- add this import

    public class MainApplication extends Application implements ReactApplication {
    ...

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                ...
                new AndroidOpenSettingsPackage() // <-- add this
        );
    }
    ...
}
    ```

## Usage

```javascript

import AndroidOpenSettings from 'react-native-android-open-settings'

// Open general settings menu
AndroidOpenSettings.generalSettings()

// Open home screen settings menu
AndroidOpenSettings.homeSettings()

// Open app settings menu
AndroidOpenSettings.appDetailsSettings()

// Open wifi settings menu
AndroidOpenSettings.wifiSettings()

// Open location source settings menu
AndroidOpenSettings.locationSourceSettings()

// Open wireless settings menu
AndroidOpenSettings.wirelessSettings()

// Open airplane mode settings menu
AndroidOpenSettings.airplaneModeSettings()

// Open apn settings menu
AndroidOpenSettings.apnSettings()

// Open bluetooth settings menu
AndroidOpenSettings.bluetoothSettings()

// Open date settings menu
AndroidOpenSettings.dateSettings()

// Open locale settings menu
AndroidOpenSettings.localeSettings()

// Open input method settings menu
AndroidOpenSettings.inputMethodSettings()

// Open display settings menu
AndroidOpenSettings.displaySettings()

// Open security settings menu
AndroidOpenSettings.securitySettings()

// Open internal storage settings menu
AndroidOpenSettings.internalStorageSettings()

// Open memory card settings menu
AndroidOpenSettings.memoryCardSettings()

// Open accessibility settings menu
AndroidOpenSettings.accessibilitySettings()

// Open application settings menu
AndroidOpenSettings.applicationSettings()

// Open device info settings menu
AndroidOpenSettings.deviceInfoSettings()

// Open application notification settings menu
AndroidOpenSettings.appNotificationSettings()
```
