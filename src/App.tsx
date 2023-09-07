import Footer from './Footer'
import HeroText from './HeroText'
import Socials from './Socials'
import TechStack from './TechStack'
import Projects from './Projects'

const App = () => {
  return (
    <div className="p-4 min-h-screen mycontainer gap-8 flex flex-col">
      <Socials />
      <HeroText />

      <TechStack />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
