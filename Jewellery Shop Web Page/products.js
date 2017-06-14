        var goldRate = 5000;
        function showProducts () {
            // var productDiv = document.getElementById("productDiv");
            for (var i=0;i<products.length ;i++) {
                document.getElementById("productDiv").innerHTML += `<div class= "productImage">
                <h4>`+products[i].item+`</h4><h4>`+products[i].weight+`</h4><h4>`+products[i].itemid+`</h4><h4>`+products[i].price()+`</h4>
                <img src='Images/Nimage/EngagementRing/Women/`+products[i].picture+`' alt="">
                </div>`
            }
        }
      

        function Products(metal,category,item,itemid,weight,quality,quantity,picture,addToCart) {
            this.metal = metal;
            this.category = category;
            this.item = item;
            this.itemid = itemid;
            this.weight = weight;
            this.quality = quantity;
            // this.price = price;
            this.quantity = quantity;
            this.picture = picture;
            this.addToCart = addToCart;
        }
        // sample made for local storage
    function addtoLocalstorage_previous() {  
        var products=[];  
        for (var i=0; i<products.length;i++){
            metalVal = products[i].metal;
            categoryVal = products[i].category;
            itemVal = products[i].item;
            itemidVal = products[i].itemid;
            weightVal = products[i].weight;
            qualityVal = products[i].quality;
            priceVal = products[i].price();
            quantityVal =products[i].quantity;
            pictureVal = products[i].picture;
            addToCartVal = products[i].addToCart;
        var items = new Products(metalVal,categoryVal,itemVal,itemidVal,weightVal,qualityVal,priceVal,quantityVal,pictureVal,addToCartVal)
          products.push(items);
        }
        localStorage.setItem("products",JSON.stringify("products"));
    }



        var products =[{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "001",
            weight : 3.240,
            quality : "22kt",
            price : function() {
                 var priceTotal = goldRate * this.weight;
                 return priceTotal;
            },
            quantity : 20,
            picture: "1.png",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "002",
            weight : 3.500,
            quality : "22kt",
            price : function() {
                 var priceTotal = goldRate * this.weight;
                 return priceTotal;
            },
            quantity : 20,
            picture: "2.png",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "003",
            weight : 3.24,
            quality : "22kt",
            price : function() {
                 var priceTotal = goldRate * this.weight;
                 return priceTotal;
            },
            quantity : 20,
            picture: "3.png",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "004",
            weight : 3.24,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "4.png",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "005",
            weight : 3.24,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "5.png",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "006",
            weight : 3.24,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "6.png",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "007",
            weight : 3.24,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "7.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "008",
            weight : 3.24,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "8.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "009",
            weight : 3.24,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "9.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "010",
            weight : 3.24,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "10.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "011",
            weight : 3.24,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "11.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "012",
            weight : 3.24,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "12.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "013",
            weight : 3.24,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "13.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "014",
            weight : 3.24,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "14.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "015",
            weight : 3.24,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "15.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Ring",
            itemid : "016",
            weight : 3.24,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "16.png",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Set",
            itemid : "001",
            weight : 175.54,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "1.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Set",
            itemid : "002",
            weight : 225.54,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "2.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Set",
            itemid : "003",
            weight : 200.54,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "3.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Set",
            itemid : "004",
            weight : 110.4,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "4.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Set",
            itemid : "005",
            weight : 85.55,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "5.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Set",
            itemid : "006",
            weight : 75.54,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "6.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Set",
            itemid : "007",
            weight : 80.25,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "7.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Set",
            itemid : "008",
            weight : 75.54,
            quality : "22kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "8.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Chain",
            itemid : "001",
            weight : 15.25,
            quality : "21kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "1.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Chain",
            itemid : "002",
            weight : 14.7,
            quality : "21kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "2.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Chain",
            itemid : "003",
            weight : 16.52,
            quality : "21kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "3.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Chain",
            itemid : "004",
            weight : 17.5,
            quality : "21kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "4.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Chain",
            itemid : "005",
            weight : 15.25,
            quality : "21kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "5.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Chain",
            itemid : "006",
            weight : 17.85,
            quality : "21kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "6.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Chain",
            itemid : "007",
            weight : 15.45,
            quality : "21kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "7.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Chain",
            itemid : "008",
            weight : 15.25,
            quality : "21kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "8.jpg",
            addToCart: 0,
        },{
            metal:"Gold",
            category:"Women",
            item:"Neckless Chain",
            itemid : "009",
            weight : 15.25,
            quality : "21kt",
            price : function() {
                 return goldRate * this.weight;
            },
            quantity : 20,
            picture: "9.jpg",
            addToCart: 0,
        }
        ];
        

//  function addtoLocalStorageProducts2() {  

        // localStorage.clear("products");
        if (localStorage.getItem("products")==[] || localStorage.getItem("products")== undefined ) {

        localStorage.setItem("products",JSON.stringify(products));
        }
        
//  }

 function getlocalstorage() {
            var products = [];
 }
  products = localStorage.getItem("products");
            products = JSON.parse(products);
            for (var i=0; i<products.length;i++) {
                products[i].price = function() {
                    return Math.round(goldRate*this.weight);
                }
            }
function showDataOfProducts() {
    
        document.getElementById("tableOfProducts").innerHTML = "";
    for (var i=0;i<products.length;i++){
        switch (products[i].item){
            case "Ring":
                imageUrl = "Images/Nimage/EngagementRing/Women/"
                break;
            case "Neckless Set":
                imageUrl = "Images/Nimage/Neckless Set/Bridal Neckless Set/"
                break;
            case "Neckless Chain":
                imageUrl = "Images/Nimage/Neckless Set/neckless/"
                break;    
        }
        document.getElementById("tableOfProducts").innerHTML += `<div><img src='`+imageUrl+products[i].picture+`' onclick="showImgDetail(`+i+`);"></div>`
    }
}
           
   

    var selectedArry = products
        function showImgDetail(index) {
            //get data from local storage
           
            // products = localStorage.getItem("products");
            // products = JSON.parse(products);
            // for (var i=0; i<products.length;i++) {
            //     products[i].price = function() {
            //         return Math.round(goldRate*this.weight);
            //     }
            // }
           
            switch (selectedArry[index].item) {
                case "Ring":
                    imageUrl = "Images/Nimage/EngagementRing/Women/"
                    document.getElementById("productDivDetail_2").style.marginTop = "37px";
                    break;
                case "Neckless Set":
                    imageUrl = "Images/Nimage/Neckless Set/Bridal Neckless Set/"
                    document.getElementById("productDivDetail_2").style.marginTop = "-19px";
                    break;
                case "Neckless Chain":
                    imageUrl = "Images/Nimage/Neckless Set/neckless/"
                    document.getElementById("productDivDetail_2").style.marginTop = "-19px";
                    break; 
            }
                var id = selectedArry[index].itemid;
                var item = selectedArry[index].item;

            for (var i=0;i<products.length;i++){
                if(products[i].itemid.search(id) !=-1 && products[i].item.search(item)!=-1 ){
                    elememtindex = i;
                }
            }
            console.log(elememtindex);

            document.getElementById("productDivDetail").className = "productDetail open";
            var productDivDetail = document.getElementById("productDivDetail");
            // productDivDetail += `<div id = productDivDetail_2><div>`;
            var productDivDetail_2 = document.getElementById("productDivDetail_2");
            productDivDetail_2 .innerHTML= "";
            productDivDetail_2.innerHTML += `<div><img id="proDetailImg" src='`+imageUrl+selectedArry[index].picture+`' alt=""></div>`;
            productDivDetail_2.innerHTML += `<div class = "rightborder"></div>`;
            // productDivDetail_2.innerHTML += `<div class ="textMargin"><p>Category:`+products[index].category+`</p><p>Category:`+products[index].item +`</p></div>`;
            productDivDetail_2.innerHTML += `<div class ="textMargin"><table id="prodTable">
            <tr><td>Category:</td><td>`+selectedArry[index].category+`</td>
            <tr><td>ItemID:</td><td>`+selectedArry[index].item +products[index].itemid +`</td></tr>
            <tr><td>Weight:</td><td>`+selectedArry[index].weight+`grams</td></tr>
            <tr><td>Quality:</td><td>`+selectedArry[index].quality+`</td></tr>
            <tr><td>Price:</td><td>Rs.`+Math.round(selectedArry[index].price())+`/-</td></tr></table>
            <div class = "bottomborder"></div><br/><div class = "textMargin"><table>
            <tr><td>Selected Item</td><td><input id = "cartBox" type="text" value = ""disabled></td></tr>
            </table></div>
            <a class="btn btn-signIn floatLeft" href="Javascript:void(0)" onclick=lessFromCart(`+elememtindex+`);>Less From Cart</a>
            <a class="btn btn-signup floatRight" href="Javascript:void(0)" onclick="addToCartBtn(`+elememtindex+`);">Add to Cart</a></div>`;
            document.getElementById("cartBox").value = products[elememtindex].addToCart;
            // return elememtindex;
        }
        // var newArryToSearch = [];
        
        
    var elememtindex =0;
        function searchValues(itemsName) {
            selectedArry = products.filter(function(value){
                return value.item.search(itemsName)!=-1
            })
        
                 document.getElementById("tableOfProducts").innerHTML = "";
                    for (var i=0;i<selectedArry.length;i++){
                        switch (selectedArry[i].item){
                            case "Ring":
                                imageUrl = "Images/Nimage/EngagementRing/Women/"
                                break;
                            case "Neckless Set":
                                imageUrl = "Images/Nimage/Neckless Set/Bridal Neckless Set/"
                                break;
                            case "Neckless Chain":
                                imageUrl = "Images/Nimage/Neckless Set/neckless/"
                                break;    
                        }
                        document.getElementById("tableOfProducts").innerHTML += `<div><img src='`+imageUrl+selectedArry[i].picture+`' onclick="showImgDetail(`+i+`);"></div>`
                    }
            

         
        }
        
        