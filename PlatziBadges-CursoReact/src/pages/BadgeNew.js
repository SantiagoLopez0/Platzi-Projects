import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";

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
	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await api.badges.create(this.state.form);
			this.setState({ loading: false });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};
	render() {
		return (
			<div>
				<div className="BadgeNew__hero">
					<img
						className="BadgeNew__hero-image img-fluid"
						src="https://static.platzi.com/media/tmp/class-files/git/platzi-badges/platzi-badges-16.CreandoNuevosBadges/src/images/platziconf-logo.svg"
						alt="Logo"
					/>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={this.state.form.firstName || "Nombre"}
								lastName={this.state.form.lastName || "Apellido"}
								jobTitle={this.state.form.jobTitle || "Titulo"}
								twitter={this.state.form.twitter || "Twitter"}
							/>
						</div>
						<div className="col-6">
							<BadgeForm
								onChange={this.handleChange}
								formValues={this.state.form}
								onSubmit={this.handleSubmit}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BadgeNew;
