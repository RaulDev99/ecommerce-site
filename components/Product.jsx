import React from 'react'
import Link from 'next/link'

import {urlFor, urlfor} from '../lib/client'

const Product = ({product:{image,name,slug,price}}) => {
  return (
    <>
    {image && 
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          
          <img 
          src={urlFor(image && image[0])} 
          width={250} 
          heigth={250} 
          className="product-image"/>
          <p className="product-name">
            {name}
          </p>
          <p className="product-price">
            {price}€
          </p>
          
        </div>
      

      </Link>

    </div>
    }
    
    
    </>
  )
}

export default Product