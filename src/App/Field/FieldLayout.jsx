import styles from './field.module.css'

export const FieldLayout = ({ field, setField, setIsDraw, setIsGameEnded, setCurrentPlayer, currentPlayer }) => {
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	]
	const onButtonClick = (index) => {
		const nextField = field.map((c, i) => {
			if (i === index) {
				return (c = currentPlayer)
			} else return c
		})
		setField(nextField)
		const nextFieldIndexes = nextField
			.map((element, index) => {
				if (element === currentPlayer) {
					return index
				}
			})
			.filter((elements) => elements >= 0)
		let winGame = false
		for (const arr of WIN_PATTERNS) {
			winGame = arr.every((element) => nextFieldIndexes.includes(element))
			if (winGame) {
				setIsGameEnded(winGame)
				break
			} else if (!nextField.some((c) => c === '')) {
				return setIsDraw(true)
			}
		}
		if (winGame) {
			if (!nextField.some((c) => c === '')) return setIsDraw(true)
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X')
		}
	}
	return (
		<>
			<table className={styles[('table', 'container')]}>
				<thead>
					<tr>
						<td className={styles.button} onClick={() => onButtonClick(0)}>
							{field[0]}
						</td>
						<td className={styles.button} onClick={() => onButtonClick(1)}>
							{field[1]}
						</td>
						<td className={styles.button} onClick={() => onButtonClick(2)}>
							{field[2]}
						</td>
					</tr>
					<tr>
						<td className={styles.button} onClick={() => onButtonClick(3)}>
							{field[3]}
						</td>
						<td className={styles.button} onClick={() => onButtonClick(4)}>
							{field[4]}
						</td>
						<td className={styles.button} onClick={() => onButtonClick(5)}>
							{field[5]}
						</td>
					</tr>
					<tr>
						<td className={styles.button} onClick={() => onButtonClick(6)}>
							{field[6]}
						</td>
						<td className={styles.button} onClick={() => onButtonClick(7)}>
							{field[7]}
						</td>
						<td className={styles.button} onClick={() => onButtonClick(8)}>
							{field[8]}
						</td>
					</tr>
				</thead>
			</table>
			<button
				className={styles.buttonRepeate}
				onClick={() => {
					setField(['', '', '', '', '', '', '', '', ''])
					setIsDraw(false)
					setIsGameEnded(false)
					setCurrentPlayer('X')
				}}
			>
				Начать сначала
			</button>
		</>
	)
}
