import React from "react";
import { View, Text } from "react-native";

export default function Header({ title, subtitle }) {
    return (
        <View style={{ gap: 2, paddingVertical: 8 }}>
            <Text style={{ color: "#e6edf3", fontSize: 22, fontWeight: "700" }}>{title}</Text>
            {subtitle ? <Text style={{ color: "#a8b3cf", fontSize: 13 }}>{subtitle}</Text> : null}
        </View>
    );
}