import { FaFacebook, FaEnvelope, FaGithubAlt } from 'react-icons/fa6'

// social media links
const Socials = () => {
  return (
    <div className="flex flex-row justify-end gap-4 pb-8">
      <FaGithubAlt size="1.5rem" color="222" />
      <FaFacebook size="1.5rem" color="222" />
      <FaEnvelope size="1.5rem" color="222" />
    </div>
  )
}

export default Socials
