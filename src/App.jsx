import { ThemeProvider } from './context/ThemeContext'
import LandingPage from './pages/LandingPage'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-feelgood-light font-sans text-black dark:bg-black dark:text-white">
       <LandingPage/>
      </div>
    </ThemeProvider>
  )
}