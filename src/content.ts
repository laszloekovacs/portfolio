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

export type Content = {
  techStack: string[]
  projects: string[]
}

export function useGithub<T>(repoName: string) {
  const url = `https://api.github.com/repos/laszloekovacs/${repoName}`

  const { data, error, isLoading } = useSWR<T>(url, fetcher, {
    shouldRetryOnError: false,
  })

  return { data, error, isLoading } as const
}
