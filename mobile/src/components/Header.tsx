import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "tailwindcss/colors";

import Logo from "../assets/logo.svg";

export function Header() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-row items-center justify-between w-full">
      <Logo />

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigate("New")}
        className="flex-row items-center px-4 border rounded-lg h-11 border-violet-500"
      >
        <Feather name="plus" color={colors.violet[500]} size={20} />
        <Text className="ml-3 text-base font-semibold text-white">Novo</Text>
      </TouchableOpacity>
    </View>
  );
}
