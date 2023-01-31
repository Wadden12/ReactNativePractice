import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

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
  Button,
} from "react-native";

// Screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/TextInput";
import colors from "./app/config/colors";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleDelete = (uri) => {
    setImageUris(imageUris.filter((imageUris) => imageUris !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        // uri => handleAdd(uri)} is the same as below
        onAddImage={handleAdd}
        onRemoveImage={handleDelete}
      />
    </Screen>
  );
}
