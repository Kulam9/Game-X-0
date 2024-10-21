import styles from './Information.module.css';

export function Information(props) {
	const {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		field,
		setField,
	} = props;

	return (
		<>
			<InformationLayout {...props} />
		</>
	);
}
export function InformationLayout({ currentPlayer, isDraw, isGameEnded }) {
	return (
		<>
			<div className={styles.info}>
				{isDraw ? (
					<div>Ничья</div>
				) : isGameEnded ? (
					<div>Победа: {currentPlayer}</div>
				) : (
					<div>Ходит: {currentPlayer}</div>
				)}
			</div>
		</>
	);
}
