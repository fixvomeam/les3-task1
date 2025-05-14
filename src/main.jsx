import { createRoot } from 'react-dom/client'
import './index.css'
import { AppLayout } from './App/AppLayout'
import { StrictMode } from 'react'

const root = createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<AppLayout />
	</StrictMode>,
)
