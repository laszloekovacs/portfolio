import HeroText from './HeroText'
import Socials from './Socials'

const App = () => {
  return (
    <div id="container" className="flex flex-col p-5 bg-slate-300 min-h-screen">
      <section className="bg-slate-200 min-h-screen">
        <Socials />
        <HeroText />
      </section>
    </div>
  )
}

export default App
