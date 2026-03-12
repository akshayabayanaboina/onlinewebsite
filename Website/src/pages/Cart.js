import React, { useEffect, useState } from "react";

const Cart = () => {

const [cart,setCart] = useState([]);

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("cart")) || [];

setCart(data);

},[]);

const removeItem = (id)=>{

const updated = cart.filter(item=>item.id!==id);

setCart(updated);

localStorage.setItem("cart",JSON.stringify(updated));

};

return(

<div>

<h2>My Cart 🛒</h2>

{cart.map((item)=>(

<div key={item.id}>

<img src={item.image} alt={item.name} width="150"/>

<h3>{item.name}</h3>

<p>₹{item.price}</p>

<button onClick={()=>removeItem(item.id)}>Remove</button>

</div>

))}

</div>

);

};

export default Cart;