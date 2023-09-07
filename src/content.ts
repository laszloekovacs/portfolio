import useSWR from 'swr'

export const contentURI = () => {
  if (window.location.hostname === 'localhost') {
    return 'http://localhost:3000/data/content.json'
  } else {
    return 'https://raw.githubusercontent.com/laszloekovacs/portfolio/main/data/content.json'
  }
}

const access =
  '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'

export const fetcher = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  })

  if (!res.ok) {
    throw new Error('Error fetching content')
  }
  const data = await res.json()
  return data
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

export function useGithub(repoName: string) {
  const url = `https://api.github.com/repos/laszloekovacs/${repoName}`

  const { data, error, isLoading } = useSWR(url, fetcher)

  return { data, error, isLoading }
}
