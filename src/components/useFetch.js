import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(url)
            .then((i) => i.json())
            .then((item) => {
                setData(item);
                setLoading(false);
            });
    }, [url]);

    
    return { data, loading };
};

export default useFetch;
