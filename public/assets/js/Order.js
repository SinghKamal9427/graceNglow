let cart = [];
let mymenus = [
    {
        itemName:"Ethnic Festive Sari Wedding Party",
        itemPrice:2350,
    },
    {
        itemName:"GG Fashion Western Dresses for Women|Stylish Latest Dresses|Skirts|Kurti with Palazzo Set|Long Kurtis|Stylish Tops|",
        itemPrice:2900,
    },
    {
        itemName:"Platinum Women's Cotton Salwar Suit ",
        itemPrice:2400,
    },
    {
        itemName:"Ethnic Long Gown Western Dress ",
        itemPrice:3200,
    },
    // {
    //     itemName:"Classic Pepperoni",
    //     itemPrice:550,
    // },
    {
        itemName:"Ethnic Junction Women's Chanderi Cotton",
        itemPrice:2900,
    },
    // {
    //     itemName:"Greek Salad",
    //     itemPrice:490,
    // },
    {
        itemName:"GRECIILOOKS Western Dresses for Women | A-Line Knee-Length Dress ",
        itemPrice:2700,
    },
    {
        itemName:"Janasya Women's Olive Green Poly Crepe Botanical Print Crop Top with Dhoti With Attached Dupatta",
        itemPrice:3600,
    }
]

let pizzaBase = [
    {
        itemName : "Sicilian"
    },
    {
        itemName : "Double Dough"
    }
]

function loadMenusPizza(){
    let ele = '<option>Select Base</option>';
    pizzaBase.forEach((item,index)=>{
     ele = ele + `<option value=${item.itemName}>${item.itemName}</option>`;
    })
   document.getElementById("pizzaType").innerHTML = ele;
}
loadMenusPizza()
function loadMenus(){
    let ele = '<option>Select Item</option>';
    mymenus.forEach((item,index)=>{
     ele = ele + `<option value=${item.itemPrice}>${item.itemName}</option>`;
    })
   document.getElementById("myMenusLoad").innerHTML = ele;
}


loadMenus();


function getUserOrder(){
    let itemName = myMenusLoad.options[myMenusLoad.selectedIndex].text
    let itemPrice = myMenusLoad.options[myMenusLoad.selectedIndex].value
    let itemQty = userQty.value;
    let itemSize = userSize.options[myMenusLoad.selectedIndex].value

    let myBase = pizzaType.options[pizzaType.selectedIndex].text
        if(myBase === 'Select Base' && itemName === "Farmhouse Pizza"){
            alert("Please select base ")
            return 
        }
        
    let obj = {
        itemName,
        itemPrice,
        itemQty,
        myBase,
        itemSize
    }
        if(checkDublicate(itemName,itemQty,myBase)){
            cart.push(obj)
        }
        console.log(cart)

        genrateOrder()
        loadMenusPizza()
}


function genrateOrder(){
    let ele= '<tr>';
    cart.forEach((item,index)=>{
        ele += `<td>${index + 1}</td>`
        ele += `<td>${item.itemName} ${item.myBase === "Select Base" ? '' : item.myBase}</td>`
        ele += `<td>${item.itemPrice}</td>`
        ele += `<td>${item.itemSize}</td>`
        ele += `<td>${item.itemQty}</td>`
        ele += `<td>${item.itemPrice * item.itemQty} </td>`
        ele += `<td><button onClick={deleteItem(${index})}>Delete</button> </td></tr>`



    })
    document.getElementById("userOrderDisplay").innerHTML = ele;
    document.getElementById('orderDetails').style.display = "block"

}

function checkDublicate(name,qty,userBase){
    for(let i = 0;i < cart.length; i++){
        if(cart[i].itemName === name && cart[i].myBase === userBase){
            cart[i].itemQty = +cart[i].itemQty + +qty;
            return false;
        }
    }
    return true
}   


function deleteItem(index){
    for(let i = 0;i < cart.length; i++){
        if(i === index){
            cart.splice(index,1)
        }
    }
    genrateOrder()
}


function showPizza(box){
    let itemName = box.options[box.selectedIndex].text
    if(itemName === "Farmhouse Pizza"){
       document.getElementById('pizzaBase').style.display = "block"
    }else{
        document.getElementById('pizzaBase').style.display = "none"
    }

}
