import { useCallback, useEffect, useState } from "react";

export default function useFetch(asyncFn, deps = []) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    const load = useCallback(async () => {
        try {
            setError(null);
            setLoading(true);
            const json = await asyncFn();
            setData(json);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, deps); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        load();
    }, [load]);

    const onRefresh = useCallback(async () => {
        try {
            setRefreshing(true);
            await load();
        } finally {
            setRefreshing(false);
        }
    }, [load]);

    return { data, loading, error, onRefresh, refreshing };
}
