var rating = null;
var Amount = null;

function Star1() {
    rating = 5;
}
function Star2() {
    rating = 4;
}
function Star3() {
    rating = 3;
}
function Star4() {
    rating = 2;
}
function Star5() {
    rating = 1;
}

function Star11() {
    Amount = 5;
}
function Star22() {
    Amount = 4;
}
function Star33() {
    Amount = 3;
}
function Star44() {
    Amount = 2;
}
function Star55() {
    Amount = 1;
}
function Submit(){
    if(rating == null || Amount == null || latitude == null || longitude == null)
    {
        alert("Select Quality and Quantity and Check if Location is allowed");
    }else
    {
        var data = "Quantity=" + Amount +  
        "&Quality=" + rating + "&Lat=" + latitude+ "&Lng=" + longitude;
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert(xhttp.response + " " + xhttp.responseText);
            }
        };
        xhttp.open("POST", "https://randomthought.000webhostapp.com/php/DBInteraction.php", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.setRequestHeader("Access-Control-Allow-Origin","*");
        xhttp.send(data);
        alert("Thanks for submittion");
    }
}