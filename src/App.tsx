import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layout/DashboardLayout"
import Assets from "./pages/Assets"
import Campaigns from "./pages/Campaigns"
import Campaign from "./pages/Campaign"
import BrandDNA from "./pages/BrandDNA"
import Home from "./pages/Home"



function App() {

  return (
      <Routes>
        {/* <Route path="/" element={<DashboardLayout />}>
          <Route path="/assets" element={<Assets />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaign/:id" element={<Campaign />} />
          <Route path="/tone" element={<BrandDNA />} />
        </Route> */}
        <Route path="/" element={<Home />} />
      </Routes>
  )
}

export default App
