import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Habit } from "../screens/Habit";
import { Home } from "../screens/Home";
import { New } from "../screens/New";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="New" component={New} />
      <Screen name="Habit" component={Habit} />
    </Navigator>
  );
}
