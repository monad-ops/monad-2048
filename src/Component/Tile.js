import React from "react";
import { Color } from "../Utils/colors";

function Tile(props) {
	const { value, sideLength } = props;
	const handle = "@0x_Deus"
	return (
		<div
			className={`tile ${sideLength === 8 ? " for_64" : ""}`}
			style={{ background: Color(value).background }}
		>
			<span className="tile_value" style={{ color: Color(value).color }}>
				{value}
			</span>
		</div>
	);
}

export default Tile;
