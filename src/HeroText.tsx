// big text at the top of the page
const HeroText = () => {
  return (
    <div className="page flex flex-col justify-center">
      <div>
        <div className="py-8">
          <h1>Hi! I'm Laszlo Kovacs</h1>
          <h2>
            I'm a <span>Next.js / React </span>developer
          </h2>
        </div>

        <div className="flex flex-row gap-4 py-8">
          <button>download my resume</button>
          <button>visit me on github</button>
        </div>
      </div>
    </div>
  )
}

export default HeroText
