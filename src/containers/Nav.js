import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";
import "../App.css";

export default function Nav() {
	return (
		<>
		
			<link
				href="https://fonts.googleapis.com/css2?family=Monoton&family=Montserrat&display=swap"
				rel="stylesheet"
			/>
			<div className="background"
				style={{
					display: "flex",
					fontFamily: "Monoton",
					backgroundImage:
						'url("https://cdn.pixabay.com/photo/2016/06/15/08/23/tape-1458416_960_720.png")',
					color: "#FFC300",
					height: "19rem",
				}}
			>
				<img
					src="https://cdn.pixabay.com/photo/2013/07/13/12/18/camera-159581_960_720.png"
					style={{ maxHeight: "25%", marginTop: "5%", marginLeft: "1%" }}
					alt="Torbka"
				/>
				<h2 style={{ marginTop: "4%", maxWidth:'10%', marginLeft:'10px' }}>Fake Show Book</h2>
			</div>
			<Navbar className="nav_bar">
				<Container>
					<Navbar.Brand href="/">
						<u className="nav_font">Discover this week</u>
					</Navbar.Brand>
					<Navbar.Brand href="/aboutus">
						<u className="nav_font">About this page</u>
					</Navbar.Brand>
					<Navbar.Brand href="/contact">
						<u className="nav_font">Contact</u>
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
}
