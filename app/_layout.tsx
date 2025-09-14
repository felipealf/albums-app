import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {
  useEffect(() => { StatusBar.setBarStyle("light-content"); }, []);
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#0b1220" },
        headerTintColor: "#e6edf3",
        contentStyle: { backgroundColor: "#0b1220" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Usuários" }} />
      <Stack.Screen name="albums/[userId]" options={{ title: "Álbuns" }} />
      <Stack.Screen name="photos/[albumId]" options={{ title: "Fotos" }} />
    </Stack>
  );
}
