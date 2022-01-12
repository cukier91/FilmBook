import React from "react";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {fetchCurrentPlayed} from '../redux/action/movieActions'
import axios from "axios";
import "../App.css";
import { Button, Card, Spinner, Row, Col } from "react-bootstrap";

export default function ShowList() {
	const dispatch = useDispatch();
	const movies = useSelector((state)=> state.moviesList)

	useEffect(() => {
	
		dispatch(fetchCurrentPlayed())

	}, []);

	if (movies === null) {
		return (
			<div
				style={{
					marginTop: "20%",
					marginBottom: "20%",
					marginLeft: "auto",
					marginRight: "auto",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Spinner animation="grow" variant="dark" />
			</div>
		);
	} else {
		return (
			<Row
				lg={4}
				style={{
					marginLeft: "3%",
					marginRight: "3%",
					marginTop: "2%",
					marginBottom: "2%",
					background: "#02182b",
				}}
			>
				{movies.movies.map(
					({ title, release_date, poster_path, id, vote_average }) => {
						if (poster_path === null) {
							return null;
						}
						return (
							<Col key={id} style={{ marginTop: "1%" }}>
								<Card
									style={{
										width: "16rem",
										alignContent: "space-around",
										margin: "auto",
										border: "2px solid black",
									}}
								>
									<Card.Img
										variant="top"
										src={`https://image.tmdb.org/t/p/w500${poster_path}`}
										style={{ height: "15rem%" }}
									/>
									<Card.Body
										style={{
											height: "10rem",
											background: "#02182b",
											color: "white",
										}}
									>
										<Card.Title style={{marginBottom:'4%'}}>{title}</Card.Title>
										<Card.Title>
											<i className="nav_font">Release date: {release_date.slice(0, 4)}</i>
										</Card.Title>
										<Card.Title>
											<i className="nav_font">Rate:{vote_average}/10</i>
										</Card.Title>
									</Card.Body>
								</Card>
							</Col>
						);
					}
				)}
			</Row>
		);
	}
}
