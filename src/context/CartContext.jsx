import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // FUNCION PARA AGREGAR AL CARRITO
  const addToCart = (product) => {
    let existe = isInCart(product.id);

    if (existe) {
      let newCart = cart.map((element) => {
        if (element.id === product.id) {
          return {
            ...element,
            quantity: product.quantity,
          };
        } else {
          return element;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  // FUNCION PARA SABER SI UN PRODUCTO YA ESTA EN EL CARRITO
  const isInCart = (id) => {
    return cart.some((element) => element.id === id);
  };

  // FUNCION PARA LIMPIAR EL ACARRITO
  const clearCart = () => {
    setCart([]);
  };

  // OBTENER EL TOTAL DE LAS CANTIDADES DE LOS ELEMENTOS DEL CARRITO

  const getTotalQuantity = () => {
    return cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
  };

  // OBTENER EL PRECIO TOTAL DEL CARRITO

  const getTotalPrice = () => {
    let totalPrice = cart.reduce((acc, element) => {
      return acc + element.quantity * element.price;
    }, 0);

    return totalPrice;
  };

  // ELIMINAR UN PRODUCTO DEL CARRITO

  const deleteProductById = (id) => {
    const newCart = cart.filter((element) => element.id !== id); // []
    setCart(newCart);
  };

  const getQuantityById = (id) => {
    const productSelected = cart.find((element) => element.id === id);
    return productSelected?.quantity;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
    deleteProductById,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
