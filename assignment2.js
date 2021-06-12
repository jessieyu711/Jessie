var tableNode;

function createTable() {
    tableNode = document.createElement("table"); //acquire object
    tableNode.setAttribute("id", "table");
    var row = document.getElementById("row").value; //acquire row number 
    var cols = document.getElementById("cols").value;

    console.log(cols);
    for (var x = 0; x < row; x++) {
        var tr = tableNode.insertRow();
        for (var y = 0; y < cols; y++) {
            var td = tr.insertCell();
            td.innerHTML = (x + 1) + "," + (y + 1);
        }
    }
    var item = document.getElementById("table");
    if (document.getElementById("div1").hasChildNodes()) document.getElementById("div1").replaceChild(tableNode, item);
    document.getElementById("div1").appendChild(tableNode);
}
document.addEventListener("input", createTable);

/* Below is a another way using button */


// var tableNode;

// function createTable() {
//     tableNode = document.createElement("table"); //acquire object
//     tableNode.setAttribute("id", "table");
//     var row = parseInt(document.getElementsByName("row1")[0].value); //acquire row number 
//     //alert(row); 
//     if (row <= 0 || isNaN(row)) {
//         alert("Wrong row number,please input again：");
//         return;
//     }
//     var cols = parseInt(document.getElementsByName("cols1")[0].value);
//     if (isNaN(cols) || cols <= 0) {
//         alert("Wrong colume number,please input again：");
//         return;
//     }
//     //Create table 
//     for (var x = 0; x < row; x++) {
//         var tr = tableNode.insertRow();
//         for (var y = 0; y < cols; y++) {
//             var td = tr.insertCell();
//             td.innerHTML = (x + 1) + "," + (y + 1);
//         }
//     }
//     var item = document.getElementById("table");
//     if (document.getElementById("div1").hasChildNodes()) document.getElementById("div1").replaceChild(tableNode, item);
//     document.getElementById("div1").appendChild(tableNode); //Add to the position

// }