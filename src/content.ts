import useSWR from 'swr'

export const contentURI = () => {
  if (window.location.hostname === 'localhost') {
    return 'http://localhost:3000/data/content.json'
  } else {
    return 'https://raw.githubusercontent.com/laszloekovacs/portfolio/main/data/content.json'
  }
}

export const fetcher = async (url: string) => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Error fetching content')
  }
  const data = await res.json()
  return data
}

export type Project = {
  name: string
  description: string
  homepage: string
  githubURI: string
  tags: string[]
}

export type Content = {
  techStack: string[]
  projects: Project[]
}
