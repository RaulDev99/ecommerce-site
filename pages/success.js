import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill } from 'react-icons/bs'
import {useRouter} from 'next/router'

import {useStateContext} from '../context/StateContext'

import { runFireworks } from '../lib/utils'

const Success = () => {
    const {setCartItems,setTotalPrice,setTotalQuantities} = useStateContext()
    const [order, setOrder] = useState(null)

    useEffect(()=>{
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireworks()
    },[])

  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
                <BsBagCheckFill/>

            </p>
            <h2>Gracias por realizar tu compra</h2>
            <p className="email-msg">Hecha un vistazo a tu correo electrónico, hemos enviado el recibo de tu compra</p>
            <p className="description">
                Ante cualquier duda pongase en contacto con nosotros a través de nuestro correo electrónico
            <a className='email' href='mailto:raulskate1999@gmail.com'>
            raulskate1999@gmail.com
            </a>
            </p>
            <Link href="/">
                <button  type="button" className="btn">
                    Continuar comprando
                </button>
            </Link>
        </div>
        
    </div>
  )
}

export default Success