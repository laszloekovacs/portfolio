export const fetcher = (url: string) => fetch(url).then((res) => res.json())
export const contentUrl =
  'https://raw.githubusercontent.com/laszloekovacs/portfolio/main/data/content.json'

export type Project = {
  name: string
  url: string
  source: string
  desc: string
  tags: string[]
}

export type Content = {
  techStack: string[]
  projects: Project[]
}
