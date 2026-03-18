import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layout/DashboardLayout"
import Assets from "./pages/Assets"
import Campaigns from "./pages/Campaigns"
import Campaign from "./pages/Campaign"



function App() {

  return (
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/assets" element={<Assets />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaign/:id" element={<Campaign />} />
        </Route>
      </Routes>
  )
}

export default App
