import React from "react";
import { Link } from "react-router-dom";

import twitterLogo from "../images/twitter.svg";
import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
	render() {
		return (
			<div className="BadgesListItem">
				<img
					className="BadgesListItem__avatar"
					src={this.props.badge.avatarUrl}
					alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
				/>

				<div>
					<strong>
						{this.props.badge.firstName} {this.props.badge.lastName}
					</strong>
					<br />
					<img
						src={twitterLogo}
						alt="TwitterLogo"
						className="BadgesListItem__twitter"
					/>
					<span className="BadgesListItem__twitterUser">
						{" "}
						@{this.props.badge.twitter}
					</span>
					<br />
					{this.props.badge.jobTitle}
				</div>
			</div>
		);
	}
}

class BadgesList extends React.Component {
	render() {
		if (this.props.badges.length === 0) {
			return (
				<div>
					<h3>
						No encontramos nungún elemento, puedes crear un nuevo Badge.
					</h3>
					<Link to="/badges/new" className="btn btn-primary mt-3">
						{" "}
						Create New Badge{" "}
					</Link>
				</div>
			);
		}

		return (
			<div className="BadgesList">
				<ul className="list-unstyled">
					{this.props.badges.map((badge) => {
						return (
							<li key={badge.id}>
								<BadgesListItem badge={badge} />
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default BadgesList;
