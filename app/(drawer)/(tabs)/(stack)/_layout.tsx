import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={({ navigation }) => ({
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            className="mr-5"
            size={20}
            onPress={() => {
              if (canGoBack) {
                navigation.goBack();
              } else {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }
            }}
          />
        ),
      })}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      />

      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />

      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Ajustes",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
