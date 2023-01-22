import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex)
      );
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex]);
    }
  }

  return (
    <View className="flex-1 px-8 pt-16 bg-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-3xl font-extrabold text-white">
          Criar hábito
        </Text>

        <Text className="mt-6 text-base font-semibold text-white">
          Qual seu comprometimento?
        </Text>

        <TextInput
          placeholder="ex.: Exercícios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
          className="h-12 pl-4 mt-3 text-white border-2 rounded-lg bg-zinc-900 border-zinc-800 focus:border-green-600"
        />

        <Text className="mt-4 mb-3 text-base font-semibold text-white">
          Qual a recorrência?
        </Text>

        {availableWeekDays.map((weekDay, index) => (
          <CheckBox
            key={weekDay}
            title={weekDay}
            checked={weekDays.includes(index)}
            onPress={() => handleToggleWeekDay(index)}
          />
        ))}

        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row items-center justify-center w-full mt-6 bg-green-600 rounded-md h-14"
        >
          <Feather name="check" size={20} color={colors.white} />

          <Text className="ml-2 text-base font-semibold text-white">
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
