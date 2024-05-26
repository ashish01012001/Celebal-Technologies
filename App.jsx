import { Route, Routes } from "react-router-dom"
import FormInfoPage from "./pages/FormInfoPage";
import { Toaster } from "react-hot-toast";
import Details from "./pages/Details";

function App() {

  return (
    <>
      <div className="flex max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<FormInfoPage />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
