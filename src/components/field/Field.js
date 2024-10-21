import styles from './Field.module.css';

export function Field(props) {
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

	const handleCellClick = (index) => {
		const checkWinner = (field, currentPlayer) => {
			return WIN_PATTERNS.some((pattern) =>
				pattern.every((index) => field[index] === currentPlayer),
			);
		};

		const checkDraw = (newField) => {
			return !newField.includes('');
		};

		if (field[index] === '' && !isGameEnded) {
			setField((prevField) => {
				const newField = [...prevField];
				newField[index] = currentPlayer;

				if (checkWinner(newField, currentPlayer)) {
					setIsGameEnded(true);
					const tdElements = document.querySelectorAll('td');

					tdElements.forEach((td) => {
						td.classList.add('active');
					});
				} else if (
					checkWinner(newField, currentPlayer) === false &&
					checkDraw(newField)
				) {
					setIsDraw(true);
				} else {
					setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
				}
				return newField;
			});
		}
	};

	const resetGame = () => {
		setCurrentPlayer('X');
		setIsDraw(false);
		setIsGameEnded(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return (
		<>
			<FieldLayout
				{...props}
				handleCellClick={handleCellClick}
				resetGame={resetGame}
			/>
		</>
	);
}

export function FieldLayout({ field, handleCellClick, resetGame }) {
	return (
		<>
			<table className={styles.field}>
				<tbody>
					{Array(3)
						.fill()
						.map((_, rowIndex) => (
							<tr key={rowIndex}>
								{field
									.slice(rowIndex * 3, rowIndex * 3 + 3)
									.map((cell, cellIndex) => (
										<td
											className={styles.cell}
											key={cellIndex}
											onClick={() =>
												handleCellClick(rowIndex * 3 + cellIndex)
											}
										>
											{cell}
										</td>
									))}
							</tr>
						))}
				</tbody>
			</table>
			<button onClick={() => resetGame()}>Начать заново</button>
		</>
	);
}
