import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import { StyleSheet, Text, View, Button } from "react-native";
import Screen from "./app/components/Screen";

//Nav
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import ListingsScreen from "./app/screens/ListingsScreen";
import FeedNavigator from "./app/navigation/FeedNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
