import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, RefreshControl, Text } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import Header from "../components/Header";
import Card from "../components/Card";
import ErrorState from "../components/ErrorState";
import useFetch from "../hooks/useFetch";
import { apiGet } from "../api/jsonplaceholder";

export default function AlbumsScreen({ route, navigation }) {
    const { userId, userName } = route.params;
    const { data, loading, error, onRefresh, refreshing } = useFetch(() => apiGet("/albums", { userId }), [userId]);

    useEffect(() => {
        navigation.setOptions({ title: userName ? `Álbuns · ${userName}` : "Álbuns" });
    }, [navigation, userName]);

    if (loading) {
        return (
            <ScreenContainer>
                <Header title="Álbuns" subtitle="Carregando..." />
                <ActivityIndicator size="large" />
            </ScreenContainer>
        );
    }

    if (error) {
        return (
            <ScreenContainer>
                <Header title="Álbuns" />
                <ErrorState error={error.message} onRetry={onRefresh} />
            </ScreenContainer>
        );
    }

    return (
        <ScreenContainer>
            <Header title="Álbuns" subtitle={`Do usuário: ${userName} · Total: ${data?.length ?? 0}`} />
            <FlatList
                data={data || []}
                keyExtractor={(item) => String(item.id)}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#e6edf3" />}
                renderItem={({ item }) => (
                    <Card onPress={() => navigation.navigate("Photos", { albumId: item.id, albumTitle: item.title })}>
                        <Text style={{ color: "#e6edf3", fontWeight: "700", fontSize: 16 }}>{item.title}</Text>
                        <Text style={{ color: "#7f8fb9", marginTop: 4 }}>ID do Álbum: {item.id}</Text>
                    </Card>
                )}
            />
        </ScreenContainer>
    );
}