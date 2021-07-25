
function precio(){
    let check = document.getElementById("check");
    let premium = document.getElementById("prem");
    let family = document.getElementById("family");
    let month = document.getElementById("month");
    let year = document.getElementById("year");

    if(check.checked == true){
        premium.innerHTML = "$3.99 / month";
        family.innerHTML = "$5.99 / month"
        year.style.fontWeight = "bold";
        month.style.fontWeight = "normal"
    }
    else{
        premium.innerHTML = "$4.99 / month";
        family.innerHTML = "$7.99 / month";
        month.style.fontWeight = "bold";
        year.style.fontWeight = "normal"
    }
}