import './Coordinate.scss';
import useFetch from './useFetch';

const apiUrl = 'http://api.open-notify.org/iss-now.json'

const Coordinates = () => {

   const{data, loading} = useFetch(apiUrl)

    return (
        <div className='coordinates'>
            {loading ? (
                <div className='loading'>
                    <div>loading...</div>
                </div>
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
