import Actions from './Actions'
import HeroText from './HeroText'
import Socials from './Socials'
import TechStack from './TechStack'

const App = () => {
  return (
    <div className="bg-slate-300">
      <div className="p-5 bg-slate-300 min-h-screen lg:w-[1024px] mx-auto">
        <Socials />
        <HeroText />
        <Actions />
        <TechStack />
      </div>
    </div>
  )
}

export default App
