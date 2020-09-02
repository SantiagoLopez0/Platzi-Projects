import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
	state = {
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: "",
		},
	};

	handleChange = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};

	render() {
		return (
			<div>
				<Navbar />
				<div className="BadgeNew__hero">
					<img
						className="img-fluid"
						src="https://static.platzi.com/media/tmp/class-files/git/platzi-badges/platzi-badges-6.NuestraPrimeraPagina/src/images/badge-header.svg"
						alt="Logo"
					/>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName = {this.state.form.firstName}
								lastName = {this.state.form.lastName}
								jobTitle = {this.state.form.jobTitle}
								twitter = {this.state.form.twitter}
							/>
						</div>
						<div className="col-6">
							<BadgeForm
								onChange={this.handleChange}
								formValues={this.state.form}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BadgeNew;
