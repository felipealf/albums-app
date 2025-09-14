import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, RefreshControl } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import Header from "../components/Header";
import ErrorState from "../components/ErrorState";
import PhotoThumb from "../components/PhotoThumb";
import useFetch from "../hooks/useFetch";
import { apiGet } from "../api/jsonplaceholder";

export default function PhotosScreen({ route, navigation }) {
    const { albumId, albumTitle } = route.params;
    const { data, loading, error, onRefresh, refreshing } = useFetch(() => apiGet("/photos", { albumId }), [albumId]);

    useEffect(() => {
        navigation.setOptions({ title: albumTitle ? `Fotos · ${albumTitle}` : "Fotos" });
    }, [navigation, albumTitle]);

    if (loading) {
        return (
            <ScreenContainer>
                <Header title="Fotos" subtitle="Carregando..." />
                <ActivityIndicator size="large" />
            </ScreenContainer>
        );
    }

    if (error) {
        return (
            <ScreenContainer>
                <Header title="Fotos" />
                <ErrorState error={error.message} onRetry={onRefresh} />
            </ScreenContainer>
        );
    }

    return (
        <ScreenContainer>
            <Header title="Fotos" subtitle={`Álbum #${albumId} · Total: ${data?.length ?? 0}`} />
            <FlatList
                data={data || []}
                keyExtractor={(item) => String(item.id)}
                numColumns={3}
                columnWrapperStyle={{ gap: 8 }}
                contentContainerStyle={{ gap: 8, paddingBottom: 16 }}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#e6edf3" />}
                renderItem={({ item }) => <PhotoThumb item={item} />}
            />
        </ScreenContainer>
    );
}