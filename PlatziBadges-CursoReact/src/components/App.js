import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Layout from "./Layaout";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound"

function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
