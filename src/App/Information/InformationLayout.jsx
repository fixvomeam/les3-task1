import styles from './information.module.css'

export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<div className={styles.info}>
			<div>Ход игрока: {currentPlayer}</div>
			{isDraw && <div className={styles.drawInfo}>Ничья!</div>}
			{!isDraw && isGameEnded && <div className={styles.winnerInfo}>Победитель: {currentPlayer}!</div>}
			{!isDraw && !isGameEnded && <div className={styles.gameInfo}>Идет игра!</div>}
		</div>
	)
}
