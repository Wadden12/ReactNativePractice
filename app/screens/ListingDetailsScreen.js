import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "../components/AppText";
import { Image } from "react-native-expo-image-cache";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      {/* <Image style={styles.image} source={listing.images[0]} /> */}
      <Image
        style={styles.image}
        preview={{
          uri: listing.images[0].thumbnailUrl,
        }}
        tint="light"
        uri={listing.images[0].url}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>{listing.price}</AppText>

          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/mike.jpeg")}
              title="Mike Wadden"
              subTitle="10 Listings"
            />
          </View>

          <ContactSellerForm listing={listing} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },

  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {},
});

export default ListingDetailsScreen;
