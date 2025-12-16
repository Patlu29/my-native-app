import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./home";
import profile from "./profile";
import Reels from "./reels";
import serach from "./serach";
const Tab = createBottomTabNavigator();
export default function Layout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffffff" }}>
        <Tab.Navigator>
          <Tab.Screen
            name="home"
            options={{
              title: "Home",
              headerShown: false,
              // tabBarIcon: ({ color, size, focused }) => (
              //   <View
              //     style={{
              //       width: size,
              //       height: size,
              //       backgroundColor: focused ? color : "#712323ff",
              //       alignItems: "center",
              //       justifyContent: "center",
              //       borderRadius: size / 2,
              //     }}
              //   />
              // ),
            }}
            component={Home}
          />
          <Tab.Screen
            name="reels"
            component={Reels}
            options={{
              title: "Reels",
            }}
          />
          <Tab.Screen
            name="search"
            component={serach}
            options={{
              title: "Search",
            }}
          />
          <Tab.Screen
            name="profile"
            component={profile}
            options={{
              title: "Profile",
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </ThemeProvider>
  );
}
