import Actions from './Actions'
import Footer from './Footer'
import HeroText from './HeroText'
import Socials from './Socials'
import TechStack from './TechStack'
import Projects from './Projects'

const App = () => {
  return (
    <div className="bg-theme-bg">
      <div className="p-10 min-h-screen lg:w-[1024px] mx-auto">
        <Socials />
        <HeroText />
        <Actions />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
