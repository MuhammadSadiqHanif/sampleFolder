            var products = [];
            products = localStorage.getItem("products");
            products = JSON.parse(products);
        for (var i=0; i<products.length;i++) {
                products[i].price = function() {
                    return Math.round(goldRate*this.weight);
                }
            }
        function showWishList() {
                var wishListDiv =document.getElementById("wishListDiv");
                wishListDiv.innerHTML = "";
                wishListDiv.innerHTML+=`<table id="wishListTable" class="table table-hover">
                <tr><th>Picture</th>
                <th>ItemID</th>
                <th>Quantity</th>
                <th>Each Price</th>
                <th>Total Price</th></tr>`;
                
            for (var i=0; i<products.length;i++) {
            
            switch (products[i].item) {
                case "Ring":
                    imageUrl = "Images/Nimage/EngagementRing/Women/"
                    // document.getElementById("productDivDetail_2").style.marginTop = "37px";
                    break;
                case "Neckless Set":
                    imageUrl = "Images/Nimage/Neckless Set/Bridal Neckless Set/"
                    // document.getElementById("productDivDetail_2").style.marginTop = "-19px";
                    break;
                case "Neckless Chain":
                    imageUrl = "Images/Nimage/Neckless Set/neckless/"
                    // document.getElementById("productDivDetail_2").style.marginTop = "-19px";
                    break; 
            }
                wishListDiv = document.getElementById("wishListTable");
                if (products[i].addToCart > 0){
                wishListDiv.innerHTML +=`
                <tr><td><img src='`+imageUrl+products[i].picture+`' alt=""></td>
                <td>`+products[i].item+products[i].itemid+`</td>
                <td>`+products[i].addToCart+`</td>
                <td>`+products[i].price()+`</td>
                <td>`+products[i].addToCart*products[i].price()+`</td></tr>`;
                }
            }
                   var sum = 0;
                products.forEach(function(element) {
                   sum += element.addToCart*element.price();
                   return sum
                });
            wishListDiv.innerHTML += `<td colspan="3"></td><th>Total Price</th><th>`+sum+`</th>`

            wishListDiv.innerHTML += `</table>`
            // alert("nothing")
        }