import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Home</Text>
    <Button
      title="Detail"
      onPress={() => navigation.navigate("Detail", { id: 1, name: "Item 1" })}
    />
  </View>
);

const Detail = ({ navigation, route }) => {
  const { id, name } = route.params;
  return (
    <View style={styles.container}>
      <Text>
        {id}, {name}
      </Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Account = () => (
  <View>
    <Text>Account</Text>
  </View>
);

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // Apply on all screen
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          // Apply only single screen
          headerStyle: { backgroundColor: "#f8f9fa" },
          headerTintColor: "dodgerblue",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        // options={{ title: "Detail Component" }} // Set directly with title key
        options={({ route }) => ({ title: route.params.name })} // Set dynamically
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
