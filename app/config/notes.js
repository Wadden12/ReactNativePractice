import { useState } from "react";
// short hands
// rnss react native style sheet
// imrn import from react native
// Video 8 on Platform specific has a neat seciton on class per platform

//Border examples
<View
  style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <View
    style={{
      backgroundColor: "dodgerblue",
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: "royalblue",
      borderRadius: 50,

      borderTopWidth: 20,
      borderTopLeftRadius: 50,
    }}
  ></View>
  <View
    style={{
      backgroundColor: "dodgerblue",
      width: 100,
      height: 100,
      // for IOS
      shadowColor: "grey",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 1,
      shadowRadius: 10,
      //android only
      elevation: 20,
    }}
  ></View>

  <View
    //Padding and Margins
    style={{
      backgroundColor: "dodgerblue",
      width: 100,
      height: 100,
      padding: 20,
      paddingHorizontal: 10,
    }}
  >
    <View
      style={{
        backgroundColor: "gold",
        width: 50,
        height: 50,
      }}
    ></View>
  </View>
  <View
    style={{
      backgroundColor: "red",
      width: 100,
      height: 100,
      margin: 20,
    }}
  ></View>

  <Text
    // Andoid and IOS have different fonts. A book mark is saved with available fonts for each platoform
    style={{
      fontFamily: "Courier",
      fontSize: 30,
      fontStyle: "italic",
      fontWeight: "600",
      color: "tomato",
      textTransform: "capitalize",
      textAlign: "center",
      lineHeight: 30,
    }}
  >
    {" "}
    I Love React Native! This is my first React Native app! Here's some more
    text
  </Text>

  <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
  <AppText>I love React Native!</AppText>
</View>;

// Text Input

<Screen>
  <Text>{firstName}</Text>
  <TextInput
    secureTextEntry
    keyboardType="numeric"
    clearButtonMode="always"
    onChangeText={(text) => setFirstName(text)}
    placeholder="Firt Name"
    style={{
      borderBottomColor: "#ccc",
      borderBottomWidth: 1,
    }}
  />
</Screen>;
