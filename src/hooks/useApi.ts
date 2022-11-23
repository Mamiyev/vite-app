import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios('https://jsonplaceholder.typicode.com/comments');
                setData(response);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return {
        loading,
        data,
    };
};

export default useApi;
