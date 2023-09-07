import useSWR from 'swr'
import { Content, contentUrl, fetcher } from './content'

const TechStack = () => {
  const { data, error, isLoading } = useSWR<Content>(contentUrl, fetcher)

  return (
    <div className="page">
      <h3>Some of the technology I'm using in my projects</h3>

      {isLoading && <p>Loading...</p>}
      {error && <p>Failed to load content</p>}

      <ul className="flex flex-row flex-wrap text-xl gap-2">
        {data &&
          data.techStack.map((tech: string) => <li key={tech}>{tech}</li>)}
      </ul>
    </div>
  )
}

export default TechStack
