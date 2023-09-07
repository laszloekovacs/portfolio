import { useGithub } from './content'

const Inspect = () => {
  const { data, isLoading, error } = useGithub('portfolio')

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (data) {
    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <pre>{JSON.stringify(window.location)}</pre>
      </div>
    )
  }
}

export default Inspect
