function Products() {
  return (
    <div id='product-container'>
      <div className='pbox'>
        <h3>Brizo</h3>
        <a href="https://github.com/oslabs-beta/Brizo">github</a>
        <p>A development tool focused around enabling streamlined Kubernetes cluster metrics and maintenance. Monitor cluster health, performance, and perform CIS standard security checks.</p>
      </div>
      <div className='pbox'>
        <h3>Study With Me</h3>
        <a href="https://github.com/PFA-Crew/Study-With-Me">github</a>
        <p>A single page application which provides users with common modules to help with studying, focusing, ensuring proper break practices, and note taking.</p>
      </div>
      <div className='pbox'>
        <h3>Trendy</h3>
        <a href="https://github.com/stabbit/trendy">github</a>
        <p>A website that receives a location and returns all activities (food, monuments, parks, etc) and reviews before then analyzing the sentiment of recent reviews and sorting the results.</p>
      </div>
      <div className='pbox'>
        <h3>Finra Filter</h3>
        <a href="https://github.com/owenpa/finra-filter">github</a>
        <p>Python application that fetches recent market data that was released by Finra, filters out stocks based on volume/demand, and returns a chart with the results displayed.</p>
      </div>
    </div>
  )
}

export default Products;