import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import Gallery from './components/Gallery'
import Waitlist from './components/Waitlist'
import Countdown from './components/Countdown'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'


export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-feelgood-light font-sans text-black dark:bg-black dark:text-white">
       <LandingPage/>
      </div>
    </ThemeProvider>
  )
}