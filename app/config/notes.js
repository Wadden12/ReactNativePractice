import { useState } from "react";
// short hands
// rnss react native style sheet
// imrn import from react native
// Video 8 on Platform specific has a neat seciton on class per platform

//Border examples
// switch puts a little toogle button on the app
// const [isNew, setIsNew] = useState(false);
{
  /* <Switch value={isNew} onValueChange={(neValue) => setIsNew(neValue)} /> */
}

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

// Picker example for notes
const [category, setCategory] = useState();

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];

<Screen>
  <AppPicker
    selectedItem={category}
    onSelectItem={(item) => setCategory(item)}
    items={categories}
    placeholder="Category"
    icon="apps"
  />

  <AppTextInput placeholder="Username" icon="email" />
</Screen>;

// on change alternative example
// onChangeText={(text) => setPassword(text)}

<ImageInputList
  imageUris={imageUris}
  // uri => handleAdd(uri)} is the same as below
  onAddImage={handleAdd}
  onRemoveImage={handleRemove}
/>;

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweets Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const FeedNavigator = () => (
  // can be changed globally with the stack Navigator

  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
    initialRouteName="Tweets"
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      // unquie to the componet
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
        // headerShown: false,
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      // one way
      options={{ title: "Tweet Details" }}
      // how to set Dynamically
      // options={(route) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);
