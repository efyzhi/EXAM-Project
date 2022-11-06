import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {HelmetProvider} from "react-helmet-async"
import ErrorBoundary from "./Comps/ErrorBoundary"




ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <ErrorBoundary>
    <HelmetProvider> 
		<App />
    </HelmetProvider>
  </ErrorBoundary>
	</React.StrictMode>
)