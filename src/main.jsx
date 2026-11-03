import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tambah from './tambah.jsx'
import InputTeks from './input_teks.jsx'
import TambahKurang from './tambah_kurang.jsx'
import InputQuiz from './input_quiz.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <TambahKurang />
      <InputQuiz />
    </div>
  </StrictMode>,
)
