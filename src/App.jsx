import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home isLoaded={isLoaded} setIsLoaded={setIsLoaded} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Analytics />
      </BrowserRouter>
    </>
  )
}

export default App

