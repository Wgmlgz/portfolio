import './index.css'
import App from './App'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import './background'

export default function Test() {
  return <div>aboba</div>
}
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
