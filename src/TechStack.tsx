import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const contentUrl = 'https://github.com/laszloekovacs/portfolio/data/content'

const TechStack = () => {
  const { data, error, isLoading } = useSWR(contentUrl, fetcher)

  return (
    <div>
      <h2>Technology I'm using</h2>
    </div>
  )
}

export default TechStack
