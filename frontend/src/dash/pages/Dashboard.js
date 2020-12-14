import React, { useEffect, useState } from 'react';
import { useHttpClient } from '../../shared/hooks/http-hook';
import Table from '../components/Table';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import "./Dashboard.css";

const Dashboard = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [state, setState] = useState();
    const columns = React.useMemo(
        () => [
            {
                Header: "Front Image",
                accessor: "images",
                Cell: ({ cell: { value } }) => value && value.length > 0 ? 
                    <img className="img-fluid img-rounded" width={200} src={value[0]} />
                    : null
            },
            {
                Header: 'Name',
                accessor: 'result-title', // accessor is the "key" in the data
            },
            {
                Header: 'Price',
                accessor: 'result-price',
            },
            {
                Header: 'Date',
                accessor: 'date',
                Cell: ({ cell: { value } }) => (new Date(value)).toLocaleDateString()
            },
            {
                Header: 'Unit Size',
                accessor: 'housing',
            },
        ],
        []
    )
    const fetchPlaces = async () => {
        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/entries?page=1`
            );
            setState({
                ...state,
                places: responseData,
                page: 1
            });
        } catch (err) {}
    };
	useEffect(() => {
		fetchPlaces();
    }, []);
    const getPage = async (page) => {
        try {
            let url = `${process.env.REACT_APP_BACKEND_URL}/entries?page=${page}`;
            if (state.order) {
                url += `&order=${state.order}`;
            }
            if (state.sortBy) {
                url += `&sortBy=${state.sortBy}`;
            }
            const responseData = await sendRequest(
                url
            );
            setState({
                ...state,
                places: responseData,
                page: page
            });
        } catch (err) {}
    }
    const next = async () => {
        await getPage(state.page + 1);
    }
    const back = async () => {
        await getPage(state.page - 1);
    }
    const onOrder = async (ev) => {
        const order = ev.target.value;
        if (!state.sortBy) {
            return;
        }
        let url = `${process.env.REACT_APP_BACKEND_URL}/entries?page=${state.page}&sortBy=${state.sortBy}&order=${order}`;
        try {
            const responseData = await sendRequest(url);
            setState({
                ...state,
                places: responseData,
                order
            });
        } catch (err) {}
    }
    const onSort = async (ev) => {
        const sortBy = ev.target.value;
        let url = `${process.env.REACT_APP_BACKEND_URL}/entries?page=${state.page}&sortBy=${sortBy}`;
        if (state.order) {
            url += `&order=${state.order}`;
        }
        try {
            const responseData = await sendRequest(url);
            setState({
                ...state,
                places: responseData,
                sortBy
            });
        } catch (err) {}
    }
    const places = state && state.places ? state.places : null;
	return (
		<React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <div class="sort-by">
                <label for="sortBy">Sort By:</label>
                <select onChange={onSort} name="sortBy" id="sortBy">
                    <option disabled selected value> -- select an option -- </option>
                    <option value="price">Price</option>
                    <option value="date">Date</option>
                </select>
                <label for="order">Order</label>
                <select onChange={onOrder}  name="order" id="order">
                    <option disabled selected value> -- select an option -- </option>
                    <option value="1">Ascending</option>
                    <option value="-1">Descending</option>
                </select>
            </div>
			{isLoading && (
			 	<div className="center">
			 		<LoadingSpinner />
			 	</div>
			)}
			{!isLoading && places && <Table columns={columns} data={places}/>}
            {!isLoading && places && <div>
                { state.page > 1 && <Button onClick={back}>Back</Button> }
                <Button onClick={next}>Next</Button>
            </div>}
		</React.Fragment>
    );
};

export default Dashboard;