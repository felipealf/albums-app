import React from "react";
import { View, Image, Text } from "react-native";

export default function PhotoThumb({ item }) {
    return (
        <View style={{ flex: 1 / 3 }}>
            <View
                style={{
                    aspectRatio: 1,
                    borderRadius: 12,
                    overflow: "hidden",
                    backgroundColor: "#0f172a",
                    borderWidth: 1,
                    borderColor: "#1f2a44",
                }}
            >
                <Image source={{ uri: item.thumbnailUrl }} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
            </View>
            <Text numberOfLines={2} style={{ color: "#a8b3cf", fontSize: 11, marginTop: 6 }}>{item.title}</Text>
        </View>
    );
}