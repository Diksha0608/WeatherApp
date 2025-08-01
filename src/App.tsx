import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

import { ThemeProvider } from "./context/theme-provider"
import Layout from "./components/Layout"
import WeatherDashboard from "./pages/weather_dashboard"
import CityPage from "./pages/city_page"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
  return (
     <QueryClientProvider client={queryClient}>
      
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path='/' element={<WeatherDashboard/>} />
            <Route path='/city/:cityName' element={<CityPage/>} />

           
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App