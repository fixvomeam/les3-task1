import { useState } from 'react'
import styles from './app.module.css'
import { FieldLayout } from './Field/FieldLayout'
import { InformationLayout } from './Information/InformationLayout'

export const AppLayout = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(['', '', '', '', '', '', '', '', ''])

	return (
		<div className={styles.app}>
			<InformationLayout isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer} />
			<FieldLayout
				field={field}
				setField={setField}
				setIsDraw={setIsDraw}
				setIsGameEnded={setIsGameEnded}
				setCurrentPlayer={setCurrentPlayer}
				currentPlayer={currentPlayer}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
			/>
		</div>
	)
}
