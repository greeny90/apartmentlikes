import { useState, useCallback, useEffect } from 'react';

export const useAuth = () => {
	const [user, setUser] = useState(null);

	const login = useCallback((data) => {
		if (!data || !data.user) {
			return;
		}
		setUser(data.user);
	}, []);

	const logout = useCallback(async () => {
		await fetch(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
			method: "POST",
			mode: "cors",
			credentials: "include"
		});
		setUser(null);
	}, []);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_BACKEND_URL}/user`, {
			mode: "cors",
			credentials: "include",
		})
		.then(res => res.json())
		.then(_user => {
			setUser(_user.user);
		});
	}, []);

	return { login, logout, user };
};


