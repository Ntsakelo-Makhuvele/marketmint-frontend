import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layout/DashboardLayout"
import Assets from "./pages/Assets"
import Campaigns from "./pages/Campaigns"



function App() {

  return (
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/assets" element={<Assets />} />
          <Route path="/campaign" element={<Campaigns />} />
        </Route>
      </Routes>
  )
}

export default App
