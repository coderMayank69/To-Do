import React, { useState } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import TodoList from "./TodoList"
import './App.css'
import Navbar from "./Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <Navbar />
        <TodoList />

    </>
  )
}

export default App
