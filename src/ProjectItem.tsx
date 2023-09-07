import type { Project } from './content'

const ProjectItem = (props: Project) => {
  return (
    <li className="panel">
      <a href={props.url} target="_blank">
        <h2>{props.name}</h2>
      </a>
      <p>{props.desc}</p>

      <ul className="flex flex-row gap-1 pb-4">
        {props.tags.map((tag) => (
          <li key={tag} className="bg-teal-900 rounded-lg px-2 text-xs">
            {tag}
          </li>
        ))}
      </ul>

      <div className="flex flex-row gap-2">
        <a href={props.url}>live demo</a>
        <a href={props.source}>github</a>
      </div>
    </li>
  )
}

export default ProjectItem
