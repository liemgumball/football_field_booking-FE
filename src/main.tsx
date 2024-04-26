import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ENV_VARS } from './constants/envVars.ts'
import { Toaster } from './components/ui/toaster.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId={ENV_VARS.GOOGLE.CLIENT_ID}>
			<App />
			<Toaster />
		</GoogleOAuthProvider>
	</React.StrictMode>,
)
