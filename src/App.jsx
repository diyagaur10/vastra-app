// d:/vastra/vastra-app/src/App.jsx
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import InspirationGrid from './components/InspirationGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-brand-secondary min-h-screen font-sans text-brand-dark">
      <Header />
      <main>
        <Hero />
        <InspirationGrid />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}

export default App
