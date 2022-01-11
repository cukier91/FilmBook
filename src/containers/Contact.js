import React, { useState } from "react";
import {
	Card,
	Button,
	Row,
	Col,
	ListGroupItem,
	ListGroup,
} from "react-bootstrap";
import Me from "../images/Me.jpeg";
import "../App.css";

export default function Contact() {
	const [workers, setWorkers] = useState([
		{
			name: "Bartosz Konarowski",
			image: Me,
			phone: "+48 789 352 232",
			title: "Junior front-end developer",
			description:
				"I am looking for a job that will give me a chance to develop and use my skills in a professional environment.",
			email: "konarowski.bartosz@gmail.com",
		},
	]);
	return (
		<Row lg={1}>
			{workers.map(({ image, title, description, name, phone, email }) => {
				return (
					<Col key={image}>
						<div
							style={{
								width: "23rem",
								height: "auto",
								alignContent: "space-around",
								marginLeft: "auto",
								marginRight: "auto",
								marginTop: "4%",
							}}
						>
							<Card.Img variant="top" src={image} style={{ width: "23rem" }} />

							<Card.Body
								style={{
									border: "solid 1px black",
									marginBottom: "5%",
									background: "white",
								}}
							>
								<Card.Title>{title}</Card.Title>
								<Card.Text style={{ width: "22rem" }}>{description}</Card.Text>
								<ListGroup>
									<ListGroupItem>
										Name: <b>{name}</b>
									</ListGroupItem>
									<ListGroupItem>
										Phone: <b>{phone}</b>
									</ListGroupItem>
									<ListGroupItem>
										e-mail: <b>{email}</b>
									</ListGroupItem>
								</ListGroup>
							</Card.Body>
						</div>
					</Col>
				);
			})}
		</Row>
	);
}
