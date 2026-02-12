import { createContext, useEffect, useState } from "react";
import {productsData} from '../../assets/data'
import {toast} from "react-toastify";

export const ShopContext = createContext({quantity:0,})

const ShopContextProvider = ({children}) => {
  const [products, setProducts] = useState(productsData)
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      const priceAsNumber = parseFloat(currentItem.price);
      if(isNaN(priceAsNumber)){
         return accumulator
      } 
      return accumulator + priceAsNumber * currentItem.amount
    },0)
    setTotal(total)
  }, [cart])

  useEffect(() => {
      const amount = cart.reduce((accumulator, currentItem) => 
        accumulator + currentItem.amount , 0);

      setQuantity(amount)
  }, [cart])

  const addToCart = (product, id) => {
    const cartItem = cart.find(item => item.id === id)
  
    if (cartItem) {
      setCart(cart.map(item => item.id === id
                                                                                                      
          ? { ...item, amount: item.amount + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, id, amount: 1 }])
      toast.success("Product added to cart")
    }
  }
  const clearCart = () => {
    setCart([])
    toast.success("Cart Empty")
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !==id;
    })
    setCart(newCart);
    toast.success("Product removed successfully")
  }

  const increaseQuantity = (id) => {
    const newCart = cart.map((item) => item.id === id 
    ? {...item, amount: item.amount + 1}
     :item
    );
    setCart( newCart)
  }

  const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id );
      if (!cartItem) return;

    if(cartItem.amount > 1) {
      const newCart = cart.map((item) => item.id === id
     ? {...item, amount: item.amount - 1}
        : item
      );
      setCart(newCart)
    }else{
        removeFromCart(id)
  }
}

  return(
    <ShopContext.Provider 
    value={{
      products,
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      increaseQuantity,
      decreaseQuantity,
      quantity,
      total
    }}
    >
      {children}
      </ShopContext.Provider>
  );
};

export default ShopContextProvider;