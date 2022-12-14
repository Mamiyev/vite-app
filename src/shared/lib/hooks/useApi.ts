import { useState, useEffect } from 'react';
import axios from 'axios';

export type TApiResponse = {
    data?: any;
    error?: Error;
    loading: boolean;
};

const useApi = (url: string): TApiResponse => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const { data: response } = await axios(url);
            console.log('rsp', response);
            setData(response);
        } catch (error) {
            console.error(error);
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return {
        loading,
        data,
        error,
    };
};

export default useApi;
