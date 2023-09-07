export const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const contentUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://raw.githubusercontent.com/laszloekovacs/portfolio/main/data/content.json'
  } else {
    return '/data/content.json'
  }
}

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
