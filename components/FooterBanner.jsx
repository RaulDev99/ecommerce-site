import React from 'react'

import Link from 'next/link'
import {urlFor} from '../lib/client'

const FooterBanner = ({footerBanner:{discount,saleTime}}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{saleTime}</h3>
        </div>
        <div className="right">
          
        </div>

      </div>
      
    </div>
  )
}

export default FooterBanner
