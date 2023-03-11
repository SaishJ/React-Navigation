## React Navigation

#### Routing and navigation for Expo and React Native apps.

- Installing React Navigation

```cmd
npm install @react-navigation/native
```

- In React Navigation have 3 types of Navigators

  - Stack Navigator: From one screen to another
  - Tab Navigator: For implementing tabs
  - Drawer Navigator: For implementing drawer i.e. pull from left side of screen.

- NavigationContainer

  > `NavigationContainer` is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure.

- createNativeStackNavigator

  > `createNativeStackNavigator` is a function that returns an object containing 2 properties: `Screen` and `Navigator`. Both of them are React components used for configuring the navigator. The `Navigator` should contain `Screen` elements as its children to define the configuration for routes.
