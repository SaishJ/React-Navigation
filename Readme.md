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

- Navigating Between Screens

  > `navigation` - The `navigation` prop is passed in to every _screen component_ in the native stack navigator.

- Passing Parameter to Routes

  > Pass data to routes when we navigate to them.

  1. Pass params to a route by putting them in an object as a second parameter to the `navigation.navigate` function.
  2. Read the params in your screen component using `route.params`.

- Setting Screen Title

  > A `Stack.Screen` component accepts options prop which is either an object or a function that returns an object, that contains various configuration options. i.e. `title` for the header title

- Customizing Headers

  > There are three key properties to use when customizing the style of your header: `headerStyle`, `headerTintColor`, and `headerTitleStyle`.

  1. headerStyle: A style object that will be applied to the `View` that wraps the header. If you set backgroundColor on it, that will be the color of your header.
  2. headerTintColor: The back button and title both use this property as their color.
  3. headerTitleStyle: To customize the `fontFamily`, `fontWeight` and other `Text` style properties for the title
