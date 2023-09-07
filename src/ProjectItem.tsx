import { Project } from './content'

const ProjectItem = ({ description, homepage, tags, githubURI }: Project) => {
  return (
    <li className="panel">
      <a href={homepage} target="_blank" rel="noreferrer">
        <h2>{description}</h2>
      </a>

      <ul className="flex flex-row gap-2">
        {tags.map((tag) => (
          <li key={tag} className="bg-theme-highlight text-theme-dark px-2 ">
            {tag}
          </li>
        ))}
      </ul>

      <div className="flex flex-row gap-2">
        <a href={githubURI} target="_blank" rel="noreferrer">
          <p className="text-opacity-50">{githubURI}</p>
        </a>
      </div>
    </li>
  )
}

export default ProjectItem
