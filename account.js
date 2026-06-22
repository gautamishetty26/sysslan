// Account box click function

let boxes = document.querySelectorAll(".account-box");


boxes.forEach(function(box){

    box.addEventListener("click", function(){

        let title = box.querySelector("h2").innerText;


        if(title.includes("Your Orders")){

            alert(
                "Your Orders\n\n" +
                "✔ Track your order\n" +
                "✔ Return / Replace items\n" +
                "✔ Buy Again"
            );

        }



        else if(title.includes("Login")){

            let name = prompt("Enter your new name:");

            if(name){

                alert("Name updated to " + name);

            }

        }




        else if(title.includes("Address")){


            let address = prompt(
                "Enter your new address:"
            );


            if(address){

                alert(
                    "Address added successfully:\n" 
                    + address
                );

            }


        }





        else if(title.includes("Wishlist")){


            alert(
                "Your Wishlist ❤️\n\n" +
                "Laptop ₹49999\n" +
                "Smart Watch ₹2499"
            );


        }





        else if(title.includes("Contact")){


            alert(
                "Customer Support\n\n" +
                "💬 Chat with Customer Service\n" +
                "📞 Call: 1800-000-000"
            );


        }





        else if(title.includes("Logout")){


            let confirmLogout = confirm(
                "Are you sure you want to logout?"
            );


            if(confirmLogout){

                alert("You have been logged out");

            }


        }


    });


});