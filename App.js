import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        // options={{ title: "Detail Component" }} // Set directly with title key
        options={({ route }) => ({ title: route.params.name })} // Set dynamically
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
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
