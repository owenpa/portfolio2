import studywithmegif from "./assets/studywithme.gif"
import trendygif from "./assets/trendy.gif"
import praegif from "./assets/prae.gif"

function Products() {
  return (
    <div id='product-container'>
      <div className='product-box'>
        <a href="https://camo.githubusercontent.com/1d655d91c87c46a0d68b09b28c995eb52772749addfbfde10a6b4d475df0bf66/68747470733a2f2f6d65646961302e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a4578596d4a69656e41796548647a636e45335957317a636a5668646a46314f484a79626d5675655745304d48497a64324a77626e70685a435a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f466a63734c4779786a314432445571466b6a2f67697068792e676966" target="_blank" rel="noreferrer">
          <img src="https://camo.githubusercontent.com/1d655d91c87c46a0d68b09b28c995eb52772749addfbfde10a6b4d475df0bf66/68747470733a2f2f6d65646961302e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a4578596d4a69656e41796548647a636e45335957317a636a5668646a46314f484a79626d5675655745304d48497a64324a77626e70685a435a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f466a63734c4779786a314432445571466b6a2f67697068792e676966" alt="live demo of the brizo app" className="product-demo" />
        </a>
        <h3>Brizo</h3>
        <a href="https://github.com/oslabs-beta/Brizo">github</a>
        <p>A development tool focused around enabling streamlined Kubernetes cluster metrics and maintenance. Monitor cluster health, performance, and perform CIS standard security checks.</p>
      </div>
      <div className='product-box'>
        <a href={praegif} target="_blank" rel="noreferrer">
          <img src={praegif} alt="live demo of the prae gallery website" className="product-demo" />
        </a>
        <h3>Prae Gallery</h3>
        <span>
          <a href="https://prae-gallery.vercel.app/">live demo</a> | <a href="https://github.com/owenpa/finra-filter">github</a>
        </span>
        <p>An artist's gallery with a dashboard that allows analytics viewing, uploading, editing, and deleting of the posts.</p>
      </div>
      <div className='product-box'>
        <a href={studywithmegif} target="_blank" rel="noreferrer">
          <img src={studywithmegif} alt="live demo of the study with me dashboard" className="product-demo" />
        </a>
        <h3>Study With Me</h3>
        <a href="https://github.com/PFA-Crew/Study-With-Me">github</a>
        <p>A single page application which provides users with common modules to help with studying, focusing, ensuring proper break practices, and note taking.</p>
      </div>
      <div className='product-box'>
        <a href={trendygif} target="_blank" rel="noreferrer">
          <img src={trendygif} alt="live demo of the trendy website" className="product-demo" />
        </a>
        <h3>Trendy</h3>
        <a href="https://github.com/stabbit/trendy">github</a>
        <p>A website that receives a location and returns all activities (food, monuments, parks, etc) and reviews before then analyzing the sentiment of recent reviews and sorting the results.</p>
      </div>
      {/* <div className='product-box'>
        <img src={placeholderImage} alt="placeholder" className="product-demo" />
        <h3>Finra Filter</h3>
        <a href="https://github.com/owenpa/finra-filter">github</a>
        <p>Python application that fetches recent market data that was released by Finra, filters out stocks based on volume/demand, and returns a chart with the results displayed.</p>
      </div> */}
    </div>
  )
}

export default Products;