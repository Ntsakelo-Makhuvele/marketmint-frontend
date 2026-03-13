import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layout/DashboardLayout"



function App() {

  return (
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
      </Routes>
  )
}

export default App
