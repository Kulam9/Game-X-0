import { Field } from './components';
import { Information } from './components';
import './App.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	return (
		<>
			<GameLayout
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
				field={field}
				setField={setField}
				WIN_PATTERNS={WIN_PATTERNS}
			/>
		</>
	);
}

function GameLayout(props) {
	const {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		field,
		setField,
		WIN_PATTERNS,
	} = props;
	return (
		<div className="container">
			<Field {...props} />
			<Information {...props} />
		</div>
	);
}

Game.defaultProps = {
	field: Array(9).fill(''),
};
Game.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
	checkWinner: PropTypes.func.isRequired,
	checkDraw: PropTypes.func.isRequired,
	handleCellClick: PropTypes.func.isRequired,
};

export default Game;
