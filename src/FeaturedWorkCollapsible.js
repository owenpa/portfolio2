import { useRef } from "react"

function FeaturedWorkCollapsible({projectName, projectTags, imageLink, projectDetails}) {
  const {githubLink, liveLink, description, techList} = projectDetails
  const buttonRef = useRef()
  const contentRef = useRef()
  
  function handleClick() {
    buttonRef.current.classList.toggle('active')
    if (contentRef.current.style.maxHeight) {
      contentRef.current.style.maxHeight = null
    } else {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 100 + 'px'
    }
  }
  
  return (
    <>
      <button className="collapse-button justify-between font-semibold dark:bg-[#2A2A28] dark:hover:bg-[#2E2E2B] dark:text-[#ece6e4]" onClick={handleClick} ref={buttonRef}>
        <p className="text-2xl lg:text-md">{projectName}</p>
        <span className="text-2xl lg:text-md">{projectTags.join(' | ')}</span>
      </button>
      <div className="collapse-content dark:bg-[#2E2E2B] dark:text-[#ece6e4]" ref={contentRef}>
        <br></br>
        <div className="flex gap-6">
          <a href={imageLink} target='_blank' >
            <img className="max-w-[250px] object-contain" src={imageLink} alt={projectName} />
          </a>
          <div>
            <p className="inline">Github: </p><a href={githubLink} target="_blank" className="w-fi text-blue-700 hover:text-blue-400 dark:text-blue-200 dark:hover:text-blue-400">{githubLink}</a>
            {liveLink !== '' && 
              <>
              <br/>
                <p className="inline">Website: </p>
                <a href={liveLink} target="_blank" className="w-fi text-blue-700 hover:text-blue-400 dark:text-blue-200 dark:hover:text-blue-400">{liveLink}</a>
              </>}
            <p>{description}</p>
            <p><b>{techList}</b></p>
          </div>
        </div>
        <br></br>
      </div>
    </>
  )
}

export default FeaturedWorkCollapsible;