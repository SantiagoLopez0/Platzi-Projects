import React from "react";
import "./styles/Navbar.css";

class Navbar extends React.Component {
	render() {
		return (
			<div className="Navbar">
				<div className="container-fluid">
					<a href="/" className='Navbar__brand'>
						<img
                            className='Navbar__brand-logo'
							src="https://static.platzi.com/media/tmp/class-files/git/platzi-badges/platzi-badges-6.NuestraPrimeraPagina/src/images/logo.svg"
                            alt="Logo"
						/>
						<span className="font-weight-light">Platzi</span>
						<span className="font-weight-bold">Conf</span>
					</a>
				</div>
			</div>
		);
	}
}

export default Navbar;
