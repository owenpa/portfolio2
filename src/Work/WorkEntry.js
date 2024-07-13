function WorkEntry (props) {
  const {imageSide, imageLink, productTitle, productDescription, productLiveLink, productGithub, techList} = props

  return (
    <>
      <div className="flex gap-6">
        {imageSide === 'left' && <img className='max-w-[250px] object-contain' src={imageLink} />}
        <div className="flex-grow mt-auto">
          <h2 className="text-2xl font-semibold">{productTitle}</h2>
          <p>{productDescription}</p>
          {productLiveLink != '' &&
            <>
              <a href={productLiveLink} target="_blank" className="inline w-fi text-blue-700 hover:text-blue-400 dark:text-blue-200 dark:hover:text-blue-400">website</a>
              <p className="inline"> • </p>
            </>
          }
          {productGithub != '' &&
            <>
              <a href={productGithub} target="_blank" className="w-fi text-blue-700 hover:text-blue-400 dark:text-blue-200 dark:hover:text-blue-400">github</a>
            </>
          }
          <p className="text-sm font-semibold">{techList}</p>
        </div>
        {imageSide === 'right' && <img className='max-w-[250px] object-contain' src={imageLink} />}
      </div>
      <hr className="dark:border-t-neutral-700"></hr>
    </>
  )
}

export default WorkEntry;