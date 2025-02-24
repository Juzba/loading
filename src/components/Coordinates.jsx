import './Coordinate.scss';
import useFetch from './useFetch';

const apiUrl = 'http://api.open-notify.org/iss-now.json'

const Coordinates = () => {

   const{data: {iss_position} , loading} = useFetch(apiUrl)

    return (
        <div className='coordinates'>
            {loading ? (
                <div className='loading'>
                    <div>loading...</div>
                </div>
            ) : (
                <div>
                    <p>{`Latitude: ${iss_position.latitude}`}</p>
                    <p>{`Longitude: ${iss_position.longitude}`}</p>
                </div>
            )}
        </div>
    );
};

export default Coordinates;
