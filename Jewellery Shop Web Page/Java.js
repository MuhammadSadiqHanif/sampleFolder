// slider circles
// settingValuetoOption()

      
function fillColor(num) {
   
    x = "img" + num
    var targetId = document.getElementById("circleContainer")
    var targetName = targetId.getElementsByTagName("i");
    targetName[num].className = "fa fa-circle";
    document.getElementById(x).className = "show";

    return nextImg(num)
    
}

// drop down menu if Userclick on dropdown btn
function dropdownMenu() {

    var target = document.getElementById("dropDownMenu");
    var classes = target.getAttribute("class");

    if (classes == "dropdown-menu close") {
        document.getElementById("dropDownMenu").className = "dropdown-menu open";
    }
    else if (classes == "dropdown-menu open") {
        document.getElementById("dropDownMenu").className = "dropdown-menu close";
    }
    "btn-group close";
}		
//UserFrom hide and show
function userFrom() {
    // var target = document.getElementById("userFormDiv");
    // var classes = target.hasAttribute("class");

    // if (classes = "userFormDiv close") {
        document.getElementById("userFormDiv").className = "open";
    // }
    
}

// close btn of the userFrom
function closebtn(para) {
    if (para == "productDetail") {
        document.getElementById("productDivDetail").className = "productDetail close";
    }
    else {
    document.getElementById("userFormDiv").className = "close";
    }
}

function signupShow() {
    // var target = document.getElementById("signInForm");
    // var classes= target.getAttribute("class");
     document.getElementById("signInForm").className = "borderbox close";
     document.getElementById("signUpFrom").className = "borderbox";
}
function signInShow() {
    // var target = document.getElementById("signInForm");
    // var classes= target.getAttribute("class");
     document.getElementById("signInForm").className = "borderbox";
     document.getElementById("signUpFrom").className = "borderbox close";
}
    // variables
    var users = [];

    function signupUserBtn() {
        // get element from inputs
        var usernameVal = document.getElementById("username").value;
            var emailval = document.getElementById("email").value;
            var countryval =document.getElementById("country").value;
            var passwordval=document.getElementById("password").value;

        // making new array object of users by using construtors     
        var usr = new User(usernameVal,emailval,countryval,passwordval)
        // pushing the new "usr" object to "user" arrray 
            users.push(usr)
            addToLocalStorage(users);
    }


    // new constructor for users
    function User(name,email,country,password) {
        this.name = name;
        this.email = email;
        this.country = country;
        this.password = password;
}
    // storing in local storage on JSON format
    function addToLocalStorage(paraUsers) {
           localStorage.setItem("users",JSON.stringify(paraUsers));
    }


// for showdata html
function windowOnLoad() {
    window.location.href="ShowData.html";

}

 function addProducts() {
    window.location.href="products.html";
        }
 function gotoWishList() {
    window.location.href="wishlist.html";
     
 }       

//show dat throught local storage as a string
        function showUserData() {
            // taking data for local staorage 
            // and convr JSON to javascript
            users = localStorage.getItem("users");
            users = JSON.parse(users);

            // clear the html of table1
            document.getElementById("table1").innerHTML = "";
            // making new table1
            document.getElementById("table1").innerHTML += `<tr>
                                                                    <th>User Name</th>
                                                                    <th>Email Address</th>
                                                                    <th>Country</th>
                                                                    <th></th><th></th></tr>`;
        for (var i = 0; i<users.length; i++) {
            document.getElementById("table1").innerHTML += `<tr><td>`+ users[i].name +`</td>
            <td>`+ users[i].email +`</td>
            <td>`+ users[i].country +`</td>
            <td><button onClick=deleteRow(` + i + `)>Delete</button></td>
            <td><button onClick=banRow(` + i + `)>Ban</button></td>
            </tr>`;
        }
                document.getElementById("MainDivShowData").innerHTML +="</table>"
            

        }
        function deleteRow(index) {
            // taking data for local staorage 
            // and convr JSON to javascript
            users = localStorage.getItem("users");
            users = JSON.parse(users);
            //delete arry
            users.splice(index,1);
            addToLocalStorage(users);
            
            showUserData();
        }

        function signup() {
            var signInForm = document.getElementById("signInForm");
            var inputVal = signInForm.getElementsByTagName("input");
            usernameVal = inputVal[0].value;
            passwordval = inputVal[1].value;
            usernameVal = usernameVal.toLowerCase();
            // console.log(usernameVal);
            var checkForEmail = usernameVal.indexOf("@");
            if (checkForEmail != -1) {
                var checkFor = "email";
            } 
            else {
                checkFor = "username";
            }
            // console.log(checkForEmail);


            checkValueOfSignIn(checkFor,usernameVal,passwordval)  
        }
        
        function checkValueOfSignIn(checkFor,usernameVal,passwordval) {
            var check = "yes";
            users = localStorage.getItem("users");
            users = JSON.parse(users);
        if (checkFor == "username") {
                for (var i=0; i<users.length; i++) {
                    if (users[i].name == usernameVal && users[i].password == passwordval) {
                        alert("Welcome "+ users[i].name);
                        check = "no";
                    } 
                }

                if (check == "yes") {
                    alert("Username or Password not Valid");
                }
        }

             if (checkFor == "email") {
                for (var i=0; i<users.length; i++) {
                    if (users[i].email == usernameVal && users[i].password == passwordval) {
                        alert("Welcome "+ users[i].name);
                        check = "no";
                    } 
                }

                if (check == "yes") {
                    alert("Username or Password not Valid");
                }
             }

                     
        }
        
        function addToCartBtn(index) {
        var cartCount = 0;
                products[index].addToCart = products[index].addToCart+1 ;
                products.forEach(function (products) {
            cartCount += products.addToCart;
                })

                if (cartCount > 0) {
            document.getElementById("countCart").innerHTML = `<p id="countNumber">`+cartCount+`</p>`;
            document.getElementById("countCart").className = "open";
            document.getElementById("cartBox").value = products[index].addToCart;
                }
                else{
            document.getElementById("countCart").className = "close";
            document.getElementById("cartBox").value = 0;
                    
                }
                localStorage.setItem("products",JSON.stringify(products))
                // alert(products[index].addToCart)
        }
        

        function lessFromCart(index) {
            var cartCount = 0
            if (products[index].addToCart > 0) {
            products[index].addToCart = products[index].addToCart-1 ;
            }
            // }
            products.forEach(function (products){
                cartCount+=products.addToCart;
            }) 

                if (cartCount > 0) {
            document.getElementById("countCart").innerHTML = `<p id="countNumber">`+cartCount+`</p>`;
            document.getElementById("countCart").className = "open";
            document.getElementById("cartBox").value = products[index].addToCart;
            

                }
                else {
            document.getElementById("countCart").className = "close";
            document.getElementById("cartBox").value = 0;
                    
                }
                localStorage.setItem("products",JSON.stringify(products))
                
      }

            function clearCart() {
                var cartCount = 0
                for(var i=0; i<products.length ; i++){
                    products[i].addToCart = 0;
                }
                localStorage.setItem("products",JSON.stringify(products))
                document.getElementById("countCart").innerHTML = `<p id="countNumber">`+cartCount+`</p>`;
            document.getElementById("countCart").className = "close";
            document.getElementById("wishListTable").innerHTML="No Items Selected";
        }
        
        
function countCartOpen(){
    var cartCount = 0;
    products.forEach(function (products) {
            cartCount += products.addToCart;
                })

                if (cartCount > 0) {
            document.getElementById("countCart").className = "open";
            document.getElementById("countCart").innerHTML = `<p id="countNumber">`+cartCount+`</p>`;
           
                }
                else{
            document.getElementById("countCart").className = "close";
            // document.getElementById("cartBox").value = 0;
                    
                }
}

