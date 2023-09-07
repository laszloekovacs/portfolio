import useSWR from 'swr'
import { Content, contentURI, fetcher } from './content'
import ProjectItem from './ProjectItem'

const Projects = () => {
  const { data, error, isLoading } = useSWR<Content>(contentURI, fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load content</p>

  return (
    <div className="page">
      <h3>Projects worth mentioning</h3>

      <ul>
        {data &&
          data.projects.map((project: string) => (
            <ProjectItem key={project} repo={project} />
          ))}
      </ul>
    </div>
  )
}

export default Projects
