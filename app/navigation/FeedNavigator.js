import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";
const Stack = createStackNavigator();

const FeedNavigator = () => (
  // note to go back and look at differnet options
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      presentation: "card",
      gestureEnabled: true,
    }}
  >
    <Stack.Screen name={routes.LISTING} component={ListingsScreen} />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
