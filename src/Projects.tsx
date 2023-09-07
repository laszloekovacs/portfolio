import useSWR from 'swr'
import { Content, Project, contentUrl, fetcher } from './content'
import ProjectItem from './ProjectItem'

const Projects = () => {
  const { data, error, isLoading } = useSWR<Content>(contentUrl, fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load content</p>

  return (
    <div className="page">
      <h2>Recent Projects</h2>

      <ul>
        {data &&
          data.projects.map((project: Project) => (
            <ProjectItem key={project.url} {...project} />
          ))}
      </ul>
    </div>
  )
}

export default Projects
