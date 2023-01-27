import { StatusBar } from "expo-status-bar";
import { useState } from "react";
// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  Switch,
} from "react-native";

// Screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import colors from "./app/config/colors";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen></ListingEditScreen>;
}
