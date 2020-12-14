import React, { useEffect, useState } from 'react';

import PlaceCard from '../components/PlaceCard';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';


const Places = () => {
	const { isLoading, error, sendRequest, clearError } = useHttpClient();
	const [state, setState] = useState();

	useEffect(() => {
		const fetchPlaces = async () => {
			try {
				const responseData = await sendRequest(
					`${process.env.REACT_APP_BACKEND_URL}/randomEntries`
				);
				setState({
					places: responseData,
					idx: 0,
				});
			} catch (err) {}
		};
		fetchPlaces();
	}, [sendRequest]);

	const current = state && state.places && state.places.length > 0 ? state.places[state.idx] : null;
	const next = async () => {
		if (state.idx + 1 == 25) {
			try {
				const responseData = await sendRequest(
					`${process.env.REACT_APP_BACKEND_URL}/randomEntries`
				);
				setState({
					places: responseData,
					idx: 0,
				});
			} catch (err) {}
		} else {
			setState({
				...state,
				idx: state.idx + 1
			});
		}
	}
	const like = async() => {
		try {
			const place = JSON.stringify(current);
			console.log(place);
			await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/places`,
			'POST',
			place,
			{
				'Content-Type': 'application/json'
			});
			await next();
		} catch (err) {}
	}
	return (
		<React.Fragment>
			<ErrorModal error={error} onClear={clearError} />
			{isLoading && (
			 	<div className="center">
			 		<LoadingSpinner />
			 	</div>
			)}
			{!isLoading && current && (
				<PlaceCard entry={current} onPass={next} onLike={like}/>
			)}
			{!isLoading && !current && <h3>No Entries Found</h3>}
		</React.Fragment>
	);
};

export default Places;