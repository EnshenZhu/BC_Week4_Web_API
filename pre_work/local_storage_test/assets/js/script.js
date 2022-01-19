console.log("connect to the script")

// Local Storage

var carList=[
    "Accord",
    "CR-V",
    "HR-V",
    "Pilot"
]

var stringCars=JSON.stringify(carList);
localStorage.setItem("carList", stringCars);

// Display the carList
var displayCars = function(){
    var text = ""

    // Retrieves the carList from localStorage
    var cars = localStorage.getItem("carList");
    console.log("cars var is "+cars)

    // Parse the string into an object
    var carArray=JSON.parse(cars);
    console.log("carArray var is "+carArray)
    console.log(carArray)
    for (var i=0; i<carArray.length;i++){
        text+=carList[i]+"<br>";
        debugger;
    };
    // debugger;
    // console.log(cars)

    document.getElementById("list").innerHTML=text;
};

displayCars();