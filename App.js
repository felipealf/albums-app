import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UsersScreen from "./src/screens/UsersScreen";
import AlbumsScreen from "./src/screens/AlbumsScreen";
import PhotosScreen from "./src/screens/PhotosScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "#0b1220" },
                    headerTintColor: "#e6edf3",
                    contentStyle: { backgroundColor: "#0b1220" },
                }}
            >
                <Stack.Screen name="Users" component={UsersScreen} options={{ title: "Usuários" }} />
                <Stack.Screen name="Albums" component={AlbumsScreen} options={{ title: "Álbuns" }} />
                <Stack.Screen name="Photos" component={PhotosScreen} options={{ title: "Fotos" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}