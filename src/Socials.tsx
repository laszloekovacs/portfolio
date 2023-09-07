import { FaFacebook, FaEnvelope, FaGithubAlt } from 'react-icons/fa6'

const socials = {
  github: 'https://github.com/laszloekovacs',
  facebook: 'https://www.facebook.com/laszloekovacs',
  email: 'mailto:laszloekovacs@gmail.com',
}

// social media links
const Socials = () => {
  return (
    <div className="flex flex-row justify-end gap-4 pb-8">
      <a href={socials.github} target="_blank" rel="noreferrer">
        <FaGithubAlt size="1.5rem" color="222" />
      </a>
      <a href={socials.facebook} target="_blank" rel="noreferrer">
        <FaFacebook size="1.5rem" color="222" />
      </a>
      <a href={socials.email} target="_blank" rel="noreferrer">
        <FaEnvelope size="1.5rem" color="222" />
      </a>
    </div>
  )
}

export default Socials
