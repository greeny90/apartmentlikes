import React, { useEffect, useState } from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import MyPlacesCard from '../components/MyPlacesCard';

const MyPlaces = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
	const [state, setState] = useState();
    const fetchPlaces = async () => {
        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/places`
            );
            setState({
                places: responseData
            });
        } catch (err) {}
    };
	useEffect(() => {
		fetchPlaces();
    }, []);

    const unlike = async (doc) => {
        await sendRequest(
            `${process.env.REACT_APP_BACKEND_URL}/places/${doc._id}`,
            'DELETE'
        );
        await fetchPlaces();
    }
	return (
		<React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
			{isLoading && (
			 	<div className="center">
			 		<LoadingSpinner />
			 	</div>
			)}
			{!isLoading && state && state.places.map((place, idx) => <MyPlacesCard place={place} key={idx} onUnlike={unlike}/>
			)}
		</React.Fragment>
	);
};

export default MyPlaces;