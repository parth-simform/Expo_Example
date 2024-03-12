const IS_DEV = process.env.APP_VARIANT === 'development';

export default {
  "expo": {
    "name": IS_DEV ? "Expo Dev" : "Expo Release",
    "slug": "expo-demo",
    "scheme": "your-app-scheme",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.parth.simform.expodemo"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      // "package": "com.parth.simform.expodemo"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "ffe998a7-5217-4140-88df-94d756a921aa"
      }
    },
    "plugins": [
      "expo-router",
      [
        "expo-updates",
        {
          "username": "parth.simform"
        }
      ]
    ],
    "runtimeVersion": "1.0.0",
    "updates": {
      "url": "https://u.expo.dev/ffe998a7-5217-4140-88df-94d756a921aa"
    }
  }
}
