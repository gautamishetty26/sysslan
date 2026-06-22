let cart = JSON.parse(localStorage.getItem("cart")) || [];


let container = document.getElementById("cart-container");


let total = 0;



function displayCart(){


container.innerHTML="";


total=0;



cart.forEach((item,index)=>{


total += item.price * item.quantity;



container.innerHTML += `

<div class="cart-item">


<img src="${item.image}">


<div>

<h3>${item.name}</h3>

<p>Price: ₹${item.price}</p>


<div>

<button onclick="changeQuantity(${index},-1)">
-
</button>


<span>
${item.quantity}
</span>


<button onclick="changeQuantity(${index},1)">
+
</button>


</div>


<button onclick="removeItem(${index})">
Remove
</button>


</div>


</div>

`;



});


document.getElementById("total").innerHTML =
"Total: ₹" + total;



}



function changeQuantity(index,value){


cart[index].quantity += value;


if(cart[index].quantity <=0){

cart[index].quantity=1;

}


saveCart();


}



function removeItem(index){


cart.splice(index,1);


saveCart();


}



function saveCart(){


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


displayCart();


}



displayCart();