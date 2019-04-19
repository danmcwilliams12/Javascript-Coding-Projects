function getReceipt() {
    var txt1 = ""
    var txt2 = ""
    var runningTotal = 0;
    var sizeTotal = 0
    var sizeArray = document.getElementsByClassName("size");

    for (i=0; i<sizeArray.length; i++){
        if(sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            txt1 = txt1+selectedSize+"<br>";
        };
    };
    if(selectedSize == "Personal"){
        sizeTotal = 6;
    }else if(selectedSize == "Medium"){
        sizeTotal = 10;
    }else if(selectedSize == "Large"){
        sizeTotal = 14;
    }else if(selectedSize == "Extra Large"){
        sizeTotal = 16;
    };
    txt2 = txt2+sizeTotal+"<br>";
    runningTotal = sizeTotal;
    console.log(txt1);
    console.log(txt2);
    console.log(runningTotal);
    getMeat(runningTotal, txt1, txt2)
};

function getMeat(runningTotal, txt1, txt2){
    var tempValue = 0;
    var tempChecked;
    var meatArray = document.getElementsByClassName("meat");
    var counter = 0

    for(i=0; i<meatArray.length; i++){
        if(meatArray[i].checked){
            tempChecked = meatArray[i].value;
            txt1 = txt1+tempChecked+"<br>";
            if(counter === 0){
                tempValue = 0;
            }else if(counter > 0){
                tempValue = 1;
            };
            txt2 = txt2+tempValue+"<br>";
            runningTotal = runningTotal+tempValue;
            counter++;
        };
    };
    console.log(txt1);
    console.log(txt2);
    console.log(runningTotal);
    getVeggies(runningTotal, txt1, txt2);
};

function getVeggies(runningTotal, txt1, txt2){
    var tempValue = 0;
    var tempChecked;
    var veggieArray = document.getElementsByClassName("veggie");
    var counter = 0

    for(i=0; i<veggieArray.length; i++){
        if(veggieArray[i].checked){
            tempChecked = veggieArray[i].value;
            txt1 = txt1+tempChecked+"<br>";
            if(counter === 0){
                tempValue = 0;
            }else if(counter > 0){
                tempValue = 1;
            };
            txt2 = txt2+tempValue+"<br>";
            runningTotal = runningTotal+tempValue;
            counter++;
        };
    };
    console.log(txt1);
    console.log(txt2);
    console.log(runningTotal);
    getCrust(runningTotal, txt1, txt2);
};

function getCrust(runningTotal, txt1, txt2){
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName("crust");
    for (i=0; i<crustArray.length; i++){
        if(crustArray[i].checked){
            var selectedCrust = crustArray[i].value;
            txt1 = txt1+selectedCrust+"<br>";
        };
    };
    if(selectedCrust == "Plain Crust"){
        crustTotal = 0;
    }else if(selectedCrust == "Garlic Butter Crust"){
        crustTotal = 0;
    }else if(selectedCrust == "Cheese Stuffed Crust"){
        crustTotal = 3;
    }else if(selectedCrust == "Spicy Crust"){
        crustTotal = 0;
    }else if(selectedCrust == "House Special Crust"){
        crustTotal = 0;
    };
    txt2 = txt2+crustTotal+"<br>";
    runningTotal = runningTotal + crustTotal;
    console.log(txt1);
    console.log(txt2);
    console.log(runningTotal);
    getSauce(runningTotal, txt1, txt2);
};

function getSauce(runningTotal, txt1, txt2){
    var sauceTotal = 0;
    var sauceArray = document.getElementsByClassName("sauce");
    for (i=0; i<sauceArray.length; i++){
        if(sauceArray[i].checked){
            var selectedSauce = sauceArray[i].value;
            txt1 = txt1+selectedSauce+"<br>";
        };
    };
    txt2 = txt2+sauceTotal+"<br>";
    runningTotal = runningTotal + sauceTotal;
    console.log(txt1);
    console.log(txt2);
    console.log(runningTotal);
    getCheese(runningTotal, txt1, txt2);
};

function getCheese(runningTotal, txt1, txt2){
    var cheeseTotal = 0
    var cheeseArray = document.getElementsByClassName("cheese");
    for (i=0; i<cheeseArray.length; i++){
        if(cheeseArray[i].checked){
            var selectedCheese = cheeseArray[i].value;
            txt1 = txt1+selectedCheese+"<br>";
            if(selectedCheese == "Extra Cheese"){
                cheeseTotal = 3;
            };
        };
    };
    txt2 = txt2+cheeseTotal+"<br>";
    runningTotal = runningTotal + cheeseTotal;
    console.log(txt1);
    console.log(txt2);
    console.log(runningTotal);
    printReceipt(runningTotal, txt1, txt2);
};

function printReceipt(runningTotal, txt1, txt2){
    txt1 = txt1 + "<strong>Grand Total:</Strong>";
    txt2 = txt2 + runningTotal;

    document.getElementById("item_column").innerHTML = txt1;
    document.getElementById("total_column").innerHTML = txt2;
};