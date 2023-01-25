import React from "react"
import { Route, Routes } from "react-router-dom"
import UserPage from "./components/UserPage"
import TodoPage from "./components/TodoPage"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<UserPage />} path="/" />
        <Route element={<TodoPage />} path="/todos" />
      </Routes>
    </div>
  )
}

export default App
