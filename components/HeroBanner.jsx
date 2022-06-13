import React from 'react'
import Link from 'next/link'

import {urlFor} from '../lib/client'

const HeroBanner = ({heroBanner:{smallText,saleTime,image,product,buttonText,desc}}) => {
  return (
    
    
    <div className="hero-banner-container">
      
        <img src={urlFor(image)} alt="tesoros" className="hero-banner-image"/>
      
      <div className="hero-banner-heading">
        
        <h3>{saleTime}</h3>
        <div>
          <p className="beats-solo">{smallText}</p>
        </div>
        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          
        </div>
        
      </div>
      <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
        </div>
      
      

    </div>
    
  )
}

export default HeroBanner