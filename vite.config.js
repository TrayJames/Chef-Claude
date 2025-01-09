import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {config} from 'dotenv'

// https://vite.dev/config/
config();
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_REACT_APP_ANTHROPIC_API_KEY':JSON.stringify(process.env.VITE_REACT_APP_ANTHROPIC_API_KEY)
  }
})
