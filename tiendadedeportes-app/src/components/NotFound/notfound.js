import React from "react";
import { Link } from "react-router-dom";
import error404 from './error404.jpg'
const NotFound = () => {
	return (
		<div className="contenedorAltPages">
			<br />
			<h1>ERROR 404: Oops! Parece que por acá no hay nada</h1>
			<br />
            <div className="container_robot">
            <img className="robot" alt="Error 404" src={error404}></img>
            </div>
			<br /> <br />
				<h2 className="volverAInicio">Volver al <Link to={`/`}>inicio</Link></h2>

		</div>
	);
};

export default NotFound;