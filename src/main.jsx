import { createRoot } from 'react-dom/client'
import ReactMarkdown from 'react-markdown'

//import { useState } from "react" // or you can do bellow:
import React from "react"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
