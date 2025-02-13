import React, { useState } from "react";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import GameBoard from "./Component/GameBoard";
import VisitCount from "./Component/VisitCount";

function App() {
	const sideLength = 4;
	const [newGame, setNewGame] = useState(true);
	const [score, setScore] = useState(0);
	const changeScore = (value) => {
		setScore((preValue) => preValue + value);
	};
	function tryNewGame(bool) {
		setNewGame(bool);
		setScore(0);
	}

	return (
		<div className="App">
			<VisitCount />
			<div className="game_container">
				<Header
					score={score}
					newGame={newGame}
					tryNewGame={tryNewGame}
				/>
				<GameBoard
					sideLength={sideLength}
					changeScore={changeScore}
					setScore={setScore}
					newGame={newGame}
				/>
				<Footer sideLength={sideLength} />
			</div>
		</div>
	);
}

export default App;
