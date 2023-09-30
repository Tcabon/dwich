import React, { createContext, useMemo} from "react";
import CartEntry from "../components/CartEntry";
import useStateStorage from "../hooks/useStateStorage";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartEntryId, setCartEntryId] = useStateStorage('sessionCartEntryId');
  const [cartEntries = [], setCartEntries] = useStateStorage('sessionCartEntries');
  const total = useMemo(() => {
      return cartEntries?.reduce((acc, cartEntry) => acc + cartEntry.price, 0) || 0;
    }, [
      cartEntries,
    ]
  );

  const readableCartEntries = cartEntries?.reduce((acc, cartEntry) => {
    const indexFound = acc.findIndex(e => e.id == cartEntry.id)
    if (indexFound !== -1) {
      acc[indexFound].quantity += 1;
      return acc;
    }
    return [...acc, {
      ...cartEntry,
      quantity: 1,
    }]
  }, []) || []

  const addToCart = (cartEntry) => {
    if (typeof cartEntryId === "undefined") {
      cartEntry.cartEntryId = 0;
      setCartEntryId(0);
    } else {
      cartEntry.cartEntryId = cartEntryId + 1;
      setCartEntryId(cartEntryId + 1);
    }
    
    setCartEntries([...cartEntries, cartEntry]);
  }

  const removeFromCart = (id) => {
    const cartEntryIndex = cartEntries.findIndex(item => item.id === id);
    setCartEntries(cartEntries.filter((_, index) => index !== cartEntryIndex));
  }

  const CartEntries = () => {
    return (
      <ul>
        {readableCartEntries?.map(cartEntry => (
            <CartEntry key={cartEntry.id} entry={cartEntry} removeFromCart={removeFromCart}/>
          ))}
      </ul>
    )
  }

  return (
    <CartContext.Provider value={{
      cartEntries,
      total,
      addToCart,
      removeFromCart,
      CartEntries,
    }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartContextProvider;