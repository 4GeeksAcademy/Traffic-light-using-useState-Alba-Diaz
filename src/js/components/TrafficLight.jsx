import { Alert } from "bootstrap";
import React, { useState } from "react";

export const TrafficLight = () => {

	const [color, setColor] = useState('')

	return (
		<>
			<h1 className="title d-flex justify-content-center pt-5">Traffic Light</h1>
			<div className="trafficLightContainer flex-column">
				<div className="traffic-light-column bg-dark "></div>
				<div className="traffic-light-bg flex-column bg-dark p-2 rounded-4">
					<div onClick={() => setColor('red')} className={"red-light" + (color === "red" ? " light-on" : "")}> </div>
					<div onClick={() => setColor('orange')} className={"orange-light" + (color === "orange" ? " light-on" : "")}> </div>
					<div onClick={() => setColor('green')} className={"green-light" + (color === "green" ? " light-on" : "")}> </div>
				</div>
			</div>
		</>

	)

}
