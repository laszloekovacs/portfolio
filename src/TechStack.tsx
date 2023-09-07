import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const contentUrl =
  'https://raw.githubusercontent.com/laszloekovacs/portfolio/main/data/content.json'

const TechStack = () => {
  const { data, error, isLoading } = useSWR(contentUrl, fetcher)

  return (
    <div>
      <h2>Technology I'm using</h2>

      {isLoading && <p>Loading...</p>}
      {error && <p>Failed to load content</p>}

      <ul>
        {data &&
          data.techStack.map((tech: any) => <li key={tech.id}>{tech.name}</li>)}
      </ul>
    </div>
  )
}

export default TechStack
