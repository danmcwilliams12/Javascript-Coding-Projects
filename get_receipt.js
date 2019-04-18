function getReceipt() {
    var txt1 = ""
    var runningTotal = 0;
    var sizeTotal = 0
    var sizeArray = document.getElementsByClassName("size");

    for (i=0; i<sizeArray.length; i++){
        if(sizeArray[i].checked){
            var selectedSize = sizeArray[1].value;
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
    runningTotal = sizeTotal;
    getMeat(runningTotal, txt1)
};