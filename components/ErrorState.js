import React from "react";
import { View, Text, Pressable } from "react-native";

export default function ErrorState({ error, onRetry }) {
    return (
        <View style={{ alignItems: "center", justifyContent: "center", padding: 24 }}>
            <Text style={{ color: "#ffadad", fontWeight: "700" }}>Algo deu errado</Text>
            <Text style={{ color: "#ffcccc", marginTop: 6 }}>{String(error)}</Text>
            <Pressable onPress={onRetry} style={{ marginTop: 12, padding: 10, borderRadius: 10, backgroundColor: "#24304f" }}>
                <Text style={{ color: "#e6edf3" }}>Tentar novamente</Text>
            </Pressable>
        </View>
    );
}