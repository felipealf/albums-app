import React, { useMemo, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, Text, TextInput, View } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import Header from "../components/Header";
import Card from "../components/Card";
import ErrorState from "../components/ErrorState";
import useFetch from "../hooks/useFetch";
import { apiGet } from "../api/jsonplaceholder";

export default function UsersScreen({ navigation }) {
    const { data, loading, error, onRefresh, refreshing } = useFetch(() => apiGet("/users"), []);
    const [q, setQ] = useState("");

    const filtered = useMemo(() => {
        if (!data) return [];
        const term = q.trim().toLowerCase();
        if (!term) return data;
        return data.filter((u) => [u.name, u.username, u.email].some((f) => String(f).toLowerCase().includes(term)));
    }, [data, q]);
    if (loading) {
        return (
            <ScreenContainer>
                <Header title="Usuários" subtitle="Dados via JSONPlaceholder" />
                <ActivityIndicator size="large" />
            </ScreenContainer>
        );
    }

    if (error) {
        return (
            <ScreenContainer>
                <Header title="Usuários" />
                <ErrorState error={error.message} onRetry={onRefresh} />
            </ScreenContainer>
        );
    }

    return (
        <ScreenContainer>
            <Header title="Usuários" subtitle={`Total: ${filtered.length}`} />
            <View
                style={{
                    backgroundColor: "#0f172a",
                    borderColor: "#1f2a44",
                    borderWidth: 1,
                    borderRadius: 12,
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    marginBottom: 12,
                }}
            >
                <TextInput
                    placeholder="Buscar por nome, usuário ou email..."
                    placeholderTextColor="#6b7996"
                    value={q}
                    onChangeText={setQ}
                    style={{ color: "#e6edf3", fontSize: 14 }}
                />
            </View>

            <FlatList
                data={filtered}
                keyExtractor={(item) => String(item.id)}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#e6edf3" />}
                renderItem={({ item }) => (
                    <Card
                        onPress={() =>
                            navigation.navigate("Albums", {
                                userId: item.id,
                                userName: item.name,
                            })
                        }
                    >
                        <Text style={{ color: "#e6edf3", fontWeight: "700", fontSize: 16 }}>{item.name}</Text>
                        <Text style={{ color: "#a8b3cf", marginTop: 2 }}>@{item.username} · {item.email}</Text>
                        {item.company?.name ? <Text style={{ color: "#7f8fb9", marginTop: 4 }}>Empresa: {item.company.name}</Text> : null}
                    </Card>
                )}
            />
        </ScreenContainer>
    );
}