import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

export default function ScreenContainer({ children }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#0b1220" }}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 8 }}>{children}</View>
        </SafeAreaView>
    );
}