function maxNum() {

    var a = document.getElementById("numA").value;
    var b = document.getElementById("numB").value;

    if (parseInt(a) !== parseInt(b)) {
        if (a < b) {
            alert("The larger numbers is: " + b)
        }
        if (a > b) {
            alert("The larger numbers is: " + a)
        }

    }

    else {
        alert("Numbers are equal")

    }
}
  

function oddOrEven() {

    var a = document.getElementById("num").value;

    if (a == 0) {
        alert("The number should not be 0")
    }
    else {
        if (a % 2 == 0) {
            alert("The number is even")

        }
        if (a % 2 == 1) {
            alert("The number is odd")
        }
    }
}