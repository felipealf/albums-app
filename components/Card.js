import React from "react";
import { Pressable } from "react-native";

export default function Card({ children, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => ({
                backgroundColor: pressed ? "#1d2538" : "#141b2d",
                borderRadius: 16,
                padding: 14,
                borderWidth: 1,
                borderColor: "#1f2a44",
                shadowColor: "#000",
                shadowOpacity: 0.15,
                shadowRadius: 12,
                marginBottom: 12,
            })}
        >
            {children}
        </Pressable>
    );
}