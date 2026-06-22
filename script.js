// Add product to cart

function addToCart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    // Check if product already exists

    let existingProduct = cart.find(item => item.name === name);


    if(existingProduct){

        existingProduct.quantity++;

    }

    else{

        cart.push({

            name: name,
            price: price,
            image: image,
            quantity: 1

        });

    }


    localStorage.setItem("cart", JSON.stringify(cart));


    alert(name + " added to cart 🛒");


    updateCartCount();

}




// Update cart number

function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    let count = 0;


    cart.forEach(item => {

        count += item.quantity;

    });


    if(document.getElementById("cart-count")){

        document.getElementById("cart-count").innerText = count;

    }

}



updateCartCount();





// Search products

function searchProduct(){

    let searchText = document
    .getElementById("search-input")
    .value
    .toLowerCase();



    let products = document
    .getElementsByClassName("product-card");



    for(let i=0; i<products.length; i++){


        let productName = products[i]
        .getElementsByTagName("h3")[0]
        .innerText
        .toLowerCase();



        if(productName.includes(searchText)){

            products[i].style.display="block";

        }

        else{

            products[i].style.display="none";

        }


    }

}