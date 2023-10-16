
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";


 const Cart = () => {
   const cartItems = useSelector(getCartItems);
   const totalPrice = useSelector(getTotalPrice);
    return(
        <div >
       
           <img className="cartIcon" src="einkaufswagen.png" alt="Bild"/>
           <h3>TOTAL: ${totalPrice}</h3>
           {cartItems.map(cartItem =>  <CartItem cartItem={cartItem}/>)}
          
        </div>
    )
 }

 export default Cart;