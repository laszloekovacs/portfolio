import { useGithub } from './content'

type Project = {
  id: string
  name: string
  description: string
  homepage: string
  topics: string[]
  html_url: string
  stargazers_count: number
  watchers_count: number
}

const ProjectItem = ({ repo }: { repo: string }) => {
  const { data, error, isLoading } = useGithub<Project>(repo)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load content</p>

  return (
    <li className="panel">
      <a href={data?.homepage} target="_blank" rel="noreferrer">
        <h2>{data?.description}</h2>
      </a>

      <ul className="flex flex-row gap-2">
        {data?.topics.map((topic) => (
          <li key={topic} className="bg-theme-highlight text-theme-dark px-2 ">
            {topic}
          </li>
        ))}
      </ul>

      <div className="flex flex-row gap-2">
        <a href={data?.html_url} target="_blank" rel="noreferrer">
          <p className="text-opacity-50">{data?.html_url}</p>
        </a>
      </div>
    </li>
  )
}

export default ProjectItem
