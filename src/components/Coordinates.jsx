import "./Coordinate.scss"
import { useEffect, useState } from 'react';

const Coordinates = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({ latitude: '', longitude: '' });

    console.log(data);

    useEffect(() => {
        const url = 'http://api.open-notify.org/iss-now.json ';
        fetch(url)
            .then((i) => i.json())
            .then((data) => {
                setData({ latitude: data['iss_position']['latitude'], longitude: data['iss_position']['longitude'] });
                setLoading(false);
            });
    }, []);

    return (
        <div className="coordinates">
            {loading ? (
                <div className="loading"><div>loading...</div></div>
            ) : (
                <div>
                    <p>{`Latitude: ${data.latitude}`}</p>
                    <p>{`Longitude: ${data.longitude}`}</p>
                </div>
            )}
        </div>
    );
};

export default Coordinates;
