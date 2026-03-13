import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layout/DashboardLayout"
// import DashboardLayout from "./layout/DashboardLayout"
// import CreateiveCanvas from "./pages/CreativeCanvas"
// import BrandMedia from "./pages/BrandMedia"




function App() {

  return (
      <Routes>
        {/* <Route path="/" element={<DashboardLayout />}>
           <Route path="/creative-canvas" element={<CreateiveCanvas />} />
           <Route path="/brand-media" element={<BrandMedia />} />
        </Route> */}
        <Route path="/" element={<DashboardLayout />} />
      </Routes>
  )
}

export default App
