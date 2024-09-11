import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './tailwind.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import themeReducer from './stores/theme.jsx'
import langReducer from './stores/lang.jsx'

let store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>,
)
