import { Route, Routes } from "react-router-dom"
import DashboardLayout from "./layout/DashboardLayout"
import CreateiveCanvas from "./pages/CreativeCanvas"




function App() {

  return (
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
           <Route path="/creative-canvas" element={<CreateiveCanvas />} />
        </Route>
      </Routes>
  )
}

export default App
