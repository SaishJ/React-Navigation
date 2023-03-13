import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Link = () => {
  const navigation = useNavigation();
  return <Button title="Click" onPress={() => navigation.navigate("Detail")} />;
};

const Home = () => (
  <View>
    <Text>Home</Text>
    <Link />
  </View>
);

const Detail = ({ navigation }) => (
  <View>
    <Text>Detail</Text>
    <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>
);

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
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
