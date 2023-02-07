import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      menuColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      menuColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function MyAccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/mike.jpeg")}
          title={user.name}
          subTitle={user.email}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.menuColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={<ListItemSeperator />}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          IconComponent={
            <Icon name="logout" backgroundColor={colors.warning} />
          }
          onPress={() => logOut()}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default MyAccountScreen;
