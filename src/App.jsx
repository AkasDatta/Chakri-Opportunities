import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './components/Category/Category'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
      <Category></Category>
    </div>
  )
}

export default App
