import React from "react";
import Me from "../images/Me.jpeg";

export default function About() {
	return (
		<div
			style={{
				marginLeft: "25%",
				marginRight: "25%",
				marginTop: "5%",
			}}
		>
			<img
				src={Me}
				style={{
					float: "left",
					width: "25%",
					margin: "0 20px 5px 0",
					borderRadius: "50%",
				}}
			/>

			<p style={{ textAlign: "justify", color: "white", marginBottom: "23%" }}>
				My name is Bartosz Konarowski. For several years I have been working as
				a project engineer in an international corporation. At work, I manage
				investment projects related to robotization, mechanization and
				improvement of production processes. For as long as I can remember, I
				was interested in programming. During the pandemic, I decided to use my
				time to learn and finished the bootcamp. First from Python developer
				backend, now from React fronted developer. I am currently looking for a
				job and this project is a form of exercise for me. The link to the
				github repository of this project is here{" "}
				<a
					href="https://github.com/cukier91/FilmBook"
					target={"_blank"}
					className="nav_font"
				>
					Click on me
				</a>
				. As part of react + redux exercises, I made a project related to Fake
				Store Api. A link to this project can be found here{" "}
				<a
					href="https://fakestore-ea322.firebaseapp.com/"
					target={"blank"}
					className="nav_font"
				>
					Follow to fake shop{" "}
				</a>{" "}
				and repository of this project is here{" "}
				<a
					href="https://github.com/cukier91/fakeStore/tree/main/fake-store"
					target={"blank"}
					className="nav_font"
				>
					Follow to fake shop repository
				</a>
				. I am currently working on a few other projects which will be deployed
				soon.

                All data on this website is real and comes from the API linked to in the footer.
			</p>
		</div>
	);
}
