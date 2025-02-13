import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Header(props) {
	const { sideLength, changeSideLength, score, newGame, tryNewGame } = props;
	const MONEarned = (Math.round(score * 1) / 10000).toFixed(4);
	;
	return (
		<header className="header" id="header">
			<div className="header_left">
				<div
					className="header_title highlight_text"
					onClick={() => {}}
				>
					2048Nads
				</div>
				<div className="header_subtitle">
					<div>
						Join the tiles, get to
						<span className="highlight_text">
							{" 2048!"}
						</span>
					</div>
					<a href="#footer">
						<div className="game_rules highlight_text">
							How to play{" "}
							<HiOutlineArrowNarrowRight style={{ fontWeight: "lighter" }} />
						</div>
					</a>
				</div>
			</div>
			<div className="header_right">
				<div className="score_board">
					<div className="score">
						<span className="score_head">MON Earned</span>
						<span className="score_value"> {MONEarned} </span>
					</div>
				</div>
				<div className="btn_container">
					<button
						className="action_btn"
						onClick={() => {
							tryNewGame(!newGame);
						}}
					>
						New Game
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
