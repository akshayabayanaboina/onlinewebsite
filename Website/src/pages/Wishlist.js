import React, { useEffect, useState } from "react";

const Wishlist = () => {

const [wishlist,setWishlist] = useState([]);

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("wishlist")) || [];

setWishlist(data);

},[]);

const removeItem = (id)=>{

const updated = wishlist.filter(item=>item.id!==id);

setWishlist(updated);

localStorage.setItem("wishlist",JSON.stringify(updated));

};

return(

<div>

<h2>My Wishlist ❤️</h2>

{wishlist.map((item)=>(

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

export default Wishlist;