import { useEffect, useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  //Effect to update the cart count
  useEffect(() => {
    //Updates Cart Items Count
    const handleCartChange = () => {
      const cart = JSON.parse(localStorage.getItem("Cart"));
      cart ? cart : [];
      let productCount = 0;
      cart.map((item) =>
        item.count ? (productCount += item.count) : productCount++
      ); //Adding existing products with nested
      setCart(cart);
      setCartCount(productCount);
    };

    //Creating eventListener
    window.addEventListener("localStorageCartUpdated", handleCartChange); //This set the eventListener with the function to update the cart

    //Starting the eventListener
    handleCartChange();

    //Finishing the listen
    return () => {
      window.removeEventListener("localStorageCartUpdated", handleCartChange);
    };
  }, []);

  //Funtion to Add new item to Cart
  const addToCart = async (
    productID,
    productName,
    productPrice,
    productImage
  ) => {
    let newItem = {
      productID: productID,
      productName: productName,
      productPrice: productPrice,
      productImage: productImage,
    };

    //Verify if the product is included on Cart
    const existingItemIndex = cart.findIndex(
      (item) => item.productID === newItem.productID
    );

    //If product exists on Cart, it will +1 to count
    if (existingItemIndex !== -1) {
      let existingItem = cart[existingItemIndex];

      if ("count" in existingItem) {
        existingItem.count += 1;
      } else {
        existingItem.count = 2; // Establecer el count en 2 ya que ahora hay dos instancias del producto
      }
    } else {
      //If product doesm't exist on Cart it will add it to Current Card
      cart.push(newItem);
    }

    updateCart(cart);
  };

  //Function to update cart on LocalStorage
  const updateCart = (newCart) => {
    localStorage.setItem("Cart", JSON.stringify(newCart)); //Updating the cart
    window.dispatchEvent(new CustomEvent("localStorageCartUpdated")); //Triggering the eventListener
  };

  //Function to delete All the items with a specific ID
  const deleteAllItems = async (productId) => {
    const newCart = cart.filter((product) => product.productID !== productId);
    updateCart(newCart);
  };

  const deleteProductFromCart = (productID) => {
    // Get the current Cart
    const updatedCart = [...cart];
  
    // Searching the next index that includes the ID
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.productID === productID
    );
  
    if (existingItemIndex !== -1) {
      let existingItem = updatedCart[existingItemIndex];
  
      if (existingItem.count && existingItem.count > 1) {
        // count -1
        existingItem.count -= 1;
      } else {
        // this eliminate the next product from the object
        updatedCart.splice(existingItemIndex, 1);
      }
    }  
    updateCart(updatedCart);
  }

  return [
    cart,
    cartCount,
    addToCart,
    updateCart,
    deleteAllItems,
    deleteProductFromCart,
  ];
};
