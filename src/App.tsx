import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import { ThemeProvider } from "./context/theme-provider"
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path='/' element={} />

           
          </Routes>
        </Layout>
      </ThemeProvider>

    </BrowserRouter>
  )
}

export default App