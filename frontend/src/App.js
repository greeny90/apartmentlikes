import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';

const Auth = React.lazy(() => import('./user/pages/Auth'));
const Places = React.lazy(() => import('./places/pages/Places'));
const Dashboard = React.lazy(() => import('./dash/pages/Dashboard'));
const MyPlaces = React.lazy(() => import('./myplaces/pages/MyPlaces'));

const App = () => {
	const { user, login, logout } = useAuth();

	let routes;
	console.log("App", user);
	if (user) {
		routes = (
			<Switch>
				<Route path="/" exact>
					<Dashboard />
				</Route>
				<Route path="/places" exact>
					<Places />
				</Route>
				<Route path="/myplaces" exact>
					<MyPlaces />
				</Route>
				<Redirect to="/" />
			</Switch>
		);
	} else {
		routes = (
			<Switch>
				<Route path="/" exact>
					<Dashboard />
				</Route>
				<Route path="/auth">
					<Auth />
				</Route>
				<Redirect to="/auth" />
			</Switch>
		);
	}

	return (
		<AuthContext.Provider
			value={{ 
				isLoggedIn: user,
				login: login, 
				logout: logout 
			}}
		>
			<Router>
				<MainNavigation />
				<main>
					<Suspense 
						fallback={
							<div className="center">
								<LoadingSpinner />
							</div>
						}
					>
						{routes}
					</Suspense>
				</main>
			</Router>
		</AuthContext.Provider>
	);
};

export default App;
