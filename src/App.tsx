import Actions from './Actions'
import HeroText from './HeroText'
import Socials from './Socials'
import TechStack from './TechStack'

const App = () => {
  return (
    <div className="p-5 bg-slate-300 min-h-screen">
      <Socials />
      <HeroText />
      <Actions />
      <TechStack />
    </div>
  )
}

export default App
