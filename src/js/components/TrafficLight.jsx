import { Alert } from "bootstrap";
import React, { useState } from "react";

export const TrafficLight = () => {

	const [color, setColor] = useState('')


	const randomLight = () => {
		const colors = ['red', 'orange', 'green', 'purple'];
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		setColor(randomColor);
	}

	const [addPurple, setAddPurple] = useState('')
	const addPurpleLight = () => {
		return setAddPurple(true)
	}
	const removePurpleLight = () => {
		return setAddPurple(false)
	}

	return (
		<>
			<h1 className="title d-flex justify-content-center pt-1">Traffic Light</h1>
			<div className="trafficLightContainer flex-column">
				<div className="traffic-light-column bg-dark "></div>
				<div className="traffic-light-bg flex-column bg-dark p-1 rounded-4">
					<div onClick={() => setColor('red')} className={"red-light" + (color === "red" ? " light-on" : "")}> </div>
					<div onClick={() => setColor('orange')} className={"orange-light" + (color === "orange" ? " light-on" : "")}> </div>
					<div onClick={() => setColor('green')} className={"green-light" + (color === "green" ? " light-on" : "")}> </div>
					{addPurple && <div onClick={() => setColor('purple')} className={"purple-light" + (color === "purple" ? " light-on" : "")}> </div>
					}
				</div>
			</div>
			<div className="buttons-traficLight d-flex justify-content-center mt-4">
				<button type="button" className="btn btn-dark btn-sm me-2" onClick={randomLight}> Change Light</button>
				<button type="button" className="btn btn-sm purple-btn me-2" onClick={addPurpleLight}> Add Color</button>
				<button type="button" className="btn btn-sm purple-btn " onClick={removePurpleLight} > Hide Color</button>
			</div>

		</>

	)

}
