import React,{createContext,useContext,useState,useEffect} from 'react'
import {toast} from 'react-hot-toast'


const Context = createContext()



export const StateContext = ({children})=>{

    
    const [showCart,setShowCart]= useState(false)
    const [cartItems, setCartItems] = useState([])  
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)
    
    let foundProduct;
    let index ;
    
    useEffect(() => {

      const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')|| "[]")
      const totalQuantitiesFromLocalStorage = JSON.parse(localStorage.getItem('totalQuantities')|| 0)
      const totalPriceFromLocalStorage = JSON.parse(localStorage.getItem('totalPrice')|| 0)
      
      
      setCartItems(cartFromLocalStorage)
      setTotalQuantities(()=>totalQuantitiesFromLocalStorage)
      setTotalPrice(()=> totalPriceFromLocalStorage)
        
      
    }, [])
    
    useEffect(() => {
      
      localStorage.setItem('cart',JSON.stringify(cartItems))
      localStorage.setItem('totalQuantities',JSON.stringify(totalQuantities))
      localStorage.setItem('totalPrice',JSON.stringify(totalPrice))
      
      
    }, [cartItems,totalPrice,totalQuantities])



    const incQty = () =>{
        setQty((prevQty)=>prevQty + 1)
    }
    const decQty = () => {
        setQty((prevQty) => {
          if(prevQty - 1 < 1) return 1;
         
          return prevQty - 1;
        });
    }

    const onAdd = (product, quantity) => {
        
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        index = cartItems.findIndex((product) => product._id === product._id);
        
        if(checkProductInCart) {
            
            const updatedCartItems = cartItems.map((cartProduct) => {
                
                
                if(cartProduct._id === product._id ){
                    
                    return{
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity
                    }
                
                }else{
                    return{
                        ...cartProduct
                    }
                }
            })

            setCartItems(updatedCartItems);

        } else {
          
          product.quantity = quantity;
          setCartItems([...cartItems, { ...product , index: cartItems.length }]);
          
        }
        
    
        toast.success(`${qty} ${product.name} added to the cart.`);
        
    } 

    const toggleCartItemQuanitity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id)
        
        
        const newCartItems = cartItems.filter((item) => item._id !== id)
        
        

        if(value === 'inc') {
          
          setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
        } else if(value === 'dec') {
          if (foundProduct.quantity > 1) {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
          }
        }
        
      }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
    
        setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
      }


    return(
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                setQty,
                incQty,
                decQty,
                onAdd,
                toggleCartItemQuanitity,
                onRemove,
                setCartItems,
                setTotalPrice,
                setTotalQuantities
            }}>
            {children}
            
        </Context.Provider>
    )
}

export const useStateContext = ()=> useContext(Context)