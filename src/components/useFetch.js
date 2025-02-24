import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(url)
            .then((i) => i.json())
            .then(({ iss_position }) => {
                setData(iss_position);
                setLoading(false);
            });
    }, [url]);

    
    return { data, loading };
};

export default useFetch;
