var Rating = null;
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
    alert(rating + " " + Amount);
    if(rating == null || Amount == null)
    {
        alert("Select Quality and Quantity");
    }else
    {
        alert("Submitted");
        var data = "Quantity=" + Amount +  
        "&Quality=" + rating + "&Lat=" + latitude+ "&Lng=" + longitude;
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                if(xhttp.responseText == "1")
                {
                    alert("Thanks for Contributing to Our Research");
                }
                alert(xhttp.responseText);
            }
            alert(xhttp.readyState+" "+xhttp.status);
            alert("Submitted");
        };
        xhttp.open("POST", "https://randomthought.000webhostapp.com/php/DBInteraction.php", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send(data);
    }
}