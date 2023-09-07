import type { Project } from './content'

const ProjectItem = (props: Project) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
    </li>
  )
}

export default ProjectItem
