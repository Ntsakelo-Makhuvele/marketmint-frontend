import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layout/DashboardLayout"
import Assets from "./pages/Assets"



function App() {

  return (
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/assets" element={<Assets />} />
        </Route>
      </Routes>
  )
}

export default App
