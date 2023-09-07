import useSWR from 'swr'
import { Content, contentUrl, fetcher } from './content'

const TechStack = () => {
  const { data, error, isLoading } = useSWR<Content>(contentUrl, fetcher)

  return (
    <div>
      <h2>Technology I'm using</h2>

      {isLoading && <p>Loading...</p>}
      {error && <p>Failed to load content</p>}

      <ul className="flex flex-row flex-wrap text-xl gap-4">
        {data &&
          data.techStack.map((tech: string) => <li key={tech}>{tech}</li>)}
      </ul>
    </div>
  )
}

export default TechStack
